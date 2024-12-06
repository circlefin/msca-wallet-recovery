/**
 * Copyright 2024 Circle Internet Group, Inc.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import commandLineArgs from "command-line-args";
import "dotenv/config";
import { createBundlerClient, ENTRYPOINT_ADDRESS_V07, sendUserOperation } from "permissionless";
import readlineSync from "readline-sync";
import { createPublicClient, getAddress, http, parseUnits } from "viem";

import { buildAndSignMultisigUserOp, encodeCallData, getERC20TransferCallData } from "./utils/blockchain.js";
import { USDCTokenAddress, ViemChain } from "./utils/configs.js";
import { equalsIgnoreCase, getEnvValue, getOptionValue } from "./utils/helpers.js";
import logger, { logAndExit, printSectionHeader } from "./utils/logger.js";
import { NetworkKey } from "./utils/types.js";
import { getAndCheckBalance } from "./utils/wallet.js";

// Define the structure of command line options
interface Options {
  broadcast?: boolean;
  token?: string;
  amount?: number;
  recipientAddress?: string;
  signerAddresses?: string;
  chain?: string;
  bundlerRPCUrl?: string;
  walletAddress?: string;
}

const optionDefinitions = [
  { name: "broadcast", alias: "b", type: Boolean },
  { name: "token", alias: "t", type: String },
  { name: "amount", alias: "a", type: Number },
  { name: "gasFeesMultiplier", alias: "g", type: Number },
  { name: "recipientAddress", alias: "r", type: String },
  { name: "signerAddresses", alias: "s", type: String },
  { name: "chain", alias: "c", type: String },
  { name: "bundlerRPCUrl", alias: "u", type: String },
  { name: "walletAddress", alias: "w", type: String },
];

export const tokenTransfer = async (argv: string[]): Promise<void> => {
  const options = commandLineArgs(optionDefinitions, {
    argv,
  }) as Options;

  // Get required input vars from CLI or environment
  printSectionHeader('Inputs');

  const broadcast = getOptionValue(options, "broadcast", "BROADCAST_OPERATION");
  const token : string = getOptionValue(options, "token", "TOKEN");
  const transferAmount = getOptionValue(options, "amount", "TRANSFER_AMOUNT");
  const gasFeesMultiplier = getOptionValue(options, "gasFeesMultiplier", "GAS_FEES_MULTIPLIER");
  const walletAddress = getAddress(
    getOptionValue(options, "walletAddress", "MSCA_WALLET_ADDRESS")
  );
  const recipientAddress = getAddress(
    getOptionValue(options, "recipientAddress", "RECIPIENT_ADDRESS")
  );
  const signerAddresses = JSON.parse(
    getOptionValue(options, "signerAddresses", "SIGNER_ADDRESSES")
  );
  const chain = getOptionValue(options, "chain", "BLOCKCHAIN") as NetworkKey;
  const bundlerRPCUrl = getOptionValue(
    options,
    "bundlerRPCUrl",
    "BUNDLER_RPC_URL"
  );
  const walletConnectProjectId = getEnvValue("WC_PROJECT_ID");

  if (equalsIgnoreCase(token, "native")) {
    logAndExit("Native token transfer currently not supported.");
  }

  // Retrieve the call data needed to transfer the tokens
  const callData = encodeCallData({
    to: getAddress(USDCTokenAddress[chain]),
    value: 0,
    data: getERC20TransferCallData({
      toAddress: getAddress(recipientAddress),
      amount: parseUnits(String(transferAmount), 6), // USDC decimals on the contract
    }),
  });

  const client = createBundlerClient({
    chain: ViemChain[chain],
    transport: http(bundlerRPCUrl),
    entryPoint: ENTRYPOINT_ADDRESS_V07,
  });

  const publicClient = createPublicClient({
    chain: ViemChain[chain],
    transport: http(bundlerRPCUrl),
  });

  const userOperation = await buildAndSignMultisigUserOp({
    chain,
    bundlerRPCUrl,
    walletConnectProjectId,
    walletAddress,
    signerAddresses,
    gasFeesMultiplier,
    callData: callData as `0x${string}`,
  });

  // Check the wallet balance
  printSectionHeader('Check Balance');

  const tokenAddress = USDCTokenAddress[chain];
  
  await getAndCheckBalance({
    bundlerRPCUrl,
    walletAddress,
    transferAmount,
    tokenAddress,
    gasFeesMultiplier,
    userOperation
  });

  // Pending transactions
  const nonce = await publicClient.getTransactionCount({
    address: walletAddress,
    blockTag: 'pending',
  });
  if (nonce > 0) {
    logger.warn("");
    logger.warn(`Pending transactions: ${nonce}`);
    logger.warn(`New transaction will overwrite previous pending one, if and only if gas fees are higher in new transaction`);
    logger.warn(`If gas fees are lower in new transaction, you will receive "Replacement Underpriced" message from bundler`);
    logger.warn("");
  }

  // Token transfer
  printSectionHeader('Token Transfer');
  logger.info(`Sending the following userop`, userOperation);

  // Handle broadcasting
  if (broadcast) {
    // Blocks on user input to confirm to send to blockchain
    let inp = readlineSync.question(
      `Broadcast flag set. Will send user op to ${chain} blockchain. \n\n Enter "C" to continue:\n`
    );
    while (inp.toLowerCase() != "c") {
      inp = readlineSync.question(
        'Invalid input. Enter "C" to continue:\n'
      );
    }
    // Send the User Operation
    const userOpHash = await sendUserOperation(client, {
      entryPoint: ENTRYPOINT_ADDRESS_V07,
      userOperation
    });

    logger.info(`User Operation sent with user op hash: ${userOpHash}. Awaiting for transaction hash receipt...`);

    // Retry logic to fetch transaction details every 5 seconds for a maximum of 3 minutes
    const maxRetries = 36; // 3 minutes total / 5 seconds per check
    let attempt = 0;
    let txHash: string | undefined;

    // Poll the status of the user operation
    while (attempt < maxRetries) {
      try {
          const transactionReceipt = await client.waitForUserOperationReceipt({
            hash: userOpHash
          })

          // Make sure to check if the receipt contains a transaction hash
          if (transactionReceipt && transactionReceipt.receipt && transactionReceipt.receipt.transactionHash) {
            txHash = transactionReceipt.receipt.transactionHash; // Get the transaction hash from the receipt
            logger.info(`User Operation sent with transaction hash: ${txHash}`);
            break; // Exit the loop if successfully retrieved
          } else {
            logger.info(`Attempt ${attempt + 1}: User operation not yet mined, retrying...`);
          }
      } catch (error) {
        logger.info(`Attempt ${attempt + 1}: User operation not yet mined, retrying...`);
      }

      // Wait for 5 seconds before the next attempt
      await new Promise<void>(resolve => setTimeout(resolve, 5000));
      attempt++;
    }

    if (!txHash) {
      logger.error("Failed to fetch transaction details after multiple attempts.");
    }
  } else {
    logger.info(`Broadcast flag not set, so not sending user op to blockchain.`);
  }
};
