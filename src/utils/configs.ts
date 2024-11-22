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

import {
  arbitrum,
  arbitrumSepolia,
  mainnet,
  polygon,
  polygonAmoy,
  sepolia,
} from "viem/chains";

import { ChainAddressMap, ViemChainMap } from "./types.js";

export const ViemChain: ViemChainMap = {
  POLYGON: polygon,
  "POLYGON-AMOY": polygonAmoy,
  ETH: mainnet,
  "ETH-SEPOLIA": sepolia,
  ARB: arbitrum,
  "ARB-SEPOLIA": arbitrumSepolia,
};

export const USDCTokenAddress: ChainAddressMap = {
  POLYGON: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
  "POLYGON-AMOY": "0x41e94eb019c0762f9bfcf9fb1e58725bfb0e7582",
  ETH: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  "ETH-SEPOLIA": "0x1c7d4b196cb0c7b01d743fbc6116a902379c7238",
  ARB: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  "ARB-SEPOLIA": "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",
};

export const SafeListPluginContractAddress: ChainAddressMap = {
  POLYGON: "0x3c95978Af08B6B2Fd82659B393be86AfB4bd3D6F",
  "POLYGON-AMOY": "0x3c95978Af08B6B2Fd82659B393be86AfB4bd3D6F",
  ETH: "0x3c95978Af08B6B2Fd82659B393be86AfB4bd3D6F",
  "ETH-SEPOLIA": "0x3c95978Af08B6B2Fd82659B393be86AfB4bd3D6F",
  ARB: "0x3c95978Af08B6B2Fd82659B393be86AfB4bd3D6F",
  "ARB-SEPOLIA": "0x3c95978Af08B6B2Fd82659B393be86AfB4bd3D6F",
};

export const SafeListPluginManifestHash: ChainAddressMap = {
  POLYGON: "0x9d177c1c9573b10436b693b7a49f0face36b677c1606a2c579bba1415be349d8",
  "POLYGON-AMOY": "0x9d177c1c9573b10436b693b7a49f0face36b677c1606a2c579bba1415be349d8",
  ETH: "0x9d177c1c9573b10436b693b7a49f0face36b677c1606a2c579bba1415be349d8",
  "ETH-SEPOLIA": "0x9d177c1c9573b10436b693b7a49f0face36b677c1606a2c579bba1415be349d8",
  ARB: "0x9d177c1c9573b10436b693b7a49f0face36b677c1606a2c579bba1415be349d8",
  "ARB-SEPOLIA": "0x9d177c1c9573b10436b693b7a49f0face36b677c1606a2c579bba1415be349d8",
};
