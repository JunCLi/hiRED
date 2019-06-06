import gql from "graphql-tag";

export const COMMENTS_SUBSCRIPTION = gql`
  subscription onMessageAdded($conversation_id: ID!) {
    messageAdded(conversation_id: $conversation_id) {
      from_user
      content
      date_created
      fullname
    }
  }
`;