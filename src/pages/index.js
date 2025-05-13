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