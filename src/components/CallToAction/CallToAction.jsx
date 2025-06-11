import React from 'react'
import './CallToAction.css'

const CallToAction = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-background">
          <img 
            src="https://static.codia.ai/custom_image/2025-06-11/141915/cta-background.png" 
            alt="CTA Background"
            className="cta-bg-image"
          />
        </div>
        
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">
              Get exponential reach via <span className="gradient-text">AI Marketing</span>
            </h2>
          </div>
          
          <div className="cta-actions">
            <div className="cta-email">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="email-input"
              />
            </div>
            
            <a href="#" className="cta-button">
              Get in touch
              <img 
                src="https://static.codia.ai/custom_image/2025-06-11/141915/arrow-right-6.svg" 
                alt="Arrow Right"
                className="arrow-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
