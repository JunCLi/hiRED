import React from 'react'

import { Query } from 'react-apollo'
import { getFullProfileQuery } from '../../graphql-queries/queries' 

import EditPersonalInfoForm from './EditPersonalInfoForm'
import '../../css/profile-edit.css'

const EditPersonalInfo = () => {
  return (
    <Query
      query={getFullProfileQuery}>
      {({ loading, err, data }) => {
        if (loading) return <div>loading...</div>
        if (err) return <div>error!</div>
        return (
          <div className='profile-edit'>
            <h1>Profile Information</h1>
            <EditPersonalInfoForm profileInfo={data.getUserProfile}/>
          </div>
        )
      }}
    </Query>
  )
}

export default EditPersonalInfo 