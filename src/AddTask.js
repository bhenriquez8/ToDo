import React from 'react';

export class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const val = e.target.value;
        this.props.onChange(val);
    }

    handleClick(e) {
        const val = document.getElementById('addedTask').value;
        this.props.onClick(val);
    }

    render() {
        return (
            <div>
                <input 
                type="text"
                id="addedTask"
                placeholder="Add a task..."></input>
                <button onClick={this.handleClick}>
                    Add Task
                </button>
            </div>
        );
    }
}