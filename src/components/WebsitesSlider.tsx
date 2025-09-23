import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Define the Website interface
interface Website {
  name: string;
  logo: string;
  url: string;
  description: string;
}

// Define props interface for LogoCard
interface LogoCardProps {
  website: Website;
  index: number;
}

const WebsitesSlider: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const websites: Website[] = [
    {
      name: "E-Cell NEC",
      logo: "/nec-logo.png",
      url: "https://www.ecell.in/nec/",
      description: "National Entrepreneurship Challenge 2025",
    },
    {
      name: "Agnel Polytechnic, Vashi",
      logo: "/agenl.png",
      url: "https://apv.ac.in",
      description: "Leading technical education institution",
    },
    {
      name: "E-Cell IIT Bombay",
      logo: "/iit-bombay-logo.png",
      url: "https://www.ecell.in/",
      description: "Premier technological institute in India",
    },
    {
      name: "Eureka!",
      logo: "/eureka-logo.png",
      url: "https://www.ecell.in/eureka/",
      description: "Startup idea Pitching Competition",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Simplified LogoCard component with minimal hover effects
  const LogoCard: React.FC<LogoCardProps> = ({ website, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
      <div
        className="relative h-64 bg-gradient-to-br from-[#0D0D1F] to-[#1A1A2E] rounded-2xl border-2 border-[#A259FF]/20 transition-all duration-300 cursor-pointer overflow-hidden"
        onClick={() =>
          window.open(website.url, "_blank", "noopener,noreferrer")
        }
      >
        {/* Logo container */}
        <div className="flex flex-col items-center justify-center h-full p-6">
          {/* Logo image container */}
          <div className="w-24 h-24 flex items-center justify-center mb-4 relative">
            {/* Loading placeholder */}
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#A259FF]/20 to-[#872ff7]/20 animate-pulse rounded-lg" />
            )}

            {/* Fallback when image fails */}
            {imageError && (
              <div className="w-full h-full bg-gradient-to-br from-[#A259FF]/30 to-[#872ff7]/30 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm text-center">
                  {website.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 3)}
                </span>
              </div>
            )}

            {/* Logo image - Only hover effect is scale */}
            <img
              src={website.logo}
              alt={`${website.name} logo`}
              className={`max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110 ${
                imageLoaded && !imageError ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              onLoad={() => {
                setImageLoaded(true);
                setImageError(false);
              }}
              onError={() => {
                setImageError(true);
                setImageLoaded(true);
              }}
            />
          </div>

          {/* Website name */}
          <h3 className="text-lg font-bold text-white text-center mb-3 font-['Space_Grotesk'] leading-tight">
            {website.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#CCCCCC] text-center leading-relaxed px-2">
            {website.description}
          </p>

          {/* External link icon */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-[#A259FF]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#A259FF]/30">
            <ExternalLink className="w-4 h-4 text-[#A259FF]" />
          </div>
        </div>
      </div>
    );
  };

  // Custom Navigation Component
  const CustomNavigation = () => (
    <div className="flex justify-center items-center gap-6 mt-12">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="w-12 h-12 bg-[#A259FF]/20 hover:bg-[#A259FF] rounded-full flex items-center justify-center transition-all duration-300 border border-[#A259FF]/30 hover:border-[#A259FF] group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-[#A259FF] group-hover:text-white transition-colors duration-300" />
      </button>

      {/* Pagination dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: Math.ceil(websites.length / 4) }).map(
          (_, index) => (
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
          )
        )}
      </div>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="w-12 h-12 bg-[#A259FF]/20 hover:bg-[#A259FF] rounded-full flex items-center justify-center transition-all duration-300 border border-[#A259FF]/30 hover:border-[#A259FF] group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-[#A259FF] group-hover:text-white transition-colors duration-300" />
      </button>
    </div>
  );

  return (
    <section
      id="websites"
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #151522 0%, #121212 100%)",
      }}
    >
      {/* Background animation elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/5 w-64 h-64 bg-[#A259FF] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/5 w-64 h-64 bg-[#872ff7] rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk'] transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            References<span className="text-[#A259FF]"></span>
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
            Explore the organizations and institutions that inspire and support
            our journey
          </p>
        </div>

        {/* Websites Slider */}
        <div
          className={`transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={false}
            speed={800}
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="websites-swiper pb-4"
          >
            {websites.map((website, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h-full animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <LogoCard website={website} index={index} />
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

export default WebsitesSlider;
