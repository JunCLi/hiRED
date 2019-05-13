import React from 'react'

import ProfileCard from './ProfileCard'
import ProfileFilterPortfolio from './ProfileFilterPortfolio'

import '../../css/profile.css'

const Profile = (props) => {
  return (
    <div className='profile'>
      <ProfileCard props={props} />
      <ProfileFilterPortfolio />
    </div>
  )
}

export default Profile