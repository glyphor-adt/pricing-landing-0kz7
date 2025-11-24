import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-background/70 backdrop-blur-md border-t border-t-foreground/10 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Acme. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-primary transition-colors duration-200">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-primary transition-colors duration-200">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-primary transition-colors duration-200">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-primary transition-colors duration-200">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
