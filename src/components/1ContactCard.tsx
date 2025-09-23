import React, { useState, useEffect } from "react";

const ContactCard2 = ({
  name = "Ms. Saly Antony",
  role = "Principal, Agnel Polytechnic",
  description = "Ms. Saly Antony has been a visionary leader at Agnel Polytechnic, committed to fostering academic excellence and holistic development since her appointment.",
  imgSrc = "/principal.jpg",
  delay = 0,
  isVisible = true, // New prop for external visibility control
}) => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsCardVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [delay, isVisible]);

  return (
    <div
      className={`w-full max-w-5xl mx-auto bg-[#10101a] rounded-2xl shadow-lg border-2 border-[#A259FF]/30 overflow-hidden transform transition-all duration-1000 ease-out ${
        isCardVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-10 opacity-0 scale-95"
      } ${
        isHovered
          ? "scale-105 shadow-2xl border-[#A259FF]/60 bg-[#121225]"
          : "hover:scale-105 hover:shadow-2xl hover:border-[#A259FF]/50"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mobile-first responsive layout */}
      <div className="flex flex-col lg:flex-row items-center p-6 sm:p-8 lg:pt-16 lg:pb-16 lg:px-10 gap-6 sm:gap-8 lg:gap-12">
        {/* Image Section */}
        <div
          className={`w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-xl overflow-hidden border-4 border-[#A259FF]/30 bg-[#22213a] flex-shrink-0 relative group transform transition-all duration-700 ${
            isCardVisible
              ? "translate-x-0 opacity-100"
              : "lg:-translate-x-20 opacity-0"
          } ${isHovered ? "scale-110 border-[#A259FF]/70" : ""}`}
        >
          {/* Glow Effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-[#A259FF]/20 via-transparent to-transparent rounded-xl transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          ></div>

          {/* Animated Border */}
          <div
            className={`absolute inset-0 rounded-xl border-2 border-[#A259FF] transition-all duration-700 ${
              isHovered
                ? "scale-110 opacity-50 animate-pulse"
                : "scale-100 opacity-0"
            }`}
          ></div>

          <img
            src={imgSrc}
            alt={name}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? "scale-110 brightness-110" : "group-hover:scale-105"
            }`}
            loading="lazy"
          />
        </div>

        {/* Content Section */}
        <div
          className={`flex flex-col flex-grow text-center lg:text-left transform transition-all duration-1000 ${
            isCardVisible
              ? "translate-x-0 opacity-100"
              : "lg:translate-x-20 opacity-0"
          }`}
        >
          {/* Name */}
          <h3
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-['Space_Grotesk'] mb-2 transition-all duration-500 ${
              isHovered ? "text-[#A259FF] scale-105" : ""
            } ${isCardVisible ? "animate-fadeInUp" : ""}`}
          >
            {name}
          </h3>

          {/* Role */}
          <p
            className={`text-[#A259FF] text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 transition-all duration-500 delay-200 ${
              isHovered ? "text-white scale-105" : ""
            } ${isCardVisible ? "animate-fadeInUp" : ""}`}
          >
            {role}
          </p>

          {/* Description */}
          <div
            className={`text-[#CCCCCC] text-base sm:text-lg lg:text-xl leading-relaxed transition-all duration-500 delay-400 ${
              isHovered ? "text-white" : ""
            } ${isCardVisible ? "animate-fadeInUp" : ""}`}
          >
            {description}
          </div>

          {/* Animated underline */}
          <div
            className={`mt-4 h-1 bg-gradient-to-r from-[#A259FF] to-[#872ff7] rounded-full transition-all duration-1000 delay-600 ${
              isCardVisible ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard2;
