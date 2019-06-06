import React, { useState } from 'react'

import { Avatar, Button, CardHeader, CardContent, Typography } from '@material-ui/core'

import '../../css/editProfileModal.css'

import ProfileInfoHeaderModal from './ProfileInfoHeaderModal'

const ProfileInfoHeader = props => {
	const { fullname, programName, description } = props
	const [modalState, setModalState] = useState(false)

	const handleOpenModal = () => {
		setModalState(true)
	}

	const handleCloseModal = () => {
		setModalState(false)
	}

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
				action={
					<Button className='edit-profile-card-info' onClick={handleOpenModal}>
						edit
					</Button>
				}
			/>
			<CardContent className='profile-card-descript'>
				<Typography paragraph align='center'>Maybe add a portfolio description of sorts here? To describe the person. We could implement a character or a word limit to prevent it from getting too long.</Typography>
			</CardContent>

			<ProfileInfoHeaderModal
				modalState={modalState}
				closeModal={handleCloseModal}
				fullname={fullname}
				programName={programName}
				description={description}
			/>
		</>
	)
}

export default ProfileInfoHeader