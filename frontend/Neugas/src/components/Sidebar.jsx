import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  CheckSquare,
  Users,
  MessageCircle,
  Settings,
  Menu,
  X,
} from 'lucide-react';
import HelpCenterCard from '../ui/HelpCenterCard';
import BookLogo from '../ui/Booklogo';

const menuItems = [
  { label: 'Overview', icon: LayoutDashboard, path: '/overview' },
  { label: 'Task', icon: CheckSquare, path: '/task' },
  { label: 'Mentors', icon: Users, path: '/mentors' },
  { label: 'Message', icon: MessageCircle, path: '/message' },
  { label: 'Settings', icon: Settings, path: '/settings' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow-sm fixed w-full z-40">
        <div className="flex items-center gap-2">
          <BookLogo />
          <h1 className="font-semibold text-2xl text-[#141522]">Nuegas</h1>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 min-h-screen overflow-hidden  md:min-h-screen bg-white border-r border-gray-100 flex flex-col justify-between p-6 z-50 w-60 transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        {/* Logo + Name */}
        <div className="hidden md:flex items-center gap-2 mb-4">
          <BookLogo />
          <h1 className="font-semibold text-2xl text-[#0F0E17]">Nuegas</h1>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col space-y-3">
          {menuItems.map(({ label, icon: Icon, path }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition-all
                ${isActive ? 'bg-[#F4F6FB] text-blue-600 font-medium' : 'text-gray-500 hover:text-blue-600 hover:bg-[#F4F6FB]'}`
              }
            >
              <Icon size={20} />
              <span className="text-sm">{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Help Center */}
        <div className="mt-6">
          <HelpCenterCard />
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-30 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
