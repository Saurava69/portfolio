import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Monitor } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      category: 'web',
      tags: ['React', 'Redux', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A comprehensive dashboard for online store management with real-time analytics, inventory tracking, and order management.',
      link: '#'
    },
    {
      id: 2,
      title: 'Travel Companion App',
      category: 'mobile',
      tags: ['React Native', 'Firebase', 'Google Maps API'],
      image: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A cross-platform mobile app helping travelers discover local attractions, create itineraries, and share experiences.',
      link: '#'
    },
    {
      id: 3,
      title: 'Financial Portfolio Tracker',
      category: 'web',
      tags: ['Vue.js', 'Chart.js', 'Node.js'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A web application for tracking investments, analyzing performance, and visualizing financial data.',
      link: '#'
    },
    {
      id: 4,
      title: 'Healthcare Management System',
      category: 'web',
      tags: ['Angular', 'TypeScript', 'MongoDB'],
      image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A comprehensive platform for healthcare providers to manage patient records, appointments, and billing.',
      link: '#'
    },
    {
      id: 5,
      title: 'Recipe Finder App',
      category: 'mobile',
      tags: ['Flutter', 'Dart', 'REST API'],
      image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A mobile application that helps users discover recipes based on available ingredients and dietary preferences.',
      link: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracker UI Design',
      category: 'design',
      tags: ['Figma', 'UI/UX', 'Prototyping'],
      image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A modern, user-friendly interface design for a fitness tracking application with workout plans and progress monitoring.',
      link: '#'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title dark:text-white">Featured Projects</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4">
            A selection of my recent work, showcasing my skills and passion for building engaging digital experiences.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'all' ? 'bg-white dark:bg-gray-700 shadow-sm text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('web')} 
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'web' ? 'bg-white dark:bg-gray-700 shadow-sm text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Web
            </button>
            <button 
              onClick={() => setFilter('mobile')} 
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'mobile' ? 'bg-white dark:bg-gray-700 shadow-sm text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Mobile
            </button>
            <button 
              onClick={() => setFilter('design')} 
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'design' ? 'bg-white dark:bg-gray-700 shadow-sm text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Design
            </button>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <div className="card overflow-hidden flex flex-col h-full dark:bg-gray-800">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex gap-2">
                      <a href="#" className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-800 dark:text-gray-200 hover:bg-primary-500 dark:hover:bg-primary-600 hover:text-white transition-colors" aria-label="View project">
                        <ExternalLink size={16} />
                      </a>
                      <a href="#" className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-800 dark:text-gray-200 hover:bg-primary-500 dark:hover:bg-primary-600 hover:text-white transition-colors" aria-label="View code">
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-sm text-primary-600 dark:text-primary-400">
                    <Monitor size={16} className="mr-1" />
                    <span className="font-medium capitalize">{project.category} Project</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;