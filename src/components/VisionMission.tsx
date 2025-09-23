import React, { useEffect, useRef, useState } from "react";
import { Target, Rocket } from "lucide-react";

const VisionMission = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      id="vision-mission"
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #0D0D1F 0%, #121212 100%)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#A259FF]/5 to-[#872ff7]/10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Vision & <span className="text-[#A259FF]">Mission</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#A259FF] to-[#872ff7] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="glass-card p-8 rounded-2xl h-full group">
              <div className="flex items-center mb-8">
                <div className="p-4 rounded-2xl bg-[#A259FF]/10 border border-[#A259FF]/30 group-hover:border-[#A259FF]/60 transition-colors duration-300 mr-6">
                  <Target className="w-10 h-10 text-[#A259FF]" />
                </div>
                <h3 className="text-3xl font-bold text-white font-['Space_Grotesk']">
                  Our Vision
                </h3>
              </div>

              <div className="space-y-6 text-[#CCCCCC]">
                <div className="flex items-start space-x-4 group/item">
                  <div className="w-3 h-3 rounded-full bg-[#A259FF] mt-2 flex-shrink-0 group-hover/item:shadow-[0_0_10px_rgba(162,89,255,0.7)] transition-shadow duration-300"></div>
                  <p className="text-lg group-hover/item:text-white transition-colors duration-300">
                    Champion entrepreneurship as a transformative mindset and
                    life skill for every student.
                  </p>
                </div>
                <div className="flex items-start space-x-4 group/item">
                  <div className="w-3 h-3 rounded-full bg-[#A259FF] mt-2 flex-shrink-0 group-hover/item:shadow-[0_0_10px_rgba(162,89,255,0.7)] transition-shadow duration-300"></div>
                  <p className="text-lg group-hover/item:text-white transition-colors duration-300">
                    Cultivate a community where resilience, creativity, and
                    social impact drive success.
                  </p>
                </div>
                <div className="flex items-start space-x-4 group/item">
                  <div className="w-3 h-3 rounded-full bg-[#A259FF] mt-2 flex-shrink-0 group-hover/item:shadow-[0_0_10px_rgba(162,89,255,0.7)] transition-shadow duration-300"></div>
                  <p className="text-lg group-hover/item:text-white transition-colors duration-300">
                    Redefine success by the lasting, positive difference we
                    create in society.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="glass-card p-8 rounded-2xl h-full group">
              <div className="flex items-center mb-8">
                <div className="p-4 rounded-2xl bg-[#872ff7]/10 border border-[#872ff7]/30 group-hover:border-[#872ff7]/60 transition-colors duration-300 mr-6">
                  <Rocket className="w-10 h-10 text-[#872ff7]" />
                </div>
                <h3 className="text-3xl font-bold text-white font-['Space_Grotesk']">
                  Our Mission
                </h3>
              </div>

              <div className="space-y-6 text-[#CCCCCC]">
                <div className="flex items-start space-x-4 group/item">
                  <div className="w-3 h-3 rounded-full bg-[#872ff7] mt-2 flex-shrink-0 group-hover/item:shadow-[0_0_10px_rgba(135,47,247,0.7)] transition-shadow duration-300"></div>
                  <p className="text-lg group-hover/item:text-white transition-colors duration-300">
                    Empower students to turn ideas into real-world innovations
                    through hands-on experiences and training.
                  </p>
                </div>
                <div className="flex items-start space-x-4 group/item">
                  <div className="w-3 h-3 rounded-full bg-[#872ff7] mt-2 flex-shrink-0 group-hover/item:shadow-[0_0_10px_rgba(135,47,247,0.7)] transition-shadow duration-300"></div>
                  <p className="text-lg group-hover/item:text-white transition-colors duration-300">
                    Equip future leaders with ethical values, entrepreneurial
                    skills, and strategic thinking.
                  </p>
                </div>
                <div className="flex items-start space-x-4 group/item">
                  <div className="w-3 h-3 rounded-full bg-[#872ff7] mt-2 flex-shrink-0 group-hover/item:shadow-[0_0_10px_rgba(135,47,247,0.7)] transition-shadow duration-300"></div>
                  <p className="text-lg group-hover/item:text-white transition-colors duration-300">
                    Foster an inclusive ecosystem that encourages risk-taking,
                    learning from failure, and contributing to community growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
