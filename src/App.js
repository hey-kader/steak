import './App.css'
import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Menus from './comps/Menus'
import Hours from './comps/Hours'
import More from './comps/More'
import Reservations from './comps/Reservations'
import Takeout from './comps/Takeout'
import Home from './comps/Home'

class App extends Component {
    state = {
    }
    render() {
      return (
        <div className="App">
          <Router>
              <div className="nav-bar">
                  <nav>
                      <Link id="menus" className="App-link" to="/menus">menus</Link>
                      <Link id="hours" className="App-link" to="/hours">hours</Link>
                      <Link id="more" className="App-link" to="/more" >more</Link>
                      <Link id="reservations" className="App-link" to="/reservations">reservations</Link>
                      <Link id="takeout" className="App-link" to="/takeout">takeout</Link>
                      <Link id="home" className="App-link" to="/">home</Link>
                  </nav>
              </div>
              <header className="App-header">

                      <Switch>
                          <Route exact path="/" component={Home}/>
                          <Route exact path="/menus" component={Menus} />
                          <Route exact path="/hours" component={Hours} />
                          <Route exact path="/reservations" component={Reservations} />
                          <Route exact path="/takeout" component={Takeout} />
                          <Route exact path="/more" component={More} />
                      </Switch>
              </header>

          </Router>
        </div>
      );
    }
}

export default App;
