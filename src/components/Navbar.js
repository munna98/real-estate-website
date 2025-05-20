// src/components/Navbar.js
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import icons for hamburger and close

const Navbar = ({ activeTab, setActiveTab, setSelectedProperty }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

  const handlePropertiesClick = () => {
    setActiveTab('properties');
    setSelectedProperty(null); // Reset selected property when navigating to properties list
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const handleNavLinkClick = (tabName) => {
    setActiveTab(tabName);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-xl font-bold cursor-pointer" onClick={() => handleNavLinkClick('home')}>
          DreamHomes Realty
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <button
            className={`hover:text-blue-200 ${activeTab === 'home' ? 'font-bold' : ''}`}
            onClick={() => handleNavLinkClick('home')}>
            Home
          </button>
          <button
            className={`hover:text-blue-200 ${activeTab === 'about' ? 'font-bold' : ''}`}
            onClick={() => handleNavLinkClick('about')}>
            About Us
          </button>
          <button
            className={`hover:text-blue-200 ${activeTab === 'properties' ? 'font-bold' : ''}`}
            onClick={handlePropertiesClick}>
            Properties
          </button>
          <button
            className={`hover:text-blue-200 ${activeTab === 'contact' ? 'font-bold' : ''}`}
            onClick={() => handleNavLinkClick('contact')}>
            Contact
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700 mt-4 py-2 px-4 space-y-2">
          <button
            className={`block w-full text-left py-2 px-3 rounded hover:bg-blue-600 ${activeTab === 'home' ? 'font-bold bg-blue-600' : ''}`}
            onClick={() => handleNavLinkClick('home')}>
            Home
          </button>
          <button
            className={`block w-full text-left py-2 px-3 rounded hover:bg-blue-600 ${activeTab === 'about' ? 'font-bold bg-blue-600' : ''}`}
            onClick={() => handleNavLinkClick('about')}>
            About Us
          </button>
          <button
            className={`block w-full text-left py-2 px-3 rounded hover:bg-blue-600 ${activeTab === 'properties' ? 'font-bold bg-blue-600' : ''}`}
            onClick={handlePropertiesClick}>
            Properties
          </button>
          <button
            className={`block w-full text-left py-2 px-3 rounded hover:bg-blue-600 ${activeTab === 'contact' ? 'font-bold bg-blue-600' : ''}`}
            onClick={() => handleNavLinkClick('contact')}>
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;