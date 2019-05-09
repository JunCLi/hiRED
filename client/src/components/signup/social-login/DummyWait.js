import React from 'react'
import qs from 'query-string'
import logo from '../../../logo.svg'

import { Query } from 'react-apollo'
import { testConnection } from '../../../graphql-queries/queries'

const DummyWait = props => {
	const code = qs.parse(props.location.search)
	console.log('this is code:', code)
	return (
		<Query query={testConnection}>
			{({ loading, err, data }) => {
				if (loading)
					return (
						<div className='App'>
							<header className='App-header'>
								<img src={logo} className='App-logo' alt='logo' />
								<p>
									what <code>src/App.js</code> and save to reload.
								</p>
								<a
									className='App-link'
									href='https://reactjs.org'
									target='_blank'
									rel='noopener noreferrer'
								>
									this is DUMMY WAIT Dribbble
								</a>
							</header>
						</div>
					)

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
								Dummy Wait Dribbble
							</a>
						</header>
					</div>
				)
			}}
		</Query>
	)
}

export default DummyWait

// if (code === !null) {
// 	try {
// 		console.log('this is code again: ', code);
// 		const redirectURI = 'http://localhost:3000/';
// 		let getDribbble = await axios.post(
// 			'https://dribbble.com/oauth/token?client_id=97883b392791de1ff6facb092f049a91a1f1590a8e3172b61ef7d06be61651b6&client_secret=421e7b150aa6ec3c3efae5e5f4bee5ef8ea4f66794380a6940f46937e3762b5e&code=' +
// 				code
// 		);
// 		console.log('this is Dribbble', getDribbble.data);

// 		return getDribbble.data;
// 	} catch (e) {
// 		throw e.message;
// 	}
// } else {
// 	return (
// 		<div>
// 			<h1>This didn't work!</h1>
// 		</div>
// 	);
// }
