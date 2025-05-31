import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const education = [
    {
      degree: 'BTech in Electronics and Communication Engineering',
      institution: 'National Institute of Technology, Warangal',
      period: '2021 - 2025',
      cgpa: '7.69/10',
    },
    {
      degree: 'Intermediate in Science',
      institution: 'Sunbeam Academy, Varanasi',
      period: '2019 - 2021',
      cgpa: '95.8%',
    },
    {
      degree: 'High School',
      institution: 'JNV Buxar (Bihar)',
      period: '2018 - 2019',
      cgpa: '97.6%',
    }
  ];

  const certifications = [
    {
      title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp',
      issuer: 'Udemy',
      date: '2023',
      link: 'https://www.udemy.com/certificate/UC-e674e39e-9ebd-4b6b-ad5e-f6d147624fee/'
    },
    {
      title: 'Supervised Machine Learning: Regression and Classification by deeplearning.ai',
      issuer: 'Coursera',
      date: '2022',
      link: 'https://www.coursera.org/account/accomplishments/verify/8HEUEZNJ2M6N'
    },
  ];

  return (
    <section id="education" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title dark:text-white">Education & Certifications</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4">
            My academic background and professional certifications that have contributed to my expertise.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-lg mr-4">
                  <GraduationCap size={24} className="text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Education</h3>
              </div>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700 pb-8 last:pb-0">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400 border-4 border-white dark:border-gray-800"></div>
                    
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{edu.degree}</h4>
                    <div className="flex items-center text-primary-600 dark:text-primary-400 mb-2">
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar size={14} className="mr-1" />
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">CGPA: {edu.cgpa}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent-100 dark:bg-accent-900/50 rounded-lg mr-4">
                  <Award size={24} className="text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Certifications</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="car bg-white dark:bg-gray-700 hover:bg-accent-50 dark:hover:bg-accent-900/50 hover:border-l-4 hover:border-accent-500 dark:hover:border-accent-400 group">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-accent-700 dark:group-hover:text-accent-300">{cert.title}</h4>
                    <div className="text-accent-600 dark:text-accent-400 mb-2 font-medium">{cert.issuer}</div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar size={14} className="mr-1" />
                      <span>{cert.date}</span>
                    </div>
                    <a 
                      href={cert.link} 
                      className="text-sm inline-flex items-center text-accent-600 dark:text-accent-400 hover:text-accent-800 dark:hover:text-accent-300 transition-colors"
                    >
                      View Certificate
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;