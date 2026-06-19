import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ServiceDetail() {
  const { id } = useParams()

  const serviceDetails = {
    wedding: {
      name: 'Wedding Photography',
      icon: '💍',
      description: 'Capture the magic of your wedding day with stunning, timeless photography. Our experienced photographers blend artistry with emotion to preserve every precious moment of your celebration.',
      details: [
        'Full day coverage',
        'Pre-wedding photoshoot',
        'Candid and posed shots',
        'High-resolution editing',
        'Digital album delivery',
        'Print options available'
      ],
      showcase: [
        'Grand ceremony moments',
        'Intimate couple portraits',
        'Reception highlights',
        'Detailed shots of décor',
        'Guest candids',
        'First dance & cutting cake'
      ]
    },
    prewedding: {
      name: 'Pre-Wedding Photography',
      icon: '💕',
      description: 'Celebrate your love story with a romantic pre-wedding photoshoot. Perfect for engagement announcements, save-the-dates, and creating beautiful memories before the big day.',
      details: [
        'Multiple location options',
        '2-4 hour session',
        'Outfit changes included',
        'Romantic & candid shots',
        'Professional editing',
        'Digital delivery + prints'
      ],
      showcase: [
        'Scenic location shots',
        'Sunset portraits',
        'Candid romantic moments',
        'Traditional attire options',
        'Urban backdrops',
        'Nature-inspired settings'
      ]
    },
    engagement: {
      name: 'Engagement Photography',
      icon: '✨',
      description: 'Document the joy of your engagement with beautiful, professional photography. Perfect for announcing your special news and creating lasting memories.',
      details: [
        'Custom location selection',
        '2-hour session',
        'Multiple outfit changes',
        'Casual & formal shots',
        'Quick turnaround editing',
        'Digital + printed copies'
      ],
      showcase: [
        'Ring close-ups',
        'Couple poses',
        'Location highlights',
        'Candid moments',
        'Detail shots',
        'Family-friendly options'
      ]
    },
    maternity: {
      name: 'Maternity Photography',
      icon: '🤰',
      description: 'Celebrate the beauty of motherhood with elegant maternity portraits. Create timeless memories of this special journey before your baby arrives.',
      details: [
        'Indoor studio options',
        'Outdoor natural settings',
        'Partner & family included',
        '1-2 hour session',
        'Comfortable & safe positioning',
        'Soft, glowing edits'
      ],
      showcase: [
        'Elegant belly portraits',
        'Partner interaction shots',
        'Silhouette photography',
        'Gentle close-ups',
        'Family maternity shots',
        'Artistic maternity art'
      ]
    },
    birthdays: {
      name: 'Birthday Photography',
      icon: '🎂',
      description: 'Make birthdays unforgettable with professional event photography. Capture the joy, laughter, and special moments of celebration.',
      details: [
        'Full event coverage',
        '4-8 hour sessions',
        'Candid & posed shots',
        'Decoration captures',
        'Guest photography',
        'Fast editing & delivery'
      ],
      showcase: [
        'Cake cutting moments',
        'Party highlights',
        'Guest interactions',
        'Decoration details',
        'Performance shots',
        'Group photos'
      ]
    },
    babyshoot: {
      name: 'Baby Photography',
      icon: '👶',
      description: 'Capture the precious moments of your newborn with artistic and tender baby photography. Perfect for newborns and growing babies.',
      details: [
        'Studio setup available',
        'Safe & comfortable handling',
        'Parent & sibling included',
        'Newborn & growth stages',
        'Artistic props & setups',
        'Beautiful color corrections'
      ],
      showcase: [
        'Newborn close-ups',
        'Sleeping baby poses',
        'Parent-baby interaction',
        'Milestone moments',
        'Artistic setups',
        'Growth progression'
      ]
    }
  }

  const service = serviceDetails[id]

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
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
          <div className="flex items-center gap-6 mb-8">
            <div className="text-6xl">{service.icon}</div>
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">{service.name}</h1>
              <p className="text-xl text-gray-600">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Included</h2>
              <ul className="space-y-4">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-2xl">✓</span>
                    <span className="text-lg text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Showcase Highlights</h2>
              <ul className="space-y-4">
                {service.showcase.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-2xl">📸</span>
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(img => (
              <div key={img} className="bg-gray-300 rounded-lg h-64 flex items-center justify-center text-gray-600">
                <div className="text-center">
                  <p className="text-2xl">📷</p>
                  <p className="text-sm">Photo {img}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Book?</h2>
          <p className="text-xl text-gray-300 mb-8">Get in touch with us to discuss your {service.name.toLowerCase()} needs</p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            <a href="/#contact">Contact Us</a>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
