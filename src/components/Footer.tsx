import React from "react";
import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D0D1F] text-white py-20 border-t border-[#A259FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-['Space_Grotesk']">
                APV <span className="text-[#A259FF]">E-CELL</span>
              </h3>
              <p className="text-[#CCCCCC] leading-relaxed">
                Empowering the next generation of entrepreneurs and innovators
                at Agnel Polytechnic, Vashi. Building tomorrow's success stories
                today.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/apv_ecell/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#A259FF]/20 hover:bg-[#A259FF] rounded-xl flex items-center justify-center transition-all duration-300 group border border-[#A259FF]/30 hover:border-[#A259FF] hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#A259FF] group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/company/agnel-polytechnic-vashi-e-cell/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#A259FF]/20 hover:bg-[#A259FF] rounded-xl flex items-center justify-center transition-all duration-300 group border border-[#A259FF]/30 hover:border-[#A259FF] hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-[#A259FF] group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Contact & Advisors */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#A259FF] mb-6 font-['Space_Grotesk']">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <a
                  href="mailto:team@ecellapv.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#A259FF]/20 hover:bg-[#A259FF] rounded-xl flex items-center justify-center transition-all duration-300 group border border-[#A259FF]/30 hover:border-[#A259FF] hover:scale-110"
                  aria-label="Gmail"
                >
                  <Mail className="w-5 h-5 text-[#A259FF] group-hover:text-white transition-colors duration-300" />
                </a>
                <span className="text-[#CCCCCC]">team@ecellapv.in</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-4">
                  <a
                    href="https://maps.app.goo.gl/rnzZY1JwCz3FyVZh9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#A259FF]/20 hover:bg-[#A259FF] rounded-xl flex items-center justify-center transition-all duration-300 group border border-[#A259FF]/30 hover:border-[#A259FF] hover:scale-110"
                    aria-label="Maps"
                  >
                    <MapPin className="w-5 h-5 text-[#A259FF] group-hover:text-white transition-colors duration-300" />
                  </a>
                </div>
                <span className="text-[#CCCCCC]">Agnel Polytechnic, Vashi</span>
              </div>
            </div>

            {/* Advisors */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  name: "Mr. Pranav Bhadane",
                  role: "Faculty Advisor",
                  phone: "+91 78210 96591",
                  linkedin:
                    "https://www.linkedin.com/in/pranavkumar-bhadane-417368210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                },
                {
                  name: "Soham Dhanokar",
                  role: "President",
                  phone: "+91 93218 95202",
                  linkedin:
                    "https://www.linkedin.com/in/soham-dhanokar-13807a355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                },
              ].map((person, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-white font-medium">{person.name}</p>
                  <p className="text-[#CCCCCC] text-sm">{person.role}</p>
                  <p className="text-[#CCCCCC] text-sm">{person.phone}</p>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#A259FF] hover:underline space-x-1"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#A259FF]/20 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#CCCCCC] text-sm">
              © 2025 APV Entrepreneurship Cell. All rights reserved.
            </p>
            <p className="text-[#CCCCCC] text-sm">
              Built for the National Entrepreneurship Challenge
            </p>
          </div>
          <div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-[#A259FF] to-transparent opacity-50" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
