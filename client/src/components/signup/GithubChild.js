import React, { Component } from 'react'

import '../../css/signup-login.css'

import { Button } from '@material-ui/core'

import qs from 'query-string'

export default class GithubChild extends Component {
  constructor(props){
    super(props)
  }
	githubSignIn = async (e, code) => {
		window.location.href =
			'https://github.com/login/oauth/authorize?client_id=a7ec9ab65600c7fc7e5c&client_secret=9267763cc3035b2c91da699e7c051cb62040d7fc&scope=public&state=al'
	}

	componentDidMount(props) {
		const code = qs.parse(this.props.location.search)
		console.log('this is code', code)
		if (code !== null) {
			console.log('this is code not null', code)
			this.props.saveGithubCode({ variables: { api_code: code.code } })
    }
	}

	render() {

		return (
			<div className='signup-card-container'>
				<h2>Github</h2>

				<div className='signup-form-container'>
					<Button variant='contained' color='primary' onClick={e => this.githubSignIn(e)}>
						Login to Github
					</Button>
				</div>
			</div>
		)
	}
}