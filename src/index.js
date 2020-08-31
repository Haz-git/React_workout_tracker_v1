import React from 'react';
import ReactDOM from 'react-dom';
import WorkOutNameInput from './WorkOutNameInput';
import WeightInput from './WeightInput';

class App extends React.Component {
    render() {
        return (
            <div>
                <WorkOutNameInput />
                <WeightInput />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)