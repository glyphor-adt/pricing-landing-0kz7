import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import SocialProof from './components/SocialProof'
import CTASection from './components/CTASection'

function App() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-md border-b border-b-foreground/10">
        <div className="container mx-auto p-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold">Acme</a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="hover:text-primary transition-colors duration-200">Features</a>
            <a href="#pricing" className="hover:text-primary transition-colors duration-200">Pricing</a>
            <a href="#testimonials" className="hover:text-primary transition-colors duration-200">Testimonials</a>
            <a href="#contact" className="hover:text-primary transition-colors duration-200">Contact</a>
            <button className="bg-primary text-primary-foreground rounded-lg px-4 py-2 hover:bg-primary/80 transition-colors duration-200">Get Started</button>
          </nav>
          <div className="md:hidden">
            {/* Add hamburger menu icon here */}
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <SocialProof />
        <Pricing />
        <CTASection />
      </main>

      <Footer />
    </>
  )
}

export default App
