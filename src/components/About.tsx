import React, { useEffect, useRef, useState } from "react";

const About = () => {
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
    <>
      <section
        id="about"
        ref={sectionRef}
        className="py-16 px-4"
        style={{
          background:
            "radial-gradient(ellipse at center, #151522 0%, #121212 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative font-['Space_Grotesk']">
                About <span className="text-[#A259FF]">Us</span>
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#A259FF] to-[#872ff7] transition-all duration-1000 ${
                    isVisible ? "w-full" : "w-0"
                  } rounded-full`}
                ></div>
              </h2>

              <div className="space-y-6 text-[#CCCCCC] leading-relaxed">
                <p className="text-lg font-medium">
                  APV E-Cell (Agnel Polytechnic Vashi Entrepreneurship Cell) is
                  a passionate student-driven initiative focused on nurturing
                  entrepreneurial mindsets across all disciplines. We believe
                  true entrepreneurship is not just about starting
                  companies—it’s about fostering creativity, building
                  resilience, and striving for meaningful social change. Through
                  workshops, competitions like Pitchnova, mentorship, and
                  networking opportunities, we inspire students to embrace
                  innovation, learn from failure, and become the ethical leaders
                  our world needs. At APV E-Cell, every idea gets a platform and
                  every student gets a chance to shape the future.
                </p>

                <div className="pt-6">
                  <button
                    onClick={() =>
                      document
                        .getElementById("team")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    className="btn-primary px-8 py-3 text-base font-semibold rounded-full transition-all duration-300"
                  >
                    Meet Our Team
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl group border-2 border-[#A259FF]/30 hover:border-[#A259FF]/50 transition-all duration-300">
                <img
                  src="/group photo.png"
                  alt="APV E-Cell team group photo"
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1F]/90 via-transparent to-transparent rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#A259FF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold font-['Space_Grotesk'] mb-1">
                    APV E-Cell Family
                  </p>
                  <p className="text-sm text-[#CCCCCC]">Together we innovate</p>
                </div>
                {/* <div className="absolute top-6 right-6 w-12 h-12 bg-[#A259FF]/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#A259FF]/30 group-hover:bg-[#A259FF]/30 transition-all duration-300">
                <div className="w-6 h-6 bg-[#A259FF] rounded-full animate-pulse"></div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
