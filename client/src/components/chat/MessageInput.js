import React, { useState } from 'react'
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

    const viewer = props.viewerData.getUserProfile !== undefined ? props.viewerData.getUserProfile.id : null

    if (props.viewerData.getUserProfile === undefined) return <div> Loading... </div>

    return (
      <>
        <div className = "chat-box">
        {props.data.getMessages.map((d,i) =>
          <div  key = {i} className = {Number(viewer) === Number(d.from_user) ? "messages-active" : "messages"}>
            <h3> {d.fullname}  </h3>
            <div className = {Number(viewer) === Number(d.from_user) ? "from-bubble-active" : "from-bubble"}>
              <p className = "from-message"> {d.content} </p>
            </div>
          </div>
          )
        }
        </div>
        <div className = "input-text">
          <InputBase
            className={"input-base"}
            placeholder="Send Message"
            onChange ={handleChange}
            value= {value} />
            <IconButton onClick={(e) => handleClick(e, props.addMessages)} className={"submit-chat-button"} aria-label="Search">
              <SendIcon />
            </IconButton>
        </div>
        </>
      )
}

export default MessageInput