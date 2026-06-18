import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you'd send this to a backend or email service
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                placeholder="Tell us about your event..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 text-center text-gray-600">
            <p className="mb-2">Or contact us directly:</p>
            <p className="text-lg font-semibold">+91 620 192 5468</p>
          </div>
        </div>
      </div>
    </section>
  )
}
