import React, { useState} from "react"
import { Query, Mutation } from "react-apollo"
import { TextField, Button, MenuItem} from '@material-ui/core'
import gql from "graphql-tag"
import '../../css/mentor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { programs } from '../../form-dropdown-values'
import Select from 'react-select';
import { ADD_CONVERSATION_MUTATION } from '../../graphql-queries/mutations'

import LeftNav from '../navigation/LeftNav'

let options;
function Mentors(props){
  const [value, setValue] = useState("")
  const [dropdown, setDropdown] = useState("")
  const [skills, setSkills] = useState([])
  const [valueSubmit, setValueSubmit] = useState("")
  const [dropdownSubmit, setDropdownSubmit] = useState("")
  const [skillsSubmit, setSkillsSubmit] = useState([])


  function handleChange(e) {
    setValue(e.target.value)
  }

  function handleDropDownChange(e){
    setDropdown(e.target.value)
  }

  function handleSelectChange(e) {
    let skills_array = [];

    e.forEach(d => {
      skills_array.push({skills_id: d.id})
    })

    setSkills(skills_array)
  }

 function handleSubmit(event) {
  setValueSubmit(value)
  setDropdownSubmit(dropdown)
  setSkillsSubmit(skills)
      event.preventDefault()
  }



  return (
    <div className = "mentors-page">
    <h1> Mentors </h1>
		<LeftNav />
    <Mutation
    mutation = {ADD_CONVERSATION_MUTATION}
    onError = {(error) => {
      console.log(error)
    }}
    onCompleted = {(data) => {
      // redirecting to conversation based on conversation_id
      props.history.push("/messages" + data.addConversation.id)
    }}
    >
    {
      (addConversation, {dataMutation}) => (
        <div>
        <Query query = {gql`
                    query {
                      getAllSkills{
                        id
                        label
                        value
                        }
                      }
                  `}>
                  {
                    ({loading, errors, data}) => {
                      if(loading) return <div> Loading</div>
                      if(errors) return <div> Errors {JSON.stringify(errors)} </div>

                      options = data.getAllSkills

                      return (
                        null
                        )
                    }
                  }
                </Query>
              <Query
              query={gql`
                  query($fullnameSearch: String, $getPrograms: String, $getSkills: [userSkills]) {
                    getMentors(fullnameSearch: $fullnameSearch, getPrograms: $getPrograms, getSkills: $getSkills) {
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
              variables ={{fullnameSearch: valueSubmit, getPrograms: dropdownSubmit, getSkills: skillsSubmit}}
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
                      <Select
                          isMulti
                          name="colors"
                          options={options}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          onChange = {handleSelectChange}
                        />
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
                         <Button
                              className = "chat mentors button"
                              variant='contained'
                              onClick = {() => {
                                addConversation({
                                  variables: {user_id_2: (+d.user.id)}
                                })

                              }}
                              color='primary'> Chat </Button>
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
    </Mutation>
    </div>
    )
}

export default Mentors