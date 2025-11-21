// src/pages/ExploreMentorsPage.jsx

import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import MentorCard from '../ui/MentorCard';

// Sample Data (replace with actual API data)
const mentorData = [
  { id: 1, name: 'Jessica Jane', title: 'Web Developer', avatar: 'https://i.pravatar.cc/150?img=1', tasks: 40, rating: 4.7, reviews: 750, isFollowed: false, description: 'Hi, I’m Jessica Jane. I am a doctoral student at Harvard University majoring in Web...' },
  { id: 2, name: 'Abraham Lincoln', title: '3D Design', avatar: 'https://i.pravatar.cc/150?img=2', tasks: 32, rating: 4.9, reviews: 510, isFollowed: true, description: 'Expert in 3D Design with 10 years of experience.' },
  { id: 3, name: 'Marie Curie', title: 'Data Scientist', avatar: 'https://i.pravatar.cc/150?img=3', tasks: 28, rating: 4.8, reviews: 620, isFollowed: false, description: 'Passionate about data and AI.' },
  { id: 4, name: 'Nikola Tesla', title: 'Electrical Engineer', avatar: 'https://i.pravatar.cc/150?img=4', tasks: 35, rating: 4.6, reviews: 410, isFollowed: true, description: '' },
  { id: 5, name: 'Ada Lovelace', title: 'Software Engineer', avatar: 'https://i.pravatar.cc/150?img=5', tasks: 45, rating: 4.9, reviews: 880, isFollowed: false, description: '' },
  { id: 6, name: 'Leonardo da Vinci', title: 'Artist & Designer', avatar: 'https://i.pravatar.cc/150?img=6', tasks: 50, rating: 5.0, reviews: 1020, isFollowed: true, description: '' },
  { id: 7, name: 'Albert Einstein', title: 'Physics Mentor', avatar: 'https://i.pravatar.cc/150?img=7', tasks: 30, rating: 4.7, reviews: 540, isFollowed: false, description: '' },
  { id: 8, name: 'Grace Hopper', title: 'Computer Scientist', avatar: 'https://i.pravatar.cc/150?img=8', tasks: 38, rating: 4.8, reviews: 660, isFollowed: true, description: '' },
  { id: 9, name: 'Isaac Newton', title: 'Math Mentor', avatar: 'https://i.pravatar.cc/150?img=9', tasks: 25, rating: 4.5, reviews: 300, isFollowed: false, description: '' },
];

const Mentor = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const recentMentors = mentorData.slice(0, 3);
  const allMentors = mentorData.slice(3, 9);

  // Filter mentors based on search query
  const filteredMentors = allMentors.filter((mentor) =>
    mentor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      
      {/* --- Header Section --- */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Explore Mentors</h1>
        <div className="w-10 h-10 bg-gray-300 rounded-full cursor-pointer border-2 border-red-500" title="Profile" />
      </header>

      {/* --- Search & Filters --- */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        
        {/* Search Bar */}
        <div className="relative flex items-center w-full md:w-1/3 min-w-[300px] border border-gray-200 rounded-lg bg-white px-4 py-2 shadow-sm">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input 
            type="text"
            placeholder="Search Mentors"
            className="flex-grow focus:outline-none text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category/Sort Buttons */}
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

      {/* --- Recent Mentors --- */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Recent Mentors</h2>
          <div className="flex space-x-2">
            <ChevronLeft className="w-5 h-5 text-gray-400 cursor-pointer" title="Previous" />
            <ChevronRight className="w-5 h-5 text-gray-800 cursor-pointer" title="Next" />
          </div>
        </div>

        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {recentMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} isRecent={true} />
          ))}
        </div>
      </section>

      {/* --- Mentors Grid --- */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Mentors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
          {filteredMentors.length === 0 && (
            <p className="text-gray-500 col-span-full text-center">No mentors found.</p>
          )}
        </div>
      </section>

    </div>
  );
};

export default Mentor;
