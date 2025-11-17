import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const CalendarWidget = () => {
  const daysInWeek = [
    { date: 10, isSelected: false },
    { date: 11, isSelected: false },
    { date: 12, isSelected: false },
    { date: 13, isSelected: false },
    { date: 14, isSelected: true }, // Selected day
    { date: 15, isSelected: false },
    { date: 16, isSelected: false },
  ];

  // 🔹 Navigation Arrow Button
  const NavArrow = ({ direction }) => (
    <button
      className="text-gray-500 hover:text-gray-900 transition-colors p-2 rounded-md hover:bg-gray-100 active:scale-95"
      aria-label={direction === 'left' ? 'Previous Month' : 'Next Month'}
    >
      {direction === 'left' ? (
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      ) : (
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      )}
    </button>
  );

  // 🔹 Day of the Week (Header Row)
  const WeekdayHeader = ({ day, isSelectedColumn }) => (
    <div
      className={`flex items-center justify-center rounded-full w-4 h-4 sm:w-6 sm:h-6 text-sm sm:text-sm
        ${isSelectedColumn ? 'bg-[#1a1a2e] text-white font-bold' : 'text-gray-600 font-medium'}
      `}
    >
      {day}
    </div>
  );

  // 🔹 Date Circle (Main Row)
  const DayCircle = ({ date, isSelected }) => (
    <div
      className={`flex items-center justify-center rounded-full cursor-pointer  w-4 h-4 sm:w-6 sm:h-6  text-sm sm:text-base
        ${
          isSelected
            ? 'bg-[#4e7dff] text-white font-bold shadow-md'
            : 'bg-gray-100 text-gray-500 hover:bg-gray-200 font-medium transition-all'
        }
      `}
    >
      {date}
    </div>
  );

  return (
    <div
      className="
        bg-white p-4 sm:p-6 rounded-xl 
        w-full max-w-[290px] sm:max-w-[320px] mx-auto
        select-none 
      "
    >
      {/* Month + Nav */}
      <div className="flex justify-between items-center">
        <NavArrow direction="left" />
        <h2 className="text-lg sm:text-sm font-semibold text-gray-800">
          July 2024
        </h2>
        <NavArrow direction="right" />
      </div>

      {/* Weekday Header */}
      <div className="grid grid-cols-7 gap-1 mb-2 sm:mb-3">
        {daysOfWeek.map((day, index) => (
          <WeekdayHeader key={index} day={day} isSelectedColumn={index === 4} />
        ))}
      </div>

      {/* Date Row */}
      <div className="grid grid-cols-7 gap-1">
        {daysInWeek.map((day, index) => (
          <DayCircle key={index} date={day.date} isSelected={day.isSelected} />
        ))}
      </div>
    </div>
  );
};

export default CalendarWidget;
