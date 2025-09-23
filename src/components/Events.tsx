import React from 'react';

const Events = () => {
  return (
    <section id="events" className="py-20 bg-[#0D0D0D] relative overflow-hidden mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#00CFFF]">Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00CFFF] to-[#0066FF] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join us for exciting events designed to inspire, educate, and connect the next generation of entrepreneurs.
          </p>
        </div>

        <div className="mt-16">
          <PitchEvent />
        </div>
      </div>
    </section>
  );
};

const PitchEvent = () => {
  return (
    <div id="pitch-event" className="bg-[#121212] rounded-xl p-8 md:p-10 shadow-xl border border-[#00CFFF]/10 hover:border-[#00CFFF]/30 transition-all duration-300">
      <h3 className="text-2xl md:text-3xl font-bold text-[#00CFFF] mb-4">Pitch Event</h3>
      <div className="w-16 h-1 bg-gradient-to-r from-[#00CFFF] to-[#0066FF] mb-6"></div>
      <p className="text-gray-300 text-lg leading-relaxed">
        Join us for our flagship Pitch Event where aspiring entrepreneurs present their innovative ideas to a panel of industry experts and investors. 
        This is your chance to showcase your startup, receive valuable feedback, and potentially secure funding to bring your vision to life.
      </p>
      <div className="mt-8">
        <button className="bg-gradient-to-r from-[#00CFFF] to-[#0066FF] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Events;
