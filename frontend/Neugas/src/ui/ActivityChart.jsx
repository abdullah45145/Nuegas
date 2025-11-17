import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Data matching the example
const data = [
  { day: "S", value: 1 },
  { day: "M", value: 2 },
  { day: "T", value: 1 },
  { day: "W", value: 2 },
  { day: "T", value: 3 },
  { day: "F", value: 1 },
  { day: "S", value: 2 },
];

// Custom tooltip bubble like the image
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white px-4 py-2 rounded-2xl text-sm font-medium shadow-xl">
        1 Task
      </div>
    );
  }
  return null;
};

const ActivityChart = () => {
  return (
    <div className="w-full max-w-[462px] p-6 bg-[#F7F7FB] rounded-xl border border-[#DDE1EA]">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-gray-800">Activity</h2>
        <span className="text-gray-600 text-sm cursor-pointer select-none flex items-center gap-1">
          This Week <span>▼</span>
        </span>
      </div>

      {/* Chart Container */}

      <div className="w-full h-[214px] bg-white rounded-2xl shadow-sm p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            {/* X-Axis */}
            <XAxis
              dataKey="day"
              tick={{ fill: "#A0A3B1", fontSize: 14 }}
              axisLine={false}
              tickLine={false}
            />

            {/* Y-Axis */}
            <YAxis
              domain={[1, 3]}
              ticks={[1, 2, 3]}
              tick={{ fill: "#BABDC5", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />

            {/* Tooltip */}
            <Tooltip content={<CustomTooltip />} cursor={false} />

            {/* Background soft curve */}
            <Line
              type="monotone"
              dataKey="value"
              stroke="#E5E7EB"
              strokeWidth={4}
              style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.25))" }}
              dot={false}
            />

            {/* Main dark curve */}
            <Line
              type="monotone"
              dataKey="value"
              stroke="#0F0F11"
              strokeWidth={4}
              dot={{
                r: 6,
                fill: "#4F6BFF",
                stroke: "white",
                strokeWidth: 3,
              }}
              activeDot={{ r: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityChart;
