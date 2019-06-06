import React, { useState } from 'react'

import { Formik } from 'formik'

import { useMutation } from 'react-apollo-hooks'
import { updateProfileMutation } from '../../graphql-queries/mutations'

import { Button, Card, FormHelperText, TextField, Modal} from '@material-ui/core'

const ProfileBasicInfoModal = props => {
	const { modalState, closeModal } = props
	const { email, currentJob, location } = props
	const [ completed, setCompleted ] = useState(false)

	const updateProfile = useMutation(updateProfileMutation)

	const initialFormValues = {
		editEmail: email,
    editCurrentJob: currentJob,
    editLocation: location,
	}

	return (
		<Modal className='edit-profile-modal' open={modalState} onClose={closeModal}>
			<Card className='modal-card'>
				<Formik
					initialValues={initialFormValues}
					onSubmit={async (values, { setSubmitting }) => {
						try {
							const result = await updateProfile({
								variables: {input: {
									email: values.editEmail,
									current_job: values.editCurrentJob,
									location: values.editLocation,
								}}
							})
							if (result) setCompleted(true)
						} catch(err) {
							throw err
						}
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
							<form onSubmit={handleSubmit}>
								<div>
									<TextField 
										type='text'
										id='editEmail'
										name='editEmail'
										label='Email'
										value={values.editEmail}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									/>
									{errors.editEmail && touched.editEmail ? (
										<FormHelperText className='form-helper form-error'>
											{errors.editEmail}
										</FormHelperText>
									) : (
										<FormHelperText className='form-helper'>
											Your email
										</FormHelperText>
									)}
								</div>

								<div className='form-field'>
									<TextField
										id='editCurrentJob'
										name='editCurrentJob'
										label='Current Job?'
										value={values.editCurrentJob}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									/>
									{errors.editCurrentJob ? (
										<FormHelperText className='form-helper form-error'>
											{errors.editCurrentJob}
										</FormHelperText>
									) : (
										<FormHelperText className='form-helper'>
											What is your current job?
										</FormHelperText>
									)}                
								</div>

								<div className='form-field'>
									<TextField
										id='editLocation'
										name='editLocation'
										label='Address?'
										value={values.editLocation}
										onChange={handleChange}
										onBlur={handleBlur}
										margin='normal'
									/>

									{errors.editLocation ? (
										<FormHelperText className='form-helper form-error'>
											{errors.editLocation}
										</FormHelperText>
									) : (
										<FormHelperText className='form-helper'>
											What is your Address?
										</FormHelperText>
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
										Save Changes
									</Button>
									<Button
										className='btn-reset'
										type='button'
										disabled={!dirty || isSubmitting}
										onClick={handleReset}
									>
										Discard changes
									</Button>
								</section>

							</form>
						)
					}}
				</Formik>
				{ completed ? <p>Update Submitted!</p> : ''}
				<Button onClick={closeModal}>close</Button>
			</Card>
		</Modal>
	)
}

export default ProfileBasicInfoModal