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

import { UserOperation } from "permissionless";

// Union type for supported network keys
export type NetworkKey = 
  | "POLYGON"
  | "POLYGON-AMOY"
  | "ETH"
  | "ETH-SEPOLIA"
  | "ARB"
  | "ARB-SEPOLIA";

// Type for addresses formatted as 0x{string}
export type Address = `0x${string}`;

// Unified type for mapping chain names to addresses
export type ChainAddressMap = {
  [key in NetworkKey]: Address;
};

export type ViemChainMap = {
  [key in NetworkKey]: any;
};

export type Signer = {
  address: Address;
  privateKey: string;
};  

export interface BundlerParams {
  chain: NetworkKey;
  bundlerRPCUrl: string;
};

export interface UserOpParams extends BundlerParams {
  userOp: UserOperation<"v0.7">;
};

export interface UserOpEstimateParams extends UserOpParams {
  numSigners: number;
  gasFeesMultiplier: number;
};

export interface MultiSigParams {
  chain: NetworkKey;
  bundlerRPCUrl: string;
  walletAddress: Address;
  signerAddresses: Signer[];
  gasFeesMultiplier: number;
  callData: `0x${string}`;
};

export interface MultiSigUserOpParams {
  userOp: UserOperation<"v0.7">;
  signatures: Array<{ signer: `0x${string}`; signature: string; userOpSigType?: string }>;
};

export interface GetPartialUserOpParams extends BundlerParams {
  senderAddress: Address;
  callData: `0x${string}`;
};

export interface ERC20TransferParams {
  toAddress: Address;
  amount: bigint;
};
