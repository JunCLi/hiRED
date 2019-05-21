const axios = require('axios') 
const postgres = require('../../config/postgres') 

const { createSelectQuery, createInsertQuery, createUpdateQuery } = require('../../resolvers/makeQuery')

const camelToUnderscore = key => {
	return key.replace( /([A-Z])/g, "_$1").toLowerCase()
}

const saveDribbbleFetch = async (fetchingDribbbleData) => {

	await fetchingDribbbleData.forEach (async dribbbleObject => {
		try {
			const selectColumns = [
				'dribbble_id',
				'updated_at'
			]
			const checkUniqueDribbbleQuery = createSelectQuery(selectColumns, 'hired.dribbble_items', 'dribbble_id', dribbbleObject.id)
			const checkUniqueDribbbleQueryResult = await postgres.query(checkUniqueDribbbleQuery)
		
			dribbbleObject.dribbble_id = dribbbleObject.id
			dribbbleObject.images_hidpi = dribbbleObject.images.hidpi
			dribbbleObject.images_normal = dribbbleObject.images.normal
			dribbbleObject.images_one_x = dribbbleObject.images.one_x
			dribbbleObject.images_teaser = dribbbleObject.images.teaser
			delete dribbbleObject.id
			delete dribbbleObject.tags
			delete dribbbleObject.projects
			delete dribbbleObject.attachments
			delete dribbbleObject.images

			if (checkUniqueDribbbleQueryResult.rows.length) {
				if (dribbbleObject.updated_at !== checkUniqueDribbbleQueryResult.rows[0].updated_at) {
					const updateDribbbleQuery = createUpdateQuery(dribbbleObject, 'dribbble_id', 'hired.dribbble_items', dribbbleObject.dribbble_id)
					await postgres.query(updateDribbbleQuery)
				}
			} else {
				const createInsertDribbbleQuery = createInsertQuery(dribbbleObject, 'hired.dribbble_items')
				await postgres.query(createInsertDribbbleQuery)
			}

		} catch (err) {
			throw err
		}
	})
}

const saveGithubFetch = async (fetchingGithubData) => {

		await fetchingGithubData.forEach( async githubObject => {
			try{
				githubObject.owner_login = githubObject.owner.login
				githubObject.stargazers_totalcount = githubObject.stargazers.totalCount
				delete githubObject.owner
				delete githubObject.stargazers
			

				const githubNewObject = {}
				for (let githubCamelKey in githubObject) {
					githubNewObject[camelToUnderscore(githubCamelKey)] = githubObject[githubCamelKey]
				} 
				const checkUniqueGithubQuery = {
					text: 'SELECT repo_id, github_name, updated_at FROM hired.github_items WHERE repo_id = $1 AND github_name = $2',
					values: [githubNewObject.repo_id, githubNewObject.github_name]
				}
				const checkUniqueGithubQueryResult = await postgres.query(checkUniqueGithubQuery)

				if (checkUniqueGithubQueryResult.rows.length) {
					if (githubNewObject.updated_at !== checkUniqueGithubQueryResult.rows[0].updated_at) {
						const updateGithubQuery = createUpdateQuery(githubNewObject, 'repo_id', 'hired.github_items', githubNewObject.repo_id)
						await postgres.query(updateGithubQuery)
					}
				} else {
					const createInsertGithubQuery = createInsertQuery(githubNewObject, 'hired.github_items')
					await postgres.query(createInsertGithubQuery)
				}


			} catch(err){
				throw err
			}


		})
}

module.exports = {

	async fetchingDribbbleData () {
		try {
			
			const dribbblePsql = {
				text: 'SELECT id FROM hired.users WHERE dribbble_access_token IS NOT NULL',
			}
			const dribbbleQuery = await postgres.query(dribbblePsql)			
			let userArray = await dribbbleQuery.rows.map(i => i.id)
			let userDribbbleArrays = userArray.map(async user_id => {
				try {
					let psql = {
						text: 'SELECT dribbble_access_token FROM hired.users where id = $1;',
						values: [user_id],
					}
					let query = await postgres.query(psql)
					let myAccessToken = query.rows[0].dribbble_access_token
					let dribbbleJson = await axios.get('https://api.dribbble.com/v2/user/shots?access_token=' + myAccessToken)
					return dribbbleJson.data
				} catch (e) {
					throw e.message
				}
			})
			
			let resolvedPromise = await Promise.all(userDribbbleArrays)
			let masterarray = [];
			await resolvedPromise.forEach((dribbblearray, index) => {
				dribbblearray.map((dribbble) => {
					dribbble.user_id = userArray[index]
					masterarray.push(dribbble);					
				})
			})			
			saveDribbbleFetch(masterarray)
			return masterarray
	
		} catch (e) {
			throw e.message
		}
	},

	async fetchingGithubData () {
		try {
			const githubPsql = {
				text: 'SELECT id FROM hired.users WHERE github_access_token IS NOT NULL',
			}
			const githubQuery = await postgres.query(githubPsql)
			let userArray = await githubQuery.rows.map(i => i.id)
			let userGithubArrays = userArray.map(async user_id => {
				try {
					let psql = {
						text: 'SELECT github_access_token FROM hired.users where id = $1;',
						values: [user_id],
					}
					let query = await postgres.query(psql)
					let myAccessToken = query.rows[0].github_access_token
	
					const githubJson = await axios({
						url: 'https://api.github.com/graphql',
						method: 'post',
						data: {
							query: `
								query {
									viewer{
										name
										repositories(last: 2){
											nodes {
												name
												createdAt
												description
												forkCount
												id
												isLocked
												isPrivate
												owner{
													login
												}
												pushedAt
												resourcePath
												stargazers{
													totalCount
												}
												sshUrl
												updatedAt
												url
											}
										}
									}
								}
							  `,
						},
						headers: { Authorization: `token ${myAccessToken}` },
					}) 
	
					return {
						name: githubJson.data.data.viewer.name,
						repo: githubJson.data.data.viewer.repositories.nodes
					}
				} catch (e) {
					throw e.message
				}
			})
			
			let resolvedPromise = await Promise.all(userGithubArrays)
			let masterarray = [];
			await resolvedPromise.forEach((githubUserArray, index) => {
				githubUserArray.repo.map(githubRepo => {
					githubRepo.user_id = userArray[index]
					githubRepo.repo_name = githubRepo.name
					githubRepo.repo_id = githubRepo.id
					delete githubRepo.name
					delete githubRepo.id
					githubRepo.github_name = githubUserArray.name
					masterarray.push(githubRepo)
				})
			})

			saveGithubFetch(masterarray)
			return masterarray
		} catch (e) {
			throw e.message
		}
	},
}
