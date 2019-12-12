import React, {Component} from "react"

class TodoForm extends Component {
  state = { todoValue: '', complete: false }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state)
    this.setState({ todoValue: '' })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
        value={this.state.todoValue}
        name="todoValue"
        onChange={this.handleChange}

        required
        placeholder="Add a To Do Item"
        />

      </form>
    )
  }
}

export default TodoForm;