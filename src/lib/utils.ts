import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return phone
}

export function generateWhatsAppUrl(phone: string, message?: string): string {
  const baseUrl = 'https://wa.me/'
  const cleanPhone = phone.replace(/\D/g, '')
  const url = baseUrl + cleanPhone
  
  if (message) {
    return `${url}?text=${encodeURIComponent(message)}`
  }
  
  return url
}

export function generateGoogleMapsUrl(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}

export function isBusinessOpen(): boolean {
  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours()
  
  // Sunday = 0, closed
  if (day === 0) return false
  
  // Saturday = 6, open 9-4
  if (day === 6) {
    return hour >= 9 && hour < 16
  }
  
  // Weekdays, open 8-6
  return hour >= 8 && hour < 18
}
