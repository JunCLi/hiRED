import React from 'react'

import { ApolloProvider } from 'react-apollo'
import apolloclient from './apolloclient'

import AppRouter from './AppRouter'

import './css/App.css'
import './css/normalize.css'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme'


function App() {
  return (
    <ApolloProvider client={apolloclient}>
      <MuiThemeProvider theme={theme}>
        <AppRouter />
      </MuiThemeProvider>
    </ApolloProvider>
  );
}

export default App;
