import React from 'react'
import { CheckCircle, XCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const pricingData = [
  {
    title: 'Starter',
    price: 'Free',
    features: [
      'Limited Access',      
      'Basic Features',      
      'Community Support',      
      'Up to 5 Users',      
      '1 Project',      
    ],
  },
  {
    title: 'Pro',
    price: '$19/month',
    isPopular: true,
    features: [
      'Unlimited Access',      
      'Advanced Features',      
      'Priority Support',      
      'Unlimited Users',      
      '10 Projects',      
      'Collaboration Tools',
    ],
  },
  {
    title: 'Enterprise',
    price: 'Contact Us',
    features: [
      'Custom Solutions',      
      'Dedicated Support',      
      'Unlimited Everything',      
      'Advanced Analytics',      
      'Custom Integrations',      
      'Dedicated Account Manager',
    ],
  },
]

function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Choose the Perfect Plan
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-background/50 rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-foreground/10 ${plan.isPopular ? 'border-primary' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {plan.isPopular && (
                <div className="bg-primary text-primary-foreground py-1 px-3 rounded-full absolute top-4 right-4 text-sm">Most Popular</div>
              )}
              <h3 className="text-3xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-gray-400 text-2xl mb-6">{plan.price}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    {feature.startsWith('Unlimited') || feature.startsWith('Dedicated') ? (
                      <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    ) : (
                      <XCircle className="w-5 h-5 text-gray-500 mr-2" />
                    )}
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-primary text-primary-foreground hover:bg-primary/80 px-6 py-3 rounded-xl text-lg w-full transition-colors duration-300">
                {plan.price === 'Contact Us' ? 'Contact Sales' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
