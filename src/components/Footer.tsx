import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Saurav Kumar</h3>
            <p className="text-gray-400">Full Stack Developer | AI Enthusiast</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Saurava69" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 text-gray-400 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sauravkumar25/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 text-gray-400 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:sauravx25@gmail.com" 
              className="p-2 bg-gray-800 text-gray-400 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://x.com/sauravx25" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 text-gray-400 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="text-center md:text-left text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Saurav Kumar. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#home" className="hover:text-primary-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-primary-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-primary-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-primary-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-primary-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-2 bg-gray-800 text-gray-400 rounded-full hover:bg-primary-600 hover:text-white transition-colors mt-6 md:mt-0"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;