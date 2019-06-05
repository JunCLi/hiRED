import React from 'react'

import { Button, CardContent, CardHeader, Typography } from '@material-ui/core'

const ProfileRedAcademySection = props => {
	const { campus, programName, studyYear, studyCohort } = props
	return (
		<CardContent className='card-section'>
			<CardHeader
				className='section-name'
				title={
					<h4>Red Academy</h4>
				}
				action={
					<Button className='edit-profile-card-info'>edit</Button>
				}
			/>
			<section className='section-content'>
				<Typography paragraph>
					<span className='profile-info-title'>Campus: </span>{campus}
				</Typography>
				<Typography paragraph>
					<span className='profile-info-title'>Programs: </span>{programName}
				</Typography>
				<Typography paragraph>
					<span className='profile-info-title'>Study Year: </span>{studyYear}
				</Typography>
				<Typography paragraph>
					<span className='profile-info-title'>Cohort: </span>{studyCohort}
				</Typography>
			</section>
		</CardContent>
	)
}

export default ProfileRedAcademySection