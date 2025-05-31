import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileDown, FileText } from 'lucide-react';

const ResumeSection: React.FC = () => {
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

  return (
    <section id="resume" className="section bg-white dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title dark:text-white">My Resume</h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            variants={itemVariants} 
            className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md text-center"
          >
            <FileText size={64} className="mx-auto mb-6 text-primary-600 dark:text-primary-400" />
            
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Saurav Kumar - Resume</h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              A detailed overview of my professional journey, skills, and accomplishments.
            </p>
            
            <a 
              href="/resume.pdf" 
              download 
              className="button-primary inline-flex items-center px-6 py-3"
            >
              <FileDown size={20} className="mr-2" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;