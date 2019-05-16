import React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { element } from 'prop-types';

const GET_MESSAGES = gql`
query GetMessages($number:ID){
	getMessages(conversation_id:$number){
    user_id
    content
    date_created
    } 
	}
`

const Messages = (props) => {
  let number = props.match.params.id
  // console.log("sick of these",props.match.params.id)
  return(
    <Query query={GET_MESSAGES} variables={{ number }}>
    {({data, loading, errors}) =>{
      if (loading) return <div>Loading...</div>;
        if (errors) return <div>I have an error</div>
        console.log("here is my messages1",data.getMessages);
        return(
        
          <div>   
          {data.getMessages.map(element => (
            <h1>{element.content}</h1>
            
          ))}
        
          </div>
        )
    }}
   
    </Query>
  )
}

export default Messages;