import React from 'react'
import Status from './Status'
import TopBar from './TopBar'
import LeftSideBar from './LeftSideBar'
function Home (){
    return(
        <div>
            <TopBar />
            <LeftSideBar />
            <Status />
        </div>
    )
}
export default Home