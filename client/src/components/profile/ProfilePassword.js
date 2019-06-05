import React from 'react'

import { Button, CardContent, CardHeader } from '@material-ui/core'

const ProfilePassword = () => {
	return (
		<CardContent className='card-section'>
			<CardHeader
				className='section-name'
				title={
					<h4>Password</h4>
				}
				action={
					<Button className='edit-profile-card-info'>change</Button>
				}
			/>
		</CardContent>
	)
}

export default ProfilePassword