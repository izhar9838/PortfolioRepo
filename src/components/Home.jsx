
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation'; // For typewriter effect
import { Navigate,useNavigate } from 'react-router-dom';
import PortfolioImg from "../assets/portfolio.jpg" // Replace with your image path




const Home = () => {
  // Animation variants for the hero section
  const navigate = useNavigate();
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Animation variants for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 20px rgba(86, 155, 169, 0.5)', // Glow with #569BA9
      transition: { duration: 0.3 },
    },
  };

  
  // Animation for the CTA button
  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: '0 0 15px rgba(86, 155, 169, 0.5)', // Glow with #569BA9
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-[93vh] bg-[#1D1547] text-gray-100">
      {/* Hero Section */}
      <section
        className="min-h-[93vh] flex items-center justify-center relative"
        style={{
          background: 'linear-gradient(180deg, #1D1547 0%, #569BA9 100%)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
          {/* Text Section */}
          <motion.div
            className="text-center md:text-left md:w-1/2 px-4"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <h1
              className="text-3xl  text-gray-300  md:text-3xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Welcome to My Portfolio
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl mb-6">
              <TypeAnimation
                sequence={[
                  'I’m a Full-Stack Developer',
                  2000,
                  'I’m a Creative Innovator',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ fontFamily: "'Poppins', sans-serif", color: '#97C5CE' }}
              />
            </div>
            <div>
              <motion.div
                className="inline-block bg-[#569BA9] cursor-pointer  text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-[#4D9BAD] transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                
                onClick={()=>navigate('/projects')} 
              >
                <Link to="/projects">
                  Explore My Work
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <motion.img
              src={PortfolioImg} // Replace with your image URL
              alt="Profile"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#569BA9]"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            />
          </div>
        </div>
      </section>

      

    
    </div>
  );
};

export default Home;
