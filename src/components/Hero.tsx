import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(56,189,248,0.1),rgba(56,189,248,0))]"></div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <motion.div
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary-100 text-primary-800">
              Full Stack Developer | AI Enthusiast
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="text-primary-600">Hi, I'm Saurav Kumar</span>
            </h1>


            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="button-primary">
                Get In Touch
              </a>
              <a href="#resume" className="button-outline">
                Resume
              </a>
            </div>

            <div className="flex mt-8 gap-4">
              <a
                href="https://github.com/Saurava69"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sauravkumar25/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:sauravx25@gmail.com"
                className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              {/* LeetCode Icon */}
              <a
                href="https://leetcode.com/0explorer0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors"
                aria-label="LeetCode"
              >
                <img
                  src="https://res.cloudinary.com/dvqqjf3pc/image/upload/v1748721044/leetcode_1_sxjs0a.png"
                  alt="LeetCode"
                  className="w-5 h-5"
                />
              </a>

              {/* Codeforces Icon */}
              <a
                href="https://codeforces.com/profile/sauravx25"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors"
                aria-label="Codeforces"
              >
                <img
                  src="https://res.cloudinary.com/dvqqjf3pc/image/upload/v1748721289/code-forces_zxkr9q.png"
                  alt="Codeforces"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative flex-shrink-0 w-full max-w-sm md:max-w-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-[5/5] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary-600 to-secondary-600">
              <img
                src="https://res.cloudinary.com/dvqqjf3pc/image/upload/v1748719457/image1_bczu76.jpg"
                alt="Saurav Kumar"
                className="w-full h-full object-cover mix-blend-overlay opacity-90"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-400 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-400 rounded-full opacity-20 -z-10"></div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        >
          <a
            href="#about"
            className="p-2 rounded-full text-gray-600 hover:text-primary-600 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;