import React from 'react'
import Header from '../ui/Header'
import RunningTaskCard from '../ui/RunningCard'
import CalendarWidget from '../ui/CalendarWidget'
import ActivityChart from '../ui/ActivityChart'

const Overview = () => {
  return (
    <>
      {/* Container */}
      <div className="flex flex-col md:flex-row  min-h-screen">
        {/* Left Section */}
        <div className="w-full md:w-[65%] h-[50vh] md:h-screen">
         <Header />
        <div className='flex items-center justify-center gap-2'>
               <RunningTaskCard />
         
            <ActivityChart />
        </div>
        </div>

        {/* Right Section */}
        <div className="w-full flex md:w-[35%] h-[50vh] pt-5 md:h-screen bg-[#F5F5F7] ">
            <CalendarWidget />
        </div>
      </div>
    </>
  )
}

export default Overview
