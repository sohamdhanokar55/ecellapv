import React from 'react';

const Team = () => {
  return (
    <section id="team" className="py-16 bg-[#0D0D0D] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-[#2F0654]">Team</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#2F0654] to-[#1a0329] mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-48 h-48 mx-auto bg-gray-700 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold">Team Member</h3>
            <p className="text-gray-400">Position</p>
          </div>
          
          <div className="text-center">
            <div className="w-48 h-48 mx-auto bg-gray-700 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold">Team Member</h3>
            <p className="text-gray-400">Position</p>
          </div>
          
          <div className="text-center">
            <div className="w-48 h-48 mx-auto bg-gray-700 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold">Team Member</h3>
            <p className="text-gray-400">Position</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
