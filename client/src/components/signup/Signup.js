import React from 'react'

import SignupForm from './SignupForm'

import '../../css/signup-login.css'
import DribbbleSocial from './social-login/DribbbleSocial'

const Signup = props => {
	return (
		<div className='signup-card-container'>
			<h2>Signup</h2>
			<div className='signup-form-container'>
				<SignupForm />
				<DribbbleSocial {...props} />
			</div>
		</div>
	)
}

export default Signup
