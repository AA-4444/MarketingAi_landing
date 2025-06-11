import React from 'react'
import './Navigation.css'

const Navigation = () => {
  const navItems = [
    { label: 'Product', hasDropdown: true },
    { label: 'Team', hasDropdown: false },
    { label: 'Enterprise', hasDropdown: false },
    { label: 'Explore', hasDropdown: true },
    { label: 'Marketplace', hasDropdown: false },
    { label: 'Pricing', hasDropdown: false }
  ]

  return (
    <nav className="navigation">
      <div className="logo">
        <img 
          src="https://static.codia.ai/custom_image/2025-06-11/141915/logo.svg" 
          alt="DOML Logo" 
          className="logo-image"
        />
      </div>
      
      <ul className="nav-menu">
        {navItems.map((item, index) => (
          <li key={index} className="nav-item">
            <a href="#" className="nav-link">
              {item.label}
              {item.hasDropdown && (
                <img 
                  src="https://static.codia.ai/custom_image/2025-06-11/141915/dropdown-icon.svg" 
                  alt="Dropdown" 
                  className="dropdown-icon"
                />
              )}
            </a>
          </li>
        ))}
      </ul>
      
      <button className="mobile-menu-toggle">
        <img 
          src="https://static.codia.ai/custom_image/2025-06-11/141915/menu-icon.svg" 
          alt="Menu" 
          className="menu-icon"
        />
      </button>
    </nav>
  )
}

export default Navigation
