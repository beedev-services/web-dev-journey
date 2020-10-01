import React from 'react'
import bee from './honeybee.gif'

import './css/core.css'

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <img src={bee} alt="bee gif" className="beegif" />
        <h1>Journey of a Web Developer</h1>
        <img src={bee} alt="bee gif" className="beegif" />
      </div>
      <div className="main">

      </div>
      <div className="footer">
        <h3>Created and maintained by Melissa Longenberger</h3>
        <h3>App initialized by <a href="https://www.npmjs.com/package/lambda-react">npm package lambda-react</a></h3>
      </div>
    </div>
  )
}

export default App