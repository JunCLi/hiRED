import React, { useState } from "react";

import { Formik } from "formik";
import { loginValidation } from "../../validationSchemas";
import { Redirect } from "react-router-dom";

import { Mutation } from "react-apollo";
import { loginMutation } from "../../graphql-queries/mutations";

import { TextField, Button, FormHelperText } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const initialFormValues = {
  userEmail: "",
  password: ""
};

const useStyles = makeStyles({
  loginFormContainer: {
		// backgroundColor: "white",
		width: "650px",
		height: "50px",
    display: "flex",
		flexDirection: "row",
    margin: 10,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 20,
	},
	formField: {
    backgroundColor: 'white',
    margin: 10,
  },
  loginButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 10,
    width: 100,
    height: 40,
  }
});

const LoginForm = () => {
  const [redirecting, setRedirecting] = useState(false);

  const classes = useStyles();

  if (redirecting) return <Redirect to="/profile/" />;

  return (
    <Mutation
      mutation={loginMutation}
      onError={error => {
        console.log(error);
      }}
      onCompleted={response => {
        console.log("Response: ", response);
        console.log('redirecting!!!!!!!')
        if (response.login.message === "Login Successful!") {
          setRedirecting(true);
        }
      }}
    >
      {login => (
        <Formik
          initialValues={initialFormValues}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            login({
              variables: {
                input: {
                  email: values.userEmail,
                  password: values.password
                }
              }
            });
            setSubmitting(false);
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
              handleReset
            } = formikProps;

            return (
              <form
                onSubmit={handleSubmit}
              >
                <div className={classes.loginFormContainer}>
                  <div className={classes.formField}>
                    <TextField
                      type="text"
                      id="userEmail"
                      name="userEmail"
                      label="Email"
                      value={values.userEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      margin="normal"
                    />
                    {/* {errors.userEmail && touched.userEmail ? (
                      <FormHelperText className="form-helper form-error">
                        {errors.userEmail}
                      </FormHelperText>
                    ) : (
                      <FormHelperText className="form-helper" />
                    )} */}
                  </div>

                  <div className={classes.formField}>
                    <TextField
                      type="password"
                      id="password"
                      name="password"
                      label="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      margin="normal"
                    />
                    {/* {errors.password && touched.password ? (
                      <FormHelperText className="form-helper form-error">
                        {errors.password}
                      </FormHelperText>
                    ) : (
                      <FormHelperText className="form-helper" />
                    )} */}
                  </div>

                  
                    <Button
                      // className="btn-submit"
                      className={classes.loginButton}
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                    >
                      Log In
                    </Button>
                    {/* <Button
                      className="btn-reset"
                      type="button"
                      disabled={!dirty || isSubmitting}
                      onClick={handleReset}
                    >
                      Reset
                    </Button> */}
                 
                </div>
              </form>
            );
          }}
        </Formik>
      )}
    </Mutation>
  );
};

export default LoginForm;
