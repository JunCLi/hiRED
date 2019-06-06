import React from 'react'
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { ADD_MESSAGES } from '../../graphql-queries/mutations'
import MessageInput from "./MessageInput"


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

const COMMENTS_SUBSCRIPTION = gql`
  subscription onMessageAdded($conversation_id: ID!) {
    messageAdded(conversation_id: $conversation_id) {
      from_user
      content
      date_created
      fullname
    }
  }
`;

function Messages(props){
  let number = +props.match.params.conversation

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
      <Query query={GET_MESSAGES} variables={{ number }}>
        {({data, loading, errors, subscribeToMore, result}) =>{
          if (loading) return <div>Loading...</div>;
            if (errors) return <div>I have an error</div>
            return(
              <MessageInput data = {data} addMessages = {addMessages} pageNumber = {number}
                subscribeToNewComments= {() =>
                  subscribeToMore({
                    document: COMMENTS_SUBSCRIPTION,
                    variables: { conversation_id: number },
                    updateQuery: (prev, {subscriptionData}) => {
                      if (!subscriptionData.data) return prev;
                      const newFeedItem = subscriptionData.data.messageAdded

                      return Object.assign({}, prev, {
                        getMessages: [...prev.getMessages, newFeedItem]
                      })
                    }
                  })
                }
              />
            )
        }}

        </Query>
      )}
    </Mutation>
    </div>
  )
}

export default Messages;