import React from 'react'
import { useQuery } from 'react-apollo-hooks';
import { GET_REDBOOK_USERS } from '../../graphql-queries/queries'
import RoleFilledUser from "./RoleFilledUser"
import UnknownRoleUser from "./UnknownRoleUser"
import '../../css/redbook.css'



const Redbook = () => {

  const {data, error, loading} = useQuery(GET_REDBOOK_USERS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>I have an error</div>

  return (
    <div className = "redbook-page-container">
      <h1> Redbook </h1>
      <div className = "redbook-cards-container">
        {
          data.getRedBookUsers.map((d,i) =>
            d.role ? <RoleFilledUser key = {i} data = {d} /> : <UnknownRoleUser key = {i} data = {d} />
          )
        }
      </div>
    </div>
  );
}

export default Redbook