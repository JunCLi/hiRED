import gql from 'graphql-tag'

export const signupMutation = gql`
  mutation signupVars($input: SignupObject!) {
    signup(input: $input) {
      message
    }
  }
`

export const signupForm2Mutation = gql`
  mutation signupForm2Vars($input: SignupForm2Object!) {
    signupForm2(input: $input) {
      message
    }
  }
`

export const loginMutation = gql`
  mutation loginVars($input: LoginObject!) {
    login(input: $input) {
      message
    }
  }
`

export const updateProfileMutation = gql`
  mutation updateVars($input: UpdateProfileObject!) {
    updateProfile(input: $input) {
      message
    }
  }
`