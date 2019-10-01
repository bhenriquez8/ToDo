import React from 'react';
import './App.css';

import EnterTaskBar from '../EnterTaskBar/EnterTaskBar';
import ToDoList from '../ToDoList/ToDoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

    this.state = {
      taskList: []
    }
  }

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('item')) || [];

    if (tasks.length === 0) {
      console.log('No ToDos');
    } else {
      tasks.forEach(task => {
        this.addTodo(task);
      })
    }
  }

  addTodo(task) {
    const tasks = this.state.taskList;
    tasks.push(task);

    this.setState({
      taskList: tasks
    });

    localStorage.setItem('item', JSON.stringify(tasks));
  }

  removeTodo(task) {
    const tasks = this.state.taskList;
    let updatedTasks = [];

    tasks.forEach(taskItem => {
      if (taskItem !== task) {
        updatedTasks.push(taskItem);
      }
    });

    this.setState({
      taskList: updatedTasks
    });

    localStorage.setItem('item', JSON.stringify(updatedTasks));
  }

  render() {
    return (
      <div className="App">
        <h1>My To-Do List</h1>
        <EnterTaskBar onClick={this.addTodo}/>
        <ToDoList
          todoList={this.state.taskList}
          removeTodo={this.removeTodo}/>
      </div>
    );
  }
}

export default App;
