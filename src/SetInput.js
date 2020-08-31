import React from 'react';

class SetInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sets: 0
        }
    }

    setNum = event => {
        event.preventDefault();

        console.log(event.target.value);
    }



    render() {
        return (
            <div>
                <label className="ui label">Number of Sets</label>
                <input onChange={this.setNum}  className="ui input" />
            </div>
        )
    }
}

export default SetInput;