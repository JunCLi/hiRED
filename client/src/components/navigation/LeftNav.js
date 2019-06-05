import React from 'react'

import { Query } from 'react-apollo'
import { isAuthenticated } from '../../graphql-queries/queries'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faComments, faAddressBook, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

import { Button } from '@material-ui/core'

import '../../css/left-nav.css'

const LeftNav = (props) => {
	return (
		<Query query={isAuthenticated}>
			{({ loading, err, data}) => {
				console.log(data)
				if (loading) return <div>loading...</div>
				if (err) return <div>error!</div>
				return (
					<div className='nav left-nav'>
						<h1>Left Nav</h1>
						<Link to='/home/'>
							<Button fullWidth={true}>
								temp go to feeds
							</Button>
						</Link>
						<Link to='/profile/'>
							<Button fullWidth={true}>
								<FontAwesomeIcon className='left-nav-icon' icon={faUserCircle} />
								{data ? data.getUserProfile.fullname : 'User'}
							</Button>
						</Link>
						<Link to='/chatbot/'>
							<Button fullWidth={true}>
								<FontAwesomeIcon className='left-nav-icon' icon={faComments} />
								Messages
							</Button>
						</Link>
						<Link to='/'>
							<Button fullWidth={true}>
								<FontAwesomeIcon className='left-nav-icon' icon={faAddressBook} />
								Redbook
							</Button>
						</Link>
						<Link to='/mentors/'>
							<Button fullWidth={true}>
								<FontAwesomeIcon className='left-nav-icon' icon={faGraduationCap} />
								Mentors
							</Button>
						</Link>
					</div>	
				)
			}}
		</Query>
	)
}

export default LeftNav