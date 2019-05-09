import React from 'react'

import { Formik } from 'formik'
import { signupValidation } from '../../validationSchemas'

import { Mutation } from 'react-apollo'
import { signupMutation } from '../../graphql-queries/mutations'

import { TextField, Button, FormHelperText } from '@material-ui/core'

const initialFormValues = {
	userEmail: '',
	userFullname: '',
	password: '',
	confirmPassword: '',
	inviteCode: '',
}

function SignupForm({props}) {

	return (
		<Mutation
			mutation={signupMutation}
			onError={error => {
				console.log('regular signup error: ', error)
			}}
			onCompleted={response => {
				props.history.push("/signup2")

				console.log('Signup response:', response)
			}}
		>
			{signup => (
				<Formik
					initialValues={initialFormValues}
					onSubmit={(values, { setSubmitting }) => {
            console.log(values)
            signup({ variables: {input: {
              email: values.userEmail,
              fullname: values.userFullname,
              password: values.password,
            }}})
						setSubmitting(false)
					}}
					validationSchema={signupValidation}
				>
					{formikProps => {
						const {
							values,
							touched,
							errors,
							dirty,
							isSubmitting,
							handleChange,
							handleBlur,
							handleSubmit,
							handleReset,
						} = formikProps

						return (
							<form className='material-form' onSubmit={handleSubmit}>
								<div className='form-field'>
									<TextField
										type='text'
										id='userEmail'
										name='userEmail'
										label='Email'
										value={values.userEmail}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									/>
									{errors.userEmail && touched.userEmail ? (
										<FormHelperText className='form-helper form-error'>
											{errors.userEmail}
										</FormHelperText>
									) : (
										<FormHelperText className='form-helper' />
									)}
								</div>

								<div className='form-field'>
									<TextField
										type='text'
										id='userFullname'
										name='userFullname'
										label='Full Name'
										value={values.userFullname}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									/>
									{errors.userFullname && touched.userFullname ? (
										<FormHelperText className='form-helper form-error'>
											{errors.userFullname}
										</FormHelperText>
									) : (
										<FormHelperText className='form-helper' />
									)}
								</div>

								<div className='form-field'>
									<TextField
										type='password'
										id='password'
										name='password'
										label='Password'
										value={values.password}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									/>
									{errors.password && touched.password ? (
										<FormHelperText className='form-helper form-error'>
											{errors.password}
										</FormHelperText>
									) : (
										<FormHelperText className='form-helper' />
									)}
								</div>

								<div className='form-field'>
									<TextField
										type='password'
										id='confirmPassword'
										name='confirmPassword'
										label='Confirm Password'
										value={values.confirmPassword}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									/>
									{errors.confirmPassword && touched.confirmPassword ? (
										<FormHelperText className='form-helper form-error'>
											{errors.confirmPassword}
										</FormHelperText>
									) : (
										<FormHelperText className='form-helper' />
									)}
								</div>

								<section className='signup-form-btns'>
									<Button
										className='btn-submit'
										type='submit'
										variant='contained'
										color='primary'
										disabled={isSubmitting}
									>
										Sign Up
									</Button>
									<Button
										className='btn-reset'
										type='button'
										disabled={!dirty || isSubmitting}
										onClick={handleReset}
									>
										Reset
									</Button>
								</section>
							</form>
						)
					}}
				</Formik>
			)}
		</Mutation>
	)
}

export default SignupForm