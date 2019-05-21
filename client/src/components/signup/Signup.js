import React from 'react'

// css & styles
import '../../css/signup-login.css'


// component imports
import SignupForm from './SignupForm'

const Signup = (props) => {
  return (
    <div className='signup-card-container'>
      <h2>Signup</h2>
      <div className='signup-form-container'>
        <SignupForm {...props} />
      </div>
    </div>
  )
}



export default Signup
