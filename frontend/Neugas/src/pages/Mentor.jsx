// src/pages/ExploreMentorsPage.jsx

import React from 'react';
import { Search, ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import MentorCard from '../ui/MentorCard';

// Sample Data (replace with actual API data)
const mentorData = [
  // ... (Data for all mentors shown in the image)
  { id: 1, name: 'Jessica Jane', title: 'Web Developer', avatar: '...', tasks: 40, rating: 4.7, reviews: 750, isFollowed: false, description: 'Hi, I’m Jessica Jane. I am a doctoral student at Harvard University majoring in Web...' },
  { id: 2, name: 'Abraham Lincoln', title: '3D Design', avatar: '...', tasks: 32, rating: 4.9, reviews: 510, isFollowed: true, description: '' },
  // ... and so on for the rest of the mentors
];

const Mentor = () => {
  const recentMentors = mentorData.slice(0, 3); // Example recent mentors
  const allMentors = mentorData.slice(3, 9);    // Example main grid mentors

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      
      {/* 1. Header & Filters */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Explore Mentors</h1>
        <div className="w-10 h-10 bg-gray-300 rounded-full cursor-pointer border-2 border-red-500" />
      </header>
      
      <div className="flex justify-between items-center mb-8">
        {/* Search Bar */}
        <div className="relative flex items-center w-1/3 min-w-[300px] border border-gray-200 rounded-lg bg-white px-4 py-2 shadow-sm">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search Mentors" 
            className="flex-grow focus:outline-none text-sm"
          />
        </div>
        
        {/* Category/Sort */}
        <div className="flex space-x-4 text-sm font-medium">
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <Menu className="w-4 h-4 mr-1" />
            Category
          </button>
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            Sort By: <span className="font-bold ml-1 text-gray-800">Popular</span>
          </button>
        </div>
      </div>
      
      {/* --- */}

      {/* 2. Recent Mentors Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Recent Mentors</h2>
          <div className="flex space-x-2">
            <ChevronLeft className="w-5 h-5 text-gray-400 cursor-pointer" />
            <ChevronRight className="w-5 h-5 text-gray-800 cursor-pointer" />
          </div>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto pb-4 scrollbar-hide">
          {recentMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} isRecent={true} />
          ))}
        </div>
      </section>

      {/* --- */}

      {/* 3. Mentors Grid Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Mentors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Mentor;