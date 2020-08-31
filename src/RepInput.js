import React from 'react';


class RepInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reps: 0
        }
    }

    setReps = (event) => {
        event.preventDefault();

        console.log(event.target.value);
    }

    render() {
        return (
            <div>
                <label className="ui label">Number of Reps</label>
                <input onChange={this.setReps}  className="ui input" />
            </div>
        )
    }
}

export default RepInput;