// src/ui/TaskCard.jsx

import React from 'react';
import { Clock } from 'lucide-react';

const TaskCard = ({ task }) => {
  const { title, subtitle, image, progress, timeOrDays, mentors } = task;

  const progressBarColor = progress === 100 ? "bg-green-500" : "bg-blue-500";

  return (
    <div className="flex-shrink-0 w-56 sm:w-60 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">

      {/* Image */}
      <div className="relative h-32 sm:h-36 rounded-t-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">

        {/* Title */}
        <h3 className="text-base font-semibold text-gray-800 line-clamp-2">{title}</h3>
        <p className="text-xs text-gray-500 mb-3">{subtitle}</p>

        {/* Progress */}
        <div>
          <div className="flex justify-between text-xs font-medium mb-1">
            <span className="text-gray-600">Progress</span>
            <span className={`font-bold ${progress === 100 ? "text-green-500" : "text-blue-500"}`}>
              {progress}%
            </span>
          </div>

          <div className="h-1.5 bg-gray-200 rounded-full">
            <div
              className={`h-full rounded-full ${progressBarColor}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-3 border-t mt-3">

          <div className="flex items-center text-xs text-gray-600">
            <Clock className="w-4 h-4 mr-1 text-gray-400" />
            {timeOrDays}
          </div>

          <div className="flex items-center">
            {mentors.slice(0, 3).map((m, i) => (
              <img
                key={i}
                src={m.avatar}
                alt="mentor"
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
                style={{ marginLeft: i > 0 ? -8 : 0 }}
              />
            ))}

            {mentors.length > 3 && (
              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 border-2 border-white -ml-2">
                +{mentors.length - 3}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TaskCard;
