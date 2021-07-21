import './App.css'
import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Menus from './comps/Menus'
import Hours from './comps/Hours'
import More from './comps/More'

class App extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
              <nav>
                  <ul>
                      <Router>
                          <Switch>
                              <Route exact path="/" />
                              <Route path="/menus" component={Menus} />
                              <Route path="/hours" component={Hours} />
                              <Route path="/more" component={More} />
                          </Switch>

                          <Link to="/menus">menus</Link>
                          <Link to="/hours">hours</Link>
                          <Link to="/more" >more</Link>
                          <Link to="/" >home</Link>
                      </Router>
                  </ul>
              </nav>
          </header>
        </div>
      );
    }
}

export default App;
