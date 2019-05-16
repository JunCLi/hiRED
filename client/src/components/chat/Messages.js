import React, { useState} from 'react'
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { InputBase, IconButton } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import { ADD_MESSAGES } from '../../graphql-queries/mutations'


import '../../css/chat.css'


const GET_MESSAGES = gql`
query GetMessages($number:ID){
	getMessages(conversation_id:$number){
    from_user
    content
    date_created
    fullname
    }
	}
`

function Messages(props){
  let number = +props.match.params.conversation

  const [value, setValue] = useState("");
  const [submit, setSubmit] = useState("")

  function handleChange(e) {
    setValue(e.target.value)
  }

  function handleClick(e, addMessages) {
    setSubmit(value)
    addMessages({variables: {content: value, conversation_id: number}})
  }

  return(
    <div>
    <Mutation
    mutation = {ADD_MESSAGES}
    onError = {(error) => {
      console.log(error)
    }}
    onCompleted = {(data) => {
      console.log(data)
      // props.history.push("/messages" + data.addConversation.id)
    }}
    >
    {
      (addMessages, {dataMutation}) => (
      <Query query={GET_MESSAGES} variables={{ number }} pollInterval={500}>
        {({data, loading, errors}) =>{
          if (loading) return <div>Loading...</div>;
            if (errors) return <div>I have an error</div>
            return(
              <div className = "chat-box">
              {data.getMessages.map((d,i) =>
                <div key = {i} className = "messages">
                  {d.fullname} <div className = "from-bubble">
                    <p className = "from-message"> {d.content} </p>
                  </div>
                </div>
                )
              }
              <div className = "input-text">
              <InputBase
                className={"input-base"}
                placeholder="Send Message"
                onChange ={handleChange}
                value= {value}/>
                    <IconButton onClick={(e) => handleClick(e, addMessages)} className={"button"} aria-label="Search">
                      <SendIcon />
                    </IconButton>
              </div>
              </div>
            )
        }}

        </Query>
      )}
    </Mutation>
    </div>
  )
}

export default Messages;