import React from 'react'
import Navigation from './Navigation'
import SearchBar from './SearchBar'
import AuthButtons from './AuthButtons'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Navigation />
        <div className="header-right">
          <SearchBar />
          <AuthButtons />
        </div>
      </div>
    </header>
  )
}

export default Header
