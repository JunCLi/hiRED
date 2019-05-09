import React, { Component } from 'react'
import axios from 'axios'

import '../../../css/signup-login.css'

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@material-ui/core'

import qs from 'query-string'
import { createCipher } from 'crypto'

class DribbbleSocial extends Component {
	constructor(props) {
		super(props)
	}
	state = {
		open: false,
		color: false,
	}

	Transition(props) {
		return <Slide direction='up' {...props} />
	}

	handleClickOpen = () => {
		this.setState({ open: true })
	}

	handleClose = () => {
		this.setState({ open: false })
	}

	socialSignIn = async (e, code) => {
		console.log('this is the  props ', this.props)
		window.location.href =
			'https://dribbble.com/oauth/authorize?client_id=97883b392791de1ff6facb092f049a91a1f1590a8e3172b61ef7d06be61651b6&client_secret=421e7b150aa6ec3c3efae5e5f4bee5ef8ea4f66794380a6940f46937e3762b5e&scope=public&state=al'
	}
	render() {
		return (
			<div className='signup-card-container'>
				<h2>Dribble</h2>
				<div className='signup-form-container'>
					<Button variant='contained' color='primary' onClick={e => this.socialSignIn(e)}>
						Login to Dribbble
					</Button>
					<div>
						<Dialog
							open={this.state.open}
							TransitionComponent={this.Transition}
							keepMounted
							onClose={this.handleClose}
							aria-labelledby='alert-dialog-slide-title'
							aria-describedby='alert-dialog-slide-description'
						>
							<DialogTitle id='alert-dialog-slide-title'>{"Use Google's location service?"}</DialogTitle>
							<DialogContent>
								<DialogContentText id='alert-dialog-slide-description'>
									Let Google help apps determine location. This means sending anonymous location data
									to Google, even when no apps are running.
								</DialogContentText>
							</DialogContent>
							<DialogActions>
								<Button onClick={this.handleClose} color='primary'>
									Disagree
								</Button>
								<Button onClick={this.handleClose} color='primary'>
									Agree
								</Button>
							</DialogActions>
						</Dialog>
					</div>
				</div>
			</div>
		)
	}
}

export default DribbbleSocial
