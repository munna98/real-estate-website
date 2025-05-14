// src/pages/ContactPage.js
import React from 'react';
import { MapPin, Phone, Mail, User, MessageSquare } from 'lucide-react'; // Added MessageSquare for form

const ContactPage = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

    <div className="flex flex-col md:flex-row gap-8">
      {/* Contact Information */}
      <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <MapPin size={20} className="text-blue-500 mr-3" />
            <div>
              <h3 className="font-semibold">Our Office</h3>
              <p className="text-gray-600">123 Real Estate Ave, City, Country</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Phone size={20} className="text-blue-500 mr-3" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Mail size={20} className="text-blue-500 mr-3" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">info@dreamhomesrealty.com</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Working Hours</h3>
          <p className="text-gray-600 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p className="text-gray-600 mb-1">Saturday: 10:00 AM - 4:00 PM</p>
          <p className="text-gray-600">Sunday: Closed</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={18} className="text-gray-400" />
              </div>
              <input type="text" id="name" name="name" className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={18} className="text-gray-400" />
              </div>
              <input type="email" id="email" name="email" className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
            <input type="text" id="subject" name="subject" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Inquiry about a property" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <div className="relative">
              <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                <MessageSquare size={18} className="text-gray-400" />
              </div>
              <textarea id="message" name="message" rows="5" className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Your message..."></textarea>
            </div>
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>

    {/* Map Section - Placeholder */}
    <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Location</h2>
        <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
            <div className="text-center">
                <MapPin size={48} className="text-blue-500 mx-auto mb-2" />
                <p className="text-gray-700">123 Real Estate Ave, City, Country</p>
                <p className="text-sm text-gray-500 mt-2">(Interactive Map Placeholder)</p>
            </div>
        </div>
    </div>
  </div>
);

export default ContactPage;