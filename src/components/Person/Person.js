import React from 'react';
import './Person.css';

function Person({ photo, name, quote, superlative }) {
  return (
    <div className="member">
      <img src={photo} className="memberImg" alt=''/>
      <h3>{name}</h3>
      <p className="quote">{quote}</p>
      <p className="superlative">{superlative}</p>
    </div>
  )
}

export default Person;
