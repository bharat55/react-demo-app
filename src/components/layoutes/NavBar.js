import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/about">About</NavLink>
          </li> 
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/contact">contact</NavLink>
          </li> 
        </ul>
      </div>
    </nav>
  </div>
  )
}

export default NavBar
