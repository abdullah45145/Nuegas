import React from "react";
import { MoreHorizontal, Clock } from "lucide-react";

const TaskTodayCard = () => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-4 space-y-4">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-semibold text-gray-700">Task Today</h2>
        <MoreHorizontal className="text-gray-500" />
      </div>

      {/* Image */}
      <img
        src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg"
        className="w-full h-36 rounded-xl object-cover"
        alt="task"
      />

      {/* Title */}
      <div>
        <h3 className="text-base font-semibold text-gray-800">
          Creating Awesome Mobile Apps
        </h3>
        <p className="text-xs text-gray-500">UI / UX Designer</p>
      </div>

      {/* Progress Row */}
      <div>
        <div className="flex justify-between items-center text-sm font-medium mb-1">
          <span className="text-gray-700">Progress</span>
          <span className="text-blue-500 font-semibold">90%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: "90%" }}
          />
        </div>
      </div>

      {/* Time & Avatars */}
      <div className="flex justify-between items-center pt-1">
        {/* Time */}
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>1 Hour</span>
        </div>

        {/* Avatars */}
        <div className="flex -space-x-2">
          {[
            1, 2, 3, 4, 5,6
          ].map((i) => (
            <img
              key={i}
              src={`https://i.pravatar.cc/150?img=${i}`}
              className="w-6 h-6 rounded-full border-2 border-white"
            />
            
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t my-2" />

      {/* Detail Task */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-sm font-semibold text-gray-800">Detail Task</h4>
          <span className="text-xs text-gray-500">UI / UX Designer</span>
        </div>

        <div className="space-y-2">
          <TaskItem num={1} text="Understanding the tools in Figma" />
          <TaskItem num={2} text="Understand the basics of making designs" />
          <TaskItem num={3} text="Design a mobile application with Figma" />
        </div>
      </div>

      {/* Button */}
      <button className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold text-sm hover:bg-blue-600 transition">
        Go To Detail
      </button>
    </div>
  );
};

const TaskItem = ({ num, text }) => (
  <div className="flex items-start gap-3">
    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-sm font-semibold">
      {num}
    </div>
    <p className="text-sm text-gray-700">{text}</p>
  </div>
);

export default TaskTodayCard;
