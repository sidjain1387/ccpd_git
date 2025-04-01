import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import "../assets/Home.css"

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
        <h1>Home Page</h1>
        <Outlet/>
    </div>
  )
}

export default Home
