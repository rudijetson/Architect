import React from 'react';

const ActionCall: React.FC = () => {
  return (
    <div className="bg-black text-white py-16 px-4 flex flex-col items-center justify-center min-h-[300px]">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-8 max-w-4xl">
        <span className="bg-gradient-to-r from-pink-500 via-yellow-500 to-cyan-500 text-transparent bg-clip-text">
          WE OFFER STRATEGIES AND SOLUTIONS THAT RESONATE WITH YOUR MISSION.
        </span>
      </h2>
      <button className="bg-teal-400 text-black font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
        READY TO JUMP IN? ▼
      </button>
    </div>
  );
};

export default ActionCall;