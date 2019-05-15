import React from 'react'

import { Button, Divider } from '@material-ui/core'

const DashboardMenu = () => {
  return (
    <section className='dashboard-menu'>
      <Button size='large' fullWidth>Teenage</Button>
      {/* <Divider variant='middle' /> */}
      <Button size='large' fullWidth>Mutant</Button>
      {/* <Divider variant='middle' /> */}
      <Button size='large' fullWidth>Ninja</Button>
      {/* <Divider variant='middle' /> */}
      <Button size='large' fullWidth>Turtles</Button>
      {/* <Divider variant='middle' /> */}
    </section>
  )
}

export default DashboardMenu