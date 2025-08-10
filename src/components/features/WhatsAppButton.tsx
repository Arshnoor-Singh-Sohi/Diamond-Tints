'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const phoneNumber = '16473550079'
  const message = 'Hi! I am interested in window tinting services.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 
                 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 
                 transition-all duration-300 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}
