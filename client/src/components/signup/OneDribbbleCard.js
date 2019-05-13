import React, { Component } from 'react'

import '../../css/signup-login.css'

export default class OneDribbbleCard extends Component {
	constructor(props) {
		super(props)
	}

	// componentDidMount(props) {

	// }

	render() {
		return (
			<div className='signup-card-container'>
				<img src={this.props.data.images.normal} alt='dribbble' />
			</div>
		)
	}
}
