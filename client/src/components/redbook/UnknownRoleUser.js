import React from 'react'
import Avatar from '@material-ui/core/Avatar';

const UnknownRoleUser = (props) => {

  const d = props.data
  let initials = d.fullname.match(/\b\w/g) || [];
  initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();

  return (
    <div className = "user-cards-container">
      <Avatar className = "avatar redbook"> {initials} </Avatar>
      <h2> {d.fullname} </h2>
      <p> {d.role} </p>
    </div>
);
}

export default UnknownRoleUser