'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageSrc: '/images/partnership-packet.jpg',
    title: 'Partnership Packet',
    description: 'Association of African American Financial Advisors',
  },
  {
    id: 2,
    imageSrc: '/images/breakthrough-cincinnati.jpg',
    title: 'Breakthrough Cincinnati',
    description: 'Fund-A-Scholar Campaign',
  },
  {
    id: 3,
    imageSrc: '/images/design-impact.jpg',
    title: 'Design Impact',
    description: 'Logo and Branding',
  },
  {
    id: 4,
    imageSrc: '/images/alchemist-agency.jpg',
    title: 'Alchemist Agency',
    description: 'Brand Guidelines',
  },
  {
    id: 5,
    imageSrc: '/images/sound-village.jpg',
    title: 'Sound Village',
    description: 'Social Media Campaign',
  },
  {
    id: 6,
    imageSrc: '/images/up-words.jpg',
    title: 'Up Words',
    description: 'Marketing Collateral',
  },
];

const Gallery: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-light text-center mb-12">Our Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Image
              src={item.imageSrc}
              alt={item.title}
              width={400}
              height={300}
              layout="responsive"
              objectFit="cover"
            />
            <div
              className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 transition-opacity duration-300 ${
                hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;