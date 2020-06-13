import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  handleIncrement = () => {
    this.setState({count: this.state.count + 1})
  }
  handleDecrement = () => {
    this.setState({count: this.state.count - 1})
  }
  handleReset = () => {
    this.setState({count: 0})
  }

  
  render() {
    return (
      <>
        <h1> Count: {this.state.count}</h1>
        <button
          onClick={this.handleIncrement}
        >
          {' '}
          Increment{' '}
        </button>
        <button
          onClick={this.handleDecrement}
        >
          {' '}
          Decrement{' '}
        </button>
        <button onClick={this.handleReset}>
          {' '}
          Reset{' '}
        </button>
      </>
    )
  }
}
