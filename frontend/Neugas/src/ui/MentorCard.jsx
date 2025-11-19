// src/components/MentorCard.jsx

import React from 'react';
import { Star } from 'lucide-react'; // Assuming lucide-react for icons

const MentorCard = ({ mentor, isRecent = false }) => {
  const { name, title, avatar, tasks, rating, reviews, description } = mentor;

  return (
    <div className={`
      bg-white p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg
      ${isRecent ? 'min-w-[200px] mr-4' : 'h-full'} 
    `}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={avatar} 
            alt={name} 
            className="w-10 h-10 rounded-full object-cover" 
          />
          <div className="ml-3">
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs text-gray-500">{title}</p>
          </div>
        </div>
        {/* Toggle between +Follow and Followed */}
        <button 
          className={`
            text-xs font-medium px-3 py-1 rounded-full 
            ${isRecent ? 'text-blue-600 border border-blue-600 hover:bg-blue-50' : 'bg-transparent text-blue-600 hover:underline'}
          `}
        >
          {isRecent ? '+ Follow' : (mentor.isFollowed ? 'Followed' : '+ Follow')}
        </button>
      </div>

      {/* Main card content for the grid view */}
      {!isRecent && (
        <div className="mt-3 text-sm text-gray-600">
          <p className="line-clamp-2">{description}</p>
        </div>
      )}

      {/* Stats/Reviews */}
      <div className={`flex items-center mt-3 pt-2 ${isRecent ? '' : 'border-t border-gray-100'}`}>
        <p className="text-xs text-gray-600 mr-4">
          <span className="font-bold text-gray-800">{tasks}</span> Task
        </p>
        <div className="flex items-center text-xs text-gray-600">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
          <span className="font-bold text-gray-800 mr-1">{rating}</span> 
          ({reviews} Reviews)
        </div>
      </div>
    </div>
  );
};

export default MentorCard;