import React, {
  createContext,
  useContext,
  useState
} from 'react';
import {
  createClient,
  WagmiConfig
} from 'wagmi';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client';
import App from './App';

import { getDefaultProvider } from 'ethers';

const mainnetApolloClient = new ApolloClient({
  uri: 'https://api.lens.dev',
  cache: new InMemoryCache()
});
const testnetApolloClient = new ApolloClient({
  uri: 'https://api-mumbai.lens.dev',
  cache: new InMemoryCache()
});

const wagmiClient = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

export const AppContext = createContext<{
  network: string,
  setNetwork: Function,
  session: { accessToken?: string, refreshToken?: string },
  setSession: Function
}>({
  network: 'MAINNET',
  setNetwork: () => {},
  session: { accessToken: undefined, refreshToken: undefined },
  setSession: () => {}
});

const AppWrapper = () => {
  const [network, setNetwork] = useState('MAINNET');
  const [session, setSession] = useState({ accessToken: undefined, refreshToken: undefined });

  return <>
    <a className="absolute right-0 top-0 mr-3 mt-3" href={process.env.REACT_APP_GITHUB_LINK} target="_blank" rel="noopener noreferrer">
      <img width={36} height={36} src="/github-icon.png" alt="github icon"/>
    </a>
    <WagmiConfig client={wagmiClient}>
      <AppContext.Provider value={{ network, setNetwork, session, setSession }}>
        <NetworkPicker/>
        <AppContext.Consumer>
          {
            ({ network }) =>
              network === 'MAINNET'
                ? <ApolloProvider client={mainnetApolloClient}>
                  <App/>
                </ApolloProvider>
                : <ApolloProvider client={testnetApolloClient}>
                  <App/>
                </ApolloProvider>
          }
        </AppContext.Consumer>
      </AppContext.Provider>
    </WagmiConfig>
  </>;
};

const NetworkPicker = () => {
  const { network, setNetwork } = useContext(AppContext);

  const handleNetworkChange = () => setNetwork(network === 'MAINNET' ? 'TESTNET' : 'MAINNET');

  return <div className="flex justify-center items-center">
    <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">Testnet</span>
    <label htmlFor="network" className="inline-flex relative items-center cursor-pointer">
      <input type="checkbox" onChange={handleNetworkChange} value={network} id="network" checked={network === 'MAINNET'}
             className="sr-only peer"/>
      <div
        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Mainnet</span>
  </div>;
};

export default AppWrapper;
