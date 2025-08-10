
'use client'

const testimonials = [
  {
    id: 1,
    name: 'Michael Chen',
    rating: 5,
    comment: 'Excellent service! Professional installation and the tint quality is outstanding. Highly recommend!',
    vehicle: '2023 BMW X5',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Best tinting service in Kingston. Fair prices and amazing results. My car looks fantastic!',
    vehicle: '2022 Honda Accord',
  },
  {
    id: 3,
    name: 'David Williams',
    rating: 5,
    comment: 'Quick, professional, and great attention to detail. The lifetime warranty gives peace of mind.',
    vehicle: '2024 Ford F-150',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">Customer Reviews</h2>
          <p className="text-lg text-gray-600">See what our customers say about us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.vehicle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}