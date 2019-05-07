import React from 'react'

import { ApolloProvider } from 'react-apollo'
import apolloclient from './apolloclient'

import AppRouter from './AppRouter'

import './css/App.css'
import './css/normalize.css'

function App() {
  return (
    <ApolloProvider client={apolloclient}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
