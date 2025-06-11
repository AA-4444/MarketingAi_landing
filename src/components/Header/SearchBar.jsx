import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search DOML" 
        className="search-input"
      />
      <button className="search-button">
        <img 
          src="https://static.codia.ai/custom_image/2025-06-11/141915/search-button.svg" 
          alt="Search" 
          className="search-icon"
        />
      </button>
    </div>
  )
}

export default SearchBar
