import React, {
  useContext,
  useState
} from 'react';

import {
  useAuthenticateMutation,
  useChallengeLazyQuery,
  useGlobalProtocolStatsQuery
} from '@use-lens/react-apollo';

import { GlobalProtocolStats } from './components/GlobalProtocolStats';
import {
  chain,
  useAccount,
  useConnect,
  useSignMessage
} from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { AppContext } from './AppWrapper';
import { LensData } from './components/LensData';

function App() {
  const { network, setSession } = useContext(AppContext);
  const { connect, connectors } = useConnect();
  const { isConnected, address } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const [lensConnected, setLensConnected] = useState(false);

  const [loadChallenge] = useChallengeLazyQuery();
  const [authenticate] = useAuthenticateMutation();

  const { data, error, loading } = useGlobalProtocolStatsQuery();

  const handleConnect = () => connect({ connector: new InjectedConnector({ chains: [chain.polygon] }) });

  const handleSignInWithLens = async () => {
    try {
      const challenge = await loadChallenge({
        variables: { request: { address } }
      });
      const challengeText = challenge?.data?.challenge?.text;

      if (!challengeText) {
        return alert('Error with loading challenge. Please, try again with page reload.');
      }

      const signature = await signMessageAsync({
        message: challengeText
      });

      const auth = await authenticate({
        variables: { request: { address, signature } }
      });

      if (auth?.data) {
        setSession({
          accessToken: auth.data.authenticate.accessToken,
          refreshToken: auth.data.authenticate.refreshToken
        });

        setLensConnected(true);
      } else {
        return alert('Authentication was unsuccessful. Please, check if your "set up" is correct and try again');
      }
    } catch (error) {
      alert('Error during Sign-In with Lens. Please, try again with page reload.');
      console.error(error);
    }
  };

  if (error) {
    return <div>Error with GlobalProtocolStats</div>;
  }

  return (
    <>
      <header>
        <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
          <p className="font-bold">⚠️🤝</p>
          <p>This is a test app, so act accordingly: use <b>Metamask</b>, <b>Polygon {network === 'MAINNET' ? 'Mainnet' : 'Mumbai'}</b>,
            have the Lens Protocol <b>account</b> and sign a message to <b>"Sign-in with Lens"</b>.</p>
        </div>
      </header>
      <main className="flex flex-col justify-center items-center">
        {lensConnected
          ? <LensData/>
          : loading
            ? 'Loading...'
            : <>
              {isConnected
                ? <div>
                  <button
                    className="m-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSignInWithLens}>
                    Sign-In with Lens 🌿
                  </button>
                </div>
                :
                connectors?.map((connector) =>
                  <div key={connector.id}>
                    {connector.ready
                      ? <button
                        className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleConnect}>
                        Connect 🦊
                      </button>
                      : <div className="m-5">
                        Please, check if everything is correct with your setup
                      </div>
                    }
                  </div>
                )
              }
              <GlobalProtocolStats data={data?.globalProtocolStats!}/>
            </>
        }
      </main>
    </>
  );
}

export default App;
