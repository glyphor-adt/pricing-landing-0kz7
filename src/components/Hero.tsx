import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          Supercharge Your Workflow with Acme
        </motion.h1>
        <motion.p
          className="text-xl text-gray-200 text-center max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          Automate repetitive tasks, collaborate seamlessly, and unlock unprecedented productivity with our intuitive platform.
        </motion.p>
        <div className="flex justify-center space-x-4">
          <motion.a
            href="#"
            className="bg-primary text-primary-foreground hover:bg-primary/80 px-8 py-4 rounded-xl text-lg shadow-xl transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.5 }}
          >
            Get Started Free
          </motion.a>
          <motion.a
            href="#"
            className="border-2 border-gray-300 hover:border-primary px-6 py-3 rounded-xl text-lg transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.75 }}
          >
            Learn More
          </motion.a>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1696265458339-a5b647930e7a?w=800&h=600)' }} className="absolute inset-0 bg-cover bg-center opacity-20"></div>
      </div>
    </section>
  )
}

export default Hero
