import React from 'react'
import DribbbleSocial from './DribbbleSocial';
import {withRouter} from 'react-router';
import Signup from './Signup';

function SignupForm3(props) {
    return (
        <div>
            <DribbbleSocial {...props} />
        </div>
    )
}

export default withRouter(SignupForm3)