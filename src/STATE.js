import React, { Component } from 'react'

export default class STATE extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            message: "<< Web Calculator >>"
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        const { count, message } = this.state
        return (
            <div>
                <p>{message}</p>
                <h1> Count: {count} </h1>
                <button className='button1' onClick={this.increment}>+</button>
                <button className='button1' onClick={this.decrement} disabled={count === 0 ? true : false}>-</button>
            </div>
        )
    }
}
