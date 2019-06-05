import React from 'react'

import { CardHeader, Avatar, CardContent, Typography } from '@material-ui/core'

const ProfileInfoHeader = props => {
	const { fullname, programName } = props
	return (
		<>
			<CardHeader
				avatar={
					<Avatar className='profile-avatar' />
				}
				title={ 
					<h3>{fullname}</h3>
				}
				subheader={<h5>{programName}</h5>}
			/>
			<CardContent className='profile-card-descript'>
				<Typography paragraph align='center'>Maybe add a portfolio description of sorts here? To describe the person. We could implement a character or a word limit to prevent it from getting too long.</Typography>
			</CardContent>
		</>
	)
}

export default ProfileInfoHeader