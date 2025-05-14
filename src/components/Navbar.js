// src/components/Navbar.js
import React from 'react';

const Navbar = ({ activeTab, setActiveTab, setSelectedProperty }) => {
  const handlePropertiesClick = () => {
    setActiveTab('properties');
    setSelectedProperty(null); // Reset selected property when navigating to properties list
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">DreamHomes Realty</div>
        <div className="flex space-x-6">
          <button
            className={`${activeTab === 'home' ? 'font-bold' : ''}`}
            onClick={() => setActiveTab('home')}>
            Home
          </button>
          <button
            className={`${activeTab === 'about' ? 'font-bold' : ''}`}
            onClick={() => setActiveTab('about')}>
            About Us
          </button>
          <button
            className={`${activeTab === 'properties' ? 'font-bold' : ''}`}
            onClick={handlePropertiesClick}>
            Properties
          </button>
          <button
            className={`${activeTab === 'contact' ? 'font-bold' : ''}`}
            onClick={() => setActiveTab('contact')}>
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;