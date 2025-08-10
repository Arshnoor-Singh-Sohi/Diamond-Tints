export const contactFormSchema = {
  name: {
    required: 'Name is required',
    minLength: {
      value: 2,
      message: 'Name must be at least 2 characters',
    },
    maxLength: {
      value: 50,
      message: 'Name must be less than 50 characters',
    },
  },
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address',
    },
  },
  phone: {
    required: 'Phone number is required',
    pattern: {
      value: /^[\d\s\-\(\)]+$/,
      message: 'Invalid phone number',
    },
    minLength: {
      value: 10,
      message: 'Phone number must be at least 10 digits',
    },
  },
  vehicle: {
    maxLength: {
      value: 100,
      message: 'Vehicle details must be less than 100 characters',
    },
  },
  service: {
    required: 'Please select a service',
  },
  message: {
    maxLength: {
      value: 500,
      message: 'Message must be less than 500 characters',
    },
  },
}