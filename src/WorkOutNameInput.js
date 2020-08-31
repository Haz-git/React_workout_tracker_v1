import React from 'react';

class WorkOutNameInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workOutName: '',
        }
    }

    logUserInput = (event) => {
        event.preventDefault();
        console.log(event.target.value);
    }

    render() {
        return (
            <div>
                <label className="ui label">Exercise Name</label>
                <input onChange={this.logUserInput}  className="ui input" />
            </div>
        )
    }
}

export default WorkOutNameInput;