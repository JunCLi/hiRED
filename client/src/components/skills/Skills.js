import React from "react"

import { Mutation } from "react-apollo"
import { Add_Skills_MUTATION } from '../../graphql-queries/mutations'
import SkillsDropDown from "./SkillsDropDown"

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
                <SkillsDropDown handleSubmit = {handleSubmit} handleChange = {handleChange} addSkills ={addSkills} />
              </div>
            )
          }
      </Mutation>
    </div>
    )
}

export default Skills