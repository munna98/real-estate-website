// src/pages/AboutPage.js
import React from 'react';
import { ShieldCheck, TrendingUp, Handshake, Users, Home, ClipboardList } from 'lucide-react'; // Import relevant icons

const AboutPage = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">About DreamHomes Realty</h1>

    {/* Company Overview */}
    <div className="flex flex-col md:flex-row items-center mb-16 bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="md:w-1/2 p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Founded in **2010**, DreamHomes Realty began with a simple, yet powerful mission: to help people find their perfect homes and make the complex process of buying and selling property as seamless as possible.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Over the past **15 years**, we've grown from a small, dedicated team to a full-service real estate agency boasting over **50 experienced agents** across the country. Through it all, we've steadfastly maintained our commitment to **personalized service** and unwavering **customer satisfaction**.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src="/images/about1.jpg" // Ensure this image exists in your public/images folder
          alt="DreamHomes Realty Office"
          className="w-full h-80 object-cover" // Ensure image covers the area
        />
      </div>
    </div>

    {/* Mission & Vision */}
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-10 rounded-lg shadow-xl mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <ShieldCheck size={32} className="mr-3" /> Our Mission
          </h2>
          <p className="text-blue-100 leading-relaxed">
            To provide **exceptional real estate services** that consistently exceed our clients' expectations. We achieve this through unwavering dedication, unparalleled expertise, and a truly personalized approach to each unique property journey.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <TrendingUp size={32} className="mr-3" /> Our Vision
          </h2>
          <p className="text-blue-100 leading-relaxed">
            To be the **most trusted and preferred real estate partner** in the industry, renowned for our integrity, continuous innovation, and steadfast commitment to helping clients achieve their ultimate property dreams.
          </p>
        </div>
      </div>
    </div>

    {/* Values */}
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
          <ShieldCheck size={48} className="text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-blue-800">Integrity</h3>
          <p className="text-gray-600">
            We conduct our business with absolute honesty and transparency, always prioritizing our clients' best interests above all else.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
          <TrendingUp size={48} className="text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-blue-800">Excellence</h3>
          <p className="text-gray-600">
            We relentlessly strive for excellence in every aspect of our work, continuously enhancing our knowledge and services to deliver superior results.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
          <Handshake size={48} className="text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-blue-800">Client-Centered</h3>
          <p className="text-gray-600">
            We meticulously tailor our approach to meet each client's unique needs, providing personalized solutions and an unparalleled experience.
          </p>
        </div>
      </div>
    </div>

    {/* Services */}
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Comprehensive Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <Home size={28} className="mr-3 text-blue-600" /> Residential Sales
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you're purchasing your very first home or expertly selling your cherished property, our seasoned agents will meticulously guide you through every step of the process. From precise property valuation to seamlessly closing the deal, we guarantee a **smooth and successful transaction**.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Comprehensive property valuation and insightful market analysis</li>
            <li>Strategic and impactful marketing for sellers</li>
            <li>Efficient property search and personalized viewings for buyers</li>
            <li>Expert negotiation and streamlined offer management</li>
            <li>Thorough contract review and diligent closing support</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <ClipboardList size={28} className="mr-3 text-blue-600" /> Property Management
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our comprehensive property management services are designed to help property owners **maximize their investments** while simultaneously minimizing stress. We meticulously handle all facets of property management, from rigorous tenant screening to seamless maintenance coordination.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Thorough tenant screening and careful selection</li>
            <li>Timely rent collection and transparent financial reporting</li>
            <li>Proactive property maintenance and expert repairs</li>
            <li>Efficient lease agreement drafting and management</li>
            <li>Regular and detailed property inspections</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Team */}
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Leadership Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
          <img
            src="/images/person1.jpg" // Ensure these images exist in your public/images folder
            alt="John Smith"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
          />
          <h3 className="text-2xl font-bold mb-1 text-gray-800">John Smith</h3>
          <p className="text-blue-600 font-medium mb-2">Founder & CEO</p>
          <p className="text-gray-600 leading-relaxed">
            With over two decades of real estate experience, John founded DreamHomes Realty with a visionary goal to transform the client experience.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
          <img
            src="/images/person2.jpg"
            alt="Sarah Johnson"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
          />
          <h3 className="text-2xl font-bold mb-1 text-gray-800">Sarah Johnson</h3>
          <p className="text-blue-600 font-medium mb-2">Chief Operations Officer</p>
          <p className="text-gray-600 leading-relaxed">
            Sarah meticulously oversees all operational facets of DreamHomes Realty, ensuring peak efficiency and exceptional client service.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
          <img
            src="/images/person3.jpg"
            alt="Michael Chen"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
          />
          <h3 className="text-2xl font-bold mb-1 text-gray-800">Michael Chen</h3>
          <p className="text-blue-600 font-medium mb-2">Head of Property Management</p>
          <p className="text-gray-600 leading-relaxed">
            Michael masterfully leads our property management division, leveraging his deep expertise to maximize property value and ensure tenant satisfaction.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;