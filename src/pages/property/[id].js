// src/pages/PropertyDetailPage.js
import React from 'react';
import { MapPin, User, Phone, Mail } from 'lucide-react';

const PropertyDetailPage = ({ selectedProperty, setActiveTab, formatPrice }) => {
  if (!selectedProperty) return null;

  return (
    <div className="container mx-auto px-4 py-12">
      <button
        className="mb-6 flex items-center text-blue-500 hover:text-blue-700"
        onClick={() => setActiveTab('properties')}>
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Properties
      </button>

      <h1 className="text-3xl font-bold mb-6">{selectedProperty.title}</h1>

      {/* Property Images */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selectedProperty.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${selectedProperty.title} - Image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Property Overview */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-wrap items-center mb-4">
          <span className="text-2xl font-bold text-gray-800 mr-4">
            {formatPrice(selectedProperty.price, selectedProperty.status)}
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            For {selectedProperty.status === 'sale' ? 'Sale' : 'Rent'}
          </span>
        </div>

        <div className="flex items-center mb-4">
          <MapPin size={18} className="text-blue-500 mr-2" />
          <span className="text-gray-700">{selectedProperty.address}</span>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="border rounded-lg p-3 text-center">
            <p className="text-gray-500 text-sm">Bedrooms</p>
            <p className="text-lg font-bold">{selectedProperty.bedrooms}</p>
          </div>
          <div className="border rounded-lg p-3 text-center">
            <p className="text-gray-500 text-sm">Bathrooms</p>
            <p className="text-lg font-bold">{selectedProperty.bathrooms}</p>
          </div>
          <div className="border rounded-lg p-3 text-center">
            <p className="text-gray-500 text-sm">Area</p>
            <p className="text-lg font-bold">{selectedProperty.area} sq ft</p>
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="text-xl font-bold mb-3">Property Description</h3>
          <p className="text-gray-700">{selectedProperty.description}</p>
        </div>
      </div>

      {/* Property Location */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold mb-4">Location</h3>
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <MapPin size={40} className="text-blue-500 mx-auto mb-2" />
            <p className="text-gray-700">{selectedProperty.address}</p>
            <p className="text-sm text-gray-500 mt-2">Map would be displayed here</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Interested in this property?</h3>
        <p className="text-gray-700 mb-4">
          Contact our agent for more information or to schedule a viewing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center mb-3">
              <User size={18} className="text-blue-500 mr-2" />
              <span className="text-gray-700">Michael Rodriguez</span> {/* Placeholder Agent */}
            </div>
            <div className="flex items-center mb-3">
              <Phone size={18} className="text-blue-500 mr-2" />
              <span className="text-gray-700">(555) 987-6543</span> {/* Placeholder Phone */}
            </div>
            <div className="flex items-center">
              <Mail size={18} className="text-blue-500 mr-2" />
              <span className="text-gray-700">michael@dreamhomesrealty.com</span> {/* Placeholder Email */}
            </div>
          </div>
          <div>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-3">
              Schedule a Viewing
            </button>
            <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;