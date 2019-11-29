import React from "react";
import uuid from "uuid";

export default class NewTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    evt.persist();
    this.setState(() => ({
      [evt.target.name]: evt.target.value
    }));
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid() });
    this.setState(() => ({ task: "" }));
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>New Todo</label>
        <input
          type="text"
          placeholder="New todo"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}
