import React from 'react';
import './App.css';

import EnterTaskBar from '../EnterTaskBar/EnterTaskBar';
import ToDoList from '../ToDoList/ToDoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);

    this.state = {
      taskList: []
    }
  }

  addTodo(task) {
    const tasks = this.state.taskList;
    tasks.push(task);

    this.setState({
      taskList: tasks
    });
  }

  render() {
    return (
      <div className="App">
        <h1>My To-Do List</h1>
        <EnterTaskBar onClick={this.addTodo}/>
        <ToDoList todoList={this.state.taskList}/>
      </div>
    );
  }
}

export default App;
