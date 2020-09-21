import React from 'react'
// import logo from './logo.svg'
// import topleft from './images/top-left-img-2.png'
// import topright from './images/top-right-img.png'
import banner from "./images/home-banner.png"
import home from './images/home-button.png'
import order from './images/order-button.png'
import about from './images/about.png'
import cart from './images/cart.png'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import Order from './components/Order'
import Home from './components/Home'
import Footer from './components/Footer'
import Privacy from './components/Privacy'
import About from './components/About'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul id="navbar">
            <li><Link to="/Home"><img src={home} className="nav-button" alt="Button for Home" /></Link></li>
            <li><Link to="/Order"><img src={order} className="nav-button" alt="Button for Order" /></Link></li>
            <li><Link to="/About"><img src={about} className="nav-button" alt="Button for About" /></Link></li>
            <li><Link to="/Cart"><img src={cart} className="nav-button" alt="Button for Cart" /></Link></li>
          </ul>
        </nav>
        <img src={banner} id="banner" alt="Home Banner" />
        {/* <img src={topright} /> */}
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/Order" exact component={Order} />
          <Route path="/About" exact component={About} />
          <Route path="/Privacy" exact component={Privacy} />
          <Redirect from="/" to="Home" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
