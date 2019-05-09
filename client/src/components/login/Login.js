import React from 'react';

import LoginForm from './LoginForm';

import '../../css/signup-login.css';

const Login = () => {
	return (
		<div className="login-card-container">
			<h2>Login</h2>
			<div className="login-form-container">
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
