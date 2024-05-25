# @zktx.io/wormhole-kit-core

If you want to utilize only the core features of **Wormhole Kit** for your excellent UX, you can simply use **Wormhole Kit Core**.

## Getting started

Get started with @zktx.io/wormhole-kit and learn by [developer docs](https://docs.zktx.io/wormhole-kit-core.html)

## Installation

```bash
npm install @zktx.io/wormhole-kit-core
```

```bash
yarn add @zktx.io/wormhole-kit-core
```

## Usage

First, instantiate the **`WhCoreProvider`** component.

```typescript
import {
  WhCoreProvider,
} from '@zktx.io/wormhole-kit-core';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <WhCoreProvider
      network="Testnet"
      chains={['Sui', 'Sepolia', 'Solana', 'Aptos', 'Celo', 'Polygon']}
      config={
        {
          chains: {
            Ethereum: {
              rpc: 'https://eth-goerli.public.blastapi.io',
            },
            Polygon: {
              rpc: 'https://polygon-mumbai.api.onfinality.io/public',
            },
          },
        }
      }
    >
      <App />
    </WhCoreProvider>
  </StrictMode>,
);
```

Next, use the **`WhCoreProvider`** context in the Modal to create unsigned transactions.

```typescript
import { useWormhole } from '@zktx.io/wormhole-kit-core';

import type { IUnsignedTx } from '@zktx.io/wormhole-kit-core';

export const WhTransferModal = () => {
  const api = useWormhole();

  const handleUnsignedTxs = async (unsignedTxs: IUnsignedTx[]): Promise<void> => {
    // To execute the transaction,
    // send the unsigned transaction to the wallet.
  };

  const handleConfirm = async () => {
    try {
      const txs = await api.buildTransferTx({
        sender: { chain: 'Sui', address: '0x....' },
        receiver: {
          chain: 'Aptos,
          address: '0x....',
        },
        amount: '1.2',
      });
      handleUnsignedTxs(txs);
    } catch (error) {
      console.error(error);
    }
  };

  return <>...</>
}
```

## WhCoreProvider Props

- **`network`**: _Mainnet_, _Testnet_, and _Devnet_.
- **`chains`**: _Algorand_, _Aptos_, _EVMs_, _Solana_, and _Sui_.
- **`config`**: If needed, you can customize the default configuration to, for example, support a different RPC endpoint. [link](https://docs.wormhole.com/wormhole/reference/sdk-docs#usage)
