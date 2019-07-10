import React from 'react'

const programs = {
    APP: 'App Dev',
    DM: 'Digital Marketing',
    UX: 'UX Designer',
    UI: 'UI Designer',
    WEB: 'Web Dev',
    WEBAPP: 'Web & App Dev',
    UXUI: 'UX & UI'
  }

const Role = (props) => {

  const d = props.d

  if (d.role === "STUDENT") {
    return (
        <div className = "role-container">
          <p> Studying {programs[d.programs]} </p>
          <p> @ {d.campus} </p>
        </div>
    );
  }
  else if (d.role === "ALUMNI") {
    return (
        <div className = "role-container">
          <p> {d.current_job} </p>
          <p> @ {d.job_location} </p>
        </div>
    );
  }
  else if (d.role === "STAFF") {
    return (
        <div className = "role-container">
          <p> Teaching {programs[d.programs]} </p>
          <p> @ {d.campus} </p>
        </div>
    );
  }

}

export default Role