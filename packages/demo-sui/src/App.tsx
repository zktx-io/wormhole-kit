import './App.css';
import {
  ConnectButton,
  useCurrentAccount,
  useSignAndExecuteTransactionBlock,
} from '@mysten/dapp-kit';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { WhRedeemButton, WhTransferButton } from '@zktx.io/wormhole-kit';
import { useSnackbar } from 'notistack';

function App() {
  const { enqueueSnackbar } = useSnackbar();
  const { mutate: signAndExecuteTransactionBlock } =
    useSignAndExecuteTransactionBlock();
  const account = useCurrentAccount();

  const handleUnsignedTx = async (unsignedTx: string): Promise<void> => {
    try {
      signAndExecuteTransactionBlock(
        {
          transactionBlock: TransactionBlock.from(unsignedTx),
        },
        {
          onError: (err) => {
            console.log('error', err)
            enqueueSnackbar(err.message, {
              variant: 'error',
            });
          },
          onSuccess: (data) => {
            console.log('success', data)
            enqueueSnackbar(data.digest, {
              variant: 'success',
            });
          },
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>@zktx.io/wormhole-kit</h1>
        <h2>Sui Example</h2>
        {!account ? (
          <ConnectButton />
        ) : (
          <span>
            <WhTransferButton
              chain="Sui"
              token={'0x2::sui::SUI'}
              address={account.address}
              handleUnsignedTx={handleUnsignedTx}
            />
            &nbsp;
            <WhRedeemButton
              chain="Sui"
              address={account.address}
              handleUnsignedTx={handleUnsignedTx}
            />
          </span>
        )}
      </header>
    </div>
  );
}

export default App;
