import React, { useState } from 'react'

import { Query } from 'react-apollo'
import { getUserProfileQuery } from '../../graphql-queries/queries'

import { Avatar, Button, Card, CardContent, CardHeader, Divider, Modal, Typography } from '@material-ui/core'

import SocialIntegrations from './SocialIntegrations'
   
const ProfileCard = props => {
	const [basicInfoState, setBasicInfoState ] = useState(false)
	
	const handleOpenBasicInfoModal = () => {
		setBasicInfoState(true)
	}

	const handleCloseBasicInfoModal = () => {
		setBasicInfoState(false)
	}

	return (
		<Query query={getUserProfileQuery}>
			{({ loading, err, data }) => {
				if (loading) return <div>loading...</div>
				if (err || !data) return <div>error!</div>
				if (!data) return props.history.push('/login')
				console.log(data.getUserProfile)
				return (
					<Card className='profile-card'>
						<CardHeader
							avatar={
								<Avatar className='profile-avatar' />
							}
              title={ 
                <h3>{data.getUserProfile.fullname}</h3>
              }
              subheader={<h5>{data.getUserProfile.getPrograms[0].name}</h5>}
            />
            <CardContent className='profile-card-descript'>
              <Typography paragraph align='center'>Maybe add a portfolio description of sorts here? To describe the person. We could implement a character or a word limit to prevent it from getting too long.</Typography>
            </CardContent>

            <Divider variant='middle' />

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
									<span className='profile-info-title'>Email: </span>{data.getUserProfile.email}
								</Typography>
								<Typography paragraph>
									<span className='profile-info-title'>Current Job: </span>{data.getUserProfile.current_job}
								</Typography>
								<Typography paragraph>
									<span className='profile-info-title'>Location: </span>{data.getUserProfile.location}
								</Typography>
							</section>

							<Modal open={basicInfoState} onClose={handleCloseBasicInfoModal}>
								<Card>
									stuff
									<Button onClick={handleCloseBasicInfoModal}>close</Button>
								</Card>
							</Modal>
            </CardContent>

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
									<span className='profile-info-title'>Campus: </span>{data.getUserProfile.campus}
								</Typography>
								<Typography paragraph>
									<span className='profile-info-title'>Programs: </span>{data.getUserProfile.getPrograms[0].name}
								</Typography>
								<Typography paragraph>
									<span className='profile-info-title'>Study Year: </span>{data.getUserProfile.study_year}
								</Typography>
								<Typography paragraph>
									<span className='profile-info-title'>Cohort: </span>{data.getUserProfile.study_cohort}
								</Typography>
							</section>
						</CardContent>

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

            <Divider variant='middle' />

						<SocialIntegrations />
						
					</Card>
				)
			}}
		</Query>
	)
}

export default ProfileCard