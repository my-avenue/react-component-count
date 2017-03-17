import React, { Component } from 'react'
import './App.css'
import ShowCount from './components/ShowCount'
import ClickCount from './components/ClickCount'

class App extends Component {

  state = {
    count: 10
  }

  addCount = event => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div className="App">
        <ShowCount {...this.state} />,
        <ClickCount handdleClick={this.addCount} />
      </div>
    )
  }
}

export default App
