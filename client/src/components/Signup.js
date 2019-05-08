import React from 'react'

import SignupForm from './SignupForm'

import '../css/signup-login.css'

const Signup = () => {
  return (
    <div className='signup-card-container'>
      <h2>Signup</h2>
      <div className='signup-form-container'>
        <SignupForm />  
      </div>
    </div>
  )
}

export default Signup