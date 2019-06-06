import React from 'react'

import { Switch, Typography } from '@material-ui/core'

const SocialIntegrationsItem = props => {
	const { children, name, state, switchFunction } = props
	return (
		<div className='social-integrations-item'>		
			<div className='social-integrations-label'>
				{children}
				<Typography className='social-integrations-text'>{name}</Typography>
			</div>
			<Switch
				checked={state}
				onChange={switchFunction}
				color={'primary'}
			/>
		</div>
	)
}

export default SocialIntegrationsItem