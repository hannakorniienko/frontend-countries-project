import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
        <nav>
            <div>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/fav">Favorite Countries</Link></li>
            </div>
        </nav>
    </header>
  )
}

export default NavBar