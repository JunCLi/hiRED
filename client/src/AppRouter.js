import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './components/landing/Landing';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import DummyWait from './components/signup/social-login/DummyWait';

const AppRouter = () => {
	return (
		<Router>
			<Route path="/" exact component={Landing} />
			<Route path="/signup/" exact component={Signup} />
			<Route path="/login/" exact component={Login} />
			<Route path="/profile/" exact component={Profile} />
			<Route path="/dummywait/" exact component={DummyWait} />
		</Router>
	);
};

export default AppRouter;
