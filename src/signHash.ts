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
import { ethers } from "ethers";
import { getAddress } from "viem";

import { getOptionValue } from "./utils/helpers.js";
import logger, { logAndExit, printSectionHeader } from "./utils/logger.js";
import { Signer } from "./utils/types.js";

const optionDefinitions = [
  { name: "hash", alias: "h", type: String },
  { name: "address", alias: "a", type: String },
  { name: "signerAddresses", alias: "s", type: String },
];

export const signHash = async (argv: string[]): Promise<void> => {
  const options = commandLineArgs(optionDefinitions, { argv });

  printSectionHeader('Inputs');

  // Get required input vars from CLI or environment
  const userOpHash = getOptionValue(options, "hash", "USER_OP_HASH");
  const signerAddress: string = getAddress(
    getOptionValue(options, "address", "SIGNER_ADDRESS")
  );
  const signerAddresses: Signer[] = JSON.parse(
    getOptionValue(options, "signerAddresses", "SIGNER_ADDRESSES")
  );
  
  printSectionHeader('Signature');

  // Check if the normalized address exists in the list of signer addresses
  const foundSigner = signerAddresses.find(
    (signer) => getAddress(signer.address) === signerAddress
  );

  if (!foundSigner || !foundSigner.privateKey) {
    logAndExit(`Private key not found for signer address ${signerAddress} (not present in SIGNER_ADDRESSES env var or CLI arg or not structured like .env.sample file).`);
  }

  const signer = new ethers.Wallet(foundSigner!.privateKey, undefined);

  // Use bytes so that it will hash as eth signed message
  const signature = await signer.signMessage(ethers.getBytes(userOpHash));
  logger.info(`Signature: ${signature}`);
};
