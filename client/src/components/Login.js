import React from 'react'

import { Formik } from 'formik';
import { loginValidation } from '../validationSchemas'

import { TextField, Button, FormHelperText } from '@material-ui/core'

const initialFormValues = {
  userEmail: '',
  password: '',
}

const Login = () => {
  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        setSubmitting(false)
      }}
      validationSchema={loginValidation}
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

            <section className='signup-form-btns'>
              <Button
                className='btn-submit'
                type='submit'
                variant='contained'
                color='primary'
                disabled={isSubmitting}
              >
                Log In
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

export default Login