import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Todo from "./components/Todo";
import AddTodo from "./components/addTodo";
import About from "./components/pages/About";
import "./App.css";
const uuid = require("uuid");
//import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, title: "take out trash", complete: false },
        { id: 2, title: "dinner", complete: false },
        { id: 3, title: "sleep", complete: false },
      ],
    };
  }
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.complete = !todo.complete;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    //console.log(id);
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      complete: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    //console.log(this.state.todos);

    return (
      <Router>
        <div className="App">
          <div className="header">
            <h2>ToDo List</h2>
            <Link className="links" to="/">
              home
            </Link>{" "}
            |{" "}
            <Link className="links" to="/about">
              About
            </Link>
          </div>
          <div className="container">
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <div className="list">
                    <Todo
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}
                    />
                  </div>
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
