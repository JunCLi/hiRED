import React from 'react'
import logo from '../../logo.svg'

import { Query } from 'react-apollo'
import { testConnection } from '../../graphql-queries/queries'

const Landing = () => {
	return (
		<Query query={ testConnection }>
			{({ loading, err, data }) => {
				if (loading) return <div>loading...</div>
				if (err) return <div>error!</div>

				console.log(data)
				return (
					<div className='App'>
						<header className='App-header'>
							<img src={logo} className='App-logo' alt='logo' />
							<p>
								Edit <code>src/App.js</code> and save to reload.
							</p>
							<a
								className='App-link'
								href='https://reactjs.org'
								target='_blank'
								rel='noopener noreferrer'
							>
								Learn React
							</a>
						</header>
					</div>
				)
			}}
		</Query>


		
	)
}

export default Landing
