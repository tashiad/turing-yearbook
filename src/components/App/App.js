import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import people from '../../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Turing Yearbook</h1>
      </header>
      <main>
        <h2>Staff</h2>
        <Cohort staff={this.state.staff}/>
      </main>
      </div>
    )
  }
}

export default App;
