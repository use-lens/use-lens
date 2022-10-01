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


const getApolloClient = (network?: string) => {
  const uri = network === 'MAINNET' ? 'https://api.lens.dev' : 'https://api-mumbai.lens.dev';
  return new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });
};

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
  const [network, setNetwork] = useState('MAINNET')
  const [session, setSession] = useState({ accessToken: undefined, refreshToken: undefined })

  return <>
    <WagmiConfig client={wagmiClient}>
      <AppContext.Provider value={{ network, setNetwork, session, setSession }}>
        <NetworkPicker/>
        <AppContext.Consumer>
          {
            ({ network }) =>
              <ApolloProvider client={getApolloClient(network)}>
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

  const handleNetworkChange = () => setNetwork(network === 'MAINNET' ? 'TESTNET' : 'MAINNET')

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
