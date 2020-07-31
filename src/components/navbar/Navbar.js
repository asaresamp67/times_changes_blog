import React, { useState } from 'react'
import './navbar.css'
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
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Posts</a>
        </li>
        <li>
          <a href='#'>Inspirations</a>
        </li>
        <li>
          <a href='#'>Gallery</a>
        </li>
        <li>
          <a href='#'>Contact Us</a>
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
