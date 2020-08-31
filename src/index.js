import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            exercises: [],
        }
    }

    formEntries = (obj) => {
        //Adding entries collected from form and storing it into the state of the App
        this.setState({
            exercises: [...this.state.exercises, obj]
        });
    }

    renderCards = () => {
        //Mapping through the state of App and producing custom card elements with state data.
        return this.state.exercises.map((item, i) => {
            return (
                <div key={uuidv4()}>
                    <Card exName={item.exName} weightNum={item.weightNum} setNum={item.setNum} repNum={item.repNum}/>
                </div>
            )
        }) 
    }


    render() {
        return (
            <div>
                <Form formEntries={this.formEntries} />
                <div>
                    {this.renderCards()}
                </div>
            </div>
        );  
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)