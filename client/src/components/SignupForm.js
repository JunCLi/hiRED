import React, { useState } from 'react'

import { Formik } from 'formik'
import { signupValidation } from '../validationSchemas'
import { Redirect } from 'react-router-dom'

import { Mutation } from 'react-apollo'
import { signupMutation, signupPage2Mutation } from '../graphql-queries/mutations'

import { TextField, Button, FormHelperText, MenuItem } from '@material-ui/core'

import { programs, campus, studyCohort, studyYear } from '../form-dropdown-values'


const initialFormValues = {
	userEmail: '',
	userFullname: '',
	password: '',
	confirmPassword: '',
	inviteCode: '',
	whichCampus: '',
	whichProgram: '',
	whichStudyYear: '',
	whichStudyCohort: '',
}

const SignupForm = () => {
	const [redirecting, setRedirecting] = useState(false)
	const [page2, setPage2] = useState(false)

	if (redirecting) return <Redirect to='/' />

	if (page2) return (
		<Mutation 
			mutation={signupPage2Mutation}
			onError={error => {
				console.log('signup additional information error:', error)
			}}
			onCompleted={response => {
				console.log('Additional information signup:', response)
				if (response.signupPage2.message === 'success') {
					setRedirecting(true)
				}
			}}
		>
			{signupPage2 => (
				<Formik >

				</Formik>
			)}
		</Mutation>
	)

	return (
		<Mutation
			mutation={signupMutation}
			onError={error => {
				console.log('regular signup error: ', error)
			}}
			onCompleted={response => {
				console.log('Signup response:', response)
				if (response.signup.message === 'success') {
					setPage2(true)
				}
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

								<div className='form-field'>
									<TextField
										id='whichCampus'
										select
										name='whichCampus'
										label='Campus?'
										value={values.whichCampus}
										onChange={handleChange}
										onBlur={handleBlur}
										helperText='Which campus did you study at?'
										margin='normal'
									>
										{campus.map(option => (
											<MenuItem key={option.value} value={option.value}>
												{option.label}
											</MenuItem>
										))}
									</TextField>
								</div>

								<div className='form-field'>
									<TextField
										id='whichProgram'
										select
										name='whichProgram'
										label='Program?'
										value={values.whichProgram}
										onChange={handleChange}
										onBlur={handleBlur}
										helperText='Which program did you study at RED?'
										margin='normal'
									>
										{programs.map(option => (
											<MenuItem key={option.value} value={option.value}>
												{option.label}
											</MenuItem>
										))}
									</TextField>
								</div>

								<div className='form-field'>
									<TextField
										id='whichStudyYear'
										select
										name='whichStudyYear'
										label='Study Year?'
										value={values.whichStudyYear}
										onChange={handleChange}
										onBlur={handleBlur}
										helperText='What year did you study at RED?'
										margin='normal'
									>
										{studyYear.map(option => (
											<MenuItem key={option.value} value={option.value}>
												{option.label}
											</MenuItem>
										))}
									</TextField>
								</div>

								<div className='form-field'>
									<TextField
										id='whichStudyCohort'
										select
										name='whichStudyCohort'
										label='Cohort ?'
										value={values.whichStudyCohort}
										onChange={handleChange}
										onBlur={handleBlur}
										helperText='Which cohort did you study in?'
										margin='normal'
									>
										{studyCohort.map(option => (
											<MenuItem key={option.value} value={option.value}>
												{option.label}
											</MenuItem>
										))}
									</TextField>
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
