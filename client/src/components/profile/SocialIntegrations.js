import React, { useState } from 'react'

import { CardContent, CardHeader } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons'
import { FaGithub, FaDribbble, FaLinkedin } from 'react-icons/fa'

import SocialIntegrationsItem from './SocialIntegrationsItem'

const SocialIntegrations = props => {
	const [dribbble, setDribbble] = useState(false)
	const [github, setGithub] = useState(false)
	const [linkedIn, setLinkedIn] = useState(false)

	const handleSwitchChange = (state, setState) => {
		setState(!state)
	}

	return (
		<CardContent className='card-section social-integrations'>
			<CardHeader
				className='section-name'
				title={
					<h4>Social Integrations</h4>
				}
			/>
			<section className='section-content'>
				<SocialIntegrationsItem
					children={<FaDribbble className='social-integrations-icon'/>}
					name={'Dribbble'}
					state={dribbble}
					switchFunction={() => handleSwitchChange(dribbble, setDribbble)}
				/>
				<SocialIntegrationsItem
					children={<FaGithub className='social-integrations-icon'/>}
					name={'Github'}
					state={github}
					switchFunction={() => handleSwitchChange(github, setGithub)}
				/>
				<SocialIntegrationsItem
					children={<FaLinkedin className='social-integrations-icon'/>}
					name={'LinkedIn (soon)'}
					state={linkedIn}
					switchFunction={() => handleSwitchChange(linkedIn, setLinkedIn)}
				/>
			</section>
		</CardContent>
	)
}

export default SocialIntegrations