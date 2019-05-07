import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from './components/Landing'

const AppRouter = () => {
  return (
    <Router>
      <Route path='/' exact component={Landing} />
    </Router>
  )
}

export default AppRouter