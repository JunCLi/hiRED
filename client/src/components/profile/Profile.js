import React from 'react'

import TopBar from '../navigation/TopBar'
import LeftNav from '../navigation/LeftNav'
import ProfileCard from './ProfileCard'
import ProfileFilterPortfolio from './ProfileFilterPortfolio'
import Portfolio from '../portfolio/Portfolio'

import '../../css/profile.css'

const Profile = (props) => {
  return (
		
    <div className='profile'>
			<TopBar />
			<div className='container'>
				<LeftNav {...props}/>
				<Portfolio />
				<section className='profile-information'>
					<ProfileFilterPortfolio />
					<ProfileCard props={props} />
				</section>
			</div>
    </div>
  )
}

export default Profile