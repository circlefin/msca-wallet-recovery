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

export const UpgradableMSCAABI = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_newEntryPoint",
        type: "address",
        internalType: "contract IEntryPoint",
      },
      {
        name: "_newPluginManager",
        type: "address",
        internalType: "contract PluginManager",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "fallback",
    stateMutability: "payable",
  },
  {
    type: "receive",
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "UPGRADE_INTERFACE_VERSION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "addDeposit",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "author",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "entryPoint",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IEntryPoint",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "execute",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "returnData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "executeBatch",
    inputs: [
      {
        name: "calls",
        type: "tuple[]",
        internalType: "struct Call[]",
        components: [
          {
            name: "target",
            type: "address",
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "returnData",
        type: "bytes[]",
        internalType: "bytes[]",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "executeFromPlugin",
    inputs: [
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "executeFromPluginExternal",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "getDeposit",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getEntryPoint",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IEntryPoint",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getExecutionFunctionConfig",
    inputs: [
      {
        name: "selector",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        name: "executionFunctionConfig",
        type: "tuple",
        internalType: "struct ExecutionFunctionConfig",
        components: [
          {
            name: "plugin",
            type: "address",
            internalType: "address",
          },
          {
            name: "userOpValidationFunction",
            type: "tuple",
            internalType: "struct FunctionReference",
            components: [
              {
                name: "plugin",
                type: "address",
                internalType: "address",
              },
              {
                name: "functionId",
                type: "uint8",
                internalType: "uint8",
              },
            ],
          },
          {
            name: "runtimeValidationFunction",
            type: "tuple",
            internalType: "struct FunctionReference",
            components: [
              {
                name: "plugin",
                type: "address",
                internalType: "address",
              },
              {
                name: "functionId",
                type: "uint8",
                internalType: "uint8",
              },
            ],
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getExecutionHooks",
    inputs: [
      {
        name: "selector",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        name: "executionHooks",
        type: "tuple[]",
        internalType: "struct ExecutionHooks[]",
        components: [
          {
            name: "preExecHook",
            type: "tuple",
            internalType: "struct FunctionReference",
            components: [
              {
                name: "plugin",
                type: "address",
                internalType: "address",
              },
              {
                name: "functionId",
                type: "uint8",
                internalType: "uint8",
              },
            ],
          },
          {
            name: "postExecHook",
            type: "tuple",
            internalType: "struct FunctionReference",
            components: [
              {
                name: "plugin",
                type: "address",
                internalType: "address",
              },
              {
                name: "functionId",
                type: "uint8",
                internalType: "uint8",
              },
            ],
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getInstalledPlugins",
    inputs: [],
    outputs: [
      {
        name: "pluginAddresses",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getNonce",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPreValidationHooks",
    inputs: [
      {
        name: "selector",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        name: "preUserOpValidationHooks",
        type: "tuple[]",
        internalType: "struct FunctionReference[]",
        components: [
          {
            name: "plugin",
            type: "address",
            internalType: "address",
          },
          {
            name: "functionId",
            type: "uint8",
            internalType: "uint8",
          },
        ],
      },
      {
        name: "preRuntimeValidationHooks",
        type: "tuple[]",
        internalType: "struct FunctionReference[]",
        components: [
          {
            name: "plugin",
            type: "address",
            internalType: "address",
          },
          {
            name: "functionId",
            type: "uint8",
            internalType: "uint8",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initializeUpgradableMSCA",
    inputs: [
      {
        name: "plugins",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "manifestHashes",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
      {
        name: "pluginInstallData",
        type: "bytes[]",
        internalType: "bytes[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "installPlugin",
    inputs: [
      {
        name: "plugin",
        type: "address",
        internalType: "address",
      },
      {
        name: "manifestHash",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "pluginInstallData",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "dependencies",
        type: "tuple[]",
        internalType: "struct FunctionReference[]",
        components: [
          {
            name: "plugin",
            type: "address",
            internalType: "address",
          },
          {
            name: "functionId",
            type: "uint8",
            internalType: "uint8",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "pluginManager",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract PluginManager",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "proxiableUUID",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "uninstallPlugin",
    inputs: [
      {
        name: "plugin",
        type: "address",
        internalType: "address",
      },
      {
        name: "config",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "pluginUninstallData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "upgradeToAndCall",
    inputs: [
      {
        name: "newImplementation",
        type: "address",
        internalType: "address",
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "validateUserOp",
    inputs: [
      {
        name: "userOp",
        type: "tuple",
        internalType: "struct PackedUserOperation",
        components: [
          {
            name: "sender",
            type: "address",
            internalType: "address",
          },
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "initCode",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "callData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "accountGasLimits",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "preVerificationGas",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "gasFees",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "paymasterAndData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "signature",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "userOpHash",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "missingAccountFunds",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "validationData",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "version",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "withdrawDepositTo",
    inputs: [
      {
        name: "withdrawAddress",
        type: "address",
        internalType: "address payable",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PluginInstalled",
    inputs: [
      {
        name: "plugin",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "manifestHash",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
      {
        name: "dependencies",
        type: "tuple[]",
        indexed: false,
        internalType: "struct FunctionReference[]",
        components: [
          {
            name: "plugin",
            type: "address",
            internalType: "address",
          },
          {
            name: "functionId",
            type: "uint8",
            internalType: "uint8",
          },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PluginUninstalled",
    inputs: [
      {
        name: "plugin",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "onUninstallSucceeded",
        type: "bool",
        indexed: true,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "UpgradableMSCAInitialized",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "entryPointAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Upgraded",
    inputs: [
      {
        name: "implementation",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "WalletStorageInitialized",
    inputs: [],
    anonymous: false,
  },
  {
    type: "error",
    name: "AddressEmptyCode",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC1967InvalidImplementation",
    inputs: [
      {
        name: "implementation",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC1967NonPayable",
    inputs: [],
  },
  {
    type: "error",
    name: "ExecFromPluginToSelectorNotPermitted",
    inputs: [
      {
        name: "plugin",
        type: "address",
        internalType: "address",
      },
      {
        name: "selector",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
  },
  {
    type: "error",
    name: "ExecuteFromPluginToExternalNotPermitted",
    inputs: [],
  },
  {
    type: "error",
    name: "FailedInnerCall",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidAuthorizer",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidExecutionFunction",
    inputs: [
      {
        name: "selector",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidHookFunctionId",
    inputs: [
      {
        name: "functionId",
        type: "uint8",
        internalType: "uint8",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidInitialization",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidInitializationInput",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidLimit",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidValidationFunctionId",
    inputs: [
      {
        name: "functionId",
        type: "uint8",
        internalType: "uint8",
      },
    ],
  },
  {
    type: "error",
    name: "NativeTokenSpendingNotPermitted",
    inputs: [
      {
        name: "plugin",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "NotFoundSelector",
    inputs: [],
  },
  {
    type: "error",
    name: "NotInitializing",
    inputs: [],
  },
  {
    type: "error",
    name: "NotNativeFunctionSelector",
    inputs: [
      {
        name: "selector",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
  },
  {
    type: "error",
    name: "PostExecHookFailed",
    inputs: [
      {
        name: "plugin",
        type: "address",
        internalType: "address",
      },
      {
        name: "functionId",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "revertReason",
        type: "bytes",
        internalType: "bytes",
      },
    ],
  },
  {
    type: "error",
    name: "PreExecHookFailed",
    inputs: [
      {
        name: "plugin",
        type: "address",
        internalType: "address",
      },
      {
        name: "functionId",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "revertReason",
        type: "bytes",
        internalType: "bytes",
      },
    ],
  },
  {
    type: "error",
    name: "PreRuntimeValidationHookFailed",
    inputs: [
      {
        name: "plugin",
        type: "address",
        internalType: "address",
      },
      {
        name: "functionId",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "revertReason",
        type: "bytes",
        internalType: "bytes",
      },
    ],
  },
  {
    type: "error",
    name: "RuntimeValidationFailed",
    inputs: [
      {
        name: "plugin",
        type: "address",
        internalType: "address",
      },
      {
        name: "functionId",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "revertReason",
        type: "bytes",
        internalType: "bytes",
      },
    ],
  },
  {
    type: "error",
    name: "TargetIsPlugin",
    inputs: [
      {
        name: "plugin",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "UUPSUnauthorizedCallContext",
    inputs: [],
  },
  {
    type: "error",
    name: "UUPSUnsupportedProxiableUUID",
    inputs: [
      {
        name: "slot",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
  },
  {
    type: "error",
    name: "UnauthorizedCaller",
    inputs: [],
  },
  {
    type: "error",
    name: "WalletStorageIsInitialized",
    inputs: [],
  },
  {
    type: "error",
    name: "WalletStorageIsInitializing",
    inputs: [],
  },
  {
    type: "error",
    name: "WalletStorageIsNotInitializing",
    inputs: [],
  },
  {
    type: "error",
    name: "WrongTimeBounds",
    inputs: [],
  },
];
