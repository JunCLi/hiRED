import React from 'react'

import { Button } from '@material-ui/core';

const handleDelete = () => {
  console.log('do stuff')
}

const ProfileFilterPortfolio = () => {
  return (
    <div className='portfolio-filter'>
			<Button>
				All
			</Button>
			<Button>
				Dribbble
			</Button>
			<Button>
				Github
			</Button>
			<Button>
				Status
			</Button>
		</div>
  )
}

export default ProfileFilterPortfolio