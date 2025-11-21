// src/pages/ExploreTaskPage.jsx

import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import TaskCard from '../ui/TaskCard';

// --- Mock Mentors (updated placeholders) ---
const mockMentors = [
  { avatar: 'https://i.pravatar.cc/150?img=11' },
  { avatar: 'https://i.pravatar.cc/150?img=12' },
  { avatar: 'https://i.pravatar.cc/150?img=13' },
  { avatar: 'https://i.pravatar.cc/150?img=14' },
];

// --- Updated Tasks (new images) ---
const timeLimitTasks = [
  { id: 1, title: 'Creating Awesome Mobile Apps', subtitle: 'UI/UX Design', image: 'https://picsum.photos/id/1015/400/300', progress: 90, timeOrDays: '1 Hour', mentors: mockMentors },
  { id: 2, title: 'Creating Fresh Website', subtitle: 'Web Developer', image: 'https://picsum.photos/id/1035/400/300', progress: 85, timeOrDays: '2 Hours', mentors: mockMentors.slice(0, 2) },
  { id: 3, title: 'Creating Color Palettes', subtitle: 'UI/UX Design', image: 'https://picsum.photos/id/1027/400/300', progress: 100, timeOrDays: '1 Hour', mentors: mockMentors },
];

const newTasks = [
  { id: 4, title: 'Creating Mobile App Design', subtitle: 'UI/UX Design', image: 'https://picsum.photos/id/1043/400/300', progress: 75, timeOrDays: '3 Days Left', mentors: mockMentors.slice(0, 3) },
  { id: 5, title: 'Creating Perfect Website', subtitle: 'Web Developer', image: 'https://picsum.photos/id/1050/400/300', progress: 85, timeOrDays: '4 Days Left', mentors: mockMentors },
  { id: 6, title: 'Mobile App Design', subtitle: 'UI/UX Design', image: 'https://picsum.photos/id/1025/400/300', progress: 65, timeOrDays: '3 Days Left', mentors: mockMentors.slice(0, 2) },
];

// --- Horizontal Scroll Component ---
const HorizontalScrollSection = ({ title, tasks }) => (
  <section className="mb-10">
    <div className="flex justify-between items-center mb-5">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800">{title}</h2>
      <div className="flex space-x-2 text-gray-500">
        <ChevronLeft className="w-6 h-6 cursor-pointer hover:text-gray-800" />
        <ChevronRight className="w-6 h-6 cursor-pointer hover:text-gray-800" />
      </div>
    </div>

    <div className="flex space-x-6 overflow-x-auto pb-3 scrollbar-hide">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  </section>
);

const Task = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const allTasks = [...timeLimitTasks, ...newTasks];

  // 🔥 Real Search Filter
  const filteredTasks = allTasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">

      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-3xl font-bold text-gray-900">Explore Task</h1>
        <div className="w-10 h-10 bg-gray-300 rounded-full cursor-pointer border-2 border-red-500" />
      </header>

      {/* Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">

        {/* Search Bar */}
        <div className="relative flex items-center w-full md:w-2/3 border border-gray-200 rounded-xl bg-white px-4 py-3 shadow-sm">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search Task"
            className="flex-grow focus:outline-none text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 text-sm font-medium w-full md:w-auto">
          <button className="flex items-center text-gray-600 px-4 py-2 border rounded-xl bg-white shadow-sm hover:bg-gray-50 w-full md:w-auto">
            <Menu className="w-4 h-4 mr-1" />
            Category
          </button>

          <button className="flex items-center text-gray-600 px-4 py-2 border rounded-xl bg-white shadow-sm hover:bg-gray-50 w-full md:w-auto">
            Sort By: <span className="font-bold ml-1 text-gray-800">Deadline</span>
          </button>
        </div>
      </div>

      {/* 🔥 If searching, show results grid */}
      {searchQuery ? (
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Search Results</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => <TaskCard key={task.id} task={task} />)
            ) : (
              <p className="text-gray-500 col-span-full text-center">No tasks found.</p>
            )}
          </div>
        </section>
      ) : (
        <>
          <HorizontalScrollSection title="Time Limit" tasks={timeLimitTasks} />
          <HorizontalScrollSection title="New Task" tasks={newTasks} />
        </>
      )}
    </div>
  );
};

export default Task;
