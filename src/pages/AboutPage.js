// src/pages/AboutPage.js
import React from 'react';
// Import icons if needed for this specific page, e.g. from 'lucide-react'

const AboutPage = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-8 text-center">About DreamHomes Realty</h1>

    {/* Company Overview */}
    <div className="flex flex-col md:flex-row items-center mb-12">
      <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-4">
          Founded in 2010, DreamHomes Realty began with a simple mission: to help people find their perfect homes and make the complex process of buying and selling property as seamless as possible.
        </p>
        <p className="text-gray-600">
          Over the past 15 years, we've grown from a small team of 3 dedicated professionals to a full-service real estate agency with over 50 experienced agents across the country. Throughout our growth, we've maintained our commitment to personalized service and customer satisfaction.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src="/api/placeholder/600/400"
          alt="DreamHomes Realty Office"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>

    {/* Mission & Vision */}
    <div className="bg-gray-100 p-8 rounded-lg mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To provide exceptional real estate services that exceed our clients' expectations through dedication, expertise, and a personalized approach to each unique property journey.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To be the most trusted and preferred real estate partner, known for our integrity, innovation, and commitment to helping clients achieve their property dreams.
          </p>
        </div>
      </div>
    </div>

    {/* Values */}
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 text-blue-600">Integrity</h3>
          <p className="text-gray-600">
            We conduct our business with honesty and transparency, always putting our clients' interests first.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 text-blue-600">Excellence</h3>
          <p className="text-gray-600">
            We strive for excellence in everything we do, continuously improving our knowledge and services.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 text-blue-600">Client-Centered</h3>
          <p className="text-gray-600">
            We tailor our approach to meet each client's unique needs, providing personalized solutions.
          </p>
        </div>
      </div>
    </div>

    {/* Services */}
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Residential Sales</h3>
          <p className="text-gray-600 mb-4">
            Whether you're buying your first home or selling your property, our experienced agents will guide you through every step of the process. From property valuation to closing the deal, we ensure a smooth and successful transaction.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Property valuation and market analysis</li>
            <li>Strategic marketing for sellers</li>
            <li>Property search and viewings for buyers</li>
            <li>Negotiation and offer management</li>
            <li>Contract and closing support</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Property Management</h3>
          <p className="text-gray-600 mb-4">
            Our comprehensive property management services help property owners maximize their investments while minimizing stress. We handle all aspects of property management, from tenant screening to maintenance coordination.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Tenant screening and selection</li>
            <li>Rent collection and financial reporting</li>
            <li>Property maintenance and repairs</li>
            <li>Lease agreement management</li>
            <li>Regular property inspections</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Team */}
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Our Leadership Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src="/api/placeholder/150/150"
            alt="John Smith"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-bold mb-1">John Smith</h3>
          <p className="text-blue-600 mb-2">Founder & CEO</p>
          <p className="text-gray-600">
            With over 20 years of real estate experience, John founded DreamHomes Realty with a vision to transform the real estate experience for clients.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src="/api/placeholder/150/150"
            alt="Sarah Johnson"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
          <p className="text-blue-600 mb-2">Chief Operations Officer</p>
          <p className="text-gray-600">
            Sarah oversees all operational aspects of DreamHomes Realty, ensuring efficient processes and exceptional client service.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src="/api/placeholder/150/150"
            alt="Michael Chen"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
          <p className="text-blue-600 mb-2">Head of Property Management</p>
          <p className="text-gray-600">
            Michael leads our property management division, with expertise in maximizing property value and tenant satisfaction.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;