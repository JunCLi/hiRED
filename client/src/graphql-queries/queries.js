import gql from 'graphql-tag';

export const testConnection = gql`
  query {
    getUser{
      id
    }
  }
`;

export const listMyDribbbles = gql`
  query { 
		listMyDribbbles {
			id
			title
			description
			height
			width
			html_url
			published_at
			updated_at
			images {
      	hidpi
      	normal
      	one_x
      	teaser
    	}
		}
  }
`

export const getUserProfileQuery = gql`
  query {
    getUserProfile {
      id
      email
      fullname
      campus
      location
      role
      current_job
      avatar
      study_year
      study_cohort
    }
  }
`

export const getFullProfileQuery = gql`
  query {
    getUserProfile {
      id
      email
      fullname
      campus
      location
      role
      current_job
      avatar
      study_year
      study_cohort
      getPrograms {
        id
        name
      }
      getMentor {
        status
        # disabled
      }
    }
  }
`
