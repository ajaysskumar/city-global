import { Link } from 'react-router-dom'

export default function Gallery() {
  const galleryImages = [
    { id: 'wedding-ceremony', title: 'Wedding Ceremony', category: 'Wedding' },
    { id: 'couple-portrait', title: 'Couple Portrait', category: 'Engagement' },
    { id: 'maternity-shoot', title: 'Maternity Shoot', category: 'Maternity' },
    { id: 'baby-moment', title: 'Baby Moment', category: 'Baby Shoot' },
    { id: 'birthday-celebration', title: 'Birthday Celebration', category: 'Birthdays' },
    { id: 'prewedding-shoot', title: 'Pre-Wedding Shoot', category: 'Pre-Wedding' },
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map(image => (
            <Link
              key={image.id}
              to={`/gallery/${image.id}`}
              className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition h-64 flex items-center justify-center group cursor-pointer"
            >
              <div className="text-center opacity-0 group-hover:opacity-100 transition bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center text-white">
                <p className="text-xl font-semibold">{image.title}</p>
                <p className="text-sm text-gray-300">{image.category}</p>
                <p className="text-xs mt-2">Click to view →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
