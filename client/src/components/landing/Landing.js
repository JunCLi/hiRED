import React from "react";
import { Link } from "react-router-dom";

import { Query } from "react-apollo";
import { testConnection } from "../../graphql-queries/queries";

import { Button } from "@material-ui/core";

import LoginForm from "../login/LoginForm";
import TopNav from "../navigation/TopNav";

const Landing = () => {
  return (
    <Query query={testConnection}>
      {({ loading, err, data }) => {
        if (loading) return <div>loading...</div>;
        if (err) return <div>error!</div>;

        return (
          <div className="App">
            <h1>Welecome to hiRED!</h1>
          </div>
        );
      }}
    </Query>
  );
};

export default Landing;
