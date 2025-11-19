import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Star, ClipboardList } from "lucide-react";

const mentors = [
  {
    id: 1,
    name: "Curious George",
    role: "UI UX Design",
    avatar:
      "https://i.pravatar.cc/150?img=3",
    tasks: 40,
    rating: 4.7,
    reviews: 750,
    followed: false,
  },
  {
    id: 2,
    name: "Abraham Lincoln",
    role: "3D Design",
    avatar:
      "https://i.pravatar.cc/150?img=12",
    tasks: 32,
    rating: 4.9,
    reviews: 510,
    followed: true,
  },
];

const MentorSection = () => {
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
        <h2 className="text-xl font-semibold text-gray-800">
          Monthly Mentors
        </h2>

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

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar gap-6 py-2"
      >
        {mentors.map((m, i) => (
          <div key={m.id} className="flex items-center gap-6">

            {/* Card */}
            <div className="min-w-[240px] flex flex-col gap-3">
              {/* Top Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={m.avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {m.name}
                    </h3>
                    <p className="text-sm text-gray-500">{m.role}</p>
                  </div>
                </div>

                {m.followed ? (
                  <span className="text-sm font-medium text-gray-500">
                    Followed
                  </span>
                ) : (
                  <button className="text-sm font-medium text-blue-500 hover:underline">
                    + Follow
                  </button>
                )}
              </div>

              {/* Bottom Row */}
              <div className="flex items-center justify-between text-gray-600 text-sm pt-2">

                {/* Tasks */}
                <div className="flex items-center gap-1">
                  <ClipboardList className="w-4 h-4" />
                  <span>{m.tasks} Task</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>
                    {m.rating} ({m.reviews} Reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            {i !== mentors.length - 1 && (
              <div className="w-[1px] h-20 bg-gray-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorSection;
