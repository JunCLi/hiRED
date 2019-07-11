import React from "react";
import { Link } from "react-router-dom";

import { Query } from "react-apollo";
import { testConnection } from "../../graphql-queries/queries";

import { Button } from "@material-ui/core";

import LoginForm from "../login/LoginForm";

import { makeStyles } from "@material-ui/core/styles";

const useStyles= makeStyles({
  root: {

  }
})

const Landing = () => {


  const classes = useStyles()

  // Next to code:
  // if user is logged in, then route to a different page
  // if user is not logged in, return below

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
