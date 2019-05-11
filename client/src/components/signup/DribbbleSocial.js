import React, { Component } from 'react'
import { Mutation } from 'react-apollo'

import '../../css/signup-login.css'

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@material-ui/core'

import DribbbleChild from './DribbbleChild';

import {saveDribbbleCode} from '../../graphql-queries/mutations'


class DribbbleSocial extends Component {
	constructor(props){
		super(props)
	}
	state = {
		image: '',
		// color: false,
	}

	render() {
		return (
			<Mutation
				mutation={saveDribbbleCode}
				onError={error => {
				}}
				onCompleted={(response) => {
					this.props.history.push('/signup2')					
				}}

			> 
			{/* name the variable the name of your mutation and use the variable in your function call
				pass in the function as to prop to child 
			*/}
			{ saveDribbbleCode => <DribbbleChild saveDribbbleCode={saveDribbbleCode} {...this.props}/>}
			</Mutation>
		)
	}
}

export default DribbbleSocial
