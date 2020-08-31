import React from 'react';

class WeightInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weight: ''
        }
    }

    onWeightSubmit = (event) => {
        event.preventDefault();

        console.log(event.target.value);
    }

    render() {
        return (
            <div>
                <label className="ui label">Enter The Weight Used</label>
                <input className="ui input" onChange={this.onWeightSubmit} />
            </div>
        );
    }
}

export default WeightInput;