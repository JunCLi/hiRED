import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Card, CardContent, Avatar, Typography } from "@material-ui/core/";
import { useQuery } from 'react-apollo-hooks';
import { isAuthenticated } from '../../graphql-queries/queries'

import LeftNav from '../navigation/LeftNav'

const GET_CONVERSATIONS = gql`
  query {
    getConversations {
      id
      user_id_1
      user_id_2
    }
  }
`;

const Chatbot = props => {

  const {data: viewerData} = useQuery(isAuthenticated);

  return (
    <Query query={GET_CONVERSATIONS}>
      {({ data, loading, errors }) => {
        if (loading) return <div> Loading...</div>;
        if (errors) return <div>I have and error</div>;

      if (viewerData.getUserProfile === undefined) return <div> Loading... </div>

      const viewer = Number(viewerData.getUserProfile.id)

        return (
					<div>
						<LeftNav />
						<Card>
							<CardContent>
								<Typography variant="h5" component="h2">
									Conversation Rooms
								</Typography>
								{data.getConversations.map((element, i) => (
                  (element.user_id_2 === viewer) || (element.user_id_1 === viewer) ?
                    <div key ={i}>
                      <Avatar
                        className = "avatar"
                        onClick={response => {
                          props.history.push("/messages" + element.id, element);
                        }}
                      >
                        {element.user_id_2 === viewer ? element.user_id_1 : element.user_id_2}
                      </Avatar>
                    </div> : null
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
