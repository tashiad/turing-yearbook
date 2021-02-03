import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

function Cohort({ staff, students }) {
  function cardProps(prop) {
    return prop.map(member => {
      return (
        <Person
        key={member.id}
        id={member.id}
        photo={member.photo}
        name={member.name}
        quote={member.quote}
        superlative={member.superlative}
        />
      )
    })
  }

  return (
    <main>
      <h2>Staff</h2>
      <section>
        {cardProps(staff)}
      </section>
      <h2>Students</h2>
      <section>
        {cardProps(students)}
      </section>
    </main>
  )
}

export default Cohort
