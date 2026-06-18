import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="container flex items-center justify-between py-4">
        <div className="text-2xl font-bold text-gray-900">City Global Digital Studio</div>
        
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul className={`${isOpen ? 'block' : 'hidden'} md:flex gap-8 absolute md:static top-16 left-0 right-0 md:top-auto bg-white md:bg-transparent p-4 md:p-0`}>
          <li><a href="#services" className="text-gray-700 hover:text-gray-900">Services</a></li>
          <li><a href="#gallery" className="text-gray-700 hover:text-gray-900">Gallery</a></li>
          <li><a href="#team" className="text-gray-700 hover:text-gray-900">Team</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
