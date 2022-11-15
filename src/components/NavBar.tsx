import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/navbar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='item' id='home'><Link to={"bof-frontend-project-basic"}>
        COUNTRIES</Link>
      </div>
      <div className='item'>
        <Link to={"bof-frontend-project-basic/fav"}>
        FAVORITE COUNTRIES</Link>
      </div>
    </div>
  )
}

export default NavBar