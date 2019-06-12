import React from 'react'
import { useQuery, useMutation, useSubscription } from 'react-apollo-hooks';
import { ADD_MESSAGES } from '../../graphql-queries/mutations'
import { GET_MESSAGES, isAuthenticated, GET_CONVERSATION } from '../../graphql-queries/queries'
import { COMMENTS_SUBSCRIPTION } from '../../graphql-queries/subscription'
import MessageInput from "./MessageInput"
import '../../css/chat.css'


function Messages(props){
  let number = +props.match.params.conversation

    const {data: queryData, error, loading} = useQuery(GET_MESSAGES, {variables: { number } });
    const {data: conversationData} = useQuery(GET_CONVERSATION, {variables: { id: number }})

    const {data: viewerData} = useQuery(isAuthenticated);

    if (conversationData.getConversation !== undefined && viewerData.getUserProfile !== undefined) {
      if (conversationData.getConversation.user_id_1 === viewerData.getUserProfile.id) {
        props.history.push("/mentors")
      }
    }

    useSubscription(COMMENTS_SUBSCRIPTION, {
      variables: {
        conversation_id: number
      },
      onSubscriptionData: ({ client, subscriptionData }) => {
        const newFeedItem = subscriptionData.data.messageAdded

        const data = client.readQuery({query: GET_MESSAGES, variables: {number}})
        if (newFeedItem) {
        client.writeQuery({
          query: GET_MESSAGES,
          variables: {number},
          data: {
            getMessages: [...data.getMessages, newFeedItem]
          }
        })}
      }
    });

      const addMessages = useMutation(ADD_MESSAGES);

      if (loading) return <div>Loading...</div>;
      if (error) return <div>I have an error</div>

  return(
    <div>
      <MessageInput viewerData = {viewerData} data = {queryData} addMessages = {addMessages} pageNumber = {number} />
    </div>
  )
}

export default Messages;
