// src/pages/ContactPage.js
import React, { useState } from 'react';
import { MapPin, Phone, Mail, User, MessageSquare, Clock, Send, Check } from 'lucide-react';
import Image from 'next/image';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitted: true, submitting: false });
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/300')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-sm">Get In Touch</h1>
          <p className="text-white/90 max-w-2xl text-lg">We're here to help you find your dream home. Reach out to our team of experts today.</p>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Visit Us Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="mb-4 p-3 inline-flex items-center justify-center bg-blue-50 rounded-2xl text-blue-600">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Our Office</h3>
            <p className="text-gray-600 mb-4">123 Real Estate Avenue<br />Cityville, State 12345<br />United States</p>
            <a href="#map" className="text-blue-600 font-medium hover:text-blue-800 transition">
              View on Map
            </a>
          </div>
          
          {/* Call Us Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="mb-4 p-3 inline-flex items-center justify-center bg-green-50 rounded-2xl text-green-600">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Main: (555) 123-4567<br />Sales: (555) 234-5678<br />Support: (555) 345-6789</p>
            <a href="tel:+15551234567" className="text-green-600 font-medium hover:text-green-800 transition">
              Call Now
            </a>
          </div>
          
          {/* Email Us Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="mb-4 p-3 inline-flex items-center justify-center bg-purple-50 rounded-2xl text-purple-600">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">info@dreamhomesrealty.com<br />sales@dreamhomesrealty.com<br />support@dreamhomesrealty.com</p>
            <a href="mailto:info@dreamhomesrealty.com" className="text-purple-600 font-medium hover:text-purple-800 transition">
              Send Email
            </a>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="container mx-auto px-4 mt-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Form */}
            <div className="p-6 md:p-10">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Send Us a Message</h2>
                <p className="text-gray-600">Fill out the form below and our team will get back to you as soon as possible.</p>
              </div>

              {formStatus.submitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">Your message has been sent successfully. We'll respond as soon as possible.</p>
                  <button 
                    onClick={() => {
                      setFormStatus({ submitted: false, submitting: false });
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-4 pl-12 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-4 pl-12 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-4 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Inquiry about a property"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <div className="relative">
                      <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                        <MessageSquare size={18} className="text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full p-4 pl-12 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Your message..."
                        required
                      ></textarea>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className={`flex items-center justify-center w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition duration-300 ${formStatus.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {formStatus.submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            {/* Company Info */}
            <div className="relative">
              <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90 z-0"></div>
              <div className="hidden md:block absolute inset-0 bg-[url('/api/placeholder/800/800')] bg-cover bg-center mix-blend-overlay"></div>
              
              <div className="relative z-10 p-6 md:p-10 bg-blue-600 md:bg-transparent flex flex-col h-full text-white">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-6 flex-grow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-lg">Office Address</h4>
                      <p className="text-white/80 mt-1">
                        123 Real Estate Avenue<br />
                        Cityville, State 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Phone size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-lg">Phone Numbers</h4>
                      <p className="text-white/80 mt-1">
                        Main: (555) 123-4567<br />
                        Sales: (555) 234-5678<br />
                        Support: (555) 345-6789
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-lg">Email Addresses</h4>
                      <p className="text-white/80 mt-1">
                        info@dreamhomesrealty.com<br />
                        sales@dreamhomesrealty.com<br />
                        support@dreamhomesrealty.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Clock size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-lg">Working Hours</h4>
                      <p className="text-white/80 mt-1">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {['facebook', 'x', 'instagram', 'linkedin'].map((social) => (
                      <a 
                        key={social}
                        href={`#${social}`} 
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                      >
                        <Image 
                          src={`/images/x.png`} 
                          width={20} 
                          height={20} 
                          alt={social} 
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 mt-16" id="map">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h2>
            <p className="text-gray-600 mb-6">Find us at our centrally located office in the heart of the city.</p>
          </div>
          
          <div className="h-96 w-full bg-gray-100 relative">
            <iframe
              src="https://maps.google.com/maps?q=real%20estate%20office&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dream Homes Realty Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section (Optional) */}
      <div className="container mx-auto px-4 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Find answers to the most common questions about our services and properties.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              q: "How do I schedule a property viewing?",
              a: "You can schedule a property viewing by contacting our office directly, using the contact form above, or by clicking the 'Schedule a Viewing' button on any property listing."
            },
            {
              q: "What documents do I need to apply for a property?",
              a: "To apply for a property, you'll typically need identification, proof of income, references, and a completed application form. Our agents can provide you with a specific list based on your situation."
            },
            {
              q: "Do you handle property management?",
              a: "Yes, we offer comprehensive property management services for landlords, including tenant screening, rent collection, maintenance coordination, and more."
            },
            {
              q: "How long does the buying/selling process take?",
              a: "The timeline varies depending on market conditions, financing, and other factors. On average, the process takes 30-45 days from accepted offer to closing."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;