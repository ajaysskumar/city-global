export default function Gallery() {
  const galleryImages = [
    { id: 1, title: 'Wedding Ceremony', category: 'Wedding' },
    { id: 2, title: 'Couple Portrait', category: 'Engagement' },
    { id: 3, title: 'Maternity Shoot', category: 'Maternity' },
    { id: 4, title: 'Baby Moment', category: 'Baby Shoot' },
    { id: 5, title: 'Birthday Celebration', category: 'Birthdays' },
    { id: 6, title: 'Pre-Wedding Shoot', category: 'Pre-Wedding' },
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map(image => (
            <div 
              key={image.id}
              className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition h-64 flex items-center justify-center group"
            >
              <div className="text-center opacity-0 group-hover:opacity-100 transition bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center text-white">
                <p className="text-xl font-semibold">{image.title}</p>
                <p className="text-sm text-gray-300">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
