import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from './components/landing/Landing'
import Signup from './components/signup/Signup'
import MyDribbbles from './components/signup/MyDribbbles'
import Login from './components/login/Login'
import Profile from './components/profile/Profile'
import SignupForm2 from './components/signup/SignupForm2'
import SignupForm3 from './components/signup/SignupForm3'
import Mentors from './components/mentors/Mentors'
import Portfolio from './components/portfolio/Portfolio'
import AddPortfolioItem from './components/portfolio/AddPortfolioItem'
import Skills from "./components/skills/Skills"
import Chatbot from "./components/chat/Chatbot"
import Messages from "./components/chat/Messages"
import Home from './components/feed/Home'
import TopNav from './components/navigation/TopNav';
import Redbook from "./components/redbook/Redbook"


const AppRouter = () => {
	return (
		<Router>
			<TopNav />
			<Route path='/' exact component={Landing} />
			<Route path='/landing/' exact component={Landing} />
			<Route path='/signup/' exact component={Signup} />
			<Route path='/signup2/' exact component={SignupForm2} />
			<Route path='/signup3/' exact component={SignupForm3} />
			<Route path='/mydribbbles/' exact component={MyDribbbles} />
			<Route path='/login/' exact component={Login} />
      <Route path='/Home/' exact component={Home} />
			<Route path='/profile/' exact component={Profile} />
			<Route path='/mentors/' exact component={Mentors} />
      <Route path = '/skills/' exact component = {Skills} />
      <Route path = '/chatbot/' exact component = {Chatbot} />
      <Route path = '/messages:conversation/' exact component = {Messages} />
      <Route path='/portfolio/' exact component={Portfolio} />
      <Route path= '/addportfolioitem/' exact component={AddPortfolioItem} />
      <Route path= '/redbook/' exact component={Redbook} />
		</Router>
	)
}

export default AppRouter
