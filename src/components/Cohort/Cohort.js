import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

function Cohort(props) {
  return (
    <section className="staffContainer">
      <Person staff={props.staff}/>
    </section>
  )
}

export default Cohort;
