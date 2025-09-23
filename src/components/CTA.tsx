import React from 'react';
import { ArrowRight, Users, Lightbulb } from 'lucide-react';

const CTA = () => {
  return (
    <section 
      id="cta" 
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at center, #151522 0%, #0D0D1F 100%)' }}
    >
      <div className="absolute inset-0 cta-pulse"></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-[#A259FF] rounded-full opacity-30 animate-float"></div>
      <div className="absolute top-32 right-20 w-8 h-8 bg-[#872ff7] rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-[#A259FF] rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 right-1/3 w-5 h-5 bg-[#872ff7] rounded-full opacity-30 animate-float" style={{ animationDelay: '0.5s' }}></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="flex justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-[#A259FF]/20 rounded-2xl flex items-center justify-center border border-[#A259FF]/30">
              <Lightbulb className="w-8 h-8 text-[#A259FF]" />
            </div>
            <div className="w-16 h-16 bg-[#872ff7]/20 rounded-2xl flex items-center justify-center border border-[#872ff7]/30">
              <Users className="w-8 h-8 text-[#872ff7]" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Ready to build the <span className="text-[#A259FF]">next big idea</span>?
          </h2>
          <p className="text-xl text-[#CCCCCC] mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our community of innovators, entrepreneurs, and change-makers. 
            Transform your vision into reality with our support and guidance at 
            <span className="text-[#A259FF] font-semibold"> APV E-Cell</span>.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="btn-cta group px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300"
          >
            <span>Get Involved</span>
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="btn-secondary px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300"
          >
            Learn More
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-[#A259FF]/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-[#A259FF]/30 group-hover:border-[#A259FF] transition-all duration-300">
              <Lightbulb className="w-6 h-6 text-[#A259FF]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 font-['Space_Grotesk']">Ideation</h3>
            <p className="text-[#CCCCCC] text-sm">Transform your ideas into viable business concepts</p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-[#872ff7]/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-[#872ff7]/30 group-hover:border-[#872ff7] transition-all duration-300">
              <Users className="w-6 h-6 text-[#872ff7]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 font-['Space_Grotesk']">Mentorship</h3>
            <p className="text-[#CCCCCC] text-sm">Get guidance from industry experts and successful entrepreneurs</p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-[#A259FF]/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-[#A259FF]/30 group-hover:border-[#A259FF] transition-all duration-300">
              <ArrowRight className="w-6 h-6 text-[#A259FF]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 font-['Space_Grotesk']">Launch</h3>
            <p className="text-[#CCCCCC] text-sm">Bring your startup to market with our comprehensive support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;