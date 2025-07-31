"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Hero = ({ 
  activeTab, 
  setActiveTab, 
  searchQuery, 
  setSearchQuery 
}: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  
  const destinations = [
    { 
      id: 1, 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo2-bZOeQi3RtUg0Jzh0lMTT6v74Q36y36lw&s', 
      title: 'Bali, Indonesia', 
      subtitle: 'Tropical Paradise',
      highlight: '#FF6B6B'
    },
    { 
      id: 2, 
      image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRpKbgRvjtgFy7QI9NlXhfZpx7n6xKgM4aMajpC4ukIgCP1fXWdZMHDg2yQG57-_RXbpq0IzD0Jobnlskio1G1Lf-qFENSGKEbsIF8mCQ', 
      title: 'Paris, France', 
      subtitle: 'City of Love',
      highlight: '#4DCCBD'
    },
    { 
      id: 3, 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXBW1M9LqTu25Vq4i9g4e7I7Ux6SdqbE4N0Q&s', 
      title: 'Tokyo, Japan', 
      subtitle: 'Neon Metropolis',
      highlight: '#4361EE'
    },
    {
      id: 4, 
      image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ1yxr-MGCKqg-u3d0eogRaM0wSztaRDAdXBYNXHme9SudZ36bV2aXGT-95tpUVLJ1XhOBOQ-RNH2QAX8tpeqIp9Lt5ISEmiB-zy-9OQw', 
      title: 'Tokyo, Japan', 
      subtitle: 'Neon Metropolis',
      highlight: '#4361EE'
    },
  ];

  useEffect(() => {
     // Set mounted state to true
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % destinations.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [destinations.length, isHovered]);

  // Get window dimensions safely
  
  return (
    <div className="relative h-[120vh] min-h-[800px] overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a1929] to-[#0f172a]" />

      {/* Destination Slideshow */}
      <div className="absolute inset-0 z-5 h-[120vh] min-h-[800px]">
        {destinations.map((dest, index) => (
          <motion.div
            key={dest.id}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${dest.image})`,
              opacity: index === currentSlide ? 1 : 0,
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0.3) 100%)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-10 bg-[url('/images/grid-pattern.svg')] bg-[length:50px_50px] opacity-20" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-between px-6 lg:px-16 py-12">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-3xl font-bold text-white tracking-wider">
              <span className="text-[#00d9ff]">TRIP</span>ZY
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex space-x-6"
          >
            {['Destinations', 'Experiences', 'Deals', 'About'].map((item) => (
              <motion.button
                key={item}
                className="text-white/80 font-medium text-sm tracking-wider relative"
                whileHover={{ 
                  color: '#ffffff'
                }}
                transition={{ duration: 0.2 }}
              >
                {item}
                <motion.div 
                  className="absolute bottom-0 left-0 h-px bg-[#00d9ff]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
            <motion.button 
              className="ml-4 px-4 py-2 bg-[#00d9ff] text-[#0a1929] rounded-full text-sm font-bold"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#00c4e6'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              SIGN IN
            </motion.button>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#00d9ff] opacity-20 blur-3xl"></div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                <span className="text-[#00d9ff]">EXPLORE</span> THE WORLD
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-lg">
                Discover breathtaking destinations and create unforgettable memories with our curated travel experiences
              </p>
              
              <div className="flex items-center space-x-4 mb-10">
                <div className="flex -space-x-3">
                  {['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeJEhZLOodboyrWLe9--5qgrNDQA-gYF_g-A&s',
                   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3VML09a36PA-XXYoYpdsmXKxgEcEy5VsrlQ&s', 
                   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqNYzhnY001Rjcujz2YUQbCOdlMp0vut-hA&s'].map((img, i) => (
                    <motion.img 
                      key={i} 
                      src={img} 
                      alt="Traveler" 
                      className="w-10 h-10 rounded-full border-2 border-[#0a1929]"
                      whileHover={{ zIndex: 10, scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    />
                  ))}
                </div>
                <div className="text-white/70 text-sm">
                  <span className="font-bold text-white">5,000+</span> travelers booked last week
                </div>
              </div>
            </div>
          </motion.div>

          {/* Search Panel - Futuristic Glass Morphism (Smaller Size with Rounded Corners) */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full lg:w-[40%] bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ 
              boxShadow: '0 15px 40px rgba(0, 217, 255, 0.2)'
            }}
          >
            <div className="p-0.5 bg-gradient-to-r from-[#00d9ff] to-[#4361ee] rounded-[15px]">
              <div className="bg-[#0a1929] p-6 rounded-[14px]">
                <div className="flex border-b border-white/10 mb-5">
                  {['flights', 'hotels', 'packages', 'activities'].map((tab) => (
                    <motion.button
                      key={tab}
                      className={`px-4 py-2 font-medium capitalize text-xs tracking-wider relative ${
                        activeTab === tab 
                          ? 'text-[#00d9ff]' 
                          : 'text-white/60 hover:text-white'
                      }`}
                      onClick={() => setActiveTab(tab)}
                      whileHover={{ color: '#00d9ff' }}
                    >
                      {tab}
                      {activeTab === tab && (
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00d9ff]"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-white/80 text-xs mb-1.5 tracking-wider">DESTINATION</label>
                    <div className="relative">
                      <motion.input
                        type="text"
                        placeholder="Where would you like to go?"
                        className="w-full p-3 bg-[#0f172a] border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-[#00d9ff] pr-10 text-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        whileHover={{ 
                          borderColor: '#00d9ff80'
                        }}
                        transition={{ duration: 0.2 }}
                      />
                      <motion.div 
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-7 h-7 bg-[#00d9ff] rounded-lg flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0a1929]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 text-xs mb-1.5 tracking-wider">CHECK IN</label>
                      <motion.div
                        className="p-3 bg-[#0f172a] border border-white/10 rounded-xl text-white"
                        whileHover={{ borderColor: '#00d9ff80' }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="opacity-80 text-sm">dd/04/0047</span>
                      </motion.div>
                    </div>
                    <div>
                      <label className="block text-white/80 text-xs mb-1.5 tracking-wider">CHECK OUT</label>
                      <motion.div
                        className="p-3 bg-[#0f172a] border border-white/10 rounded-xl text-white"
                        whileHover={{ borderColor: '#00d9ff80' }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="opacity-80 text-sm">04/07/0754</span>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 text-xs mb-1.5 tracking-wider">TRAVELERS</label>
                      <motion.div
                        className="p-3 bg-[#0f172a] border border-white/10 rounded-xl flex justify-between items-center"
                        whileHover={{ borderColor: '#00d9ff80' }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-white text-sm">2 Adults</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                    <div>
                      <label className="block text-white/80 text-xs mb-1.5 tracking-wider">CLASS</label>
                      <motion.div
                        className="p-3 bg-[#0f172a] border border-white/10 rounded-xl flex justify-between items-center"
                        whileHover={{ borderColor: '#00d9ff80' }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-white text-sm">Economy</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                <motion.button 
                  className="mt-6 w-full bg-gradient-to-r from-[#00d9ff] to-[#4361ee] text-[#0a1929] py-3 rounded-xl font-bold tracking-wider text-base shadow-md"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 8px 20px rgba(0, 217, 255, 0.4)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  EXPLORE DESTINATIONS
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Destination Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex space-x-6 mt-12 overflow-x-auto pb-4 scrollbar-hide"
        >
          {destinations.map((dest, index) => (
            <motion.div 
              key={dest.id}
              className={`flex-shrink-0 w-80 h-40 rounded-2xl overflow-hidden relative cursor-pointer ${
                currentSlide === index ? 'ring-2 ring-[#00d9ff]' : 'opacity-70'
              }`}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ 
                opacity: 1,
                scale: 1.03,
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
              }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${dest.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-white font-bold text-lg">{dest.title}</h3>
                    <p className="text-white/80 text-sm">{dest.subtitle}</p>
                  </div>
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: dest.highlight }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 right-8 flex flex-col items-end space-y-3"
      >
      </motion.div>
    </div>
  );
};

export default Hero;