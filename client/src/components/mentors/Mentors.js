import React, { useState} from "react"
import { Query } from "react-apollo"
import { TextField, Button, MenuItem} from '@material-ui/core'
import gql from "graphql-tag"
import '../../css/mentor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { programs } from '../../form-dropdown-values'


function Mentors(){
  const [value, setValue] = useState("")
  const [submit, setSubmit] = useState("")
  const [dropdown, setDropdown] = useState("")

  function handleChange(e) {
    setValue(e.target.value)
  }

  function handleDropDownChange(e){
    setDropdown(e.target.value)
  }

 function handleSubmit(event) {
  setSubmit(value)
      event.preventDefault()
    }

  return (
    <div className = "mentors-page">
    <h1> Mentors </h1>
    <Query
    query={gql`
        query($fullnameSearch: String, $getPrograms: String) {
          getMentors(fullnameSearch: $fullnameSearch, getPrograms: $getPrograms) {
            status
            user {
              id
              email
              password
              fullname
              campus
              mentor
              location
              role
              programs
              current_job
              avatar
            }
          }
        }
      `
    }
    variables ={{fullnameSearch: submit, getPrograms: dropdown}}
    >
    {
      ({loading, errors, data}) => {
        if(loading) return <div> Loading</div>
        if(errors) return <div> Errors {JSON.stringify(errors)} </div>
        return(
          <div className='mentor-content-container'>
          <div className = "form-search">
          <form onSubmit={handleSubmit}>
          <div className = "search-filter">
            <TextField
              id='Search'
              name='Search'
              label = {"Search"}
              value={value}
              onChange={(e) => handleChange(e)}
              margin='normal'
            />
            <TextField
              id='whichProgram'
              select
              name='whichProgram'
              label='Filter by program'
              value={dropdown}
              onChange={(e) => handleDropDownChange(e)}
              margin='normal'
            >
              {programs.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <br />
          <Button className='btn-search-submit'
                    variant='contained'
                    color='primary'
                    type="submit"> Search </Button>
          </form>
          </div>
          {data.getMentors.map((d,i) =>
            d.user ? <div key = {i} className = "mentor">
               <div className = "mentor_wrapper">
                 <p className = "mentor_fullname"> {d.user.fullname} </p>
                 <svg width = "30" height = "30"> <circle r={6} cx = {15} cy={15} style={{fill: d.status ? "#26a69a" : "grey"}}> </circle> </svg>
               </div>
               <div className = "mentor_wrapper">
                 <FontAwesomeIcon className = "work-icon" icon={faBriefcase} />
                 <p className = "mentor_job"> {d.user.current_job} </p>
               </div>
               <div className = "mentor_wrapper">
                 <FontAwesomeIcon className = "location-icon" icon ={faMapMarkerAlt} />
                 <p className = "mentor_location"> {d.user.location} </p>
               </div>
             </div> : null
             )
            }
            </div>
          )
      }
    }
    </Query>
    </div>
    )
}

export default Mentors