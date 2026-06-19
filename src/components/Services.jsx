import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    { id: 'wedding', name: 'Wedding', icon: '💍', description: 'Capturing your big day with elegance and artistry' },
    { id: 'prewedding', name: 'Pre-Wedding', icon: '💕', description: 'Romantic shoots before the big celebration' },
    { id: 'engagement', name: 'Engagement', icon: '✨', description: 'Celebrating your engagement moments' },
    { id: 'maternity', name: 'Maternity', icon: '🤰', description: 'Beautiful moments of motherhood' },
    { id: 'birthdays', name: 'Birthdays', icon: '🎂', description: 'Making birthday celebrations memorable' },
    { id: 'babyshoot', name: 'Baby Shoot', icon: '👶', description: 'Adorable moments of your little ones' },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => (
            <Link
              key={service.id}
              to={`/service/${service.id}`}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer transform hover:scale-105 duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-4 text-blue-600 font-semibold">View Portfolio →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
