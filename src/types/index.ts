export interface ContactFormData {
  name: string
  email: string
  phone: string
  vehicle?: string
  service: string
  message?: string
}

export interface Service {
  id: string
  name: string
  description: string
  price: string
  duration: string
  warranty: string
}

export interface Testimonial {
  id: number
  name: string
  rating: number
  comment: string
  vehicle: string
  date?: string
}

export interface GalleryItem {
  id: number
  title: string
  before: string
  after: string
  category: 'Sedan' | 'SUV' | 'Truck' | 'Sports'
  description?: string
}

export interface InstagramPost {
  id: string
  imageUrl: string
  caption: string
  link: string
  timestamp?: string
}