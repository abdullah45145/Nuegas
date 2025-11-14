import React from 'react'
import Header from '../ui/Header'
import RunningTaskCard from '../ui/RunningCard'
import CalendarWidget from '../ui/CalendarWidget'

const Overview = () => {
  return (
    <>
      {/* Container */}
      <div className="flex flex-col md:flex-row  min-h-screen">
        {/* Left Section */}
        <div className="w-full md:w-[65%] h-[50vh] md:h-screen">
         <Header />
         <RunningTaskCard />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[35%] h-[50vh] pt-5 md:h-screen bg-[#F5F5F7] ">
            <CalendarWidget />
        </div>
      </div>
    </>
  )
}

export default Overview
