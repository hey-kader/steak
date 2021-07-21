import './App.css'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <nav>
              <ul>
                  <Router>
                      <Switch>
                          <Route to="/menus">
                              <li>menus</li>
                          </Route>
                      </Switch>
                      <Switch>
                          <Route to="/hours">
                              <li>hours</li>
                          </Route>
                      </Switch>
                      <Switch>
                          <Route to="/more">
                              <li>more</li>
                          </Route>
                      </Switch>
                  </Router>
              </ul>
          </nav>
      </header>
    </div>
  );
}

export default App;
