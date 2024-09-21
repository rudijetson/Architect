'use client';

import React from 'react';
import { Instagram, Linkedin, Pin } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Social icon component
const SocialIcon = ({ href, Icon, label }) => (
  <motion.a 
    href={href}
    aria-label={label}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className="text-gray-400 hover:text-white transition-colors duration-300"
  >
    <Icon className="w-8 h-8" />
  </motion.a>
);

const Hero = () => {
  return (
    <motion.div 
      className="hero-section w-full mx-auto text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4 md:px-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Main heading */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-cyan-400">ARCHIT</span>
          <span className="text-fuchsia-500">E</span>
          <span className="text-cyan-400">CT</span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2 
          className="text-xl md:text-2xl mb-8 text-cyan-300 uppercase tracking-wide font-semibold"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Philanthropic Collective
        </motion.h2>

        {/* Main description */}
        <motion.p 
          className="mb-10 text-lg md:text-xl text-gray-300 leading-relaxed"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          We are a strategy development firm focused on
          <strong className="text-white"> community-centered</strong> and <strong className="text-white">diverse philanthropy</strong>,
          leveraging the best practices in <strong className="text-white">storytelling</strong>, strategic
          <strong className="text-white"> marketing</strong>, and <strong className="text-white">inclusive fundraising strategies</strong>.
        </motion.p>

        {/* CTA buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
          >
            BOOK A CONSULTATION
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-fuchsia-500 hover:bg-fuchsia-600 text-gray-900 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
          >
            WHAT WE DO
          </motion.button>
        </motion.div>

        {/* Social icons */}
        <motion.div 
          className="flex justify-center space-x-8"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 1 }}
        >
          <SocialIcon href="#" Icon={Instagram} label="Instagram" />
          <SocialIcon href="#" Icon={Linkedin} label="LinkedIn" />
          <SocialIcon href="#" Icon={Pin} label="Pinterest" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;