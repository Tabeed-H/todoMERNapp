import React, { Component } from "react";
import TodoItem from "./Todoitem";
//import ReactDOM from "react-dom";

class Todo extends Component {
  markComplete = () => {
    console.log(this.id);
  };
  render() {
    //console.log(this.props.todos);
    return this.props.todos.map((element) => (
      <TodoItem
        todo={element}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

export default Todo;
