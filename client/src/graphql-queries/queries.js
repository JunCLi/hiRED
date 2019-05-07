import gql from 'graphql-tag'

export const testConnection = gql`
  query {
    getUser{
      id
    }
  }
`