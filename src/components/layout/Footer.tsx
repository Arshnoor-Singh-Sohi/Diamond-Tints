
'use client'

import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaWhatsapp, FaClock } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Diamond Tints
            </h3>
            <p className="text-gray-400 mb-4">
              Professional window tinting services in Kingston, Ontario. 
              Quality work, lifetime warranty, competitive prices.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/diamonddetailsandtints"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href={`https://wa.me/16473550079`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Automotive Tinting</li>
              <li className="text-gray-400">Security Film</li>
              <li className="text-gray-400">UV Protection</li>
              <li className="text-gray-400">Privacy Tinting</li>
              <li className="text-gray-400">Ceramic Tinting</li>
              <li className="text-gray-400">Tint Removal</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaPhone className="text-blue-400 mt-1" />
                <div>
                  <a href="tel:6473550079" className="text-gray-400 hover:text-white transition-colors">
                    (647) 355-0079
                  </a>
                  <p className="text-sm text-gray-500">Sukhnoor Singh Sohi</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-blue-400 mt-1" />
                <a href="mailto:info@diamondtints.ca" className="text-gray-400 hover:text-white transition-colors">
                  info@diamondtints.ca
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1" />
                <span className="text-gray-400">
                  Kingston, Ontario, Canada
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FaClock className="text-blue-400 mt-1" />
                <div className="text-gray-400 text-sm">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Diamond Tints. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Bar for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 z-40">
        <div className="grid grid-cols-2 gap-[1px] bg-gray-800">
          <a
            href="tel:6473550079"
            className="bg-gray-900 py-3 flex items-center justify-center gap-2 text-white hover:bg-gray-800 transition-colors"
          >
            <FaPhone />
            <span>Call Now</span>
          </a>
          <a
            href={`https://wa.me/16473550079`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 py-3 flex items-center justify-center gap-2 text-white hover:bg-gray-800 transition-colors"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  )
}