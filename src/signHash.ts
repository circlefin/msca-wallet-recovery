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
import { getAddress } from "viem";

import { signMessage } from "./utils/blockchain.js";
import { getEnvValue, getOptionValue } from "./utils/helpers.js";
import logger, { printSectionHeader } from "./utils/logger.js";
import { Address, NetworkKey, Signer } from "./utils/types.js";

const optionDefinitions = [
  { name: "blockchain", alias: "b", type: String },
  { name: "hash", alias: "h", type: String },
  { name: "address", alias: "a", type: String },
  { name: "signerAddresses", alias: "s", type: String },
];

export const signHash = async (argv: string[]): Promise<void> => {
  const options = commandLineArgs(optionDefinitions, { argv });

  printSectionHeader('Inputs');

  // Get required input vars from CLI or environment
  const blockchain = getOptionValue(options, "blockchain", "BLOCKCHAIN");
  const userOpHash = getOptionValue(options, "hash", "USER_OP_HASH");
  const signerAddress: string = getAddress(
    getOptionValue(options, "address", "SIGNER_ADDRESS")
  );
  const signerAddresses: Signer[] = JSON.parse(
    getOptionValue(options, "signerAddresses", "SIGNER_ADDRESSES")
  );
  const walletConnectProjectId = getEnvValue("WC_PROJECT_ID");
  
  printSectionHeader('Signature');

  // Check if the normalized address exists in the list of signer addresses
  const signer = signerAddresses.find(
    (signer) => getAddress(signer.address) === signerAddress
  ) || {address: signerAddress as Address};

  const signature = await signMessage({
    chain: blockchain as NetworkKey,
    signer: signer,
    message: userOpHash,
    walletConnectProjectId,
  });
  logger.info(`Signature: ${signature}`);
};
