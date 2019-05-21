import React from 'react'
import Status from './Status'
import TopBar from '../navigation/TopBar'
import LeftNav from '../navigation/LeftNav'
import AdsColumn from './AdsColumn'
import MainColumn from './MainColumn'

import '../../css/home.css'
function Home (){
  return(
    <div className="home-background">
      <div></div>
      <TopBar />
      <div className='homepage container'>
        <LeftNav />
        <Status />
        <AdsColumn />
        <MainColumn />
      </div>
    </div>
  )
}
export default Home