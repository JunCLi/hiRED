import React from 'react'

import { Query } from 'react-apollo'
import { getUserProfileQuery } from '../../graphql-queries/queries'

import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Divider, Typography, } from '@material-ui/core'
   


const ProfileCard = (props) => {
  const handleClick = () => {
    console.log(props)
    props.props.history.push('/dashboard/')
  }

	return (
		<Query query={getUserProfileQuery}>
			{({ loading, err, data }) => {
				if (loading) return <div>loading...</div>
				if (err) return <div>error!</div>
				return (
					<Card className='profile-card'>
						<Avatar className='profile-avatar' />
						<CardHeader
              title={ 
                <h3>{data.getUserProfile.fullname}</h3>
              }
              subheader={<h5>{data.getUserProfile.role}</h5>}
            />
            <CardContent className='profile-card-descript'>
              <Typography paragraph align='center'>Maybe add a portfolio description of sorts here? To describe the person. We could implement a character or a word limit to prevent it from getting too long.</Typography>
            </CardContent>

            <Divider variant='middle' />

            <CardContent className='profile-card-content profile-card-info'>
              <Typography paragraph>
                <span className='profile-info-title'>Email</span>{data.getUserProfile.email}
              </Typography>
              <Typography paragraph>
                <span className='profile-info-title'>Current Job</span>{data.getUserProfile.current_job}
              </Typography>
              <Typography paragraph>
                <span className='profile-info-title'>Location</span>{data.getUserProfile.location}
              </Typography>
              <Typography paragraph>
                <span className='profile-info-title'>Campus</span>{data.getUserProfile.campus}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={handleClick}>Edit Profile</Button>
            </CardActions>
					</Card>
				)
			}}
		</Query>
	)
}

export default ProfileCard
