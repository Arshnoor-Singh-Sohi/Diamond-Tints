'use client'

import { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaInstagram, FaWhatsapp, FaCheck, FaCopy, FaCheckCircle } from 'react-icons/fa'

type FormData = {
  name: string
  email: string
  phone: string
  vehicle: string
  service: string
  message: string
}

type ValidationState = {
  name: boolean
  email: boolean
  phone: boolean
  service: boolean
}

// Skip-to-content link component
const SkipToContent = () => (
  <a
    href="#contact"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
               bg-blue-600 text-white px-4 py-2 rounded-md z-50 
               focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    Skip to contact form
  </a>
)



// Click-to-copy component
const CopyableText = ({ 
  text, 
  displayText, 
  icon, 
  label 
}: { 
  text: string
  displayText: string
  icon: React.ReactNode
  label: string 
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="flex items-start gap-3 md:gap-4 group">
      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg 
                    flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{label}</h4>
        <div className="flex items-center gap-2">
          <span className="text-blue-600 hover:text-blue-700 font-medium text-sm md:text-base break-all">
            {displayText}
          </span>
          <button
            onClick={handleCopy}
            className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded
                       transition-all duration-200 focus:opacity-100 focus:outline-none 
                       focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            aria-label={`Copy ${label.toLowerCase()}`}
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <FaCheck className="text-green-500 text-sm" />
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <FaCopy className="text-gray-400 text-sm" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
        {copied && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-green-600 mt-1"
          >
            Copied to clipboard!
          </motion.p>
        )}
      </div>
    </div>
  )
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [validationState, setValidationState] = useState<ValidationState>({
    name: false,
    email: false,
    phone: false,
    service: false
  })
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    message: ''
  })
  
  const formRef = useRef<HTMLFormElement>(null)
  
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm<FormData>()

  // Watch form values for real-time validation and auto-save
  const watchedFields = watch()

  // Auto-save form data to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('diamond-tints-form')
      if (savedData) {
        try {
          const parsed = JSON.parse(savedData)
          setFormData(parsed)
          // Note: We don't auto-populate the form to avoid UX issues, 
          // but we keep the data available for recovery
        } catch (e) {
          console.log('Could not parse saved form data')
        }
      }
    }
  }, [])

  // Save form data on changes
  useEffect(() => {
    if (watchedFields && typeof window !== 'undefined') {
      const dataToSave = {
        ...watchedFields,
        lastSaved: Date.now()
      }
      localStorage.setItem('diamond-tints-form', JSON.stringify(dataToSave))
    }
  }, [watchedFields])

  // Real-time validation
  useEffect(() => {
    const newValidationState = {
      name: watchedFields?.name?.length >= 2,
      email: /^\S+@\S+\.\S+$/.test(watchedFields?.email || ''),
      phone: /^[\d\s\-\(\)]{10,}$/.test(watchedFields?.phone?.replace(/\D/g, '') || ''),
      service: watchedFields?.service?.length > 0
    }
    setValidationState(newValidationState)
  }, [watchedFields])

  // Auto-format phone number
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 3) return numbers
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`
  }

  // Quick service selector
  const quickServices = [
    'Full Vehicle Tint',
    'Front Windows Only', 
    'Ceramic Upgrade',
    'Free Consultation'
  ]

  const selectQuickService = (service: string) => {
    const event = new Event('input', { bubbles: true })
    const serviceSelect = document.querySelector('select[name="service"]') as HTMLSelectElement
    if (serviceSelect) {
      serviceSelect.value = service
      serviceSelect.dispatchEvent(event)
    }
  }

  // Format the form data into a readable WhatsApp message
  const formatWhatsAppMessage = (data: FormData): string => {
    let message = "*New Service Request - Diamond Tints*\n"
    message += "=============================\n\n"
    
    message += `*Full Name:* ${data.name}\n`
    message += `*Email:* ${data.email}\n`
    message += `*Phone:* ${data.phone}\n`
    
    if (data.vehicle.trim()) {
      message += `*Vehicle:* ${data.vehicle}\n`
    }
    
    message += `*Service Requested:* ${data.service}\n`
    
    if (data.message.trim()) {
      message += `*Additional Details:*\n${data.message}\n`
    }
    
    message += `\n*Date Submitted:* ${new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })} at ${new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })}\n`
    
    message += "\n✅ Please reply with availability for quote/consultation"
    
    return message
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Format the message for WhatsApp
      const whatsappMessage = formatWhatsAppMessage(data)
      
      // WhatsApp number (from your constants)
      const whatsappNumber = '16473550079'
      
      // Create WhatsApp URL with formatted message
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
      
      // Small delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Open WhatsApp in a new window/tab for better UX
      const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
      
      if (whatsappWindow) {
        setSubmitStatus('success')
        reset() // Clear the form
        // Clear saved form data
        if (typeof window !== 'undefined') {
          localStorage.removeItem('diamond-tints-form')
        }
      } else {
        // Fallback if popup was blocked
        window.location.href = whatsappUrl
      }
      
    } catch (error) {
      console.error('Error sending WhatsApp message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const messageLength = watchedFields?.message?.length || 0
  const messageLimit = 500

  return (
    <>
      <SkipToContent />
      
      <section id="contact" className="section-padding bg-gray-50">
        <div className="container">
          {/* Section Header - Mobile optimized */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Get In Touch
            </h1>
            <p className="text-base md:text-lg text-gray-600 px-4">
              Ready to transform your vehicle? Contact us for professional window tinting!
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 
                         rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Typically respond within 1 hour
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information - Mobile optimized */}
            <div className="order-2 lg:order-1">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">
                Contact Information
              </h2>

              <div className="space-y-4 md:space-y-6 mb-8">
                {/* Phone with copy functionality */}
                <CopyableText
                  text="6473550079"
                  displayText="(647) 355-0079"
                  icon={<FaPhone className="text-blue-600 text-sm md:text-base" />}
                  label="Phone"
                />

                {/* Email with copy functionality */}
                <CopyableText
                  text="info@diamondtints.ca"
                  displayText="info@diamondtints.ca"
                  icon={<FaEnvelope className="text-blue-600 text-sm md:text-base" />}
                  label="Email"
                />

                {/* Location */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg 
                                flex items-center justify-center">
                    <FaMapMarkerAlt className="text-blue-600 text-sm md:text-base" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Location</h3>
                    <p className="text-gray-600 text-sm md:text-base">Kingston, Ontario</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg 
                                flex items-center justify-center">
                    <FaClock className="text-blue-600 text-sm md:text-base" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Business Hours</h3>
                    <div className="text-gray-600 text-xs md:text-sm space-y-1">
                      <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                      <p>Sat: 9:00 AM - 4:00 PM</p>
                      <p>Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram Link - Mobile optimized */}
              <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">Follow Our Work</h3>
                <a 
                  href="https://www.instagram.com/diamonddetailsandtints" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 
                           font-medium text-sm md:text-base focus:outline-none focus:ring-2 
                           focus:ring-blue-500 focus:ring-offset-2 rounded"
                  aria-label="Visit Diamond Tints Instagram page"
                >
                  <FaInstagram className="text-lg md:text-xl" />
                  <span className="break-all">@diamonddetailsandtints</span>
                </a>
              </div>
            </div>

            {/* Contact Form - Mobile optimized */}
            <div className="order-1 lg:order-2">
              <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                  Request Service Quote
                </h2>

                {/* Quick Service Selectors */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-3">Popular Services:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickServices.map((service) => (
                      <motion.button
                        key={service}
                        type="button"
                        onClick={() => selectQuickService(service)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="p-2 text-xs md:text-sm bg-blue-50 hover:bg-blue-100 
                                 text-blue-700 rounded-lg border border-blue-200 
                                 transition-colors duration-200 focus:outline-none 
                                 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                      >
                        {service}
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg 
                                 text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                 transition-all pr-10"
                        placeholder="John Doe"
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      <AnimatePresence>
                        {validationState.name && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          >
                            <FaCheckCircle className="text-green-500 text-lg" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <input
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        type="email"
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg 
                                 text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                 transition-all pr-10"
                        placeholder="john@example.com"
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      <AnimatePresence>
                        {validationState.email && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          >
                            <FaCheckCircle className="text-green-500 text-lg" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone with auto-formatting */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <div className="relative">
                      <input
                        {...register('phone', { 
                          required: 'Phone is required',
                          onChange: (e) => {
                            e.target.value = formatPhoneNumber(e.target.value)
                          }
                        })}
                        type="tel"
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg 
                                 text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                 transition-all pr-10"
                        placeholder="(555) 123-4567"
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      <AnimatePresence>
                        {validationState.phone && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          >
                            <FaCheckCircle className="text-green-500 text-lg" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Vehicle */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle (Year, Make, Model)
                    </label>
                    <input
                      {...register('vehicle')}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg 
                               text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                               transition-all"
                      placeholder="2024 Honda Civic"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <div className="relative">
                      <select
                        {...register('service', { required: 'Please select a service' })}
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg 
                                 text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                 transition-all pr-10 appearance-none bg-white"
                        aria-describedby={errors.service ? "service-error" : undefined}
                      >
                        <option value="">Select a service</option>
                        <option value="Full Vehicle Tint">Full Vehicle Tint</option>
                        <option value="Front Windows Only">Front Windows Only</option>
                        <option value="Rear Windows Only">Rear Windows Only</option>
                        <option value="Windshield Strip">Windshield Strip</option>
                        <option value="Ceramic Tint Upgrade">Ceramic Tint Upgrade</option>
                        <option value="Security Film">Security Film</option>
                        <option value="Tint Removal">Tint Removal</option>
                        <option value="Free Consultation">Free Consultation</option>
                        <option value="Other">Other (Please specify in message)</option>
                      </select>
                      <AnimatePresence>
                        {validationState.service && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="absolute right-8 top-1/2 transform -translate-y-1/2"
                          >
                            <FaCheckCircle className="text-green-500 text-lg" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {errors.service && (
                      <p id="service-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Message with character counter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <div className="relative">
                      <textarea
                        {...register('message')}
                        rows={4}
                        maxLength={messageLimit}
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg 
                                 text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                 transition-all resize-none"
                        placeholder="Tell us about your tinting preferences, timeline, or any questions you have..."
                      />
                      <div className={`absolute bottom-2 right-3 text-xs ${
                        messageLength > messageLimit * 0.9 ? 'text-orange-500' : 'text-gray-400'
                      }`}>
                        {messageLength}/{messageLimit}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button with enhanced animations */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full px-6 py-3 md:py-4 bg-blue-600 text-white font-semibold 
                             text-base md:text-lg rounded-lg hover:bg-blue-700 
                             disabled:opacity-50 disabled:cursor-not-allowed 
                             transition-colors duration-300 flex items-center justify-center gap-2
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-describedby="submit-help"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="rounded-full h-5 w-5 border-b-2 border-white"
                        />
                        <span>Preparing Message...</span>
                      </>
                    ) : (
                      <>
                        <FaWhatsapp className="text-lg" />
                        <span>Send via WhatsApp</span>
                      </>
                    )}
                  </motion.button>

                  {/* Status Messages with enhanced animations */}
                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.9 }}
                        className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm md:text-base"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                          >
                            <FaWhatsapp className="text-green-600" />
                          </motion.div>
                          <strong>Message Prepared Successfully!</strong>
                        </div>
                        <p>
                          WhatsApp should have opened with your service request. If it didn&apos;t open automatically, 
                          please check your popup blocker or call us directly at (647) 355-0079.
                        </p>
                      </motion.div>
                    )}
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm md:text-base"
                        role="alert"
                      >
                        <strong>Unable to open WhatsApp.</strong> Please call us directly at (647) 355-0079 
                        or try again with a different browser.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>

                {/* Info Box */}
                {/* <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <FaWhatsapp className="text-blue-600 text-xl mt-0.5 flex-shrink-0" />
                    <div className="text-sm md:text-base text-blue-800">
                      <p className="font-semibold mb-1">How it works:</p>
                      <p>
                        When you click "Send via WhatsApp", we&apos;ll format your information and open 
                        WhatsApp with a pre-written message. You can review and send it directly to us 
                        for the fastest response!
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}