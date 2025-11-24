import React from 'react'
import { Zap, Shield, TrendingUp, Users, Code, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const featuresData = [
  {
    icon: Zap,
    title: 'Deploy in 30 seconds, not 30 minutes',
    description: 'Get your projects live faster than ever with our streamlined deployment process. From code to production in seconds.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security for Peace of Mind',
    description: 'Protect your data with our robust security measures, including encryption, access controls, and regular audits.',
  },
  {
    icon: TrendingUp,
    title: 'Scale Effortlessly to Millions of Users',
    description: 'Our platform is built to handle massive scale, ensuring your application remains performant even under heavy load.',
  },
  {
    icon: Users,
    title: 'Collaborate Seamlessly with Your Team',
    description: 'Share code, track progress, and communicate effectively with built-in collaboration tools designed for modern teams.',
  },
  {
    icon: Code,
    title: 'Write Less Code, Achieve More Results',
    description: 'Focus on building features, not boilerplate. Our intuitive APIs and pre-built components accelerate development.',
  },
  {
    icon: CheckCircle,
    title: 'Verified Uptime and Performance',
    description: 'We guarantee 99.9% uptime and consistently fast response times, so you can focus on your users, not infrastructure.',
  },
]

function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Unlock the Power of Acme
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-background/50 rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-foreground/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <feature.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
