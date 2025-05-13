  const Footer = () => (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-3">DreamHomes Realty</h3>
            <p className="text-gray-300">Your trusted partner in finding the perfect property. With over 15 years of experience in the real estate market.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Contact Us</h3>
            <div className="flex items-center mb-2">
              <MapPin size={16} className="mr-2" />
              <span>123 Real Estate Ave, City, Country</span>
            </div>
            <div className="flex items-center mb-2">
              <Phone size={16} className="mr-2" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <span>info@dreamhomesrealty.com</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Working Hours</h3>
            <p className="mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="mb-1">Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p>&copy; 2025 DreamHomes Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );