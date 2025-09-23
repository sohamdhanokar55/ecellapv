import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Define types for better TypeScript support
interface TeamMember {
  name: string;
  position: string;
  linkedin: string;
  image: string;
  description?: string;
}

interface MemberCardProps {
  member: TeamMember;
  className?: string;
  isPresident?: boolean;
}

const Team: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Soham Dhanokar",
      position: "President",
      linkedin:
        "https://www.linkedin.com/in/soham-dhanokar-13807a355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/Soham Dhanokar (President).png",
      description: "Leading the vision and strategic direction of APV E-Cell",
    },
    {
      name: "Swara Hande",
      position: "Head of Public Relations and Marketing",
      linkedin:
        "https://www.linkedin.com/in/swara-hande-9a8277356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/Swara Hande.JPG",
      description:
        "Building strong relationships and expanding our community reach",
    },
    {
      name: "Parth Naukudkar",
      position: "Head of Finance and Operations",
      linkedin:
        "https://www.linkedin.com/in/parth-naukudkar-bab2b9376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/Parth Naukudkar.jpg",
      description: "Managing financial strategies and operational excellence",
    },
    {
      name: "Jatin Sharma",
      position: "Head of Events and Operations",
      linkedin:
        "https://www.linkedin.com/in/jatin-sharma-75895b378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/Jatin Sharma.JPG",
      description: "Orchestrating memorable events and seamless operations",
    },
    {
      name: "Harshali Bhosale",
      position: "Head of Design and Creative",
      linkedin:
        "https://www.linkedin.com/in/harshali-bhosale-8768a3377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/HB.jpg",
      description: "Crafting visual stories and creative brand experiences",
    },
    {
      name: "Arush Wavhal",
      position: "Head of Technology and Development",
      linkedin:
        "https://www.linkedin.com/in/arush-wavhal-292647377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/Arush Waval.PNG",
      description:
        "Driving innovation through cutting-edge technology solutions",
    },
    {
      name: "Rajvi Gaikwad",
      position: "Head of Content and Social Media",
      linkedin:
        "https://www.linkedin.com/in/rajvi-gaikwad-567089339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/RG.png",
      description:
        "Creating engaging content and building our digital presence",
    },
  ];

  // Create slides with 1-3-3 pattern
  const slides = [
    [teamMembers[0]], // President
    teamMembers.slice(1, 4), // Next 3 members
    teamMembers.slice(4, 7), // Last 3 members
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const MemberCard: React.FC<MemberCardProps> = ({
    member,
    className = "",
    isPresident = false,
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const cardId = teamMembers.findIndex((m) => m.name === member.name);

    return (
      <div
        className={`group relative h-full text-center p-6 rounded-2xl bg-gradient-to-br from-[#0D0D1F] to-[#1A1A2E] border-2 border-[#A259FF]/20 hover:border-[#A259FF]/60 transition-all duration-500 hover:shadow-xl hover:shadow-[#A259FF]/20 hover:scale-105 transform ${
          isPresident
            ? "border-[#A259FF]/40 shadow-lg shadow-[#A259FF]/10 scale-105"
            : ""
        } ${className}`}
        onMouseEnter={() => {
          setIsHovered(true);
          setHoveredCard(cardId);
          setIsAutoplayPaused(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredCard(null);
          setIsAutoplayPaused(false);
        }}
      >
        {/* Background glow effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-[#A259FF]/20 via-transparent to-transparent rounded-2xl transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Animated border */}
        <div
          className={`absolute inset-0 rounded-2xl border-2 border-[#A259FF] transition-all duration-700 pointer-events-none ${
            isHovered
              ? "scale-105 opacity-50 animate-pulse"
              : "scale-100 opacity-0"
          }`}
        />

        {/* Profile Image */}
        <div
          className={`relative mx-auto rounded-full overflow-hidden mb-6 border-3 border-[#A259FF]/30 group-hover:border-[#A259FF]/70 transition-all duration-500 ${
            isPresident ? "w-40 h-40" : "w-32 h-32"
          }`}
        >
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-[#A259FF]/20 to-[#872ff7]/20 animate-pulse rounded-full" />
          )}

          {/* Glow effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-[#A259FF]/30 via-transparent to-transparent rounded-full transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />

          <img
            src={member.image}
            alt={`${member.name} profile`}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? "scale-110 brightness-110" : "scale-100"
            }`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/placeholder-avatar.png";
            }}
          />
        </div>

        {/* Name */}
        <h3
          className={`font-bold text-white mb-2 font-['Space_Grotesk'] transition-all duration-300 ${
            isHovered ? "text-[#A259FF] scale-105" : ""
          } ${isPresident ? "text-2xl" : "text-xl"}`}
        >
          {member.name}
        </h3>

        {/* Position */}
        <p
          className={`text-[#CCCCCC] mb-4 font-medium transition-all duration-300 ${
            isHovered ? "text-white scale-105" : ""
          } ${isPresident ? "text-lg text-[#A259FF]" : ""}`}
        >
          {member.position}
        </p>

        {/* Description */}
        {member.description && (
          <p
            className={`text-sm text-[#CCCCCC]/80 mb-6 leading-relaxed transition-all duration-500 ${
              isHovered ? "text-[#CCCCCC] scale-105" : ""
            } ${isPresident ? "text-base" : ""}`}
          >
            {member.description}
          </p>
        )}

        {/* LinkedIn Button */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center bg-[#A259FF]/20 hover:bg-[#A259FF] rounded-full transition-all duration-300 border border-[#A259FF]/30 hover:border-[#A259FF] hover:scale-110 hover:shadow-lg hover:shadow-[#A259FF]/50 ${
            isPresident ? "w-12 h-12" : "w-10 h-10"
          } ${isHovered ? "scale-110" : ""}`}
          aria-label={`${member.name}'s LinkedIn profile`}
          onClick={(e) => e.stopPropagation()}
        >
          <Linkedin
            className={`text-[#A259FF] hover:text-white transition-colors duration-300 ${
              isPresident ? "w-6 h-6" : "w-5 h-5"
            }`}
          />
        </a>
      </div>
    );
  };

  const CustomNavigation = () => (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="w-12 h-12 bg-[#A259FF]/20 hover:bg-[#A259FF] rounded-full flex items-center justify-center transition-all duration-300 border border-[#A259FF]/30 hover:border-[#A259FF] hover:scale-110 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-[#A259FF] group-hover:text-white transition-colors duration-300" />
      </button>

      <div className="flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideTo(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "bg-[#A259FF] w-8"
                : "bg-[#A259FF]/30 hover:bg-[#A259FF]/60 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="w-12 h-12 bg-[#A259FF]/20 hover:bg-[#A259FF] rounded-full flex items-center justify-center transition-all duration-300 border border-[#A259FF]/30 hover:border-[#A259FF] hover:scale-110 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-[#A259FF] group-hover:text-white transition-colors duration-300" />
      </button>
    </div>
  );

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #151522 0%, #0D0D1F 100%)",
      }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A259FF] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#872ff7] rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk'] transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Our <span className="text-[#A259FF]">Team</span>
          </h2>
          <div
            className={`w-32 h-1 bg-gradient-to-r from-[#A259FF] to-[#872ff7] mx-auto rounded-full transform transition-all duration-1000 delay-200 ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />
          <p
            className={`text-lg text-[#CCCCCC] mt-6 max-w-2xl mx-auto transform transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Meet the passionate individuals driving innovation and
            entrepreneurship at APV E-Cell
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={true}
            autoplay={{
              delay: isAutoplayPaused ? 999999 : 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="team-swiper min-h-[650px]"
          >
            {slides.map((slide, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="flex items-center justify-center min-h-[600px]">
                  <div
                    className={`grid gap-8 w-full ${
                      slide.length === 1
                        ? "max-w-2xl mx-auto"
                        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
                    }`}
                  >
                    {slide.map((member, memberIndex) => (
                      <div
                        key={`${slideIndex}-${memberIndex}`}
                        className="animate-fadeInUp"
                        style={{
                          animationDelay: `${memberIndex * 200}ms`,
                        }}
                      >
                        <MemberCard
                          member={member}
                          isPresident={slideIndex === 0}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <CustomNavigation />
        </div>
      </div>
    </section>
  );
};

export default Team;
