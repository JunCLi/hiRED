import React, { Component } from 'react'
import { Query } from 'react-apollo'

import '../../css/signup-login.css'

import OneDribbbleCard from './OneDribbbleCard'

import { listMyDribbbles } from '../../graphql-queries/queries'

class ListMyDribbbles extends Component {
	constructor(props) {
		super(props)
		console.log('this is ListMyDribbbles props', this.props)
	}

	render() {
		return (
			<Query
				query={listMyDribbbles}
				onError={error => {}}
				onCompleted={response => {
					// this.props.history.push('/mydribbbles')
				}}
			>
				{({ loading, errors, data, props }) => {
					console.log('errors: ', errors)
					console.log('data: ', data)
					if (loading)
						return (
							<div>
								<h4>dribbbles loading</h4>
							</div>
						)
					if (errors) return <div>Errors: {JSON.stringify(errors)}</div>
					return (
						<>
							{/* name the variable the name of your mutation and use the variable in your function call
				pass in the function as to prop to child 
			*/}

							{data.listMyDribbbles.map(dribbble_item => (
								<OneDribbbleCard key={dribbble_item.id} data={dribbble_item} {...props} />
							))}
						</>
					)
				}}
			</Query>
		)
	}
}

export default ListMyDribbbles
