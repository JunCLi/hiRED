import React, { useState } from 'react'

import { Formik } from 'formik'

import { useMutation } from 'react-apollo-hooks'
import { updateProfileMutation } from '../../graphql-queries/mutations'

import { Button, Card, FormHelperText, MenuItem, Modal, TextField } from '@material-ui/core'

import { programs as programsOptions } from '../../form-dropdown-values'

const ProfileInfoHeaderModal = props => {
	const { modalState, closeModal } = props
	const { fullname, programName, description } = props
	const [completed, setCompleted] = useState(false)

	const updateProfile = useMutation(updateProfileMutation)

	const initialFormValues = {
		editFullname: fullname,
		editProgram: programName,
		editDescription: description
	}

	return (
		<Modal
			className='edit-profile-modal'
			open={modalState}
			onClose={closeModal}
		>
			<Card className='modal-card'>
				<Formik
					initialValues={initialFormValues}
					onSubmit={async (values, { setSubmitting }) => {
						try {
							console.log('values', values)
							const result = await updateProfile({
								variables: {input: {
									fullname: values.editFullname,
									program_name: values.editProgram,
									description: values.editDescription,
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
                    id='editFullname'
                    name='editFullname'
                    label='Fullname'
                    value={values.editFullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin='normal'
                  />
                  {errors.editFullname && touched.editFullname ? (
                    <FormHelperText className='form-helper form-error'>
                      {errors.editFullname}
                    </FormHelperText>
                  ) : (
                    <FormHelperText className='form-helper'>
                      Your first and last name
                    </FormHelperText>
                  )}
                </div>

								<div className='form-field'>
                  <TextField
                    id='editProgram'
                    select
                    name='editProgram'
                    label='Program?'
                    value={values.editProgram}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText='Which program did you study at RED?'
                    margin='normal'
                  >
                    {programsOptions.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>

								<div>
                  <TextField
                    type='text'
                    id='editDescription'
                    name='editDescription'
                    label='Description'
                    value={values.editDescription}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin='normal'
                  />
                  {errors.editDescription && touched.editDescription ? (
                    <FormHelperText className='form-helper form-error'>
                      {errors.editDescriptions}
                    </FormHelperText>
                  ) : (
                    <FormHelperText className='form-helper'>
                      A short decription of yourself
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

export default ProfileInfoHeaderModal