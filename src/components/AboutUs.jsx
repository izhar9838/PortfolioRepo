import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiJavascript, SiTailwindcss } from 'react-icons/si';
import PortfolioImg from "../assets/portfolio.jpg"

const AboutUs = () => {
  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Animation variants for skill icons
  const iconVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.3 } }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: 'linear-gradient(180deg, #1D1547 0%, #569BA9 100%)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <motion.div
        className="bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl p-8 my-4"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-300 text-center mb-6">About Me</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gray-600 flex items-center justify-center text-white text-2xl font-bold">
            {/* Replace with actual image in production */}
            <img src={PortfolioImg} alt="Profile" className="rounded-full w-full h-full object-cover" />
          </div>
          {/* Personal Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-300">Java Full Stack Developer</h2>
            <p className="text-gray-400 mt-2">
              Hi, I'm a passionate B.Tech graduate in Computer Science and Engineering, specializing in Java Full Stack Development. With a strong foundation in building scalable web applications, I thrive on creating seamless user experiences and robust backend systems.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-white mb-4">Education</h3>
          <div className="bg-gray-700 p-4 rounded-md">
            <h4 className="text-lg font-semibold text-gray-300">B.Tech in Computer Science and Engineering</h4>
            <p className="text-gray-400">A.K.T.U Technical University | 2020 - 2024</p>
            <p className="text-gray-400 mt-2">Graduated with a strong academic record, focusing on software development, database</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-white mb-4">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: FaJava, name: 'Java' },
              { icon: SiSpringboot, name: 'Spring Boot' },
              { icon: FaReact, name: 'React' },
              { icon: SiJavascript, name: 'JavaScript' },
              { icon: FaDatabase, name: 'SQL/NoSQL' },
              { icon: FaHtml5, name: 'HTML5' },
              { icon: FaCss3Alt, name: 'CSS3' },
              { icon: SiTailwindcss, name: 'Tailwind CSS' },
              { icon: FaGitAlt, name: 'Git' }
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 bg-gray-700 p-3 rounded-md"
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
              >
                <skill.icon className="w-6 h-6 text-blue-400" />
                <span className="text-gray-300">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-white mb-4">My Journey</h3>
          <p className="text-gray-400">
            As a Java Full Stack Developer, I've worked on diverse projects, from building RESTful APIs with Spring Boot to crafting dynamic frontends with React. My passion for coding began during my B.Tech, where I explored algorithms and web technologies. Since then, I've honed my skills through hands-on projects, including a School management system and a responsive portfolio website (just like this one!).</p>
        </div>

        {/* Notable Projects */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-white mb-4">Notable Projects</h3>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded-md">
              <h4 className="text-lg font-semibold text-gray-300">School Management System</h4>
              <p className="text-gray-400">A full-stack application built with Spring Boot and React, enabling schools to manage student records, fees, and academic performance. and also it manage teachers in school and so much more.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-md">
              <h4 className="text-lg font-semibold text-gray-300">Portfolio Website</h4>
              <p className="text-gray-400">This very website! A responsive, animated portfolio showcasing my skills and projects using React, Tailwind CSS.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold text-white mb-4">Let's Connect!</h3>
          <p className="text-gray-400 mb-4">
            I'm always excited to collaborate on innovative projects or discuss tech over coffee (virtual or otherwise!). Feel free to reach out via the contact page.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-[#569BA9] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4D9BAD] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;