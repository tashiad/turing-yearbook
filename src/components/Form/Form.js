import React from 'react'
import './Form.css'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      photo: '',
      name: '',
      quote: '',
      superlative: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitIdea = event => {
    event.preventDefault()
    const newStudent = {
      id: Date.now(),
      ...this.state
    }
    this.props.addStudent(newStudent)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      photo: '',
      name: '',
      quote: '',
      superlative: ''
    })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Photo'
          name='photo'
          value={this.state.photo}
          onChange={this.handleChange}
        />

        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input
          type='text'
          placeholder='Quote'
          name='quote'
          value={this.state.quote}
          onChange={this.handleChange}
        />

        <input
          type='text'
          placeholder='Superlative'
          name='superlative'
          value={this.state.superlative}
          onChange={this.handleChange}
        />

        <button onClick={event => this.submitIdea(event)}>SUBMIT</button>
      </form>
    )
  }
}

export default Form
