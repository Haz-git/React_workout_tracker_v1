import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            exName: '',
            weightNum: '',
            setNum: '',
            repNum: '',
        }

        this.baseState = this.state;
    }

    checkEmpty = () => {
        //Checks if all fields are filled out.
        let stateArray = Object.values(this.state);
        let resultsArr = [];

        for (let i = 0; i < stateArray.length; i++) {
            if (stateArray[i] !== '') {
                resultsArr.push(stateArray[i]);
            }
        }

        if (resultsArr.length === 4) {
            return false;
        } else {
            return true;
        }

    }

    checkNum = () => {
        //Check for Numerical input for weight, sets, and reps.

        let regex = /^[0-9]+$/;
        let numArray = Object.values(this.state);
        return (numArray.filter(e => e.match(regex)).length >= 3 ? true : false);
        
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.checkEmpty() === false && this.checkNum() === true) {
            this.props.formEntries(this.state);
            this.resetForm();
        } else {
            alert('Please fill in all the fields and make sure everything except the exercise name are all digits!');
            this.resetForm();
        }
    }

    resetForm = () => {
        this.setState(this.baseState);
    }

    handleExChange = (e) => {
        this.setState({
            exName: e.target.value
        })
    }

    handleWeightChange = (e) => {
        this.setState({
            weightNum: e.target.value
        })
    }

    handleSetChange = (e) => {
        this.setState({
            setNum: e.target.value
        })
    }

    handleRepChange = (e) => {
        this.setState({
            repNum: e.target.value
        })
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label className="ui label">Exercise Name</label>
                    <input value={this.state.exName} onChange={this.handleExChange} className="ui input" />
                </div>
                <div>
                    <label className="ui label">Enter the Weight Used</label>
                    <input value={this.state.weightNum} onChange={this.handleWeightChange} className="ui input" />
                </div>
                <div>
                    <label className="ui label">Number of Sets</label>
                    <input value={this.state.setNum} onChange={this.handleSetChange} className="ui input" />
                </div>
                <div>
                    <label className="ui label">Number of Reps</label>
                    <input value={this.state.repNum} onChange={this.handleRepChange} className="ui input" />
                </div>

                <button type='submit' className="ui primary button">Submit Entry</button>
                <button type='button' onClick={this.resetForm} className="ui button">Discard</button>
            </form>
        )
    }
}

export default Form;