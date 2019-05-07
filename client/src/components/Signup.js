import React from 'react'

import { Formik } from 'formik'
import { signupValidation } from '../validationSchemas'

import { TextField, Button, FormHelperText, MenuItem } from '@material-ui/core'

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

const programs = [
  {
    value: 'APP',
    label: 'App Dev',
  },
  {
    value: 'DM',
    label: 'Digital Marketing',
  },
  {
    value: 'UX',
    label: 'UX Designer',
  },
  {
    value: 'UI',
    label: 'UI Designer',
  },
  {
    value: 'WEB',
    label: 'Web Dev',
  },
]

const campus = [
  {
    value: 'LON',
    label: 'London',
  },
  {
    value: 'TOR',
    label: 'Toronto',
  },
  {
    value: 'VAN',
    label: 'Vancouver',
  },
]

const studyCohort = [
  {
    value: 'Q1',
    label: 'Q1',
  },
  {
    value: 'Q2',
    label: 'Q2',
  },
  {
    value: 'Q3',
    label: 'Q3',
  },
  {
    value: 'Q4',
    label: 'Q4',
  },
]

const studyYear = [
  {
    value: '2012',
    label: '2012',
  },
  {
    value: '2013',
    label: '2013',
  },
  {
    value: '2014',
    label: '2014',
  },
  {
    value: '2015',
    label: '2015',
  },
  {
    value: '2016',
    label: '2016',
  },
  {
    value: '2017',
    label: '2017',
  },
  {
    value: '2018',
    label: '2018',
  },
  {
    value: '2019',
    label: '2019',
  },
]

const Signup = () => {
  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
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
                <FormHelperText className='form-helper'>
                </FormHelperText>
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
                <FormHelperText className='form-helper'>
                </FormHelperText>
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
                <FormHelperText className='form-helper'>
                </FormHelperText>
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
                <FormHelperText className='form-helper'>
                </FormHelperText>
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
  )
}

export default Signup