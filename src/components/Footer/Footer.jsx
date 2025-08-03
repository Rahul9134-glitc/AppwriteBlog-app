import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-8">

          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div className="mb-4">
              <Logo width="120px" />
            </div>
            <p className="text-sm text-gray-400">&copy; 2025 Blog App. All rights reserved.</p>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h3 className="text-sm font-semibold text-white uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">Features</Link></li>
              <li><Link to="/" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/" className="hover:text-white">Affiliate Program</Link></li>
              <li><Link to="/" className="hover:text-white">Press Kit</Link></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h3 className="text-sm font-semibold text-white uppercase mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">Account</Link></li>
              <li><Link to="/" className="hover:text-white">Help</Link></li>
              <li><Link to="/" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/" className="hover:text-white">Customer Support</Link></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h3 className="text-sm font-semibold text-white uppercase mb-4">Legals</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-white">Licensing</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
