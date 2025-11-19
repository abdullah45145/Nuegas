import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

const CalendarWidget = () => {
  // Start with a fixed selected date
  const [currentDate, setCurrentDate] = useState(new Date(2024, 6, 14)); // July 14, 2024

  // Create a full week array based on currentDate
  const getWeekDates = (date) => {
    const week = [];
    const start = new Date(date);
    start.setDate(date.getDate() - start.getDay()); // move to Sunday

    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      week.push(day);
    }
    return week;
  };

  const weekDates = getWeekDates(currentDate);

  // Navigation handlers
  const goToNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const goToPrevWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  // Format Month + Year
  const monthLabel = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl w-full max-w-[290px] sm:max-w-[320px] mx-auto select-none">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <button
          onClick={goToPrevWeek}
          className="text-gray-500 hover:text-gray-900 p-2 rounded-md hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <h2 className="text-lg sm:text-sm font-semibold text-gray-800">
          {monthLabel}
        </h2>

        <button
          onClick={goToNextWeek}
          className="text-gray-500 hover:text-gray-900 p-2 rounded-md hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Weekday Header */}
      <div className="grid grid-cols-7 gap-1 mb-2 sm:mb-3">
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className={`flex items-center justify-center rounded-full w-4 h-4 sm:w-6 sm:h-6 
              text-sm sm:text-sm 
              ${index === currentDate.getDay()
                ? "bg-[#1a1a2e] text-white font-bold"
                : "text-gray-600 font-medium"}
            `}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Date Row */}
      <div className="grid grid-cols-7 gap-1">
        {weekDates.map((day, index) => {
          const isSelected =
            day.toDateString() === currentDate.toDateString();

          return (
            <div
              key={index}
              onClick={() => setCurrentDate(day)}
              className={`flex items-center justify-center rounded-full cursor-pointer
                w-4 h-4 sm:w-6 sm:h-6 text-sm sm:text-base
                ${
                  isSelected
                    ? "bg-[#4e7dff] text-white font-bold shadow-md"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 font-medium"
                }`}
            >
              {day.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarWidget;
