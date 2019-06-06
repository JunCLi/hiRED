import React from 'react'

import { Query } from 'react-apollo'
import { getFullProfileQuery } from '../../graphql-queries/queries'

import { Card, Divider } from '@material-ui/core'

import ProfileInfoheader from './ProfileInfoHeader'
import ProfileBasicInfoSection from './ProfileBasicInfoSection'
import ProfileRedAcademySection from './ProfileRedAcademySection'
import ProfilePassword from './ProfilePassword'
import SocialIntegrations from './SocialIntegrations'
   
const ProfileCard = props => {
	return (
		<Query query={getFullProfileQuery}>
			{({ loading, err, data }) => {
				if (loading) return <div>loading...</div>
				if (err || !data) return <div>error!</div>
				if (!data) return props.history.push('/login')

				return (
					<Card className='profile-card'>
						<ProfileInfoheader
							fullname={data.getUserProfile.fullname}
							programName={data.getUserProfile.getPrograms.length ? data.getUserProfile.getPrograms[0].name : ''}
							description={data.getUserProfile.description}
						/>

            <Divider variant='middle' />

						<ProfileBasicInfoSection
							email={data.getUserProfile.email}
							currentJob={data.getUserProfile.current_job}
							location={data.getUserProfile.location}
						/>

						<ProfileRedAcademySection
							campus={data.getUserProfile.campus}
							programName={data.getUserProfile.getPrograms.length ? data.getUserProfile.getPrograms[0].name : ''}
							studyYear={data.getUserProfile.study_year}
							studyCohort={data.getUserProfile.study_cohort}
						/>

						<ProfilePassword />

            <Divider variant='middle' />

						<SocialIntegrations />
						
					</Card>
				)
			}}
		</Query>
	)
}

export default ProfileCard