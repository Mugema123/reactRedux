import React, { Component } from 'react'

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            number: 0
        }
    };
    handleChange = (e) => {
        if (e.target.name == "increment") {
            const value = this.state.number
        this.setState({number: value + 1})
        }
        if (e.target.name == "decrement") {
            const value = this.state.number
        this.setState({number: value - 1})
        }

    }
    render() {
        return (
            <div>
                <h1 id="value" aria-label="value">{ this.state.number }</h1>
                <button id="incrementButton" aria-label="incrementButton" name="increment" onClick={(e)=> this.handleChange(e)}> increment +</button>
                <button id="decrementButton" aria-label="decrementButton" name="decrement" onClick={(e)=> this.handleChange(e)}> decrement  -</button>
            </div>
        )
    }
}

export default App;
