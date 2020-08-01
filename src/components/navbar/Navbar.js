import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [search, setSearch] = useState(false)

  const submitSearch = (e) => {
    e.preventDefault()
    //alert('hello')
  }

  const openSearch = () => {
    setSearch(true)
  }

  const searchClass = search
    ? 'navbar_search-input active'
    : 'navbar_search-input'

  return (
    <div className='navbar'>
      <ul className='navbar_list'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about-us'>About Us</Link>
        </li>
        <li>
          <Link to='/contact-us'>Contact Us</Link>
        </li>
        <li>
          <a href='#'>Gallery</a>
        </li>
        <li>
          <Link to='/post'>Post</Link>
        </li>
      </ul>
      <div className='navbar_search'>
        <form onSubmit={submitSearch}>
          <input type='text' placeholder='Search' className={searchClass} />
          <img
            onClick={openSearch}
            src={require('../../assets/images/icons/search.png')}
            alt='search'
            className='search-icon'
          />
        </form>
      </div>
    </div>
  )
}

export default Navbar
