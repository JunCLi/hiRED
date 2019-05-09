import React from "react"
import { Formik, Form } from 'formik'
import { programs, campus, studyCohort, studyYear, roles } from '../../form-dropdown-values'
import { TextField, Button, MenuItem, FormControlLabel, FormLabel, Switch, FormHelperText } from '@material-ui/core'
import { signup2Validation } from '../../validationSchemas'
import { signupForm2Mutation } from '../../graphql-queries/mutations'
import { Mutation } from 'react-apollo'




const initialFormValues = {
  whichCampus: '',
  whichRole: '',
  whichCareer: '',
  whichLocation: '',
  whichProgram: '',
  whichStudyYear: '',
  whichStudyCohort: '',
  status: false,
}

function SignupForm2(props) {
  return (
    <Mutation
    mutation={signupForm2Mutation}
    onError={error => {
      console.log('regular signup error: ', error)
    }}
    onCompleted={response => {
      props.history.push("/signup3")


      console.log('Signup response:', response)
    }}
    >
    { signup2 => (
        <Formik
              initialValues={initialFormValues}
              onSubmit={(values, { setSubmitting }) => {
                signup2({ variables: {input: {
                  campus: values.whichCampus,
                  program_name: values.whichProgram,
                  study_year: values.whichStudyYear,
                  study_cohort: values.whichStudyCohort,
                  role: values.whichRole,
                  current_job: values.whichCareer,
                  location: values.whichLocation,
                  mentor: values.status,
                }}})
                console.log(values)
                alert(values)
                setSubmitting(false)
              }}
              validationSchema={signup2Validation}
              >
              {formikProps => {
                const {
                  values,
                  errors,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
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
                      id='whichCareer'
                      name='whichCareer'
                      label='Career?'
                      value={values.whichCareer}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText='What is your current job?'
                      margin='normal'
                    />
                    {errors.whichCareer ? (
                      <FormHelperText className='form-helper form-error'>
                        {errors.whichCareer}
                      </FormHelperText>
                    ) : (
                      <FormHelperText className='form-helper' />
                    )}
                  </div>

                  <div className='form-field'>
                    <TextField
                      id='whichLocation'
                      name='whichLocation'
                      label='Address?'
                      value={values.whichLocation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText='What is your Address?'
                      margin='normal'
                    />

                    {errors.whichLocation ? (
                      <FormHelperText className='form-helper form-error'>
                        {errors.whichLocation}
                      </FormHelperText>
                    ) : (
                      <FormHelperText className='form-helper' />
                    )}
                  </div>


                  <div className='form-field'>
                    <TextField
                      id='whichRole'
                      select
                      name='whichRole'
                      label='Role?'
                      value={values.whichRole}
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

                  <div className = "toggle-wrapper">
                    <FormLabel required component="legend"> Register as a mentor </FormLabel>
                    <FormControlLabel
                       className = "status toggle"
                       control={
                          <Switch
                            id = "status"
                            checked={
                              values.status ? values.status = true : values.status = false
                            }
                            onChange={handleChange}
                            value={values.status}
                            onBlur = {handleBlur}
                            margin = "normal"
                          />
                        }
                        label={ values.status ? "Yes" : "Not yet"}
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
              }
            }
              </Formik>
              )
      }
    </Mutation>
  )
}

export default SignupForm2