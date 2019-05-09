import React from "react"
import { Query } from "react-apollo"
import TextField from '@material-ui/core/TextField'
import gql from "graphql-tag"
import '../css/mentor.css'



function Mentors(){
  return (
    <div className = "mentors-page">
    <h1> Mentors </h1>
    <Query query={gql`
        query {
          getMentors {
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
    }>
    {
      ({loading, errors, data}) => {
        if(loading) return <div> Loading</div>
        if(errors) return <div> Errors {JSON.stringify(errors)} </div>
          console.log(data.getMentors)
        return(
          data.getMentors.map((d,i) =>
            <div key = {i} className = "mentor">
              <p> {d.user.fullname} </p>
              <p> {d.status ? "active" : "inactive"} </p>
            </div>
            )
          )
      }
    }
    </Query>
    </div>
    )
}

export default Mentors