import React from 'react'
import { motion } from 'framer-motion'

function SocialProof() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Trusted by Thousands of Developers
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          <motion.div
            className="bg-background/50 rounded-2xl shadow-xl p-4 md:p-6 w-full md:w-auto border border-foreground/10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-400 italic text-center mb-4">
              "Acme has revolutionized our workflow. We've seen a 50% reduction in deployment time and a significant boost in team collaboration."
            </p>
            <div className="flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1570295999680-6c26abb98d92?w=100&h=100&fit=crop&facepad=3&face=center" alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="text-foreground font-semibold">Jane Doe</p>
                <p className="text-gray-500 text-sm">CEO, TechCorp</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-background/50 rounded-2xl shadow-xl p-4 md:p-6 w-full md:w-auto border border-foreground/10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-gray-400 italic text-center mb-4">
              "The platform's intuitive interface and powerful features have empowered our team to deliver projects faster and with greater efficiency."
            </p>
            <div className="flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&facepad=3&face=center" alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="text-foreground font-semibold">John Smith</p>
                <p className="text-gray-500 text-sm">CTO, Innovation Inc.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 flex justify-center items-center space-x-8 opacity-70"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div>
            <span className="text-gray-400 mr-2">Powered by</span>
          </div>
          <div>
            <img src="https://tailwindui.com/img/logos/158x48/tailwindui-mark.svg" alt="Tailwind UI" className="h-6" />
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React" className="h-6" />
          </div>
          <div>
            <img src="https://avatars.githubusercontent.com/u/14985020?s=280&v=4" alt="Vite" className="h-6" />
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default SocialProof
