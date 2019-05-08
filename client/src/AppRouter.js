import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from './components/Landing'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile'

const AppRouter = () => {
  return (
    <Router>
      <Route path='/' exact component={Landing} />
      <Route path='/signup/' exact component={Signup} />
      <Route path='/login/' exact component={Login} />
      <Route path='/profile/' exact component={Profile} />
    </Router>
  )
}

export default AppRouter