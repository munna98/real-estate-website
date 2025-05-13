import { useState } from 'react';
import { Search, MapPin, DollarSign, Home, Phone, Mail, User, Calendar, Filter } from 'lucide-react';

export default function RealEstateWebsite() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeFilters, setActiveFilters] = useState({
    type: 'all',
    status: 'all',
    priceRange: 'all',
    city: 'all'
  });

  // Sample property data
  const properties = [
    {
      id: 1,
      title: "Modern Apartment in Downtown",
      price: 450000,
      type: "apartment",
      status: "sale",
      city: "New York",
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      address: "123 Downtown Ave, New York, NY",
      description: "Luxury apartment with amazing views of the city skyline. Features high-end finishes, open floor plan, and modern amenities. The building offers 24/7 security, a fitness center, and a rooftop garden.",
      images: ["/api/placeholder/800/500", "/api/placeholder/800/500"]
    },
    {
      id: 2,
      title: "Family House with Garden",
      price: 750000,
      type: "house",
      status: "sale",
      city: "Boston",
      bedrooms: 4,
      bathrooms: 3,
      area: 2400,
      address: "456 Family Lane, Boston, MA",
      description: "Spacious family home in a quiet neighborhood. Features a large backyard, renovated kitchen, and finished basement. Close to schools, parks, and shopping centers.",
      images: ["/api/placeholder/800/500", "/api/placeholder/800/500"]
    },
    {
      id: 3,
      title: "Studio Apartment for Rent",
      price: 1800,
      type: "apartment",
      status: "rent",
      city: "Chicago",
      bedrooms: 1,
      bathrooms: 1,
      area: 650,
      address: "789 Urban St, Chicago, IL",
      description: "Cozy studio apartment in the heart of the city. Fully furnished with modern appliances and utilities included. Walking distance to public transportation and restaurants.",
      images: ["/api/placeholder/800/500", "/api/placeholder/800/500"]
    },
    {
      id: 4,
      title: "Waterfront Condo",
      price: 920000,
      type: "condo",
      status: "sale",
      city: "Miami",
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      address: "101 Ocean Dr, Miami, FL",
      description: "Stunning waterfront condo with panoramic ocean views. Features a private balcony, updated kitchen, and master suite. Building amenities include a pool, spa, and private beach access.",
      images: ["/api/placeholder/800/500", "/api/placeholder/800/500"]
    },
    {
      id: 5,
      title: "Townhouse for Rent",
      price: 2500,
      type: "townhouse",
      status: "rent",
      city: "Seattle",
      bedrooms: 3,
      bathrooms: 2.5,
      area: 1600,
      address: "222 Hillside Rd, Seattle, WA",
      description: "Three-story townhouse with attached garage and private rooftop deck. Includes hardwood floors, stainless steel appliances, and in-unit laundry. Close to downtown and tech campuses.",
      images: ["/api/placeholder/800/500", "/api/placeholder/800/500"]
    },
    {
      id: 6,
      title: "Historic Victorian House",
      price: 1200000,
      type: "house",
      status: "sale",
      city: "San Francisco",
      bedrooms: 5,
      bathrooms: 3,
      area: 3200,
      address: "333 Heritage St, San Francisco, CA",
      description: "Beautifully preserved Victorian home with original architectural details. Features high ceilings, bay windows, and a renovated kitchen. Located in a prime neighborhood with excellent schools.",
      images: ["/api/placeholder/800/500", "/api/placeholder/800/500"]
    }
  ];

  // Filter properties based on active filters
  const filteredProperties = properties.filter(property => {
    return (activeFilters.type === 'all' || property.type === activeFilters.type) &&
           (activeFilters.status === 'all' || property.status === activeFilters.status) &&
           (activeFilters.city === 'all' || property.city === activeFilters.city) &&
           (activeFilters.priceRange === 'all' || 
            (activeFilters.priceRange === 'low' && property.price < 500000) ||
            (activeFilters.priceRange === 'medium' && property.price >= 500000 && property.price < 1000000) ||
            (activeFilters.priceRange === 'high' && property.price >= 1000000));
  });

  // Navigate to property details
  const viewPropertyDetails = (property) => {
    setSelectedProperty(property);
    setActiveTab('propertyDetail');
  };

  // Format price
  const formatPrice = (price, status) => {
    return status === 'rent' 
      ? `$${price.toLocaleString()}/month` 
      : `$${price.toLocaleString()}`;
  };

  // Navigation bar
  const Navbar = () => (
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
            onClick={() => {setActiveTab('properties'); setSelectedProperty(null);}}>
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

  // Footer
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

  // Homepage
  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Find Your Dream Home</h1>
            <p className="text-xl mb-8">Discover the perfect property with DreamHomes Realty - Your trusted partner in real estate.</p>
            <button 
              className="bg-white text-blue-500 px-6 py-3 rounded font-bold hover:bg-blue-50"
              onClick={() => setActiveTab('properties')}>
              Browse Properties
            </button>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.slice(0, 3).map(property => (
              <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={property.images[0]} alt={property.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className="text-blue-500 mr-1" />
                    <span className="text-gray-600">{property.city}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <DollarSign size={16} className="text-green-500 mr-1" />
                    <span className="text-gray-800 font-bold">{formatPrice(property.price, property.status)}</span>
                    <span className="ml-2 text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      For {property.status === 'sale' ? 'Sale' : 'Rent'}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600 mb-4">
                    <span>{property.bedrooms} Beds</span>
                    <span>{property.bathrooms} Baths</span>
                    <span>{property.area} sq ft</span>
                  </div>
                  <button 
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    onClick={() => viewPropertyDetails(property)}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button 
              className="bg-blue-500 text-white px-6 py-3 rounded font-bold hover:bg-blue-600"
              onClick={() => setActiveTab('properties')}>
              View All Properties
            </button>
          </div>
        </div>
      </div>

      {/* About Section Preview */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">About DreamHomes Realty</h2>
              <p className="text-gray-600 mb-4">
                With over 15 years of experience in the real estate market, DreamHomes Realty has established itself as a trusted partner for all your property needs. Our team of experienced professionals is dedicated to providing exceptional service and helping you find the perfect property.
              </p>
              <button 
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                onClick={() => setActiveTab('about')}>
                Learn More
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/api/placeholder/600/400" 
                alt="About DreamHomes Realty" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-500 mb-4">
                <Home size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Property Sales</h3>
              <p className="text-gray-600">
                We help you sell your property at the best possible price through our extensive network and marketing expertise.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-500 mb-4">
                <User size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Property Management</h3>
              <p className="text-gray-600">
                Our property management services ensure your investment property is maintained and generates the best returns.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-500 mb-4">
                <Search size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Property Search</h3>
              <p className="text-gray-600">
                We help you find the perfect property that matches your requirements and budget through our extensive database.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team of experienced real estate professionals today to start your property journey.
          </p>
          <button 
            className="bg-white text-blue-600 px-6 py-3 rounded font-bold hover:bg-blue-50"
            onClick={() => setActiveTab('contact')}>
            Contact Us Now
          </button>
        </div>
      </div>
    </div>
  );

  // About Us Page
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

  // Properties Page
  const PropertiesPage = () => (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Browse Properties</h1>
      
      {/* Filters */}
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <div className="flex items-center mb-4">
          <Filter className="text-blue-500 mr-2" />
          <h2 className="text-xl font-bold">Filter Properties</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Property Type</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded"
              value={activeFilters.type}
              onChange={(e) => setActiveFilters({...activeFilters, type: e.target.value})}
            >
              <option value="all">All Types</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="townhouse">Townhouse</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Status</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded"
              value={activeFilters.status}
              onChange={(e) => setActiveFilters({...activeFilters, status: e.target.value})}
            >
              <option value="all">All Statuses</option>
              <option value="sale">For Sale</option>
              <option value="rent">For Rent</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Price Range</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded"
              value={activeFilters.priceRange}
              onChange={(e) => setActiveFilters({...activeFilters, priceRange: e.target.value})}
            >
              <option value="all">Any Price</option>
              <option value="low">Below $500,000</option>
              <option value="medium">$500,000 - $1,000,000</option>
              <option value="high">Above $1,000,000</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">City</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded"
              value={activeFilters.city}
              onChange={(e) => setActiveFilters({...activeFilters, city: e.target.value})}
            >
              <option value="all">All Cities</option>
              <option value="New York">New York</option>
              <option value="Boston">Boston</option>
              <option value="Chicago">Chicago</option>
              <option value="Miami">Miami</option>
              <option value="Seattle">Seattle</option>
              <option value="San Francisco">San Francisco</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map(property => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={property.images[0]} alt={property.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <div className="flex items-center mb-2">
                  <MapPin size={16} className="text-blue-500 mr-1" />
                  <span className="text-gray-600">{property.address}</span>
                </div>
                <div className="flex items-center mb-4">
                  <DollarSign size={16} className="text-green-500 mr-1" />
                  <span className="text-gray-800 font-bold">{formatPrice(property.price, property.status)}</span>
                  <span className="ml-2 text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    For {property.status === 'sale' ? 'Sale' : 'Rent'}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600 mb-4">
                  <span>{property.bedrooms} Beds</span>
                  <span>{property.bathrooms} Baths</span>
                  <span>{property.area} sq ft</span>
                </div>
                <button 
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                  onClick={() => viewPropertyDetails(property)}>
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <p className="text-xl text-gray-600">No properties match your current filters. Try adjusting your search criteria.</p>
            <button 
              className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              onClick={() => setActiveFilters({type: 'all', status: 'all', priceRange: 'all', city: 'all'})}>
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );

  // Property Detail Page
  const PropertyDetailPage = () => {
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
                <span className="text-gray-700">Michael Rodriguez</span>
              </div>
              <div className="flex items-center mb-3">
                <Phone size={18} className="text-blue-500 mr-2" />
                <span className="text-gray-700">(555) 987-6543</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-blue-500 mr-2" />
                <span className="text-gray-700">michael@dreamhomesrealty.com</span>
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

  // Contact Page
  const ContactPage = () => (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      
      {/* Contact Info & Form */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Information */}
        <div className="md:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <div className="flex items-center mb-4">
              <MapPin size={20} className="text-blue-500 mr-3" />
              <div>
                <p className="text-gray-800 font-medium">Main Office</p>
                <p className="text-gray-600">123 Real Estate Ave</p>
                <p className="text-gray-600">New York, NY 10001</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <Phone size={20} className="text-blue-500 mr-3" />
              <div>
                <p className="text-gray-800 font-medium">Phone</p>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <Mail size={20} className="text-blue-500 mr-3" />
              <div>
                <p className="text-gray-800 font-medium">Email</p>
                <p className="text-gray-600">info@dreamhomesrealty.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar size={20} className="text-blue-500 mr-3" />
              <div>
                <p className="text-gray-800 font-medium">Working Hours</p>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>
              <a href="#" className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                </svg>
              </a>
              <a href="#" className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="md:w-2/3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                <input 
                  type="text" 
                  id="phone" 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="(123) 456-7890"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Property Inquiry"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="6" 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="I'm interested in learning more about..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-3 rounded font-bold hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Office Location Map */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Our Location</h2>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin size={40} className="text-blue-500 mx-auto mb-2" />
                <p className="text-gray-700">123 Real Estate Ave, New York, NY 10001</p>
                <p className="text-sm text-gray-500 mt-2">Map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render the appropriate content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'properties':
        return <PropertiesPage />;
      case 'propertyDetail':
        return <PropertyDetailPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}