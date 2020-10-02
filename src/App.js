import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import bee from './honeybee.gif'
import PrivateRoute from './auth/PrivateRoute'

import './css/core.css'
import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
// import Navigation from './components/LoggedInNav'

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="title">
          <img src={bee} alt="bee gif" className="beegif" />
          <h1>Journey of a Web Developer</h1>
          <img src={bee} alt="bee gif" className="beegif" />
        </div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          {/* <Navigation /> */}
        </nav>
      </div>
      <div className="main">
        <Switch>
          <Route path="/login" render={(props) => <Login {...props} />} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
      <div className="footer">
        <h3>Created and maintained by <a href="https://melissa-longenberger.com">Melissa Longenberger</a></h3>
        <h3>App initialized by <a href="https://www.npmjs.com/package/lambda-react">npm package lambda-react</a></h3>
      </div>
    </div>
  )
}

export default App