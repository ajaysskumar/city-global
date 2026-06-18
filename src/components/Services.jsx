export default function Services() {
  const services = [
    { id: 1, name: 'Wedding', icon: '💍' },
    { id: 2, name: 'Pre-Wedding', icon: '💕' },
    { id: 3, name: 'Engagement', icon: '✨' },
    { id: 4, name: 'Maternity', icon: '🤰' },
    { id: 5, name: 'Birthdays', icon: '🎂' },
    { id: 6, name: 'Baby Shoot', icon: '👶' },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => (
            <div 
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
