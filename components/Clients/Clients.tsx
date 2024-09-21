import React from 'react';
import Image from 'next/image';

const clientLogos = [
  { src: '/path-to-sound-village-logo.png', alt: 'Sound Village' },
  { src: '/path-to-design-impact-logo.png', alt: 'Design Impact' },
  { src: '/path-to-united-way-logo.png', alt: 'United Way of Greater Charlotte' },
  { src: '/path-to-duke-university-logo.png', alt: 'Duke University' },
  { src: '/path-to-aaaa-logo.png', alt: 'Association of African American Financial Advisors' },
  { src: '/path-to-breakthrough-logo.png', alt: 'Breakthrough Cincinnati' },
  { src: '/path-to-wordplay-logo.png', alt: 'Wordplay' },
  { src: '/path-to-bold-logo.png', alt: 'BOLD' },
];

const Clients: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-gray-900 mb-8 text-center">
          BODY OF WORK
        </h2>
        <h3 className="text-5xl font-light text-yellow-500 mb-12 text-center">
          CAROUSEL OF CLIENTS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image src={logo.src} alt={logo.alt} width={200} height={100} objectFit="contain" />
            </div>
          ))}
        </div>
        
        <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          We ideate, plan and most importantly, execute a customized engagement and philanthropic journey. Through
          research, industry trends, data analysis, strategy development, and project management we&apos;re able to create
          multi-faceted marketing and fundraising plans based on insights, with a special emphasis on creative and digital
          strategy.
        </p>
        
        <h4 className="text-4xl font-light text-yellow-500 mb-16 text-center">
          CURIOSITY IS THE BLUEPRINT TO LEGACY!
        </h4>
        
        <div className="text-center">
          <button className="bg-black text-cyan-400 hover:bg-gray-900 transition-colors duration-300 text-lg font-semibold py-4 px-8 rounded-full">
            BOOK TIME TO CONNECT WITH AN ARCHITECT ▼
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clients;