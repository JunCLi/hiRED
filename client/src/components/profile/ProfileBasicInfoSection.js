import React, { useState } from 'react'

import { Button, Card, CardContent, CardHeader, Modal, Typography } from '@material-ui/core'

const ProfileBasicInfoSection = props => {
	const { email, currentJob, location } = props

	const [basicInfoState, setBasicInfoState ] = useState(false)
	
	const handleOpenBasicInfoModal = () => {
		setBasicInfoState(true)
	}

	const handleCloseBasicInfoModal = () => {
		setBasicInfoState(false)
	}

	return (
		<CardContent className='card-section'>
			<CardHeader
				className='section-name'
				title={
					<h4>Basic Info</h4>
				}
				action={
					<Button className='edit-profile-card-info' onClick={handleOpenBasicInfoModal}>
						edit
					</Button>
				}
			/>
			<section className='section-content'>
				<Typography paragraph>
					<span className='profile-info-title'>Email: </span>{email}
				</Typography>
				<Typography paragraph>
					<span className='profile-info-title'>Current Job: </span>{currentJob}
				</Typography>
				<Typography paragraph>
					<span className='profile-info-title'>Location: </span>{location}
				</Typography>
			</section>

			<Modal open={basicInfoState} onClose={handleCloseBasicInfoModal}>
				<Card>
					stuff
					<Button onClick={handleCloseBasicInfoModal}>close</Button>
				</Card>
			</Modal>
		</CardContent>
	)
}

export default ProfileBasicInfoSection