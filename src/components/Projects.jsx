
import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SchoolWebsite from '../assets/proj-img/school.png';
import ShaluTravels from '../assets/proj-img/shalu.png';
import PortfolioWebsite from '../assets/proj-img/portfolio.png';
import SiddiqueFood from '../assets/proj-img/food.jpeg';


// Sample project data with images
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A web app built with React and Tailwind CSS, showcasing modern UI.',
    link: '/',
    image: PortfolioWebsite, 
  },
  {
    title: 'School Website',
    description: 'A full-stack application with Spring Boot and React for managing school records.',
    link: import.meta.env.VITE_SCHOOL_WEBSITE,
    image: SchoolWebsite, 
  },
  {
    title: 'Shalu Travels',
    description: 'A Travel Webiste to promote tourism and travel packages.',
    link: import.meta.env.VITE_SHALU_TRAVELS,
    image: ShaluTravels,
  },
  {
    title: 'Siddique Food',
    description: 'A food website where you can be customer or restaurant owner.',
    link: import.meta.env.VITE_SIDDIQUE_FOOD,
    image: SiddiqueFood, // Yellow background
  },
];

const Projects = () => {
  // Animation variants for project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(86, 155, 169, 0.3)', // Shadow with #569BA9
      transition: { duration: 0.3 },
    },
  };

  // Animation variants for the link (slide up on appearance, slide down on disappearance)
  const linkVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <div
      className="min-h-[93vh] text-gray-100 py-8 flex items-center justify-center"
      style={{
        background: 'linear-gradient(180deg, #1D1547 0%, #569BA9 100%)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-300 mb-8"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          My Projects
        </h2>

        {/* Project Cards Flex Container */}
        <div className=" flex flex-wrap justify-center">
          {projects.map((project, index) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <motion.div
                key={project.title}
                className="relative bg-[#2D5D7F] rounded-lg  sm:p-4 shadow-lg hover:shadow-xl transition-shadow w-48 h-48 sm:w-[202px] sm:h-[202px] md:w-[210px] md:h-[210px] lg:w-[220px] lg:h-[220px] flex flex-col items-center justify-center m-6"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={index}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-16 sm:w-full sm:h-16 md:w-full md:h-18 lg:w-full lg:h-18 lg:rounded-lg md:rounded-lg rounded-t-lg mb-2 object-cover"
                />
                <h3
                  className="text-base sm:text-lg font-semibold mb-1 text-gray-100 text-center"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-xs sm:text-sm text-gray-300 mb-2 flex-1 line-clamp-2 text-center"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {project.description}
                </p>
                <motion.div
                  className={`absolute bottom-0   left-0 w-full ${!isHovered ? 'hidden' : ''}`}
                  variants={linkVariants}
                  initial="hidden"
                  animate={isHovered ? 'visible' : 'hidden'}
                >
                  <div className="bg-[#1A3C5A] rounded-b-lg px-2 py-1">
                    <Link
                      to={project.link}
                      target='_blank'
                      className="text-[#569BA9] hover:text-[#97C5CE] font-medium transition-colors text-xs sm:text-sm whitespace-nowrap block text-center"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      View Project →
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
