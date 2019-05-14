import React, { Component } from 'react'
import { Mutation } from 'react-apollo'

import '../../css/signup-login.css'


import GithubChild from './GithubChild'

import {saveGithubCode} from '../../graphql-queries/mutations'


class GithubSocial extends Component {
	state = {
		image: '',
	}

	render() {
		return (
			<Mutation
				mutation={saveGithubCode}
				onError={error => {
					console.log('regular signup error: ', error)
				}}
				onCompleted={(response) => {
					this.props.history.push('/signup3')
					// console.log('Signup response:', response)
				}}
			> 
			{ saveGithubCode => <GithubChild saveGithubCode={saveGithubCode} {...this.props}/>}
			</Mutation>
		)
	}
}

export default GithubSocial