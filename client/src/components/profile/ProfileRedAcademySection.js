import React, { useState } from 'react'

import { Button, CardContent, CardHeader, Typography } from '@material-ui/core'

import '../../css/editProfileModal.css'

import ProfileRedAcademyModal from './ProfileRedAcademyModal'

const ProfileRedAcademySection = props => {
	const { campus, programName, studyYear, studyCohort } = props

	const [modalState, setModalState] = useState(false)

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
					<h4>Red Academy</h4>
				}
				action={
					<Button className='edit-profile-card-info' onClick={handleOpenModal}>
						edit
					</Button>
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

			<ProfileRedAcademyModal
				modalState={modalState}
				closeModal={handleCloseModal}
				campus={campus}
				programName={programName}
				studyYear={studyYear}
				studyCohort={studyCohort}
			/>
		</CardContent>
	)
}

export default ProfileRedAcademySection