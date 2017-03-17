import React from 'react'
import logo from '../logo.svg'

const ShowCount = ({count}) => (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>I love react * {count}</h2>
        </div>
    )

export default ShowCount