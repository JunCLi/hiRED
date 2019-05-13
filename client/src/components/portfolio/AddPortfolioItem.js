import React from "react";
import gql from "graphql-tag"
import * as Yup from "yup";
import { Formik } from "formik";
import { Mutation } from "react-apollo"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { portfolioValidation } from '../../validationSchemas';
/* import futurestylefile from '../../css/AddPortfolio.css' */

const ADD_USER_PORTFOLIO = gql`
  mutation addUserPortfolio($input: AddUserPortfolioInput!){
    addUserPortfolio(input: $input) {
      user_id
      title
      description
      type
      custom_link
      api_link
      thumbnail
    }
  }
`;

const AddPortfolioItem = (props) => {

  //These styles need to be moved to a styles file
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: 50,
      marginRight: 50
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  };

  return (
    <Mutation
      mutation={ADD_USER_PORTFOLIO}
      onError={(error) => {
        console.log(error)
      }}
      onCompleted={data => {
        alert("You had added a portfolio item!")
      }}
    >
      {(addUserPortfolio, {data}) => (
        <Formik
          initialValues={{
            user_id: "",
            title: "",
            description: "",
            type: "",
            custom_link: "",
            api_link: "",
            thumbnail: ""
          }}
          onSubmit={(values, { setSubmitting }) => {
            addUserPortfolio({ variables: {input: { user_id: values.user_id, title: values.title, description: values.description, type: values.type, custom_link: values.custom_link, api_link: values.api_link, thumbnail: values.thumbnail }}})
            setSubmitting(false);
          }}

          validationSchema={portfolioValidation}

        >
          {props => {
            const {
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              touched,
              values
              } = props;
            return (
              <form onSubmit={handleSubmit}>
                <label htmlFor="email" style={{ display: "block" }}>
                  Add Portfolio
                </label>

                <TextField
                  id="user_id"
                  placeholder="Enter user_id"
                  label="Enter user_id"
                  type="number"
                  margin="normal"
                  variant="outlined"
                  value={values.user_id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? `text-input error ${styles.textField}`
                      : `text-input ${styles.textField}`
                  }
                />

                  {errors.user_id && touched.user_id && (
                    <div className="input-feedback">{errors.user_id}</div>
                  )}

                <p></p>

                <TextField
                  id="title"
                  placeholder="Enter title"
                  label="Enter title"
                  type="text"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  margin="normal"
                  variant="outlined"
                  className={
                    errors.title && touched.title
                      ? `text-input error ${styles.TextField}`
                      : `text-input ${styles.Textfield}`
                  }
                />

                {errors.title && touched.title && (
                  <div className="input-feedback">{errors.title}</div>
                )}

                <p> 
                </p>

                <TextField
                  id="description"
                  placeholder="Enter description"
                  label="Enter description"
                  type="text"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  margin="normal"
                  variant="outlined"
                  className={
                    errors.description && touched.description
                      ? `text-input error ${styles.TextField}`
                      : `text-input ${styles.Textfield}`
                  }
                />

                  {errors.description && touched.description && (
                  <div className="input-feedback">{errors.description}</div>
                  )}

                <p></p>

                <TextField
                  id="type"
                  placeholder="Enter type"
                  label="Enter type"
                  type="text"
                  value={values.type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  margin="normal"
                  variant="outlined"
                  className={
                    errors.type && touched.type
                      ? `text-input error ${styles.TextField}`
                      : `text-input ${styles.Textfield}`
                  }
                />

                  {errors.type && touched.type && (
                  <div className="input-feedback">{errors.type}</div>
                  )}

                <p> 
                </p>

                <TextField
                  id="custom_link"
                  placeholder="Custom Link"
                  label="Enter your custom link"
                  type="text"
                  value={values.custom_link}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  margin="normal"
                  variant="outlined"
                  className={
                    errors.password && touched.password
                      ? `text-input error ${styles.TextField}`
                      : `text-input ${styles.Textfield}`
                  }
                />

                <p> 
                </p>

                <TextField
                  id="api_link"
                  placeholder="api_link"
                  label="Enter api link"
                  type="text"
                  value={values.api_link}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  margin="normal"
                  variant="outlined"
                  className={
                    errors.password && touched.password
                      ? `text-input error ${styles.TextField}`
                      : `text-input ${styles.Textfield}`
                  }
                />

                <p></p>

                <TextField
                  id="thumbnail"
                  placeholder="Enter thumbnail"
                  label="Enter thumbnail"
                  type="text"
                  value={values.thumbnail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  margin="normal"
                  variant="outlined"
                  className={
                    errors.password && touched.password
                      ? `text-input error ${styles.TextField}`
                      : `text-input ${styles.Textfield}`
                  }
                />

                <p></p>
                <Button type="submit" disabled={isSubmitting} variant="contained"
                 size="medium" color="primary">
                  Submit
                </Button>
              </form>
            );
          }}
        </Formik>
        )}
      </Mutation>
  );
};

export default AddPortfolioItem;




