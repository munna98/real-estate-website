// src/pages/properties/[id].js
import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Bed, 
  Bath, 
  LayoutGrid, 
  Ruler, 
  Calendar, 
  User, 
  Phone, 
  Mail, 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Share2,
  MessageSquareText
} from 'lucide-react';
import { properties } from '../../data/propertiesData';
import Image from 'next/image';
import Link from 'next/link';

// Static paths and props functions remain the same
export async function getStaticPaths() {
  const paths = properties.map((property) => ({
    params: { id: property.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const selectedProperty = properties.find(
    (property) => property.id.toString() === params.id
  );

  return {
    props: {
      selectedProperty,
    },
  };
}

const PropertyDetailPage = ({ selectedProperty }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 280);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatPrice = (price, status) => {
    if (status === 'rent') {
      return `$${price.toLocaleString()}/month`;
    }
    return `$${price.toLocaleString()}`;
  };

  if (!selectedProperty) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Property Not Found</h2>
          <p className="text-gray-500 mb-4">The property details you're looking for are not available.</p>
          <Link href="/properties" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Browse Properties
          </Link>
        </div>
      </div>
    );
  }

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedProperty.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProperty.images.length - 1 : prevIndex - 1
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">{selectedProperty.description}</p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Property Features</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Air Conditioning', 'Balcony', 'Garden', 'Parking', 'Security System', 'Swimming Pool', 'Gym', 'Pet Friendly'].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'gallery':
        return (
          <div className="space-y-6">
            <div className="relative h-[60vh] mb-8">
              <Image
                src={selectedProperty.images[currentImageIndex]}
                alt={`${selectedProperty.title} - Image ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                priority
              />
              {selectedProperty.images.length > 1 && (
                <>
                  <button
                    onClick={goToPrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 text-gray-800 p-3 rounded-full hover:bg-opacity-100 transition shadow-lg"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={goToNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 text-gray-800 p-3 rounded-full hover:bg-opacity-100 transition shadow-lg"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {selectedProperty.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`relative aspect-[4/3] cursor-pointer rounded-xl overflow-hidden ${
                    index === currentImageIndex ? 'ring-4 ring-blue-600' : ''
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      case 'location':
        return (
          <div className="space-y-6">
            <div className="bg-gray-100 h-96 rounded-2xl overflow-hidden">
              <iframe
                src={`https://maps.google.com/maps?q=${selectedProperty.address},${selectedProperty.city}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Property Location"
              ></iframe>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Location Details</h3>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start">
                  <MapPin size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Address:</span>
                    <p className="text-gray-700">{selectedProperty.address}, {selectedProperty.city}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {['School', 'Hospital', 'Park', 'Shopping Mall', 'Restaurant', 'Public Transport'].map((place, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                      <span className="text-gray-700">{place} Nearby</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="h-16 w-16 rounded-full bg-blue-100 mr-4 overflow-hidden relative">
                      <Image 
                        src="/images/person1.jpg" 
                        alt="Agent"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div>
                      <span className="text-xl font-semibold text-gray-800">Michael Rodriguez</span>
                      <p className="text-blue-600">Senior Property Consultant</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <Phone size={20} className="text-blue-600 mr-3" />
                    <a href="tel:+15559876543" className="text-gray-700 hover:text-blue-600 transition">(555) 987-6543</a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail size={20} className="text-blue-600 mr-3" />
                    <a href="mailto:michael@dreamhomesrealty.com" className="text-gray-700 hover:text-blue-600 transition">michael@dreamhomesrealty.com</a>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Send a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    
                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition shadow-sm">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <button className="flex-1 bg-indigo-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-indigo-700 transition shadow-sm flex items-center justify-center">
                <Calendar size={20} className="mr-2" /> Schedule a Viewing
              </button>
              
              <button className="flex-1 bg-green-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-green-700 transition shadow-sm flex items-center justify-center">
                <Phone size={20} className="mr-2" /> Call Agent Now
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header image with overlay */}
      <div className="relative h-[40vh] md:h-[60vh] w-full">
        <Image
          src={selectedProperty.images[0]}
          alt={selectedProperty.title}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 flex flex-col justify-end p-6 md:p-12">
          <Link 
            href="/" 
            className="mb-auto mt-8 inline-flex items-center bg-white/80 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-lg hover:bg-white transition self-start"
          >
            <ChevronLeft size={20} className="mr-1" />
            Back to Properties
          </Link>
          
          <div className="max-w-6xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-md">{selectedProperty.title}</h1>
            <div className="flex items-center text-white/90 mb-4">
              <MapPin size={18} className="mr-2" />
              <span>{selectedProperty.address}, {selectedProperty.city}</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
                {formatPrice(selectedProperty.price, selectedProperty.status)}
              </span>
              <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                selectedProperty.status === 'sale' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-purple-500 text-white'
              }`}>
                For {selectedProperty.status === 'sale' ? 'Sale' : 'Rent'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="max-w-6xl mx-auto px-4 -mt-8 md:-mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
          {/* Stats and Quick Actions */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-4">
              <div className="flex items-center px-4 py-2 bg-blue-50 rounded-lg min-w-max">
                <Bed size={22} className="text-blue-600 mr-2" />
                <div>
                  <p className="text-xs text-gray-500 -mb-1">Bedrooms</p>
                  <p className="font-semibold">{selectedProperty.bedrooms}</p>
                </div>
              </div>
              
              <div className="flex items-center px-4 py-2 bg-blue-50 rounded-lg min-w-max">
                <Bath size={22} className="text-blue-600 mr-2" />
                <div>
                  <p className="text-xs text-gray-500 -mb-1">Bathrooms</p>
                  <p className="font-semibold">{selectedProperty.bathrooms}</p>
                </div>
              </div>
              
              <div className="flex items-center px-4 py-2 bg-blue-50 rounded-lg min-w-max">
                <Ruler size={22} className="text-blue-600 mr-2" />
                <div>
                  <p className="text-xs text-gray-500 -mb-1">Area</p>
                  <p className="font-semibold">{selectedProperty.area} sq ft</p>
                </div>
              </div>
              
              <div className="flex items-center px-4 py-2 bg-blue-50 rounded-lg min-w-max">
                <LayoutGrid size={22} className="text-blue-600 mr-2" />
                <div>
                  <p className="text-xs text-gray-500 -mb-1">Type</p>
                  <p className="font-semibold capitalize">{selectedProperty.type}</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-3 rounded-lg flex items-center justify-center ${
                  isFavorite 
                    ? 'bg-red-50 text-red-600' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                } transition`}
              >
                <Heart size={22} fill={isFavorite ? 'currentColor' : 'none'} />
              </button>
              
              <button className="p-3 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 transition">
                <Share2 size={22} />
              </button>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className={`${isSticky ? 'sticky top-0 bg-white shadow-md py-4 -mx-8 px-8 z-20' : ''} transition-all duration-300`}>
            <div className="flex overflow-x-auto space-x-2 md:space-x-8 border-b">
              {['overview', 'gallery', 'location', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 font-medium text-lg capitalize whitespace-nowrap transition ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab Content Area */}
          <div className="mt-8">
            {renderTabContent()}
          </div>
        </div>
        
        {/* Similar Properties (Optional) */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Similar Properties You May Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="relative h-48">
                  <Image 
                    src="/images/apartment2.jpeg" 
                    alt="Similar property" 
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Modern {item === 1 ? 'Apartment' : item === 2 ? 'House' : 'Villa'}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin size={14} className="mr-1" />
                    <span>{item === 1 ? 'Downtown' : item === 2 ? 'Westside' : 'Lakefront'}, {selectedProperty.city}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-blue-600">${(selectedProperty.price * 0.8 + item * 50000).toLocaleString()}</span>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Bed size={14} className="mr-1" />
                        {selectedProperty.bedrooms - 1 + item}
                      </span>
                      <span className="flex items-center">
                        <Bath size={14} className="mr-1" />
                        {selectedProperty.bathrooms}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed bottom action bar for mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] p-4 z-30">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-gray-600 text-sm">Price</p>
            <p className="font-bold text-xl text-blue-600">{formatPrice(selectedProperty.price, selectedProperty.status)}</p>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition">
              <MessageSquareText size={20} />
            </button>
            
            <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition">
              Schedule a Viewing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;