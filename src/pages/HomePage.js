// src/pages/HomePage.js
import React from "react";
import { MapPin, DollarSign, Home, User, Search, ArrowRight } from "lucide-react"; // Added ArrowRight for CTAs
import Link from "next/link";

const HomePage = ({
  properties,
  setActiveTab,
  formatPrice,
}) => {
  const featuredProperties = properties.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          {/* Subtle background pattern or image can go here */}
          <img src="/images/hero-bg.jpg" alt="Modern city skyline" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in-down">
              Unlock Your Dream Home Journey
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90 animate-fade-in-up">
              Discover unparalleled properties and expert guidance with DreamHomes Realty – where your vision for a perfect home becomes a reality.
            </p>
            <button
              className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
              onClick={() => setActiveTab("properties")}
            >
              Browse All Properties <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Properties Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 relative group"
              >
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 truncate">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin size={18} className="text-blue-500 mr-2" />
                    <span>{property.address}, {property.city}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <DollarSign size={20} className="text-green-600 mr-2" />
                    <span className="text-2xl font-extrabold text-gray-900">
                      {formatPrice(property.price, property.status)}
                    </span>
                    <span className="ml-4 text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                      For {property.status === "sale" ? "Sale" : "Rent"}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-700 text-sm mb-6">
                    <span className="flex items-center"><Home size={16} className="mr-1" /> {property.bedrooms} Beds</span>
                    <span className="flex items-center"><Home size={16} className="mr-1" /> {property.bathrooms} Baths</span>
                    <span className="flex items-center"><Home size={16} className="mr-1" /> {property.area} sq ft</span> {/* Use appropriate icon if available for area */}
                  </div>
                  <Link href={`/properties/${property.id}`} legacyBehavior>
                    <a className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 block text-center opacity-90 group-hover:opacity-100">
                      View Details <ArrowRight size={16} className="inline-block ml-2" />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
              onClick={() => setActiveTab("properties")}
            >
              Explore All Listings <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* About Section Preview */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="/images/about1.jpg" // Ensure this image exists in your public/images folder
                alt="About DreamHomes Realty"
                className="rounded-xl shadow-2xl object-cover w-full h-auto transform hover:rotate-1 transition-transform duration-300"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-blue-600 font-semibold text-lg mb-3">Who We Are</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Partner in Real Estate
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                With over **15 years of unparalleled experience** in the dynamic real estate market, DreamHomes Realty has firmly established itself as the leading partner for all your property aspirations. Our passionate team of **seasoned professionals** is dedicated to providing an **exceptional, personalized service**, meticulously guiding you to discover your perfect property.
              </p>
              <button
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 flex items-center justify-center md:inline-flex mx-auto"
                onClick={() => setActiveTab("about")}
              >
                Learn More About Us <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Premier Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-blue-600 mb-6">
                <Home size={56} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Property Sales & Acquisition</h3>
              <p className="text-gray-700 leading-relaxed">
                We empower you to sell your property at its maximum potential through our extensive network and cutting-edge marketing strategies. Find your ideal home with our expert guidance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-blue-600 mb-6">
                <User size={56} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Professional Property Management</h3>
              <p className="text-gray-700 leading-relaxed">
                Our comprehensive property management services ensure your investment is meticulously cared for, maximizing returns and minimizing your stress.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-blue-600 mb-6">
                <Search size={56} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Personalized Property Search</h3>
              <p className="text-gray-700 leading-relaxed">
                Let us pinpoint the exact property that aligns with your unique requirements and budget, leveraging our extensive and meticulously curated database.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Embark on Your Property Journey?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Connect with our dedicated team of experienced real estate professionals today and take the first step towards achieving your property aspirations.
          </p>
          <button
            className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
            onClick={() => setActiveTab("contact")}
          >
            Get In Touch Today <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;