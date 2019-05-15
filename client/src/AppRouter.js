import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from './components/landing/Landing'
import Signup from './components/signup/Signup'
import SignupForm2 from './components/signup/SignupForm2'
import Login from './components/login/Login'
import Profile from './components/profile/Profile'
import Dashboard from './components/dashboard/Dashboard'
import Mentors from './components/mentors/Mentors'
import Signup3 from './components/signup/Signup3'

const AppRouter = () => {
  return (
    <Router>
      <Route path='/' exact component={Landing} />
      <Route path='/landing/' exact component={Landing} />
      <Route path='/signup/' exact component={Signup} />
      <Route path='/signup2/' exact component={SignupForm2} />
      <Route path='/signup3/' exact component = {Signup3} />
      <Route path='/login/' exact component={Login} />
      <Route path='/profile/' exact component={Profile} />
      <Route path='/dashboard/' exact component={Dashboard} />
      <Route path='/mentors/' exact component={Mentors} />
    </Router>
  )
}

export default AppRouter