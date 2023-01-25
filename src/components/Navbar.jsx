import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <NavLink to = '/'>
      <div className='Brand'><h1>Book- <span>Hook</span></h1></div>
      </NavLink>
      <div className="menuIcon">
        <ul className="navlist">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Buy">Buy</NavLink>
          </li>
          <li>
            <NavLink to="/Donate">Donate</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li>
          <NavLink><button>Sign-in</button></NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar