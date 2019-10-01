import React from 'react';
import './TaskList.css';

import Task from '../Task/Task';

class TaskList extends React.Component {
  render() {
    return(
      <div className="TaskList">
        <ul>
          {
            this.props.todoList.map((task, index) => {
              return <Task key={index} task={task} removeTodo={this.props.removeTodo}/>
            })
          }
        </ul>
      </div>
    );
  }
}

export default TaskList;