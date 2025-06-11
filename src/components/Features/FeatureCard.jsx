import React from 'react'
import './FeatureCard.css'

const FeatureCard = ({ title, subtitle, description, image, imagePosition, rotated }) => {
  const highlightText = (text) => {
    return text.split(/(data-driven insights|relationships|strategic execution)/).map((part, index) => {
      if (['data-driven insights', 'relationships', 'strategic execution'].includes(part)) {
        return <span key={index} className="highlight-text">{part}</span>
      }
      return part
    })
  }

  return (
    <article className={`feature-card ${imagePosition === 'left' ? 'reverse' : ''}`}>
      <div className="feature-content">
        <header className="feature-header">
          <h2 className="feature-title">
            <span className="gradient-text">{title}</span>
          </h2>
          <h3 className="feature-subtitle">{subtitle}</h3>
        </header>
        
        <div className="feature-description">
          <p>{highlightText(description)}</p>
        </div>
        
        <div className="feature-divider">
          <img 
            src={`https://static.codia.ai/custom_image/2025-06-11/141915/divider-line-${imagePosition === 'right' ? '1' : imagePosition === 'left' ? '2' : '3'}.svg`}
            alt="Divider" 
            className="divider-line"
          />
        </div>
        
        <div className="feature-cta">
          <a href="#" className="btn-primary">
            Learn more
            <img 
              src={`https://static.codia.ai/custom_image/2025-06-11/141915/arrow-right-${imagePosition === 'right' ? '2' : imagePosition === 'left' ? '3' : '4'}.svg`}
              alt="Arrow Right" 
              className="arrow-icon"
            />
          </a>
        </div>
      </div>
      
      <div className={`feature-image ${rotated ? 'rotated' : ''}`}>
        {rotated ? (
          <div className="rotated-container">
            <img 
              src={image} 
              alt={`${title} Feature`}
              className="feature-img"
            />
          </div>
        ) : (
          <img 
            src={image} 
            alt={`${title} Feature`}
            className="feature-img"
          />
        )}
      </div>
    </article>
  )
}

export default FeatureCard
