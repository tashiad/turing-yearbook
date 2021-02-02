import React from 'react';
import './Person.css';

function Person(props) {
  return (
    props.staff.map(member => {
      return (
        <div className="member" key={member.id}>
          <img src={member.photo} className="memberImg" alt=''/>
          <h3>{member.name}</h3>
          <p className="quote">{member.quote}</p>
          <p className="superlative">{member.superlative}</p>
        </div>
      )
    })
  )
}

export default Person;
