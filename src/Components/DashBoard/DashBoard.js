import React from 'react';
import './DashBoard.css';

import EnterTaskBar from '../EnterTaskBar/EnterTaskBar';
import ToDoList from '../ToDoList/ToDoList';

const firebase = require('firebase');

class DashBoard extends React.Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

    this.state = {
      taskList: null
    }
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection('tasks')
      .orderBy("timestamp", "asc")
      .onSnapshot(serverUpdate => {
        const tasks = serverUpdate.docs.map(_doc => {
          const task = _doc.data();
          task['id'] = _doc.id;
          return task;
        });
        this.setState({ taskList: tasks });
      })
  }

  addTodo = (task) => {
    const newTask = { task: task };

    firebase
      .firestore()
      .collection('tasks')
      .add({
        task: newTask.task,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    
    this.setState({
      taskList: [...this.state.taskList, newTask]
    });
  }

  removeTodo(task) {
    this.setState({
      taskList: this.state.taskList.filter(_task => _task !== task)
    });
  
    firebase
      .firestore()
      .collection('tasks')
      .doc(task.id)
      .delete();
  }

  render() {
    return (
      <div className='DashBoard'>
        <EnterTaskBar onClick={this.addTodo}/>
        <ToDoList
          todoList={this.state.taskList}
          removeTodo={this.removeTodo}/>
      </div>
    );
  }
}

export default DashBoard;