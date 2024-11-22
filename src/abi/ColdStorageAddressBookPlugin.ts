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

export const ColdStorageAddressBookPluginABI = [
  { inputs: [], name: "AlreadyInitialized", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "address", name: "target", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "CallDataIsNotEmpty",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
    ],
    name: "FailToAddRecipient",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
    ],
    name: "FailToRemoveRecipient",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "address", name: "target", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "InvalidTargetCodeLength",
    type: "error",
  },
  {
    inputs: [
      { internalType: "bytes4", name: "selector", type: "bytes4" },
      { internalType: "uint8", name: "functionId", type: "uint8" },
    ],
    name: "NotImplemented",
    type: "error",
  },
  { inputs: [], name: "NotInitialized", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
    ],
    name: "UnauthorizedRecipient",
    type: "error",
  },
  { inputs: [], name: "Unsupported", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
    ],
    name: "AllowedAddressesAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AllowedAddressesNotRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
    ],
    name: "AllowedAddressesRemoved",
    type: "event",
  },
  {
    inputs: [],
    name: "NAME",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "recipients", type: "address[]" },
    ],
    name: "addAllowedRecipients",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "getAllowedRecipients",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
    name: "onInstall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
    name: "onUninstall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pluginManifest",
    outputs: [
      {
        components: [
          { internalType: "bytes4[]", name: "interfaceIds", type: "bytes4[]" },
          {
            internalType: "bytes4[]",
            name: "dependencyInterfaceIds",
            type: "bytes4[]",
          },
          {
            internalType: "bytes4[]",
            name: "executionFunctions",
            type: "bytes4[]",
          },
          {
            internalType: "bytes4[]",
            name: "permittedExecutionSelectors",
            type: "bytes4[]",
          },
          {
            internalType: "bool",
            name: "permitAnyExternalAddress",
            type: "bool",
          },
          { internalType: "bool", name: "canSpendNativeToken", type: "bool" },
          {
            components: [
              {
                internalType: "address",
                name: "externalAddress",
                type: "address",
              },
              { internalType: "bool", name: "permitAnySelector", type: "bool" },
              { internalType: "bytes4[]", name: "selectors", type: "bytes4[]" },
            ],
            internalType: "struct ManifestExternalCallPermission[]",
            name: "permittedExternalCalls",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "bytes4",
                name: "executionSelector",
                type: "bytes4",
              },
              {
                components: [
                  {
                    internalType: "enum ManifestAssociatedFunctionType",
                    name: "functionType",
                    type: "uint8",
                  },
                  { internalType: "uint8", name: "functionId", type: "uint8" },
                  {
                    internalType: "uint256",
                    name: "dependencyIndex",
                    type: "uint256",
                  },
                ],
                internalType: "struct ManifestFunction",
                name: "associatedFunction",
                type: "tuple",
              },
            ],
            internalType: "struct ManifestAssociatedFunction[]",
            name: "userOpValidationFunctions",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "bytes4",
                name: "executionSelector",
                type: "bytes4",
              },
              {
                components: [
                  {
                    internalType: "enum ManifestAssociatedFunctionType",
                    name: "functionType",
                    type: "uint8",
                  },
                  { internalType: "uint8", name: "functionId", type: "uint8" },
                  {
                    internalType: "uint256",
                    name: "dependencyIndex",
                    type: "uint256",
                  },
                ],
                internalType: "struct ManifestFunction",
                name: "associatedFunction",
                type: "tuple",
              },
            ],
            internalType: "struct ManifestAssociatedFunction[]",
            name: "runtimeValidationFunctions",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "bytes4",
                name: "executionSelector",
                type: "bytes4",
              },
              {
                components: [
                  {
                    internalType: "enum ManifestAssociatedFunctionType",
                    name: "functionType",
                    type: "uint8",
                  },
                  { internalType: "uint8", name: "functionId", type: "uint8" },
                  {
                    internalType: "uint256",
                    name: "dependencyIndex",
                    type: "uint256",
                  },
                ],
                internalType: "struct ManifestFunction",
                name: "associatedFunction",
                type: "tuple",
              },
            ],
            internalType: "struct ManifestAssociatedFunction[]",
            name: "preUserOpValidationHooks",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "bytes4",
                name: "executionSelector",
                type: "bytes4",
              },
              {
                components: [
                  {
                    internalType: "enum ManifestAssociatedFunctionType",
                    name: "functionType",
                    type: "uint8",
                  },
                  { internalType: "uint8", name: "functionId", type: "uint8" },
                  {
                    internalType: "uint256",
                    name: "dependencyIndex",
                    type: "uint256",
                  },
                ],
                internalType: "struct ManifestFunction",
                name: "associatedFunction",
                type: "tuple",
              },
            ],
            internalType: "struct ManifestAssociatedFunction[]",
            name: "preRuntimeValidationHooks",
            type: "tuple[]",
          },
          {
            components: [
              { internalType: "bytes4", name: "selector", type: "bytes4" },
              {
                components: [
                  {
                    internalType: "enum ManifestAssociatedFunctionType",
                    name: "functionType",
                    type: "uint8",
                  },
                  { internalType: "uint8", name: "functionId", type: "uint8" },
                  {
                    internalType: "uint256",
                    name: "dependencyIndex",
                    type: "uint256",
                  },
                ],
                internalType: "struct ManifestFunction",
                name: "preExecHook",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "enum ManifestAssociatedFunctionType",
                    name: "functionType",
                    type: "uint8",
                  },
                  { internalType: "uint8", name: "functionId", type: "uint8" },
                  {
                    internalType: "uint256",
                    name: "dependencyIndex",
                    type: "uint256",
                  },
                ],
                internalType: "struct ManifestFunction",
                name: "postExecHook",
                type: "tuple",
              },
            ],
            internalType: "struct ManifestExecutionHook[]",
            name: "executionHooks",
            type: "tuple[]",
          },
        ],
        internalType: "struct PluginManifest",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "pluginMetadata",
    outputs: [
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          { internalType: "string", name: "version", type: "string" },
          { internalType: "string", name: "author", type: "string" },
          {
            components: [
              {
                internalType: "bytes4",
                name: "functionSelector",
                type: "bytes4",
              },
              {
                internalType: "string",
                name: "permissionDescription",
                type: "string",
              },
            ],
            internalType: "struct SelectorPermission[]",
            name: "permissionDescriptors",
            type: "tuple[]",
          },
        ],
        internalType: "struct PluginMetadata",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "functionId", type: "uint8" },
      { internalType: "bytes", name: "preExecHookData", type: "bytes" },
    ],
    name: "postExecutionHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "functionId", type: "uint8" },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "preExecutionHook",
    outputs: [{ internalType: "bytes", name: "context", type: "bytes" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "functionId", type: "uint8" },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "preRuntimeValidationHook",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "functionId", type: "uint8" },
      {
        components: [
          { internalType: "address", name: "sender", type: "address" },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          { internalType: "bytes", name: "initCode", type: "bytes" },
          { internalType: "bytes", name: "callData", type: "bytes" },
          {
            internalType: "bytes32",
            name: "accountGasLimits",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          { internalType: "bytes32", name: "gasFees", type: "bytes32" },
          { internalType: "bytes", name: "paymasterAndData", type: "bytes" },
          { internalType: "bytes", name: "signature", type: "bytes" },
        ],
        internalType: "struct PackedUserOperation",
        name: "userOp",
        type: "tuple",
      },
      { internalType: "bytes32", name: "userOpHash", type: "bytes32" },
    ],
    name: "preUserOpValidationHook",
    outputs: [
      { internalType: "uint256", name: "validationData", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "recipients", type: "address[]" },
    ],
    name: "removeAllowedRecipients",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "functionId", type: "uint8" },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "runtimeValidationFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "functionId", type: "uint8" },
      {
        components: [
          { internalType: "address", name: "sender", type: "address" },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          { internalType: "bytes", name: "initCode", type: "bytes" },
          { internalType: "bytes", name: "callData", type: "bytes" },
          {
            internalType: "bytes32",
            name: "accountGasLimits",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          { internalType: "bytes32", name: "gasFees", type: "bytes32" },
          { internalType: "bytes", name: "paymasterAndData", type: "bytes" },
          { internalType: "bytes", name: "signature", type: "bytes" },
        ],
        internalType: "struct PackedUserOperation",
        name: "userOp",
        type: "tuple",
      },
      { internalType: "bytes32", name: "userOpHash", type: "bytes32" },
    ],
    name: "userOpValidationFunction",
    outputs: [
      { internalType: "uint256", name: "validationData", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
