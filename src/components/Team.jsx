export default function Team() {
  const team = [
    { id: 1, name: 'Shweta Rathi', role: 'Lead Photographer' },
    { id: 2, name: 'Aarti Gupta', role: 'Photographer' },
  ]

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Meet Our Team</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-600 mb-12">
            Our photography team has continued to evolve, capturing the essence of love while staying true to our unique style. Each photographer brings their artistic approach and attention to detail to every moment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map(member => (
              <div 
                key={member.id}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
