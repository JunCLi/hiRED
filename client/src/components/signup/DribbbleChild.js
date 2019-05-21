import React, { Component } from 'react'

import '../../css/signup-login.css'
import { withRouter } from 'react-router'

import { Button } from '@material-ui/core'

import qs from 'query-string'

class DribbbleChild extends Component {
	constructor(props) {
		super(props)
		console.log('this is DribbbbleChild props', props)
	}
	socialSignIn = async (e, code) => {
		window.location.href =
			'https://dribbble.com/oauth/authorize?client_id=97883b392791de1ff6facb092f049a91a1f1590a8e3172b61ef7d06be61651b6&client_secret=421e7b150aa6ec3c3efae5e5f4bee5ef8ea4f66794380a6940f46937e3762b5e&scope=public&state=al'
	}

	componentDidMount(props) {
		const code = qs.parse(this.props.location.search)
		if (code !== null) {
			this.props.saveDribbbleCode({ variables: { api_code: code.code } })
		}
	}

	render() {
		return (
			<div className='signup-card-container'>
				<div className='signup-form-container'>
					<Button variant='contained' color='primary' onClick={e => this.socialSignIn(e)}>
						Login to Dribbble
					</Button>
				</div>
			</div>
		)
	}
}
export default withRouter(DribbbleChild)
