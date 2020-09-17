import React from 'react'
import logo from './logo.svg'
import topleft from './images/top-left-img-2.png'
// import topright from './images/top-right-img.png'
import home from './images/home-button.png'
import order from './images/order-button.png'
import about from './images/about.png'
import cart from './images/cart.png'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Order from './components/Order'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>

          <ul id="navbar">
            <Link to="/App"><img src={home} className="nav-button" /></Link>
            <Link to="/Order"><img src={order} className="nav-button" /></Link>
            <Link to="/About"><img src={about} className="nav-button" /></Link>
            <Link to="/Cart"><img src={cart} className="nav-button" /></Link>
          </ul>
          <img src={topleft} />
          {/* <img src={topright} /> */}
        </nav>
        <Switch>
          <Route path="/Order" exact component={Order} />
        </Switch>
      </Router>
      <div className="home-text">
        <p>Your Pet Holds a Special Place in Your Heart.</p>
        <p>Never judging, always caring, providing that unconditional love that will be so sorely missed.
          Losing a pet and friend is difficult,</p>
      </div>
    </div>
  );
}

export default App;
