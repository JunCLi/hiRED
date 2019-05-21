import React from "react"

import { Button } from '@material-ui/core'

import { Query } from "react-apollo"
import gql from "graphql-tag"
import Select from 'react-select';

function SkillsDropDown(props) {
  return (
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
                  <form  onSubmit={(e) => props.handleSubmit(e, props.addSkills)}>
                  <Select
                      isMulti
                      name="colors"
                      options={data.getAllSkills}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange = {props.handleChange}
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

export default SkillsDropDown