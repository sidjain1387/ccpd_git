import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import './MainLayout.css'

const MainLayout = () => {
  return (
    <div>
      <h2>Welcome to the Main Page</h2>
      <nav>
        <ul className='aa'>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Registration</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default MainLayout
