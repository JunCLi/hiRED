import React from "react"
import { Button } from '@material-ui/core'

import { Query, Mutation } from "react-apollo"
import gql from "graphql-tag"
import Select from 'react-select';
import { Add_Skills_MUTATION } from '../../graphql-queries/mutations'

function Skills() {
  let skills;

   function handleChange(e) {
    skills = e
    }

  function handleSubmit(event, addSkills) {

      let skills_id = []

       skills.forEach((d,i) => {
         skills_id.push({ skills_id: d.id })
       })

      console.log(skills_id)

      addSkills({variables : {input: skills_id}})

      event.preventDefault()
   }

  return (
    <div>
    <Mutation
      mutation = {Add_Skills_MUTATION}
      onError = {(error) => {
        console.log(error)
      }}
      onCompleted = {(data) => {
        console.log("Data: ", data)
        alert("Submitted!")
      }}
    >
      {
        (addSkills, {dataMutation}) => (
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
                      ({loading, errors, data, i}) => {
                        if(loading) return <div> Loading</div>
                        if(errors) return <div> Errors {JSON.stringify(errors)} </div>
                        return(
                        <div>
                        <form  onSubmit={(e) => handleSubmit(e, addSkills)}>
                        <Select
                            isMulti
                            name="colors"
                            options={data.getAllSkills}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange = {handleChange}
                          />
                          <Button className='btn-search-submit'
                                    variant='contained'
                                    color='primary'
                                    type="submit"> submit </Button>
                          </form>
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

export default Skills