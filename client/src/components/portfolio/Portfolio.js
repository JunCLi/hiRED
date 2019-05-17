import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag';
import PortfolioItem from './PortfolioItem'


const GET_PORTFOLIO_QUERY=gql`
  query {
    getUserPortfolio {
      id
      user_id
      title
      description
      type
      custom_link
      api_link
      thumbnail
    }
  }
`;

const Portfolio = () => {
  return (
    <Query query={GET_PORTFOLIO_QUERY}>
   { ({loading, errors, data, refetch}) => { 
     
     // Change this to return a Loading Component that still needs to be built
     if(loading) return <div>Loading...</div>
     // Change this to return an Errors Component that still needs to be built
     if(errors) return <div>You have errors sorry.</div>

      let userPortfolioComponents = data.getUserPortfolio.map(portfolioItem => 
      <PortfolioItem 
        key={portfolioItem.id}
        data={portfolioItem}
        refetch={refetch}
      />)

     return (
        <div>
            <h1>Portfolio</h1>      
            {userPortfolioComponents}
          </div>
     )
    }
   }
    </Query>
  );
}

export default Portfolio