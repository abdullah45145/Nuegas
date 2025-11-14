import React from 'react';
import { Bell } from 'lucide-react';
import profile from '../assets/Screenshot 2024-03-21 114535.png'

// ✅ User avatar component
const UserAvatar = ({ name }) => {
  const imageUrl = "";

  return (
    <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden">
      <img
        src={profile}
        alt={`${name}'s avatar`}
        className="h-full w-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/48x48/dbeafe/1e3a8a?text=pf";
        }}
      />
    </div>
  );
};

// ✅ Notification bell component
const NotificationBell = () => {
  return (
    <div className="relative flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white transition-all  border border-gray-200 duration-200 cursor-pointer  hover:bg-gray-50 active:scale-95">
      <Bell className="h-6 w-6 sm:h-6 sm:w-6 text-gray-400" />
      <span className="absolute top-2 right-3 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
    </div>
  );
};

// ✅ Main header component
const Header = ({ userName = "Skylar Dias", motivationText = "Let's finish your task today!" }) => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 bg-white  max-w-5xl mx-auto  gap-3 sm:gap-0">
      
      {/* Left side: greeting and text */}
      <div className="flex flex-col text-center sm:text-left">
        <h1 className="text-sm sm:text-2xl font-bold text-gray-900">
          Hi, {userName}
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-1">
          {motivationText}
        </p>
      </div>

      {/* Right side: icons */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        <NotificationBell />
        <UserAvatar name={userName} />
      </div>
    </header>
  );
};

export default Header;
