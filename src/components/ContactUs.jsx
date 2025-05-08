import React, { useRef, useState } from 'react';
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS Service ID, Template ID, and Public Key
    const serviceID = import.meta.env.VITE_SERVICEID;
    const templateID = import.meta.env.VITE_TEMPLATEID;
    const publicKey = import.meta.env.VITE_PUBLICKEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          setShowPopup(true);
          form.current.reset();
          setTimeout(() => {
            setStatus('');
            setShowPopup(false);
          }, 3000); // Clear status and hide popup after 3 seconds
        },
        (error) => {
          setStatus('Failed to send message. Please try again.');
          setShowPopup(true);
          console.error('EmailJS error:', error);
          setTimeout(() => {
            setStatus('');
            setShowPopup(false);
          }, 3000); // Clear status and hide popup after 3 seconds
        }
      );
  };

  // Animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Animation variants for social icons
  const iconVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.2, transition: { duration: 0.3 } }
  };

  // Animation variants for the popup
  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: 'linear-gradient(180deg, #1D1547 0%, #569BA9 100%)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Main Card */}
      <motion.div
        className="bg-gray-500 rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side - Get in Touch */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center items-center bg-gray-700 rounded-t-lg md:rounded-l-lg md:rounded-t-none">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Get in Touch</h2>
          <div className="flex space-x-6">
            <motion.a
              href="https://x.com/Izhar9838"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              initial="rest"
              whileHover="hover"
            >
              <FaTwitter className="w-8 h-8 text-white hover:text-blue-400" />
            </motion.a>
            <motion.a
              href="https://github.com/izhar9838"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              initial="rest"
              whileHover="hover"
            >
              <FaGithub className="w-8 h-8 text-white hover:text-gray-300" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/izhar_seikh/"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              initial="rest"
              whileHover="hover"
            >
              <FaInstagram className="w-8 h-8 text-white hover:text-pink-400" />
            </motion.a>
          </div>
        </div>
        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 p-8 bg-[#2D5D7F] md:max-w-md">
          <h2 className="text-2xl font-bold text-gray-300 mb-6">Contact Us</h2>
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="mt-1 w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="mt-1 w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-block bg-[#569BA9] text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-[#4D9BAD] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-live="polite"
          >
            <motion.div
              className="bg-gray-800 rounded-lg p-6 max-w-sm w-full text-center"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                border: '1px solid #569BA9',
                boxShadow: '0 4px 20px rgba(29, 21, 71, 0.5)'
              }}
            >
              <p className={`text-lg ${status.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                {status}
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-4 inline-block bg-[#569BA9] text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-[#4D9BAD] transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactUs;