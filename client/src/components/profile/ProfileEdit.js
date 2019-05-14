import React from 'react'

import { Query } from 'react-apollo'
import { getFullProfileQuery } from '../../graphql-queries/queries' 

import ProfileEditPersonalInfoForm from './ProfileEditPersonalInfoForm'

const ProfileEdit = () => {
  return (
    <Query
      query={getFullProfileQuery}>
      {({ loading, err, data }) => {
        if (loading) return <div>loading...</div>
        if (err) return <div>error!</div>
        return (
          <ProfileEditPersonalInfoForm profileInfo={data.getUserProfile}/>
        )
      }}

    </Query>
  )
}

export default ProfileEdit 