import React from 'react'
import './FooterLogos.css'

const FooterLogos = () => {
  const logoRows = [
    [
      { src: "https://static.codia.ai/custom_image/2025-06-11/141915/footer-logo-1.png", alt: "Footer Logo 1" },
      { src: "https://static.codia.ai/custom_image/2025-06-11/141915/footer-logo-2.png", alt: "Footer Logo 2" },
      { src: "https://static.codia.ai/custom_image/2025-06-11/141915/footer-logo-3.png", alt: "Footer Logo 3" },
      { src: "https://static.codia.ai/custom_image/2025-06-11/141915/footer-logo-4.png", alt: "Footer Logo 4" },
      { src: "https://static.codia.ai/custom_image/2025-06-11/141915/footer-logo-5.png", alt: "Footer Logo 5" },
      { src: "https://static.codia.ai/custom_image/2025-06-11/141915/footer-logo-6.png", alt: "Footer Logo 6" },
      { src: "https://static.codia.ai/custom_image/2025-06-11/141915/footer-logo-7.png", alt: "Footer Logo 7" }
    ],
    [
      { src: "https://static.codia.ai/custom_image/2025-06-11/141915/footer-logo-8.png", alt: "Footer Logo 8" },
      { src: "https://static.codia.ai/custom_image/2025-06-11/141915/footer-logo-9.png", alt: "Footer Logo 9" },
      { src: "https://static.codia.ai/custom_image/2025-06-11/141915/footer-logo-10.png", alt: "Footer Logo 10" },
      { src: "https://static.codia.ai/custom_image/2025-06-11/141915/footer-logo-11.png", alt: "Footer Logo 11" },
      { src: "https://static.codia.ai/custom_image/2025-06-11/141915/footer-logo-12.png", alt: "Footer Logo 12" },
      { src: "https://static.codia.ai/custom_image/2025-06-11/141915/footer-logo-13.png", alt: "Footer Logo 13" },
      { src: "https://static.codia.ai/custom_image/2025-06-11/141915/footer-logo-14.png", alt: "Footer Logo 14" }
    ]
  ]

  return (
    <section className="footer-logos">
      <div className="footer-logo-row">
        {logoRows[0].map((logo, index) => (
          <img 
            key={index}
            src={logo.src} 
            alt={logo.alt}
            className="footer-logo"
          />
        ))}
      </div>
      
      <div className="footer-logo-row">
        {logoRows[1].map((logo, index) => (
          <img 
            key={index}
            src={logo.src} 
            alt={logo.alt}
            className="footer-logo"
          />
        ))}
      </div>
      
      <p className="footer-logos-title">
        Trusted by the world's most ambitious teams.
      </p>
    </section>
  )
}

export default FooterLogos
