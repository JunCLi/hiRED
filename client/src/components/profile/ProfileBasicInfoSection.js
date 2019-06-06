import React, { useState } from 'react'

import { Button, CardContent, CardHeader, Typography } from '@material-ui/core'

import '../../css/editProfileModal.css'

import ProfileBasicInfoModal from './ProfileBasicInfoModal'

const ProfileBasicInfoSection = props => {
	const { email, currentJob, location } = props

	const [modalState, setModalState ] = useState(false)
	
	const handleOpenModal = () => {
		setModalState(true)
	}

	const handleCloseModal = () => {
		setModalState(false)
	}

	return (
		<CardContent className='card-section'>
			<CardHeader
				className='section-name'
				title={
					<h4>Basic Info</h4>
				}
				action={
					<Button className='edit-profile-card-info' onClick={handleOpenModal}>
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

			<ProfileBasicInfoModal
				modalState={modalState}
				closeModal={handleCloseModal}
				email={email}
				currentJob={currentJob}
				location={location}
			/>
		</CardContent>
	)
}

export default ProfileBasicInfoSection