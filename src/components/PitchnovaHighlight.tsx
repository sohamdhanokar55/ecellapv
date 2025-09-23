import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Users, ArrowRight } from "lucide-react";

const PitchnovaHighlight = () => {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Pitchnova Featured Event Card */}
        <div className="relative bg-gradient-to-br from-[#A259FF]/10 via-[#872ff7]/10 to-[#ff6b9d]/10 rounded-3xl border-2 border-[#A259FF]/30 backdrop-blur-lg overflow-hidden group hover:scale-[1.02] transition-all duration-500">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#A259FF]/20 to-[#872ff7]/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#872ff7]/20 to-[#ff6b9d]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative p-8 sm:p-12 lg:p-16 text-center">
            {/* Featured Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#A259FF] to-[#872ff7] rounded-full px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white font-semibold text-sm uppercase tracking-wider">
                Featured Event
              </span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>

            {/* Event Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-sans">
              🚀{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A259FF] via-[#872ff7] to-[#ff6b9d]">
                PITCHNOVA
              </span>
            </h2>

            {/* Event Subtitle */}
            <p className="text-xl sm:text-2xl text-[#A259FF] font-semibold mb-6">
              The Ultimate Startup Pitching Competition
            </p>

            {/* Event Details */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <div className="flex items-center justify-center text-[#A259FF] mb-2">
                  <Calendar className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Date</span>
                </div>
                <p className="text-white text-lg">August 25, 2025</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <div className="flex items-center justify-center text-[#A259FF] mb-2">
                  <Users className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Open For</span>
                </div>
                <p className="text-white text-lg">All Colleges</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <div className="flex items-center justify-center text-[#A259FF] mb-2">
                  <ArrowRight className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Registration</span>
                </div>
                <p className="text-white text-lg">Open Now</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-[#CCCCCC] mb-10 max-w-3xl mx-auto leading-relaxed">
              Join the ultimate pitch battle where innovation meets opportunity.
              Present your groundbreaking startup ideas, compete for prestigious
              awards, and get a chance to advance to Eureka! Zonals.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => navigate("/events/pitchnova")}
                className="group bg-gradient-to-r from-[#A259FF] to-[#872ff7] text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 border-none cursor-pointer flex items-center gap-3 shadow-2xl hover:shadow-[#A259FF]/50"
              >
                <Users className="w-6 h-6" />
                Register Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigate("/events/pitchnova")}
                className="bg-transparent text-[#A259FF] border-2 border-[#A259FF] px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:bg-[#A259FF] hover:text-white cursor-pointer"
              >
                Learn More
              </button>
            </div>

            {/* Deadline Notice */}
            <div className="mt-8 inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2 animate-pulse">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
              <span className="text-red-300 font-medium text-sm">
                Registration Deadline: August 16, 2025 : 11:59 AM
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchnovaHighlight;
