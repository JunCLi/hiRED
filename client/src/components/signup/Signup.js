import React, { Component } from 'react'
import PropTypes from 'prop-types'

// css & styles
import '../../css/signup-login.css'


// component imports
import SignupForm from './SignupForm'
import SignupForm2 from './SignupForm2'

import DribbbleSocial from './DribbbleSocial'
import ListMyDribbbles from './ListMyDribbbles';


//declaring variables and functions


const Signup = (props) => {
	
		return (
			<div>
				<SignupForm {...props} />
			</div>
		)
	
}



export default Signup
