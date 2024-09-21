'use client';

import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ambitions, setAmbitions] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, ambitions });
  };

  return (
    <footer className="bg-white text-black py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-light text-teal-400 leading-tight mb-4">
              READY TO<br />
              COLLABORATE ON<br />
              <span className="text-5xl md:text-6xl">SOMETHING<br />AMAZING?</span>
            </h2>
            <div className="mt-8">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 0L50 25L25 50L0 25L25 0Z" fill="#4FD1C5"/>
              </svg>
            </div>
            <p className="text-gray-500 mt-4">HELLO@ARCHITECTYOURAMBITION.COM</p>
          </div>
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full border-b border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full border-b border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="ambitions" className="block text-sm font-medium text-gray-700">Share your ambitions below:</label>
                <textarea
                  id="ambitions"
                  rows={4}
                  value={ambitions}
                  onChange={(e) => setAmbitions(e.target.value)}
                  className="mt-1 block w-full border-b border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  Connect With Us!
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500">
          © 2020-2032 | ARCHITECT Philanthropic Collective, LLC | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;