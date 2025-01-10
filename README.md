# msca-wallet-recovery

Official repository for interfacing with ERC-6900 modular smart contract account (MSCA) wallets

## Introduction

Demonstrates how to interface with Circle's ERC-6900 MSCA wallets.
Generalizes provider (i.e. Alchemy, Infura, etc.) for broadcasting user ops and uses standard SDKs for packing/unpacking data (viem + permissionless).
IMPORTANT: assumes MSCA wallet has been deployed to blockchain (on-chain nonce > 0).
Demonstrates the following:

- USDC Token transfer
  - Pay gas fee with wallet balance (native tokens)
  - Note, gas fees are by default set to snapshot values from mempool when user op is built. This can lead to failures when broadcasting if gas fees rise before the user op is sent. You can modify `GAS_FEES_MULTIPLIER` env var to a value larger than 1 to pay more gas fees, which will make it more likely the token transfer will succeed and speed up the time it takes for the token transfer to be settled.
- Utility function for signing text with wallet

## Prerequisites

With transactions originating from a MSCA wallet, the gas fee is withdrawn from the MSCA wallet's native token balance. Prior to sending any transactions, please ensure that you have deposited sufficient amount of native tokens into the MSCA wallet. Please also be noted that MSCA wallet transactions cannot withdraw gas tokens from the owner wallets of the MSCA wallet.

## Supported Blockchains

- Polygon PoS (Mainnet/Amoy)
- Ethereum (Mainnet/Sepolia)
- Arbitrum (Mainnet/Sepolia)

## Run

### Install NVM

```bash
# Install nvm using brew
brew install nvm
```

```bash
# Or install it manually
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

Note, if you are unable to invoke `nvm` after installing manually and restarting your shell, try adding the following to your shell config file (replace `~/.bashrc` w/ `~/.bash_profile`, or `~/.zshrc` depending on your shell):

```bash
echo "export NVM_DIR=\"$HOME/.nvm\"" >> ~/.bashrc
echo "[ -s \"$NVM_DIR/nvm.sh\" ] && . \"$NVM_DIR/nvm.sh\"" >> ~/.bashrc
```

### Setup App

1. Choose node version:

    ```bash
    nvm install && nvm use
    ```

2. Install dependencies:

    ```bash
    yarn
    ```

3. Create local env variables:

    ```bash
    yarn env-config
    ```

4. Fill out env with relevant values

### Environment Variables Descriptions

This section outlines the required environment variables that need to be set in your .env file for the proper functioning of the application.

#### Common

- `BROADCAST_OPERATION`
  - Type: `boolean`
  - Description: Set to true to enable broadcasting of operations, or false to disable it.
- `MSCA_WALLET_ADDRESS`
  - Type: `string`
  - Description: The address of the MSCA wallet you are interfacing with.
- `BLOCKCHAIN`
  - Type: `string`
  - Description: The blockchain network to use. Options include:
    - POLYGON-AMOY
    - POLYGON
    - ETH
    - ETH-SEPOLIA
    - ARB
    - ARB-SEPOLIA
- `BUNDLER_RPC_URL`
  - Type: `string`
  - Description: The RPC URL for your blockchain provider (e.g. Infura, Alchemy). Replace <api-key> with your actual API key.
- `SIGNER_ADDRESSES`
  - Type: `JSON string`
  - Description: A JSON array containing objects with address and privateKey fields. Each object represents a signer address along with its associated private key. If private key is not provided, you will be prompted to connect your signer wallet by scanning a WalletConnect QR code when we need a signature from the signer. Example:

    ```jsonc
    [
      {
        "address": "0x...",
        "privateKey": "..." // optional 
      }
    ]
    ```

- `LOG_LEVEL`
  - Type: `string`
  - Description: The level for logging. Options include:
    - error
    - warn
    - info (default)
    - debug

#### WalletConnect

- `WC_PROJECT_ID`
  - Type: `string`
  - Description: The WalletConnect project ID. We use WalletConnect to connect your signer wallets and request for signatures. We recommend create a blank project for this tool.

#### Transfer

- `RECIPIENT_ADDRESS`
  - Type: `string`
  - Description: The address of the recipient for token transfers.
- `TRANSFER_AMOUNT`
  - Type: `number`
  - Description: The amount of tokens to transfer (paired w/ `TOKEN` env var).
- `TOKEN`
  - Type: `string`
  - Description: The type of token to transfer. Options are:
    - `usdc`
    - `native`
- `GAS_FEES_MULTIPLIER`
  - Type: `number`
  - Description: By default 1. Set to 1.1 to increase gas fees by 10% to make it more likely transfer will be broadcasted. Values over 1.5 will prompt user to confirm.

#### Signing

- `SIGNER_ADDRESS`
  - Type: `string`
  - Description: The address of the signer used to create the user operation.
- `USER_OP_HASH`
  - Type: `string`
  - Description: The hash of the user operation (or any text) for signing.

### Commands

IMPORTANT:

- `nvm use` will need to be executed in every new shell window before you execute a command (this ensures you are using a compatible version of node to run the scripts)
- Command-line args can be replaced with environment variables (so not every combination is enumerated below)

#### Transfer Token

- Transferring USDC

    ```bash
    yarn token-transfer -b --chain 'ETH' --recipientAddress '0x57414adbBbc4BBA36f1dE26b2dc1648b28ae7799' --token 'usdc' --amount 20
    ```

- Dry run without broadcasting (omit 'b' flag, assumes other env vars are specified in `.env` file)

    ```bash
    yarn token-transfer
    ```

### Utilities

- Generating signature of text (usually user-op hash)

    ```bash
    yarn sign-hash --address '0x57414adbBbc4BBA36f1dE26b2dc1648b28ae7799' -h '0x18665d142761a71a984f6d894f3a0c94b2ef271adf1fe9ada30e1dabaa88cc77'
    ```
