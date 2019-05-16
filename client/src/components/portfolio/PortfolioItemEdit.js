import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { portfolioValidation } from '../../validationSchemas';

const UPDATE_USER_PORTFOLIO = gql`
  mutation updateUserPortfolio($input: UpdateUserPortfolioInput!){
    updateUserPortfolio(input: $input) {
      id
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

const styles = theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing.unit * 2,
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing.unit,
  },
});

class MaxWidthDialog extends React.Component {
  state = {
    open: false,
    fullWidth: true,
    maxWidth: 'md',
  };

  render() {
    const { classes } = this.props;
    const { id, user_id, title, description, type, custom_link, api_link, thumbnail } = this.props.portfolioData;
    return (
      <Mutation 
        mutation={UPDATE_USER_PORTFOLIO}
        onError={(error) => {
          console.log("Mutation error in UPDATE_USER_PORTFOLIO: ", error);
        }}
        >
        {(updateUserPortfolio, {data}) => (
      <React.Fragment>
       
        <Dialog
          fullWidth={this.state.fullWidth}
          maxWidth={this.state.maxWidth}
          open={this.props.editFlag}
          onClose={null}
          aria-labelledby="max-width-dialog-title"
        >
        <DialogActions>
        <Button onClick={this.props.closeModal} color="primary">
          Cancel
        </Button>
        </DialogActions>
          {/* <DialogTitle id="max-width-dialog-title">Edit Portfolio</DialogTitle> */}
          <DialogContent>
            {/* <DialogContentText>
              You can set my maximum width and whether to adapt or not.
            </DialogContentText> */}
            <form className={classes.form} noValidate>
            </form>
            <Formik
          initialValues={{
            title: title,
            description: description,
            type: type,
            custom_link: custom_link,
            api_link: api_link,
            thumbnail: thumbnail
          }}
          onSubmit={(values, { setSubmitting }) => {
            updateUserPortfolio({ variables: {input: { id: id, user_id: user_id, title: values.title, description: values.description, type: values.type, custom_link: values.custom_link, api_link: values.api_link, thumbnail: values.thumbnail }}})
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
                  Edit Portfolio Item
                </label>
                <TextField
                  id="title"
                  placeholder=""
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

                <p></p>

                <TextField
                  id="description"
                  placeholder=""
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
                  placeholder=""
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
                  placeholder=""
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

                <p></p>

                <TextField
                  id="api_link"
                  placeholder=""
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
                  placeholder=""
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

                <Button 
                  type="submit" disabled={isSubmitting} variant="contained"
                  onClick={this.props.refreshPortfolioItem}
                  size="medium" color="primary">
                    Save
                </Button>
              </form>
            );
          }}
        </Formik>
          </DialogContent>
        </Dialog>
      </React.Fragment>
      )}
      </Mutation>
    );
  }
}

MaxWidthDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaxWidthDialog);