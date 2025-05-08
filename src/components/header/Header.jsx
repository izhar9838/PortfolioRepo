
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LogoImg from "../../assets/logo.png" // Replace with your logo path

const navItems = [
  { name: 'Home', link: '/', status: true },
  { name: 'Projects', link: '/projects', status: true },
  { name: 'Contact Us', link: '/contact-us', status: true },
  { name: 'About Us', link: '/about-us', status: true },
];

const Logo = () => (
  <motion.img
    src={LogoImg}
    className="w-8 h-8 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full"
    alt="Logo"
    whileHover={{ scale: 1.1, rotate: 10 }}
    transition={{ type: 'spring', stiffness: 300 }}
  />
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      // Tailwind 'md' breakpoint is 768px
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation variants for the mobile menu container
  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, ease: 'easeOut', delay: 0.1 },
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.4, ease: 'easeIn' },
    },
  };

  // Animation variants for individual nav items
  const itemVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { delay: 0.2 + i * 0.08, duration: 0.3, ease: 'easeOut' },
    }),
  };

  // Animation for nav items on hover
  const navItemVariants = {
    hover: {
      y: -2,
      color: '#FFD700', // Gold on hover
      transition: { duration: 0.2 },
    },
  };

  return (
    <header
      className="min-w-full bg-[#569BA9] shadow-md m-0 relative"
      
    >
      <nav className="container min-w-full mx-auto px-2 py-2 flex items-center justify-between max-h-[50px]">
        <div className="logo">
          <Logo />
        </div>
        <div className="hidden md:flex space-x-14">
          {navItems.map((item) =>
            item.status ? (
              <motion.div
                key={item.name}
                whileHover="hover"

                className="relative"
              >
                <Link
                  to={item.link}
                  className="font-medium pl-[32px] text-white hover:text-orange-50  transition-colors text-base tracking-wide"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.name}
                  <motion.div
                    className="absolute left-0 bottom-0 h-[2px] bg-orange-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ) : null
          )}
        </div>
        <button
          className="md:hidden text-gray-100 hover: flex items-center justify-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>
      {isOpen && (
        <motion.div
          className="md:hidden bg-[#569BA9] text-center w-full h-auto z-101 absolute left-0"
          
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {navItems.map((item, index) =>
            item.status ? (
              <motion.div
                key={item.name}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <Link
                  to={item.link}
                  className="block px-4 py-3 font-medium text-white hover:text-orange-50 transition-colors text-base"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              </motion.div>
            ) : null
          )}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
