import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  onChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ tite: "" });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="add todo"
          style={{ flex: " 10", padding: "5px" }}
          onChange={this.onChange}
        ></input>
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: " 1" }}
        ></input>
      </form>
    );
  }
}

export default AddTodo;
