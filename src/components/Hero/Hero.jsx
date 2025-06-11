import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">AI Marketing.</span>
              <span className="hero-title-white">Optimized Reach.</span>
            </h1>
            <p className="hero-description">
              Our vision is to revolutionize the way brands and advertisers target, reach
            </p>
          </div>
          
          <div className="hero-video">
            <img 
              src="https://static.codia.ai/custom_image/2025-06-11/141915/video-player.svg" 
              alt="Video Player" 
              className="video-player"
            />
          </div>
          
          <div className="hero-cta">
            <a href="#" className="btn-primary">
              Get Started
              <img 
                src="https://static.codia.ai/custom_image/2025-06-11/141915/arrow-right.svg" 
                alt="Arrow Right" 
                className="arrow-icon"
              />
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <img 
            src="https://static.codia.ai/custom_image/2025-06-11/141915/hero-image.png" 
            alt="Hero Illustration" 
            className="hero-img"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
