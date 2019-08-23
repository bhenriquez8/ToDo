import React from 'react';

export class TaskList extends React.Component {
    render() {
        let list;
        if (this.props.tasks instanceof Array) {
            list = this.props.tasks.map(task => {
                return (
                    <li key={task}>{task}</li>
                )
            })
        } else {
            list = <li>Empty List</li>
        }

        return (
            <ul>
                {list}
            </ul>
        );
    }
}
