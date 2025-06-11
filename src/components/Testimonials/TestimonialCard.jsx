import React from 'react'
import './TestimonialCard.css'

const TestimonialCard = ({ testimonial }) => {
  return (
    <article className="testimonial-card">
      <div className="testimonial-avatar">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.author}
          className="avatar-image"
        />
      </div>
      
      <div className="testimonial-content">
        <blockquote className="testimonial-text">
          {testimonial.text}
        </blockquote>
        
        <footer className="testimonial-footer">
          <cite className="testimonial-author gradient-text">
            {testimonial.author}
          </cite>
          <p className="testimonial-position">
            {testimonial.position}
          </p>
          <div className="testimonial-rating">
            <img 
              src={testimonial.rating} 
              alt="5 star rating"
              className="rating-stars"
            />
          </div>
        </footer>
      </div>
    </article>
  )
}

export default TestimonialCard
