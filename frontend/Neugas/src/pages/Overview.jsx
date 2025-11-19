import React from 'react'
import Header from '../ui/Header'
import RunningTaskCard from '../ui/RunningCard'
import CalendarWidget from '../ui/CalendarWidget'
import ActivityChart from '../ui/ActivityChart'
import MentorSection from '../ui/MentorSection'
import UpcomingTasks from '../ui/UpcomingTasks'
import TaskTodayCard from '../ui/TaskTodayCard'

const Overview = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-100vh overflow-y-auto bg-white">

        {/* LEFT SECTION */}
        <div className="w-full md:w-[65%] h-auto md:h-screen p-4 md:p-8 space-y-6">

          {/* Header */}
          <Header />

          {/* Running task + Activity chart */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <RunningTaskCard />
            <ActivityChart />
          </div>

          {/* Mentor + Upcoming Tasks */}
          <div className="space-y-6">
            <MentorSection />
            <UpcomingTasks />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full md:w-[35%] bg-[#F5F5F7] p-4 md:p-8 flex justify-center items-start flex-col">
          <CalendarWidget />
          <TaskTodayCard />
        </div>

      </div>
    </>
  )
}

export default Overview
