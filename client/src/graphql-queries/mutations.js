import gql from 'graphql-tag'

export const signupMutation = gql`
  mutation signupVars($input: SignupObject!){
    signup(input: $input) {
      message
    }
  }
`

export const loginMutation = gql`
  mutation loginVars($input: LoginObject!){
    login(input: $input) {
      message
    }
  }
`