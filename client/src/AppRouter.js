import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from './components/Landing'
import Signup from './components/Signup'
import Login from './components/Login'

const AppRouter = () => {
  return (
    <Router>
      <Route path='/' exact component={Landing} />
      <Route path='/signup' exact component={Signup} />
      <Route path='/login' exact component={Login} />
    </Router>
  )
}

export default AppRouter