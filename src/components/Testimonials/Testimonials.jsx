import React from 'react'
import TestimonialCard from './TestimonialCard'
import TestimonialNavigation from './TestimonialNavigation'
import './Testimonials.css'

const Testimonials = () => {
  const testimonial = {
    text: "It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.",
    author: "Amaka Micheal",
    position: "Media Executive, Buying & Control",
    avatar: "https://static.codia.ai/custom_image/2025-06-11/141915/testimonial-avatar.png",
    rating: "https://static.codia.ai/custom_image/2025-06-11/141915/rating-stars.png"
  }

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <TestimonialCard testimonial={testimonial} />
        <TestimonialNavigation />
      </div>
    </section>
  )
}

export default Testimonials
