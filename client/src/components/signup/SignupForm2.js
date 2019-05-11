import React from 'react'
import { Formik, Form } from 'formik'
import { programs, campus, studyCohort, studyYear } from '../../form-dropdown-values'
import { TextField, Button, MenuItem, FormControlLabel, FormLabel, Switch } from '@material-ui/core'

const initialFormValues = {
	whichCampus: '',
	whichProgram: '',
	whichStudyYear: '',
	whichStudyCohort: '',
	status: false,
}

function SignupForm2(props) {
	return (
		<Formik
			initialValues={initialFormValues}
			onSubmit={(values, { setSubmitting }) => {
				console.log(values)
				alert(values)
				setSubmitting(false)
			}}
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
					<Form className='material-form' onSubmit={handleSubmit}>
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

						<div className='toggle-wrapper'>
							<FormLabel required component='legend'>
								{' '}
								Register as a mentor{' '}
							</FormLabel>
							<FormControlLabel
								className='status toggle'
								control={
									<Switch
										id='status'
										checked={values.status ? (values.status = true) : (values.status = false)}
										onChange={handleChange}
										value={values.status}
										onBlur={handleBlur}
										margin='normal'
									/>
								}
								label={values.status ? 'Yes' : 'Not yet'}
							/>
						</div>
						<div>
							<Button
								className='btn-submit'
								type='submit'
								variant='contained'
								color='primary'
								disabled={isSubmitting}
							>
								Submit
							</Button>
						</div>
					</Form>
				)
			}}
		</Formik>
	)
}

export default SignupForm2
