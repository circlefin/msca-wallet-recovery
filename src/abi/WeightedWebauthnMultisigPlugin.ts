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

export const WeightedWebauthnMultisigPluginABI = [
  {
    inputs: [{ internalType: "address", name: "entryPoint", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "AlreadyInitialized", type: "error" },
  { inputs: [], name: "ECDSAInvalidSignature", type: "error" },
  {
    inputs: [{ internalType: "uint256", name: "length", type: "uint256" }],
    name: "ECDSAInvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [{ internalType: "bytes32", name: "s", type: "bytes32" }],
    name: "ECDSAInvalidSignatureS",
    type: "error",
  },
  { inputs: [], name: "EmptyOwnersNotAllowed", type: "error" },
  { inputs: [], name: "InvalidAddress", type: "error" },
  { inputs: [], name: "InvalidContractSigLength", type: "error" },
  { inputs: [], name: "InvalidMaxFeePerGas", type: "error" },
  { inputs: [], name: "InvalidMaxPriorityFeePerGas", type: "error" },
  {
    inputs: [{ internalType: "uint256", name: "invalidNum", type: "uint256" }],
    name: "InvalidNumSigsOnActualDigest",
    type: "error",
  },
  {
    inputs: [{ internalType: "bytes30", name: "owner", type: "bytes30" }],
    name: "InvalidOwner",
    type: "error",
  },
  { inputs: [], name: "InvalidPreVerificationGas", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "x", type: "uint256" },
      { internalType: "uint256", name: "y", type: "uint256" },
    ],
    name: "InvalidPublicKey",
    type: "error",
  },
  { inputs: [], name: "InvalidSigLength", type: "error" },
  { inputs: [], name: "InvalidSigOffset", type: "error" },
  { inputs: [], name: "InvalidThresholdWeight", type: "error" },
  { inputs: [], name: "InvalidUserOpDigest", type: "error" },
  {
    inputs: [
      { internalType: "bytes30", name: "owner", type: "bytes30" },
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256", name: "weight", type: "uint256" },
    ],
    name: "InvalidWeight",
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
    inputs: [{ internalType: "bytes30", name: "owner", type: "bytes30" }],
    name: "OwnerDoesNotExist",
    type: "error",
  },
  { inputs: [], name: "OwnersWeightsMismatch", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "thresholdWeight", type: "uint256" },
      { internalType: "uint256", name: "totalWeight", type: "uint256" },
    ],
    name: "ThresholdWeightExceedsTotalWeight",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "currentNumOwners", type: "uint256" },
      { internalType: "uint256", name: "numOwnersToAdd", type: "uint256" },
    ],
    name: "TooManyOwners",
    type: "error",
  },
  { inputs: [], name: "ZeroOwnersInputNotAllowed", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes30[]",
        name: "owners",
        type: "bytes30[]",
      },
      {
        components: [
          { internalType: "uint256", name: "weight", type: "uint256" },
          {
            internalType: "enum CredentialType",
            name: "credType",
            type: "uint8",
          },
          { internalType: "address", name: "addr", type: "address" },
          { internalType: "uint256", name: "publicKeyX", type: "uint256" },
          { internalType: "uint256", name: "publicKeyY", type: "uint256" },
        ],
        indexed: false,
        internalType: "struct OwnerData[]",
        name: "weights",
        type: "tuple[]",
      },
    ],
    name: "OwnersAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes30[]",
        name: "owners",
        type: "bytes30[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalWeightRemoved",
        type: "uint256",
      },
    ],
    name: "OwnersRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes30[]",
        name: "owners",
        type: "bytes30[]",
      },
      {
        components: [
          { internalType: "uint256", name: "weight", type: "uint256" },
          {
            internalType: "enum CredentialType",
            name: "credType",
            type: "uint8",
          },
          { internalType: "address", name: "addr", type: "address" },
          { internalType: "uint256", name: "publicKeyX", type: "uint256" },
          { internalType: "uint256", name: "publicKeyY", type: "uint256" },
        ],
        indexed: false,
        internalType: "struct OwnerData[]",
        name: "weights",
        type: "tuple[]",
      },
    ],
    name: "OwnersUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldThresholdWeight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newThresholdWeight",
        type: "uint256",
      },
    ],
    name: "ThresholdUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "ENTRYPOINT",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "ownersToAdd", type: "address[]" },
      { internalType: "uint256[]", name: "weightsToAdd", type: "uint256[]" },
      {
        components: [
          { internalType: "uint256", name: "x", type: "uint256" },
          { internalType: "uint256", name: "y", type: "uint256" },
        ],
        internalType: "struct PublicKey[]",
        name: "publicKeyOwnersToAdd",
        type: "tuple[]",
      },
      {
        internalType: "uint256[]",
        name: "pubicKeyWeightsToAdd",
        type: "uint256[]",
      },
      { internalType: "uint256", name: "newThresholdWeight", type: "uint256" },
    ],
    name: "addOwners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "actualDigest", type: "bytes32" },
      { internalType: "bytes32", name: "minimalDigest", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
      { internalType: "bytes", name: "signatures", type: "bytes" },
    ],
    name: "checkNSignatures",
    outputs: [
      { internalType: "bool", name: "success", type: "bool" },
      { internalType: "uint256", name: "firstFailure", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { internalType: "bytes1", name: "fields", type: "bytes1" },
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "version", type: "string" },
      { internalType: "uint256", name: "chainId", type: "uint256" },
      { internalType: "address", name: "verifyingContract", type: "address" },
      { internalType: "bytes32", name: "salt", type: "bytes32" },
      { internalType: "uint256[]", name: "extensions", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "bytes", name: "message", type: "bytes" },
    ],
    name: "encodeMessageData",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "bytes", name: "message", type: "bytes" },
    ],
    name: "getMessageHash",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint256", name: "x", type: "uint256" },
          { internalType: "uint256", name: "y", type: "uint256" },
        ],
        internalType: "struct PublicKey",
        name: "pubKeyOwnerToCheck",
        type: "tuple",
      },
    ],
    name: "getOwnerId",
    outputs: [{ internalType: "bytes30", name: "", type: "bytes30" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "ownerToCheck", type: "address" },
    ],
    name: "getOwnerId",
    outputs: [{ internalType: "bytes30", name: "", type: "bytes30" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      {
        components: [
          { internalType: "uint256", name: "x", type: "uint256" },
          { internalType: "uint256", name: "y", type: "uint256" },
        ],
        internalType: "struct PublicKey",
        name: "pubKeyOwnerToCheck",
        type: "tuple",
      },
    ],
    name: "isOwnerOf",
    outputs: [
      { internalType: "bool", name: "", type: "bool" },
      {
        components: [
          { internalType: "uint256", name: "weight", type: "uint256" },
          {
            internalType: "enum CredentialType",
            name: "credType",
            type: "uint8",
          },
          { internalType: "address", name: "addr", type: "address" },
          { internalType: "uint256", name: "publicKeyX", type: "uint256" },
          { internalType: "uint256", name: "publicKeyY", type: "uint256" },
        ],
        internalType: "struct OwnerData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "address", name: "ownerToCheck", type: "address" },
    ],
    name: "isOwnerOf",
    outputs: [
      { internalType: "bool", name: "", type: "bool" },
      {
        components: [
          { internalType: "uint256", name: "weight", type: "uint256" },
          {
            internalType: "enum CredentialType",
            name: "credType",
            type: "uint8",
          },
          { internalType: "address", name: "addr", type: "address" },
          { internalType: "uint256", name: "publicKeyX", type: "uint256" },
          { internalType: "uint256", name: "publicKeyY", type: "uint256" },
        ],
        internalType: "struct OwnerData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "digest", type: "bytes32" },
      { internalType: "bytes", name: "signature", type: "bytes" },
    ],
    name: "isValidSignature",
    outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
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
    inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    name: "onUninstall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes30", name: "", type: "bytes30" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "ownerDataPerAccount",
    outputs: [
      { internalType: "uint256", name: "weight", type: "uint256" },
      { internalType: "enum CredentialType", name: "credType", type: "uint8" },
      { internalType: "address", name: "addr", type: "address" },
      { internalType: "uint256", name: "publicKeyX", type: "uint256" },
      { internalType: "uint256", name: "publicKeyY", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "ownershipInfoOf",
    outputs: [
      { internalType: "bytes30[]", name: "ownerAddresses", type: "bytes30[]" },
      {
        components: [
          { internalType: "uint256", name: "weight", type: "uint256" },
          {
            internalType: "enum CredentialType",
            name: "credType",
            type: "uint8",
          },
          { internalType: "address", name: "addr", type: "address" },
          { internalType: "uint256", name: "publicKeyX", type: "uint256" },
          { internalType: "uint256", name: "publicKeyY", type: "uint256" },
        ],
        internalType: "struct OwnerData[]",
        name: "ownersData",
        type: "tuple[]",
      },
      { internalType: "uint256", name: "thresholdWeight", type: "uint256" },
    ],
    stateMutability: "view",
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
    stateMutability: "nonpayable",
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "ownersToRemove", type: "address[]" },
      {
        components: [
          { internalType: "uint256", name: "x", type: "uint256" },
          { internalType: "uint256", name: "y", type: "uint256" },
        ],
        internalType: "struct PublicKey[]",
        name: "publicKeyOwnersToRemove",
        type: "tuple[]",
      },
      { internalType: "uint256", name: "newThresholdWeight", type: "uint256" },
    ],
    name: "removeOwners",
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
      { internalType: "address[]", name: "ownersToUpdate", type: "address[]" },
      {
        internalType: "uint256[]",
        name: "newWeightsToUpdate",
        type: "uint256[]",
      },
      {
        components: [
          { internalType: "uint256", name: "x", type: "uint256" },
          { internalType: "uint256", name: "y", type: "uint256" },
        ],
        internalType: "struct PublicKey[]",
        name: "publicKeyOwnersToUpdate",
        type: "tuple[]",
      },
      {
        internalType: "uint256[]",
        name: "pubicKeyNewWeightsToUpdate",
        type: "uint256[]",
      },
      { internalType: "uint256", name: "newThresholdWeight", type: "uint256" },
    ],
    name: "updateMultisigWeights",
    outputs: [],
    stateMutability: "nonpayable",
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
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];
