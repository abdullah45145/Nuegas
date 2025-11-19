import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Creating Mobile App Design",
    subtitle: "UI UX Design",
    image:
      "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg",
    progress: 75,
    daysLeft: 3,
    avatars: [
      "https://i.pravatar.cc/150?img=1",
      "https://i.pravatar.cc/150?img=2",
      "https://i.pravatar.cc/150?img=3",
      "https://i.pravatar.cc/150?img=4",
    ],
  },
  {
    id: 2,
    title: "Creating Perfect Website",
    subtitle: "Web Developer",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    progress: 85,
    daysLeft: 4,
    avatars: [
      "https://i.pravatar.cc/150?img=5",
      "https://i.pravatar.cc/150?img=6",
      "https://i.pravatar.cc/150?img=7",
      "https://i.pravatar.cc/150?img=8",
    ],
  },
];

const UpcomingTasks = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white border border-blue-300 rounded-xl p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Upcoming Task</h2>

        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-md hover:bg-gray-100 text-gray-600"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-md hover:bg-gray-100 text-gray-600"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Scroll Section */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar gap-6 py-2"
      >
        {tasks.map((task, index) => (
          <div key={task.id} className="flex items-start gap-6">
            {/* Task Card */}
            <div className="min-w-[260px] flex flex-col gap-3">
              {/* Image */}
              <img
                src={task.image}
                alt=""
                className="w-full h-32 rounded-xl object-cover"
              />

              {/* Title */}
              <h3 className="font-semibold text-gray-800">{task.title}</h3>
              <p className="text-sm text-gray-500">{task.subtitle}</p>

              {/* Progress Header */}
              <div className="flex justify-between items-center mt-1">
                <span className="text-sm text-gray-700 font-medium">
                  Progress
                </span>
                <span className="text-sm font-semibold text-blue-500">
                  {task.progress}%
                </span>
              </div>

              {/* Custom Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${task.progress}%` }}
                />
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-2 text-sm">
                {/* Days Left */}
                <div className="flex items-center gap-1 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{task.daysLeft} Days Left</span>
                </div>

                {/* Avatars */}
                <div className="flex -space-x-2">
                  {task.avatars.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-6 h-6 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            {index !== tasks.length - 1 && (
              <div className="w-[1px] h-32 bg-gray-300 my-auto" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingTasks;

