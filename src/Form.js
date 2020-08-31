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
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.exName, this.state.weightNum, this.state.setNum, this.state.repNum);
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
                    <input value={this.state.exName} onChange={this.handleExChange}  className="ui input" />
                </div>
                <div>
                    <label className="ui label">Enter the Weight Used</label>
                    <input value={this.state.weightNum} onChange={this.handleWeightChange}  className="ui input" />
                </div>
                <div>
                    <label className="ui label">Number of Sets</label>
                    <input value={this.state.setNum} onChange={this.handleSetChange}  className="ui input" />
                </div>
                <div>
                    <label className="ui label">Number of Reps</label>
                    <input value={this.state.repNum} onChange={this.handleRepChange}  className="ui input" />
                </div>

                <button type='submit' className="ui primary button">Submit Entry</button>
                <button type='reset' className="ui button">Discard</button>
            </form>
        )
    }
}

export default Form;