import React from 'react'
import './TestimonialNavigation.css'

const TestimonialNavigation = () => {
  const dots = [
    { src: "https://static.codia.ai/custom_image/2025-06-11/141915/slider-dot-1.svg", active: false },
    { src: "https://static.codia.ai/custom_image/2025-06-11/141915/slider-dot-2.svg", active: false },
    { src: "https://static.codia.ai/custom_image/2025-06-11/141915/slider-dot-3.svg", active: true },
    { src: "https://static.codia.ai/custom_image/2025-06-11/141915/slider-dot-4.svg", active: false },
    { src: "https://static.codia.ai/custom_image/2025-06-11/141915/slider-dot-5.svg", active: false }
  ]

  return (
    <nav className="testimonial-navigation" aria-label="Testimonial navigation">
      <button className="nav-arrow nav-arrow-left" aria-label="Previous testimonial">
        <img 
          src="https://static.codia.ai/custom_image/2025-06-11/141915/slider-arrow-left.svg" 
          alt="Previous"
          className="arrow-icon"
        />
      </button>
      
      <div className="nav-dots">
        {dots.map((dot, index) => (
          <button 
            key={index}
            className={`nav-dot ${dot.active ? 'active' : ''}`}
            aria-label={`Go to testimonial ${index + 1}`}
          >
            <img 
              src={dot.src} 
              alt={`Dot ${index + 1}`}
              className="dot-icon"
            />
          </button>
        ))}
      </div>
      
      <button className="nav-arrow nav-arrow-right" aria-label="Next testimonial">
        <img 
          src="https://static.codia.ai/custom_image/2025-06-11/141915/slider-arrow-right.svg" 
          alt="Next"
          className="arrow-icon"
        />
      </button>
    </nav>
  )
}

export default TestimonialNavigation
