import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function GalleryDetail() {
  const { id } = useParams()

  const galleryDetails = {
    'wedding-ceremony': {
      title: 'Wedding Ceremony',
      category: 'Wedding',
      description: 'The most important moment - your wedding ceremony captured in all its glory. From the walk down the aisle to the exchange of vows, every detail is preserved.',
      details: [
        'Ceremony documentation',
        'Bride preparation',
        'Groom moments',
        'Vow exchange',
        'Ring exchange',
        'First kiss & celebration'
      ]
    },
    'couple-portrait': {
      title: 'Couple Portrait',
      category: 'Engagement',
      description: 'Intimate and romantic couple portraits that showcase your connection. Perfect for saving memories of your special time together.',
      details: [
        'Posed portraits',
        'Candid interactions',
        'Multiple locations',
        'Outfit changes',
        'Sunset backdrops',
        'Artistic composition'
      ]
    },
    'maternity-shoot': {
      title: 'Maternity Shoot',
      category: 'Maternity',
      description: 'Celebrate the beauty of motherhood with elegant maternity portraits. These timeless images capture the wonder of pregnancy.',
      details: [
        'Elegant positioning',
        'Flowing fabrics',
        'Soft lighting',
        'Partner inclusion',
        'Silhouette shots',
        'Natural beauty focus'
      ]
    },
    'baby-moment': {
      title: 'Baby Moment',
      category: 'Baby Shoot',
      description: 'Precious newborn and infant photography that captures the magic of early childhood. Safe and comfortable for your little one.',
      details: [
        'Newborn poses',
        'Sleeping shots',
        'Parent interaction',
        'Sibling moments',
        'Artistic props',
        'Tender close-ups'
      ]
    },
    'birthday-celebration': {
      title: 'Birthday Celebration',
      category: 'Birthdays',
      description: 'Capture the joy and excitement of birthday celebrations. From cake cutting to party games, every moment is documented.',
      details: [
        'Event coverage',
        'Cake moments',
        'Guest interactions',
        'Game highlights',
        'Decoration details',
        'Memory-making shots'
      ]
    },
    'prewedding-shoot': {
      title: 'Pre-Wedding Shoot',
      category: 'Pre-Wedding',
      description: 'Romantic pre-wedding photography in scenic locations. Perfect for engagement announcements and creating beautiful memories.',
      details: [
        'Scenic locations',
        'Sunset sessions',
        'Romantic poses',
        'Outfit variety',
        'Natural settings',
        'Urban backdrops'
      ]
    }
  }

  const gallery = galleryDetails[id]

  if (!gallery) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">Go Back Home</Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">← Back Home</Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{gallery.title}</h1>
          <p className="text-lg text-gray-600 mb-2">{gallery.category}</p>
          <p className="text-xl text-gray-700 max-w-3xl">{gallery.description}</p>
        </div>
      </section>

      {/* Main Gallery Image */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="bg-gray-300 rounded-lg h-96 md:h-screen mb-12 flex items-center justify-center">
            <div className="text-center">
              <p className="text-6xl mb-4">📷</p>
              <p className="text-2xl text-gray-600">Featured Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">More from this shoot</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(img => (
              <div key={img} className="bg-gray-300 rounded-lg h-64 flex items-center justify-center hover:shadow-lg transition">
                <div className="text-center">
                  <p className="text-4xl">📷</p>
                  <p className="text-sm text-gray-600 mt-2">Photo {img}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About This Shoot</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.details.map((detail, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-gray-800 font-semibold">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Love what you see?</h2>
          <p className="text-xl text-gray-300 mb-8">Book your {gallery.category.toLowerCase()} photography session today</p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            <a href="/#contact">Get In Touch</a>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
