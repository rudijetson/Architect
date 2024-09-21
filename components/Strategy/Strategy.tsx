import React from 'react';

const Strategy = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white">
      <div className="md:w-1/2 bg-gray-300 flex items-center justify-center">
        <div className="text-gray-600 text-center p-4">
          <svg className="mx-auto h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p>Image Placeholder</p>
        </div>
      </div>
      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-light text-pink-500 mb-6">
          SO, YOU NEED A LITTLE<br />
          MORE HELP WITH YOUR<br />
          FUNDRAISING?
        </h2>
        <p className="mb-4">Great! You have come to the right place.</p>
        <p className="mb-4">
          We are a team of capacity-building professionals who focus on
          community-centered philanthropy, leveraging best practices in
          storytelling, strategic marketing, and inclusive fundraising strategies.
        </p>
        <p className="mb-4">
          We bring a wealth of skills and diverse perspectives to our work, driven
          by curiosity and a passion for continuous learning. Our team has a
          talent for analytics and staying up-to-date with emerging trends,
          allowing us to facilitate courageous conversations that lead to clear,
          compelling narratives.
        </p>
        <p className="mb-6">
          We collaborate with our clients to build a deep understanding of their
          mission and goals, and we work tirelessly to ensure their success. With
          our expertise and ambition, we deliver excellence by crafting identities
          and strategies that resonate with your audience and achieve your
          objectives.
        </p>
        <button className="bg-black text-cyan-400 px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 mb-4">
          BE AN ARCHITECT OF AMBITION ▼
        </button>
        <p className="text-sm text-gray-600">
          Interested in joining our team? Check out these opportunities.
        </p>
      </div>
    </div>
  );
};

export default Strategy;
