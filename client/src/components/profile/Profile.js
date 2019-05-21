import React from 'react'

import ProfileCard from './ProfileCard'
import ProfileFilterPortfolio from './ProfileFilterPortfolio'
import LeftNav from '../navigation/LeftNav'
import Portfolio from '../portfolio/Portfolio'

import '../../css/profile.css'

const Profile = (props) => {
  return (
    <div className='profile container'>
			<LeftNav {...props}/>
			<Portfolio />
			<section className='profile-information'>
				<ProfileFilterPortfolio />
				<ProfileCard props={props} />
			</section>
    </div>
  )
}

export default Profile