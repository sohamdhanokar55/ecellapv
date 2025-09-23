import React, { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

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
}

const Incubation: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const websites: Website[] = [
    {
      name: "CIBA",
      logo: "/ciba-logo.png",
      url: "https://cibamumbai.org.in/",
      description: "Centre for Incubation and Business Accleration",
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

  // Centered LogoCard component with proper styling
  const LogoCard: React.FC<LogoCardProps> = ({ website }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
      <div className="flex justify-center items-center w-full">
        <div
          className="relative w-96 h-80 bg-gradient-to-br from-[#0D0D1F] to-[#1A1A2E] rounded-2xl border-2 border-[#A259FF]/20 hover:border-[#A259FF]/60 transition-all duration-500 cursor-pointer overflow-hidden hover:scale-105 hover:shadow-xl hover:shadow-[#A259FF]/20 transform"
          onClick={() =>
            window.open(website.url, "_blank", "noopener,noreferrer")
          }
        >
          {/* Background glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#A259FF]/5 to-[#872ff7]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

          {/* Logo container */}
          <div className="flex flex-col items-center justify-center h-full p-8 relative z-10">
            {/* Logo image container */}
            <div className="w-[288px] h-[85px] flex items-center justify-center mb-6 relative">
              {/* Loading placeholder */}
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#A259FF]/20 to-[#872ff7]/20 animate-pulse rounded-lg" />
              )}

              {/* Fallback when image fails */}
              {imageError && (
                <div className="w-full h-full bg-gradient-to-br from-[#A259FF]/30 to-[#872ff7]/30 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl text-center">
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
            <h3 className="text-2xl font-bold text-white text-center mb-4 font-['Space_Grotesk'] leading-tight">
              {website.name}
            </h3>

            {/* Description */}
            <p className="text-base text-[#CCCCCC] text-center leading-relaxed px-4 max-w-sm">
              {website.description}
            </p>

            {/* External link icon */}
            <div className="absolute top-6 right-6 w-10 h-10 bg-[#A259FF]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#A259FF]/30 hover:bg-[#A259FF]/40 transition-all duration-300">
              <ExternalLink className="w-5 h-5 text-[#A259FF]" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="incubation"
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
            Incubation <span className="text-[#A259FF]">Partner</span>
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
            Meet our trusted incubation partner supporting entrepreneurial
            growth and innovation
          </p>
        </div>

        {/* Centered Card Container */}
        <div
          className={`flex justify-center items-center transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="w-full max-w-md">
            {websites.map((website, index) => (
              <div key={index} className="animate-fadeInUp">
                <LogoCard website={website} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Incubation;
