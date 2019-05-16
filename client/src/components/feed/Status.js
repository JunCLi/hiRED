import React, { useState} from 'react'
import { Formik } from 'formik'
import {Button} from '@material-ui/core'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const styles = theme => ({
  container:{
    justifyContent: "center",
    border: "1px solid #9E9E9E",
    borderRadius: "10px"
  },
  greeting:{
    backgroundColor: "#E0E0E0",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#757575",
    padding: "10px 15px",
    borderBottom: "1px solid #9E9E9E",
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: "10px 15px",
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});
const STATUS_MUTATION = gql`
  mutation statusMutation($input: StatusInput){
    addStatus(input: $input){
      message
    }
  }
  `
const Status = props => {
  // The hooks
  let [myRole, setMyRole] = useState('')
  let [lookingFor, setLookingFor] = useState('')
  let [myLocation, setMyLocation] = useState('')

  const { classes } = props;
  return (
    <Mutation
      mutation = {STATUS_MUTATION}
      variables={{ 
        input: {        
        role: myRole,
        looking_for: lookingFor,
        location: myLocation
      }}}
      onError = {(error) =>{
        console.log(error)
      }}
      onCompleted = {data => {
        // console.log("Data is: ", data)
        // props.history.push("/Signup")
        alert("The status update is inserted into database!")
      }}
    >
      {(addStatus, {data}) =>(
        <Formik>
          {props => {
            const{
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleblur,
              handleSubmit
            } = props;
        return(
          <div className={classes.container}>
            <div className={classes.greeting}> 
              <p> Hey, Bob! What are you looking for today? </p>
            </div>
            <div className={classes.root}>
              <FormControl className={classes.formControl}>
                <InputLabel>I am </InputLabel>
                <Select
                  native
                  value={myRole}
                  onChange={(e) => {
                    setMyRole(e.target.value)}
                  }
                  inputProps={{
                    name: 'i_am',
                    id: 'i_am-native-simple',
                  }}
                >
                  <option value="" />
                  <option value={'student'}>a student</option>
                  <option value={'alumnai'}>an alumnai</option>
                  <option value={'instructor'}>an instructor</option>
                  <option value={'mentor'}>a mentor</option>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel>Looking for</InputLabel>
                <Select
                  native
                  value={lookingFor}
                  onChange={(e) => {
                    setLookingFor(e.target.value)}
                  }
                  inputProps={{
                    name: 'looking_for',
                    id: 'looking_for-native-simple',
                  }}
                >
                  <option value="" />
                  <option value={'Job in AppDev'}>Job in AppDev</option>
                  <option value={'Mentor in UX'}>Mentor in UX</option>
                  <option value={'Assistance in my project'}>Assistance in my project</option>
                  <option value={'Room for three months'}>Room for three months</option>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel>Location</InputLabel>
                <Select
                  native
                  value= {myLocation}
                  onChange={(e) => {
                    setMyLocation(e.target.value)}
                  }
                  inputProps={{
                    name: 'location',
                    id: 'location-native-simple',
                  }}
                >
                  <option value="" />
                  <option value={'Toronto'}>in Toronto</option>
                  <option value={'Vancouver'}>in Vancouver</option>
                  <option value={'London'}>in London</option>
                  <option value={'Ottawa'}>in Ottawa</option>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  type="submit"
                  name="share" 
                  onClick = {() => addStatus()}
                  className={classes.button}>
                Share
              </Button>
              </FormControl>
            </div>
          </div>
          )
        }}
      </Formik>
      )}
    </Mutation>
  );
}

Status.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Status);