import React, { useEffect, useRef, useState } from "react";
import ContactCard from "./ContactCard";
import ContactCard2 from "./1ContactCard";

const Agnelabout = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const cardsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
        }
      },
      { threshold: 0.1 } // Lower threshold for mobile
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (cardsRef.current) {
      cardsObserver.observe(cardsRef.current);
    }

    return () => {
      observer.disconnect();
      cardsObserver.disconnect();
    };
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
                Agnel Polytechnic, Vashi{" "}
                <span className="text-[#A259FF]"></span>
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#A259FF] to-[#872ff7] transition-all duration-1000 ${
                    isVisible ? "w-full" : "w-0"
                  } rounded-full`}
                ></div>
              </h2>

              <div className="space-y-6 text-[#CCCCCC] leading-relaxed">
                <p className="text-lg font-medium">
                  The founder of Agnel Ashram, Fr. C. Rodrigues was a great
                  visionary. His vision was to foster love and understanding
                  among the various communities in India and to contribute to
                  the development of self-reliance among the youth through
                  education. Agnel Polytechnic in Vashi, Navi Mumbai, was
                  started in 1983 with only one program – Diploma in Civil
                  Engineering. It has grown since then, and today we have five
                  branches of study in the polytechnic – Civil Engineering,
                  Mechanical Engineering, Automobile Engineering, Electronics &
                  Computer Engineering and Artificial Intelligence & Machine
                  learning. What makes Agnel Polytechnic a unique institution in
                  Mumbai is its discipline and culture and the dedication of the
                  faculty in imparting knowledge and expertise to the students
                  in a cosmopolitan atmosphere.
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
                  src="/agnel.jpg"
                  alt="Agnel Polytechnic, Vashi"
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1F]/90 via-transparent to-transparent rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#A259FF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold font-['Space_Grotesk'] mb-1">
                    Agnel Polytechnic, Vashi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section with Contact Cards */}
      <section
        ref={cardsRef}
        className="py-20 px-4"
        style={{
          background:
            "radial-gradient(ellipse at center, #151522 0%, #121212 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              cardsVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Our <span className="text-[#A259FF]">Leadership</span>
            </h2>
            <p className="text-[#CCCCCC] text-base sm:text-lg max-w-2xl mx-auto px-4">
              Meet the visionary leaders who guide and support our academic
              excellence
            </p>
          </div>

          {/* Contact Cards Container - Made responsive */}
          <div className="space-y-8 sm:space-y-12">
            {/* First Contact Card */}
            <div
              className={`transform transition-all duration-1000 delay-200 ${
                cardsVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <ContactCard
                name="Mrs. Saly Antony"
                role="Principal, Agnel Polytechnic"
                description="At Agnel Polytechnic, we promote innovation, creativity, and self-reliance through our E-Cell. Entrepreneurship empowers students to solve real-world problems and think independently. I commend our team and students for their efforts and thank industry experts for their support. Let's continue nurturing future-ready, self-reliant entrepreneurs."
                imgSrc="/principal.jpeg"
                delay={0}
                isVisible={cardsVisible}
              />
            </div>

            {/* Second Contact Card */}
            <div
              className={`transform transition-all duration-1000 delay-400 ${
                cardsVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <ContactCard2
                name="Mr. Pranavkumar Bhadane"
                role="APV E-Cell In-charge"
                description="At Agnel Polytechnic, our E-Cell fosters innovation, leadership, and entrepreneurship beyond the classroom. We empower students to think independently, pitch real-world ideas, and connect with industry leaders. As E-Cell Incharge, I strive to create impactful opportunities that inspire students to become confident, purpose-driven changemakers of tomorrow."
                imgSrc="/Pranavkumar Bhadane.jpg"
                delay={200}
                isVisible={cardsVisible}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Agnelabout;
