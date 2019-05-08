import gql from 'graphql-tag'

export const signupMutation = gql`
  mutation signupVars($input: SignupObject!){
    signup(input: $input) {
      message
    }
  }
`

export const signupPage2Mutation = gql`
  mutation loginVars($input: Signup2Object!){
    signupPage2(input: $input) {
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