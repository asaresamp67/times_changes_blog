import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <nav className='header_nav'>
        <Link to='/'>Home</Link>
        <Link to='/about-us'>About Us</Link>
        <Link to='/contact-us'>Contact Us</Link>
        <Link to='/post'>Post</Link>
      </nav>
      <div>Social Media Links </div>
    </header>
  )
}

export default Header
