'use client'

import { FaAward, FaClock, FaShieldAlt, FaTools, FaUserTie, FaThumbsUp } from 'react-icons/fa'

const reasons = [
  {
    icon: <FaAward />,
    title: 'Certified Professionals',
    description: 'Factory-trained technicians with years of experience in premium window tinting.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Lifetime Warranty',
    description: 'We stand behind our work with comprehensive lifetime warranty on all installations.',
  },
  {
    icon: <FaClock />,
    title: 'Same Day Service',
    description: 'Most vehicles completed within 2-3 hours. Quick, efficient, without compromising quality.',
  },
  {
    icon: <FaTools />,
    title: 'Premium Materials',
    description: 'We use only the highest quality films from trusted manufacturers.',
  },
  {
    icon: <FaUserTie />,
    title: 'Professional Service',
    description: 'Clean facility, professional staff, and exceptional customer experience.',
  },
  {
    icon: <FaThumbsUp />,
    title: '100% Satisfaction',
    description: 'Not happy? We\'ll make it right. Your satisfaction is our guarantee.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">Why Choose Diamond Tints</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kingston's trusted window tinting experts with over 500+ satisfied customers
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl">
                  {reason.icon}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">5.0</div>
            <div className="text-gray-600">Star Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
