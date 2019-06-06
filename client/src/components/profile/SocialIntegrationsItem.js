import React from 'react'

import { Switch, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialIntegrationsItem = props => {
	const { children, icon, name, state, switchFunction } = props
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