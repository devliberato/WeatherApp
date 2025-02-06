import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className="nav-container">
        <ul>
          <li>  <Link to="/Home">Home</Link></li>
          <li> <Link to="/weather">Weather</Link></li>
          <li><Link to="/Info">Informações</Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar