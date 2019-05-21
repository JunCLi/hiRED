import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Card, CardContent, Avatar, Typography } from "@material-ui/core/";

import LeftNav from '../navigation/LeftNav'

const GET_CONVERSATIONS = gql`
  query {
    getConversations {
      id
    }
  }
`;

const Chatbot = props => {
  console.log("sick of these2", props.match);

  return (
    <Query query={GET_CONVERSATIONS}>
      {({ data, loading, errors }) => {
        if (loading) return <div> Loading...</div>;
        if (errors) return <div>I have and error</div>;

        return (
				<div>
					<LeftNav />
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Conversation Rooms
              </Typography>
              {data.getConversations.map((element, i) => (
                <div key ={i}>
                  <Avatar
                    onClick={response => {
                      console.log(element)
                      props.history.push("/messages/" + element.id);
                      console.log("Conversation Room", response);
                    }}
                  >
                    {element.id}
                  </Avatar>
                </div>
              ))}
            </CardContent>
          </Card>
				</div>
        );
      }}
    </Query>
  );
};

export default Chatbot;
