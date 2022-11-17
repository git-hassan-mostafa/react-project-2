import React from 'react'
import { NavLink } from 'react-router-dom'
import About from './About'
import Home from './Home'

const NavBar = () => {
  const linkStyle=({isActive})=>{
    return {
      color: isActive && 'white' ,
    }
    
  }
  return (
    <div className='nav-bar'>
      <NavLink style={linkStyle} className='link' to={'/'}  >Home</NavLink>
      <NavLink style={linkStyle} className='link' to={'/about'}  >About us</NavLink>
    </div>
  )
}

export default NavBar
