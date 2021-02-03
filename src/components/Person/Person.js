import React from 'react';
import './Person.css';

function Person({ id, type, photo, name, quote, superlative, removeStudent }) {
  // console.log(type);
  return (
    <div className="member">
      <img src={photo} className="memberImg" alt=''/>
      <h3>{name}</h3>
      <p className="quote">{quote}</p>
      <p className="superlative">{superlative}</p>
      {type === 'students' ?
        <button onClick={() => removeStudent(id)}>REMOVE</button> :
        null
      }
    </div>
  )
}

export default Person
