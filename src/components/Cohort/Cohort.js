import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

function Cohort({ staff, students, removeStudent }) {
  function cardProps(prop, type) {
    return prop.map(member => {
      return (
        <Person
        key={member.id}
        id={member.id}
        photo={member.photo}
        name={member.name}
        quote={member.quote}
        superlative={member.superlative}
        type={type}
        removeStudent={removeStudent}
        />
      )
    })
  }

  return (
    <main>
      <h2>Staff</h2>
      <section>
        {cardProps(staff, 'staff')}
      </section>
      <h2>Students</h2>
      <section>
        {cardProps(students, 'students')}
      </section>
    </main>
  )
}

export default Cohort
