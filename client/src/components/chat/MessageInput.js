import React, { useState, useEffect} from 'react'
import { InputBase, IconButton } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';

function MessageInput(props) {
    const [value, setValue] = useState("");
    const [submit, setSubmit] = useState("")

    function handleChange(e) {
      setValue(e.target.value)
    }

    function handleClick(e, addMessages) {
      setSubmit(value)
      addMessages({variables: {content: value, conversation_id: props.pageNumber}})
    }

    useEffect(() => {
      props.subscribeToNewComments()
    }, [])
    return (
        <div className = "chat-box">
        {props.data.getMessages.map((d,i) =>
          <div  key = {i} className = "messages">
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
              <IconButton onClick={(e) => handleClick(e, props.addMessages)} className={"button"} aria-label="Search">
                <SendIcon />
              </IconButton>
        </div>
        </div>
      )
}

export default MessageInput