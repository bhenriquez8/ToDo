import React from 'react';
import './TaskList.css';

import Task from '../Task/Task';

class TaskList extends React.Component {
  render() {
    return(
      <div className="TaskList">
        <ul>
          {
            this.props.todoList ?
            this.props.todoList.map(task => {
              return <Task key={task.id} task={task} removeTodo={this.props.removeTodo}/>
            }) : null
          }
        </ul>
      </div>
    );
  }
}

export default TaskList;