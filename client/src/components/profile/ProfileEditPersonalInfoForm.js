import React from 'react'

import { Formik } from 'formik'
import { updateProfileValidation } from '../../validationSchemas'
import { programs, campus, studyCohort, studyYear, roles } from '../../form-dropdown-values'

import { Mutation } from 'react-apollo'
import { updateProfileMutation } from '../../graphql-queries/mutations'

import { TextField, Button, FormHelperText, FormLabel, FormControlLabel, MenuItem, Switch } from '@material-ui/core'

const initialFormValues = {
  editEmail: '',
  editFullname: '',
  editCampus: '',
  editCareer: '',
  editLocation: '',
  editRole: '',
  editProgram: '',
  editStudyYear: '',
  editStudyCohort: '',
  editMentor: '',
}

const ProfileEditPersonalInfoForm = () => {
  return (
    <Mutation
      mutation={updateProfileMutation}
      onError={error => {
        console.log('update profile error: ', error)
      }}
      onCompleted={response => {
        console.log('update profile response: ', response)
      }}
    >
      {updateProfile => (
        <Formik
          initialValues={initialFormValues}
          onSubmit={(values, { setSubmitting }) => {
            console.log('mutation values: ', values)
            updateProfile({ variables: {input: {
              email: values.editEmail,
              fullname: values.editFullname,
              campus: values.editCampus,
              current_job: values.editCareer,
              location: values.editLocation,
              role: values.editRole,
              program_name: values.editProgram,
              study_year: values.editStudyYear,
              study_cohort: values.editStudyCohort,
              mentor: values.editMentor,
            }}})

            setSubmitting(false)
          }}
          validationSchema={updateProfileValidation}
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
                    {campus.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>

                <div className='form-field'>
                  <TextField
                    id='editCareer'
                    name='editCareer'
                    label='Career?'
                    value={values.editCareer}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin='normal'
                  />
                  {errors.editCareer ? (
                    <FormHelperText className='form-helper form-error'>
                      {errors.editCareer}
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

                <div className='form-field'>
                  <TextField
                    id='editRole'
                    select
                    name='editRole'
                    label='Role?'
                    value={values.editRole}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText='Are you an alumni, student or staff?'
                    margin='normal'
                  >
                    {roles.map(option => (
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
                    {programs.map(option => (
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
                    {studyYear.map(option => (
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
                    {studyCohort.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>

                <div className = "toggle-wrapper">
                  <FormLabel required component="legend"> Register as a mentor </FormLabel>
                  <FormControlLabel
                      className = "status toggle"
                      control={
                        <Switch
                          id = "status"
                          checked={
                            values.editMentor ? values.editMentor = true : values.editMentor = false
                          }
                          onChange={handleChange}
                          value={values.editMentor}
                          onBlur = {handleBlur}
                          margin = "normal"
                        />
                      }
                      label={ values.status ? "Yes" : "Not yet"}
                    />
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
      )}
    </Mutation>
  )
}

export default ProfileEditPersonalInfoForm