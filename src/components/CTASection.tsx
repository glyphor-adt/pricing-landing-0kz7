import React from 'react'
import { motion } from 'framer-motion'

function CTASection() {
  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-primary-foreground mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join thousands of successful teams already using Acme to streamline their workflows and achieve unprecedented results. Start your free trial today!
        </motion.p>
        <motion.a
          href="#"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/80 px-8 py-4 rounded-xl text-lg shadow-xl transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Start Your Free Trial
        </motion.a>
      </div>
    </section>
  )
}

export default CTASection
