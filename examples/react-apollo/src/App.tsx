import React from 'react';

import { useGlobalProtocolStatsQuery, GlobalProtocolStats } from '@use-lens/react-apollo';

import logo from './logo.svg';
import './App.css';

function App() {
  const { data } = useGlobalProtocolStatsQuery()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { JSON.stringify(data) }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
