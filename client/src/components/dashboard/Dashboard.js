import React from 'react'

import DashboardMenu from './DashboardMenu';
import EditPersonalInfo from './EditPersonalInfo'
import '../../css/dashboard.css'

const Dashboard = (props) => {
  return (
    <div className='dashboard container'>
      <DashboardMenu />
      <div> className='dashboard-content'>
        <EditPersonalInfo {...props}/>
      </div>
    </div>
  )
}

export default Dashboard