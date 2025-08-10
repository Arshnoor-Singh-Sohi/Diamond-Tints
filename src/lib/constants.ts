
export const BUSINESS_INFO = {
  name: 'Diamond Tints',
  owner: 'Sukhnoor Singh Sohi',
  phone: '6473550079',
  email: 'info@diamondtints.ca',
  whatsapp: '16473550079',
  instagram: 'diamonddetailsandtints',
  location: 'Kingston, Ontario, Canada',
  hours: {
    monday: '8:00 AM - 6:00 PM',
    tuesday: '8:00 AM - 6:00 PM',
    wednesday: '8:00 AM - 6:00 PM',
    thursday: '8:00 AM - 6:00 PM',
    friday: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 4:00 PM',
    sunday: 'Closed',
  },
}

export const SERVICES = [
  {
    id: 'automotive',
    name: 'Automotive Tinting',
    description: 'Professional window tinting for all vehicle types',
    price: 'Starting at $199',
    duration: '2-3 hours',
    warranty: 'Lifetime',
  },
  {
    id: 'security',
    name: 'Security Film',
    description: 'Protection against break-ins and accidents',
    price: 'Starting at $299',
    duration: '3-4 hours',
    warranty: 'Lifetime',
  },
  {
    id: 'ceramic',
    name: 'Ceramic Tinting',
    description: 'Premium heat rejection without signal interference',
    price: 'Starting at $399',
    duration: '3-4 hours',
    warranty: 'Lifetime',
  },
  {
    id: 'removal',
    name: 'Tint Removal',
    description: 'Professional removal of old or damaged tint',
    price: 'Starting at $99',
    duration: '1-2 hours',
    warranty: 'N/A',
  },
]

export const TINT_LEVELS = [
  { percentage: '70%', name: 'Light', description: 'Maximum visibility, UV protection' },
  { percentage: '50%', name: 'Medium-Light', description: 'Balanced visibility and privacy' },
  { percentage: '35%', name: 'Medium', description: 'Good privacy, legal for most vehicles' },
  { percentage: '20%', name: 'Dark', description: 'Enhanced privacy, check local laws' },
  { percentage: '5%', name: 'Limo', description: 'Maximum privacy, rear windows only' },
]
