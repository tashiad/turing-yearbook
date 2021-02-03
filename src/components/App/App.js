import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import Form from '../Form/Form';
import people from '../../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  addStudent = (newStudent) => {
    this.setState({
      staff: people.staff,
      students: [...this.state.students, newStudent]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Yearbook</h1>
        </header>
        <Form addStudent={this.addStudent}/>
        <Cohort
          staff={this.state.staff}
          students={this.state.students}
        />
      </div>
    )
  }
}

export default App
