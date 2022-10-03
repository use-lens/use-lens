import React from 'react';

import { GlobalProtocolStatsDocument } from '@use-lens/react-apollo' // goes to ./src/use-lens/react-apollo.ts - configured in tsconfig.json

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Example of GlobalProtocolStatsDocument
      </header>
      <main>
        <pre>
          { JSON.stringify(GlobalProtocolStatsDocument, null, 2) }
        </pre>
      </main>
    </div>
  );
}

export default App;
