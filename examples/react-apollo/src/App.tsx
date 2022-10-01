import React from 'react';

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

function App() {
  const { data, error, loading } = useGlobalProtocolStatsQuery();
  const { connect, connectors } = useConnect();
  const { isConnected, address } = useAccount();
  const { signMessageAsync } = useSignMessage()

  const [loadChallenge, { error: challengeError, loading: challengeLoading }] = useChallengeLazyQuery()
  const [authenticate, { error: authError, loading: authLoading }] = useAuthenticateMutation()

  const handleConnect = () => connect({ connector: new InjectedConnector({ chains: [chain.polygon] }) });

  const handleSignInWithLens = async () => {
    try {
      const challenge = await loadChallenge({
        variables: { request: { address } }
      });
      const challengeText = challenge?.data?.challenge?.text

      if (!challengeText) {
        return alert('Error with loading challenge. Please, try again with page reload.');
      }

      const signature = await signMessageAsync({
        message: challengeText
      });

      // Auth user and set cookies
      const auth = await authenticate({
        variables: { request: { address, signature } }
      });
      if (auth?.data) {
        sessionStorage.set('accessToken', auth.data.authenticate.accessToken);
        sessionStorage.set('refreshToken', auth.data.authenticate.refreshToken);
      } else {
        return alert('Authentication was unsuccessful. Please, check if your "set up" is correct and try again')
      }

      // // Get authed profiles
      // const { data: profilesData } = await getProfiles({
      //   variables: { ownedBy: address }
      // });
      // setIsConnected(true);
      // if (profilesData?.profiles?.items?.length === 0) {
      //   setHasProfile(false);
      // } else {
      //   const profiles: Profile[] = profilesData?.profiles?.items
      //     ?.slice()
      //     ?.sort((a: Profile, b: Profile) => Number(a.id) - Number(b.id))
      //     ?.sort((a: Profile, b: Profile) => (!(a.isDefault !== b.isDefault) ? 0 : a.isDefault ? -1 : 1));
      //   setIsAuthenticated(true);
      //   setProfiles(profiles);
      //   setCurrentUser(profiles[ 0 ]);
      // }
    } catch (error) {
      alert('Error during Sign-In with Lens. Please, try again with page reload.')
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
          <p>This is a test app, so act accordingly:
            use <b>Metamask</b>, <b>Polygon Mainnet</b> and sign a message to <b>"Sign-in with Lens"</b>.
          </p>
        </div>
      </header>
      <main className="flex flex-col justify-center items-center">
        {loading
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
