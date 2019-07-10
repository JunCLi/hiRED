import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'

import { Query } from 'react-apollo'
import { testConnection } from '../../graphql-queries/queries'

import { Button } from '@material-ui/core'

const Landing = () => {
	return (
		<Query query={ testConnection }>
			{({ loading, err, data }) => {
				if (loading) return <div>loading...</div>
				if (err) return <div>error!</div>

				return (
					<div className='App'>
						<header className='App-header'>
							<img src={logo} className='App-logo' alt='logo' />
							<p>
								Edit <code>src/App.js</code> and save to reload.
							</p>
							<Link to='/'>
								<Button>
									Home
								</Button>
							</Link>
							<Link to='/chatbot/'>
								<Button>
									Messages
								</Button>
							</Link>
							<Link to='/profile/'>
								<Button>
									Profile
								</Button>
							</Link>
							<Link to='/mentors/'>
								<Button>
									Mentors
								</Button>
							</Link>
							<Link to='/home/'>
								<Button>
									feed
								</Button>
							</Link>
							<Link to='/login/'>
								<Button>
									Login
								</Button>
							</Link>
							<Link to='/signup/'>
								<Button>
									signup
								</Button>
							</Link>
						</header>
					</div>
				)
			}}
		</Query>


		
	)
}

export default Landing
