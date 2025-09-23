import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Users, DollarSign, Calendar } from 'lucide-react';

const Highlights = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const achievements = [
    { name: "IIT Bombay", type: "Partner Institution", icon: "🎓" },
    { name: "Startup India", type: "Recognition", icon: "🏆" },
    { name: "National Innovation Foundation", type: "Award", icon: "🥇" },
    { name: "TechCrunch", type: "Featured Startup", icon: "📰" },
    { name: "Economic Times", type: "Media Coverage", icon: "📺" },
    { name: "NASSCOM", type: "Member Organization", icon: "🤝" },
    { name: "Invest India", type: "Government Partner", icon: "🏛️" },
    { name: "Indian Angel Network", type: "Investor Network", icon: "💼" },
    { name: "Microsoft for Startups", type: "Tech Partner", icon: "💻" },
    { name: "AWS Activate", type: "Cloud Partner", icon: "☁️" }
  ];

  const stats = [
    { icon: Trophy, value: "15+", label: "Startups Launched", delay: "300" },
    { icon: Calendar, value: "25+", label: "Events Organized", delay: "400" },
    { icon: DollarSign, value: "₹10L+", label: "Funding Raised", delay: "500" },
    { icon: Users, value: "500+", label: "Students Mentored", delay: "600" }
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

  return (
    <section
      id="highlights"
      ref={sectionRef}
      className="py-24 px-4 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at center, #0D0D1F 0%, #121212 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk'] transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Highlights & <span className="text-[#A259FF]">Achievements</span>
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-[#A259FF] to-[#872ff7] mx-auto rounded-full transform transition-all duration-1000 delay-200 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
          <p className={`text-lg text-[#CCCCCC] max-w-2xl mx-auto mt-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Recognized by leading institutions and featured in prestigious platforms
          </p>
        </div>
        
        <div className="relative mb-20">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#121212] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#121212] to-transparent z-10"></div>
          
          <div className="marquee-container">
            <div className="marquee-content">
              {[...achievements, ...achievements].map((achievement, index) => (
                <div
                  key={index}
                  className="marquee-item group"
                >
                  <div className="glass-card p-6 rounded-2xl text-center min-w-[280px] group">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#A259FF]/20 to-[#872ff7]/40 flex items-center justify-center border border-[#A259FF]/30 group-hover:border-[#A259FF] transition-all duration-300 text-2xl">
                      {achievement.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3 group-hover:text-[#A259FF] transition-colors duration-300 font-['Space_Grotesk']">
                      {achievement.name}
                    </h3>
                    <p className="text-[#CCCCCC] text-sm font-medium">{achievement.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className={`text-center transform transition-all duration-1000 delay-${stat.delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <div className="glass-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#A259FF]/20 to-[#872ff7]/40 flex items-center justify-center border border-[#A259FF]/30 group-hover:border-[#A259FF] transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-[#A259FF] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[#A259FF] mb-2 font-['Space_Grotesk'] group-hover:text-white transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-[#CCCCCC] font-medium group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;