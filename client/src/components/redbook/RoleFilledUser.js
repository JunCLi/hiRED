import React from 'react'
import Role from "./Role"
import Avatar from '@material-ui/core/Avatar';

const RoleFilledUser = (props) => {

  const d = props.data
  let initials = d.fullname.match(/\b\w/g) || [];
  initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();

  return (
    <div className = "user-cards-container">
      <Avatar className = "avatar redbook"> {initials} </Avatar>
      <h2> {d.fullname} </h2>
        <Role d = {d} />
    </div>
  );
}

export default RoleFilledUser