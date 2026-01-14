'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image src="https://danholtsuites.com/wp-content/uploads/2024/12/IMG-20241213-WA0006.jpg" alt="Contact Danholt Suites" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">We're Here to Help</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-light text-gray-800 mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600">#3 Iyabo, Obeyode Street<br />(Beside Collinear Hospital)<br />Dogbano, Jikwoyi, Phase 3<br />Abuja, Nigeria</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600"><a href="tel:07046080351" className="hover:text-amber-600 transition-colors">07046080351</a></p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600"><a href="mailto:reservations@danholt.com" className="hover:text-amber-600 transition-colors">reservations@danholt.com</a></p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Hours</h3>
                <p className="text-gray-600">24/7 Front Desk Service<br />Check-in: 2:00 PM<br />Check-out: 12:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"></textarea>
              </div>
              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-800 text-center mb-12">Find Us</h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600">
            <p>Map: S D Dan Iya Cl Abuja 900110, Federal Capital Territory</p>
          </div>
        </div>
      </section>
    </div>
  )
}