import * as Yup from 'yup'

export const signupValidation = Yup.object().shape({
  userEmail: Yup.string()
    .email()
    .required('Missing email.'),
  password: Yup.string()
    .min(
      8,
      'Password is too short. It needs to be 8 or more characters.'
    )
    .matches(
      /[a-zA-Z0-9]/,
      'Invalid password. Your password can only contain alphanumeric characters.'
    )
    .required('Missing password.'),
  confirmPassword: Yup.string()
    .test('passwords-match', "The passwords don't match", function(
      value
    ) {
      return this.parent.password === value
    })
    .required('Missing password confirmation.'),
})

export const loginValidation = Yup.object().shape({
  userEmail: Yup.string()
    .email()
    .required('Missing email.'),
  password: Yup.string()
    .min(
      8,
      'Password is too short. It needs to be 8 or more characters.'
    )
    .matches(
      /[a-zA-Z0-9]/,
      'Invalid password. Your password can only contain alphanumeric characters.'
    )
    .required('Missing password.')
})