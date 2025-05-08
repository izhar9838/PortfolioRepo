
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// Animation variants for the footer content
const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 },
  },
};

// Animation variants for the social icons
const iconVariants = {
  hover: {
    scale: 1.2,
    color: '#97C5CE', // Lighter shade of #569BA9
    transition: { duration: 0.3 },
  },
};

// Animation for the glowing border
const borderVariants = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: { duration: 1.5, ease: 'easeOut' },
  },
};

const Footer = () => {
  return (
    <footer
      className="relative py-8 text-center text-gray-100"
      style={{
        background: 'linear-gradient(180deg, #1D1547 0%, #569BA9 100%)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Glassmorphism Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
        }}
      ></div>

      {/* Animated Content */}
      <motion.div
        className="relative z-10"
        variants={footerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Footer Title */}
        <h2
          className="text-2xl md:text-3xl font-bold mb-4 text-gray-300"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Izhar Ali
        </h2>

        {/* Glowing Border */}
        <motion.div
          className="h-1 bg-[#569BA9] mx-auto mb-6"
          style={{ maxWidth: '100px' }}
          variants={borderVariants}
          initial="hidden"
          animate="visible"
        ></motion.div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <motion.a
            href="https://github.com/izhar9838" 
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
          >
            <FaGithub className="text-[#569BA9] text-2xl" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/izhar-ali-292696255/" 
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
          >
            <FaLinkedin className="text-[#569BA9] text-2xl" />
          </motion.a>
          <motion.a
            href="https://x.com/Izhar9838" // Replace with your Twitter URL
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
          >
            <FaTwitter className="text-[#569BA9] text-2xl" />
          </motion.a>
        </div>

        {/* Copyright Notice */}
        <p
          className="text-gray-300 text-sm"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          © 2025 Izhar Ali. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
