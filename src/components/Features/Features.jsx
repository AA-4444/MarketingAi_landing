import React from 'react'
import FeatureCard from './FeatureCard'
import './Features.css'

const Features = () => {
  const features = [
    {
      id: 1,
      title: "AI Marketing",
      subtitle: "Optimized Reach",
      description: "DOML is a digital media agency powered by AI technology providing real time, data-driven insights on your business and audience. The mission of DOML is to create the best experiences for companies through intelligent insights, powerful analytics and strategic execution.",
      image: "https://static.codia.ai/custom_image/2025-06-11/141915/feature-image-1.png",
      imagePosition: "right",
      rotated: true
    },
    {
      id: 2,
      title: "AI Marketing",
      subtitle: "Optimized Reach",
      description: "It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.",
      image: "https://static.codia.ai/custom_image/2025-06-11/141915/feature-image-2.png",
      imagePosition: "left"
    },
    {
      id: 3,
      title: "AI Marketing",
      subtitle: "Optimized Reach",
      description: "DOML is a digital media agency powered by AI technology providing realtime, data-driven insights on your business and audience. The mission of DOML is to create the best experiences for companies through intelligent insights, powerful analytics and strategic execution.",
      image: "https://static.codia.ai/custom_image/2025-06-11/141915/feature-image-3.png",
      imagePosition: "right"
    },
    {
      id: 4,
      title: "AI Marketing",
      subtitle: "Optimized Reach",
      description: "It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.",
      image: "https://static.codia.ai/custom_image/2025-06-11/141915/feature-image-4.png",
      imagePosition: "left"
    }
  ]

  return (
    <section className="features">
      <div className="features-container">
        {features.map((feature) => (
          <FeatureCard 
            key={feature.id}
            {...feature}
          />
        ))}
      </div>
    </section>
  )
}

export default Features
