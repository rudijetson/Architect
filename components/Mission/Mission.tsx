import React from 'react';

const Mission: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-800 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 leading-tight">
          BEYOND ORDINARY + BEYOND CONVENTION.
        </h2>
        <div className="max-w-3xl">
          <p className="mb-6 text-base sm:text-lg">
            We are not just another ordinary consulting firm - we go beyond the conventions of traditional
            consulting to provide full-service solutions that help clients define and own their position in the
            nonprofit ecosystem throughout their entire journey of building awareness.
          </p>
          <p className="mb-8 text-base sm:text-lg">
            Whether you need help creating a cohesive and consistent identity, crafting your story, increasing your
            organization's visibility, or improving your fundraising capacity, we're the team for the job - all at a
            fraction of the cost of an in-house agency. Our approach is centered around building strong
            relationships with our clients, customers, and constituents, so you can trust us to deliver results that
            exceed your expectations.
          </p>
        </div>
        <button className="bg-black text-cyan-400 hover:bg-gray-900 transition-colors duration-300 rounded-full py-3 px-8 font-semibold text-base sm:text-lg">
          HAVE A MISSION YOU WANT BROUGHT TO LIFE? ▼
        </button>
      </div>
    </div>
  );
};

export default Mission;