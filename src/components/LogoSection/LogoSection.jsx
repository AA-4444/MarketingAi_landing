import React from 'react'
import './LogoSection.css'

const LogoSection = () => {
  const logoRows = [
    [
      { src: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-11/4oKLvtddWM.png", alt: "Partner Logo 1" },
      { src: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-11/Vbx9iL3LPR.png", alt: "Partner Logo 2" },
      { src: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-11/5ZaXFyK1qk.png", alt: "Partner Logo 3" },
      { src: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-11/4PK3c5wTVj.png", alt: "Partner Logo 4" },
      { src: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-11/dSCDq2oXBj.png", alt: "Partner Logo 5" },
      { src: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-11/Rrvw0E0nwP.png", alt: "Partner Logo 6" },
      { src: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-11/TavZgnVUUr.png", alt: "Partner Logo 7" }
    ],
    [
      { src: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-11/iOoxRfMN8M.png", alt: "Partner Logo 8" },
      { src: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-11/2XhDWpLTji.png", alt: "Partner Logo 9" },
      { src: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-11/BU9aXLJFfa.png", alt: "Partner Logo 10" },
      { src: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-11/NFSMMydU3s.png", alt: "Partner Logo 11" },
      { src: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-11/GoKBVRJt5E.png", alt: "Partner Logo 12" },
      { src: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-11/agOWEELuko.png", alt: "Partner Logo 13" },
      { src: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-11/KvZSBTkNBW.png", alt: "Partner Logo 14" }
    ]
  ]

  return (
    <section className="logo-section">
      <div className="logo-container">
        <div className="logo-row">
          {logoRows[0].map((logo, index) => (
            <img 
              key={index}
              src={logo.src} 
              alt={logo.alt}
              className="partner-logo"
            />
          ))}
        </div>
        
        <div className="logo-row">
          {logoRows[1].map((logo, index) => (
            <img 
              key={index}
              src={logo.src} 
              alt={logo.alt}
              className="partner-logo"
            />
          ))}
        </div>
        
        <p className="logo-section-title">
          Trusted by the world's most ambitious teams.
        </p>
      </div>
    </section>
  )
}

export default LogoSection
