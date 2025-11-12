import React from "react";
import { HelpCircle } from "lucide-react";

const HelpCenterCard = () => {
  return (
    <div className="relative w-full max-w-[198px] h-[244px] sm:max-w-[260px] md:max-w-[240px] 
                    bg-[#141522] text-white rounded-2xl p-4 
                    flex flex-col items-center text-center space-y-3 
                    mx-auto shadow-lg">
      {/* Icon with Glow */}
  

      <div className="mt-11">
        <h3 className="font-semibold text-sm sm:text-base">Help Center</h3>
        <p className="text-[11px] sm:text-xs font-semibold text-white leading-snug mt-2">
          Having trouble in learning? Please contact us for more questions.
        </p>
      </div>

      <button className="bg-white text-black text-xs sm:text-xs px-5 py-2 sm:px-4 sm:py-2.5 rounded-lg font-semibold mt-8 transition hover:bg-gray-100">
        Go To Help Center
      </button>

      <div className="absolute h-[160px] w-[160px] bg-[#FFFFFF14] rounded-full -top-20 -left-20"></div>
      <div className="absolute h-[160px] w-[160px] bg-[#FFFFFF14] rounded-full -bottom-20 -right-20"></div>
          <div className="absolute -top-6 flex justify-center items-center">
        <div className="bg-[#141522] rounded-full shadow-[0_0_24px_#54577A]">
          <HelpCircle className=" text-[#FFFFFF]" size={50} />
        </div>
      </div>
    </div>
    
  );
};

export default HelpCenterCard;
