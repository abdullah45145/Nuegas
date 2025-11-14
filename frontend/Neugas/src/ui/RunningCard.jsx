import React from 'react';

const RunningTaskCard = ({ currentTasks = 65, totalTasks = 100 }) => {
  const percentage = 45; // Fixed visual percentage
  const radius = 40; // Slightly smaller to fit within compact height
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className="
        bg-[#141522] ml-4 mt-4 text-white 
        p-4 
        rounded-xl 
        w-[194px] h-[214px]
        flex flex-col justify-between 
      "
    >
      {/* Header */}
      <h3 className="text-sm font-semibold text-gray-100 mb-3">
        Running Task
      </h3>

      {/* Current Task Count */}
      <div className="text-4xl font-semibold leading-none mb-6 text-white">
        {currentTasks}
      </div>

      {/* Progress + Total */}
      <div className="flex items-center justify-start gap-3">
        {/* Circular Progress */}
        <div className="relative w-[70px] h-[70px]">
          <svg className="w-full h-full" viewBox="0 0 120 120">
            {/* Background circle */}
            <circle
              className="text-[#2c2c45]"
              strokeWidth="10"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="60"
              cy="60"
            />
            {/* Progress circle */}
            <circle
              className="text-[#4e7dff]"
              strokeWidth="5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="60"
              cy="60"
              transform="rotate(-90 60 60)"
            />
            {/* Percentage text */}
            <text
              x="60"
              y="60"
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-lg font-semibold text-white"
              fill="currentColor"
            >
              {percentage}%
            </text>
          </svg>
        </div>

        {/* Total Tasks */}
        <div className="flex flex-col items-start">
          <span className="text-2xl font-bold text-white leading-none">
            {totalTasks}
          </span>
          <span className="text-[10px] text-gray-400 mt-1">Task</span>
        </div>
      </div>
    </div>
  );
};

export default RunningTaskCard;
