import React from 'react'

import { Query } from 'react-apollo'
import { isAuthenticated } from '../../graphql-queries/queries'

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
						<Button fullWidth={true}>
							<FontAwesomeIcon className='left-nav-icon' icon={faUserCircle} />
							{data ? data.getUserProfile.fullname : 'User'}
						</Button>
						<Button fullWidth={true}>
							<FontAwesomeIcon className='left-nav-icon' icon={faComments} />
							Messages
						</Button>
						<Button fullWidth={true}>
							<FontAwesomeIcon className='left-nav-icon' icon={faAddressBook} />
							Redbook
						</Button>
						<Button fullWidth={true}>
							<FontAwesomeIcon className='left-nav-icon' icon={faGraduationCap} />
							Mentors
						</Button>
					</div>	
				)
			}}
		</Query>
	)
}

export default LeftNav

