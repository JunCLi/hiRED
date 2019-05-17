import React from 'react'

import { Card, Chip, TextField } from '@material-ui/core';

const handleDelete = () => {
  console.log('do stuff')
}

const ProfileFilterPortfolio = () => {
  return (
    <Card className='filter-portfolio-card'>
      <TextField>
        
      </TextField>
      <div className='chip-container'>
        <Chip 
          label='Dribble'
          onDelete={handleDelete}
          color='primary'
        />
        <Chip 
          label='UX'
          onDelete={handleDelete}
          color='primary'
        />
        <Chip 
          label='UI'
          onDelete={handleDelete}
          color='primary'
        />
        <Chip 
          label='Cool Stuff'
          onDelete={handleDelete}
          color='primary'
        />
        <Chip 
          label='Marvel Lore'
          onDelete={handleDelete}
          color='primary'
        />
      </div>
    </Card>
  )
}

export default ProfileFilterPortfolio