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

import { ethers } from "ethers";
import readlineSync from "readline-sync";
import { UserOperation } from "permissionless";

import { ERC20ABI } from "../abi/index.js";
import logger, { logAndExit } from "./logger.js";
import { Address } from "./types.js";

// Define types for the parameters of the function
interface GetAndCheckBalanceParams {
  bundlerRPCUrl: string;
  walletAddress: Address; // Should be a valid wallet address
  transferAmount: number; // The amount to transfer; assumed to be in number format
  tokenAddress?: string | null; // Optional token address for ERC20 tokens
  gasFeesMultiplier: number; // The gas fee multiplier; will require user to confirm if above 50% increase from original
  userOperation: UserOperation<"v0.7">; // The userOperation which will be sent on chain.
}

// The function to check the balance
export const getAndCheckBalance = async ({
  bundlerRPCUrl,
  walletAddress,
  transferAmount,
  tokenAddress,
  gasFeesMultiplier,
  userOperation,
}: GetAndCheckBalanceParams): Promise<string> => {
  // General check
  if (transferAmount <= 0) {
    logAndExit(`Insufficient transfer amount ${transferAmount}, must be greater than 0`);
  }

  // Future native token transfer check
  if (!tokenAddress) {
    logAndExit("Native token transfer currently not supported.");
  }

  logger.info(`Wallet address: ${walletAddress}`);
  logger.info(`Token address: ${tokenAddress}`);
  const provider = new ethers.JsonRpcProvider(bundlerRPCUrl);

  // Native token check
  const nativeBalance: ethers.BigNumberish = await provider.getBalance(walletAddress);
  const nativeValue = ethers.formatEther(nativeBalance);
  const gasUsed = userOperation.callGasLimit + userOperation.verificationGasLimit + userOperation.preVerificationGas;
  const gasFeeAmount = userOperation.maxFeePerGas * gasUsed;

  logger.info(`Native token balance: ${nativeValue}. Estimated gas fee: ${ethers.formatEther(gasFeeAmount)}`);

  if (gasFeesMultiplier > 1) {
    const percentageIncrease = Math.round((gasFeesMultiplier - 1) * 100);
    const scaledGasFeesMultiplier = 100 + percentageIncrease;
    const originalGasFee = (userOperation.maxFeePerGas * BigInt(100)) / BigInt(scaledGasFeesMultiplier);

    logger.warn(`Increasing gas price by ${percentageIncrease}% to ensure transaction is broadcasted (without increase, original gas fee would be ${ethers.formatEther(originalGasFee * gasUsed)})...`);
    if (gasFeesMultiplier >= 1.5) {
      // Blocks on user input to confirm high gas fee multiplier
      let inp = readlineSync.question(
        `Gas fee increased more than 50%. \n\n Enter "C" to continue:\n`
      );
      while (inp.toLowerCase() != "c") {
        inp = readlineSync.question(
          'Invalid input. Enter "C" to continue:\n'
        );
      }
    }
  }

  if (nativeBalance < gasFeeAmount) {
    logAndExit("Insufficient native token balance for gas fee");
  }

  // USDC check
  const contract = new ethers.Contract(tokenAddress!, ERC20ABI, provider);
  const balance: ethers.BigNumberish = await contract.balanceOf(walletAddress);
  const decimals: number = await contract.decimals();
  const value = ethers.formatUnits(balance.toString(), decimals);

  if (!value) {
    logAndExit("balance is empty");
  }

  logger.info(`USDC balance: ${value}. Trying to send: ${transferAmount} USDC`);

  if (Number(value) < transferAmount) {
    logAndExit("Insufficient balance");
  }

  return value;
};
