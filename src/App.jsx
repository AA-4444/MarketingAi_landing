import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import LogoSection from './components/LogoSection/LogoSection'
import Features from './components/Features/Features'
import Testimonials from './components/Testimonials/Testimonials'
import CallToAction from './components/CallToAction/CallToAction'
import Footer from './components/Footer/Footer'
import BackgroundElements from './components/BackgroundElements/BackgroundElements'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <BackgroundElements />
      <Header />
      <main>
        <Hero />
        <LogoSection />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App
