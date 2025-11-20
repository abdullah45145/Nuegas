// src/ui/MentorCard.jsx

import React from 'react';
import { Star } from 'lucide-react';

const MentorCard = ({ mentor, isRecent = false }) => {
  const { name, title, avatar, tasks, rating, reviews, description, isFollowed } = mentor;

  return (
    <div
      className={`
        bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all 
        ${isRecent ? 'min-w-[230px] sm:min-w-[260px]' : 'w-full'}
      `}
    >
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
          />
          <div className="ml-3">
            <p className="font-semibold text-sm sm:text-base">{name}</p>
            <p className="text-xs sm:text-sm text-gray-500">{title}</p>
          </div>
        </div>

        {/* Follow Button */}
        <button
          className={`
            text-xs sm:text-sm font-medium px-3 py-1 rounded-full 
            ${isRecent
              ? 'text-blue-600 border border-blue-600 hover:bg-blue-50'
              : 'text-blue-600 hover:underline'}
          `}
        >
          {isRecent ? '+ Follow' : isFollowed ? 'Followed' : '+ Follow'}
        </button>
      </div>

      {/* Description */}
      {!isRecent && description && (
        <p className="mt-3 text-xs sm:text-sm text-gray-600 line-clamp-2">
          {description}
        </p>
      )}

      {/* Stats */}
      <div className={`flex items-center mt-3 pt-2 ${isRecent ? '' : 'border-t border-gray-100'}`}>
        <p className="text-xs sm:text-sm text-gray-600 mr-4">
          <span className="font-bold text-gray-800">{tasks}</span> Task
        </p>

        <div className="flex items-center text-xs sm:text-sm text-gray-600">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
          <span className="font-bold text-gray-800">{rating}</span>
          <span className="ml-1">({reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
