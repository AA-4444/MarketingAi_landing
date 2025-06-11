import React from 'react'
import FooterLogos from './FooterLogos'
import FooterBottom from './FooterBottom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <FooterLogos />
        <FooterBottom />
      </div>
    </footer>
  )
}

export default Footer
