import gql from 'graphql-tag';

export const testConnection = gql`
  query {
    getUser{
      id
    }
  }
`;

export const listMyDribbbles = gql`
  query { listMyDribbbles { id
    title
    description
    height
    width
    html_url
    published_at
    updated_at
    images{
      hidpi
      normal
      one_x
      teaser
    }}
   
  }
`;
