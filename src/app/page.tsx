"use client";
import { useState } from 'react';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Footer from './components/Footer';

const Page = () => {
  const [activeTab, setActiveTab] = useState('flights');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5F2]">
      <Hero 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <Destinations />
      
      <Footer />
    </div>
  );
};

export default Page;