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