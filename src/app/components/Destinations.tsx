"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiHeart, FiCalendar, FiUsers} from 'react-icons/fi';

const DestinationsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('popular');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const destinationsPerPage = 6;
  
  // Fixed categories array with proper syntax
  const categories = [
    { id: 'all', name: 'All Destinations' },
    { id: 'beach', name: 'Beaches' },
    { id: 'mountain', name: 'Mountains' },
    { id: 'city', name: 'City Breaks' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'luxury', name: 'Luxury' },
  ];

  // Properly structured destinations array
  const destinations = [
    { 
      id: 1, 
      image: '/images/bali.jpg', 
      title: 'Bali, Indonesia', 
      subtitle: 'Tropical Paradise', 
      description: 'Experience the perfect blend of beaches, temples, and vibrant culture in Bali.',
      price: 1299, 
      rating: 4.8,
      days: 7,
      travelers: 2,
      category: 'beach',
      featured: true,
      discount: 15
    },
    { 
      id: 2, 
      image: '@/images/paris.jpg', 
      title: 'Paris, France', 
      subtitle: 'City of Love', 
      description: 'Explore iconic landmarks, world-class museums, and exquisite cuisine.',
      price: 1899, 
      rating: 4.7,
      days: 5,
      travelers: 2,
      category: 'city',
      featured: false,
      discount: 0
    },
    { 
      id: 3, 
      image: '/images/tokyo.jpg', 
      title: 'Tokyo, Japan', 
      subtitle: 'Neon Metropolis', 
      description: 'Discover the perfect mix of ancient traditions and futuristic technology.',
      price: 2199, 
      rating: 4.9,
      days: 8,
      travelers: 2,
      category: 'city',
      featured: true,
      discount: 10
    },
    { 
      id: 4, 
      image: '/images/santorini.jpg', 
      title: 'Santorini, Greece', 
      subtitle: 'Aegean Gem', 
      description: 'Stunning white-washed buildings and crystal blue waters await you.',
      price: 1599, 
      rating: 4.6,
      days: 6,
      travelers: 2,
      category: 'beach',
      featured: false,
      discount: 5
    },
    { 
      id: 5, 
      image: '/images/swiss.jpg', 
      title: 'Swiss Alps', 
      subtitle: 'Mountain Majesty', 
      description: 'Breathtaking mountain vistas and charming alpine villages.',
      price: 2499, 
      rating: 4.9,
      days: 7,
      travelers: 2,
      category: 'mountain',
      featured: true,
      discount: 0
    },
    { 
      id: 6, 
      image: '/images/maldives.jpg', 
      title: 'Maldives', 
      subtitle: 'Overwater Paradise', 
      description: 'Luxurious overwater bungalows and pristine coral reefs.',
      price: 2999, 
      rating: 4.8,
      days: 7,
      travelers: 2,
      category: 'luxury',
      featured: true,
      discount: 20
    },
  ];

  // Filter destinations based on category
  const filteredDestinations = selectedCategory === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === selectedCategory);

  // Sort destinations based on option
  const sortedDestinations = [...filteredDestinations].sort((a, b) => {
    if (sortOption === 'price-low') return a.price - b.price;
    if (sortOption === 'price-high') return b.price - a.price;
    if (sortOption === 'rating') return b.rating - a.rating;
    return b.id - a.id; // Default: newest first
  });

  // Get current destinations for pagination
  const indexOfLastDestination = currentPage * destinationsPerPage;
  const indexOfFirstDestination = indexOfLastDestination - destinationsPerPage;
  const currentDestinations = sortedDestinations.slice(indexOfFirstDestination, indexOfLastDestination);
  const totalPages = Math.ceil(sortedDestinations.length / destinationsPerPage);

  // Fixed paginate function with proper typing
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#080E18] to-[#0a1929] text-white">
      {/* Grid Overlay */}
      <div className="fixed inset-0 z-1 bg-[url('/images/grid-pattern.svg')] bg-[length:50px_50px] opacity-10" />

      {/* Main Content */}
      <main className="relative z-10 pt-12 pb-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            
          </motion.div>

          {/* Filters and Sorting */}
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-[#00d9ff] text-[#0a1929]'
                      : 'bg-[#0f172a] text-white/80 hover:bg-[#1e293b]'
                  }`}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setCurrentPage(1);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-white/70 text-sm">Sort by:</span>
              <select 
                className="bg-[#0f172a] border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00d9ff]"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </motion.div>

          {/* Destinations Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {currentDestinations.map((destination) => (
              <motion.div
                key={destination.id}
                className="relative bg-[#0f172a]/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 shadow-lg"
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 30px rgba(0, 217, 255, 0.15)'
                }}
                transition={{ duration: 0.3 }}
              >
                {destination.discount > 0 && (
                  <div className="absolute top-4 right-4 bg-[#00d9ff] text-[#0a1929] font-bold px-3 py-1 rounded-full text-xs z-10">
                    SAVE {destination.discount}%
                  </div>
                )}
                
                {destination.featured && (
                  <div className="absolute top-4 left-4 bg-[#4361ee] text-white font-bold px-3 py-1 rounded-full text-xs z-10">
                    FEATURED
                  </div>
                )}
                
                <div className="relative h-56 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${destination.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  
                  <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-[#00d9ff] transition-colors">
                    <FiHeart className="text-white" />
                  </button>
                  
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    <FiStar className="text-yellow-400" />
                    <span className="text-white font-medium">{destination.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold">{destination.title}</h3>
                      <p className="text-[#00d9ff]">{destination.subtitle}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      {destination.discount > 0 ? (
                        <>
                          <span className="text-lg font-bold">${(destination.price * (1 - destination.discount/100)).toFixed(0)}</span>
                          <span className="text-white/60 line-through text-sm">${destination.price}</span>
                        </>
                      ) : (
                        <span className="text-lg font-bold">${destination.price}</span>
                      )}
                      <span className="text-white/60 text-sm">per person</span>
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-4 text-sm">{destination.description}</p>
                  
                  <div className="flex justify-between items-center border-t border-white/10 pt-4">
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <FiCalendar />
                      <span>{destination.days} days</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <FiUsers />
                      <span>{destination.travelers} travelers</span>
                    </div>
                    
                    <motion.button
                      className="bg-[#00d9ff] text-[#0a1929] px-4 py-2 rounded-lg font-semibold text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div 
              className="flex justify-center gap-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <motion.button
                  key={page}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentPage === page
                      ? 'bg-[#00d9ff] text-[#0a1929] font-bold'
                      : 'bg-[#0f172a] text-white/80 hover:bg-[#1e293b]'
                  }`}
                  onClick={() => paginate(page)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {page}
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DestinationsPage;