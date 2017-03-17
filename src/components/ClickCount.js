import React from 'react'

const ClickCount = ({handdleClick}) => (
        <p className="App-intro">
          <input type="button" value="ClickMe" onClick={handdleClick}/>
        </p>
    )

export default ClickCount