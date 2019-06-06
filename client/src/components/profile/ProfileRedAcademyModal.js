import React, { useState } from 'react'

import { Formik } from 'formik'

import { useMutation } from 'react-apollo-hooks'
import { updateProfileMutation } from '../../graphql-queries/mutations'

import { Button, Card,  MenuItem, Modal, TextField } from '@material-ui/core'

import { programs as programsOptions, campus as campusOptions, studyCohort as studyCohortOptions, studyYear as studyYearOptions } from '../../form-dropdown-values'


const ProfileRedAcademyModal = props => {
	const { modalState, closeModal } = props
	const { campus, programName, studyYear, studyCohort } = props
	const [completed, setCompleted] = useState(false)

	const updateProfile = useMutation(updateProfileMutation) 

	const initialFormValues = {
		editCampus: campus,
		editProgramName: programName,
		editStudyYear: studyYear,
		editStudyCohort: studyCohort,
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
							const result = await updateProfile({
								variables: {input: {
									campus: values.editCampus,
									program_name: values.editProgramName,
									study_year: values.editStudyYear,
									study_cohort: values.editStudyCohort,
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
								<div className='form-field'>
                  <TextField
                    id='editCampus'
                    select
                    name='editCampus'
                    label='Campus?'
                    value={values.editCampus}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText='Which campus did you study at?'
                    margin='normal'
                  >
                    {campusOptions.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
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

								<div className='form-field'>
                  <TextField
                    id='editStudyYear'
                    select
                    name='editStudyYear'
                    label='Study Year?'
                    value={values.editStudyYear}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText='What year did you study at RED?'
                    margin='normal'
                  >
                    {studyYearOptions.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>

								<div className='form-field'>
                  <TextField
                    id='editStudyCohort'
                    select
                    name='editStudyCohort'
                    label='Cohort ?'
                    value={values.editStudyCohort}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText='Which cohort did you study in?'
                    margin='normal'
                  >
                    {studyCohortOptions.map(option => (
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

export default ProfileRedAcademyModal