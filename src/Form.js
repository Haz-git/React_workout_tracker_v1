import React from 'react';
import WorkOutNameInput from './WorkOutNameInput';
import WeightInput from './WeightInput';
import SetInput from './SetInput'
import RepInput from './RepInput';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            test: 'value'
        }
    }

    render() {
        return (
            <>
                <WorkOutNameInput />
                <WeightInput />
                <SetInput />
                <RepInput />
            </>
        )
    }
}

export default Form;