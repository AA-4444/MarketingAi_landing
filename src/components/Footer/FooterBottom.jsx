import React from 'react'
import './FooterBottom.css'

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="footer-divider">
        <img 
          src="https://static.codia.ai/custom_image/2025-06-11/141915/footer-divider.svg" 
          alt="Footer Divider" 
          className="divider-line"
        />
      </div>
      
      <div className="footer-bottom-content">
        <p className="copyright">
          Copyright © 2022 DOML. All rights reserved.
        </p>
        <p className="legal-links">
          Terms of Use & Privacy Policy
        </p>
      </div>
    </div>
  )
}

export default FooterBottom
