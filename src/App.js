import React from 'react'
import logo from './logo.svg'
import topleft from './images/top-left-img-2.png'
import topright from './images/top-right-img.png'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Order from './components/Order'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>

          <ul id="nav-mobile">
            <li><Link to="/App">Home</Link></li>
            <li><Link to="/Order">Orders</Link></li>
            <li><Link to="/About">About us</Link></li>
            <li><Link to="/Cart">Cart</Link></li>
          </ul>
          <img src={topleft} />
          <img src={topright} />
        </nav>
        <Switch>
          <Route path="/Order" exact component={Order} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
