import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

function Cohort({ staff, students }) {
  const staffCards = staff.map(member => {
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

  const studentCards = students.map(member => {
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

  return (
    <main>
      <h2>Staff</h2>
      <section>
        {staffCards}
      </section>
      <h2>Students</h2>
      <section>
        {studentCards}
      </section>
    </main>
  )
}

export default Cohort;
