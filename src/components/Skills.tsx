import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const technicalSkills = [
    { name: 'C++ / TypeScript / JavaScript', level: 90 },
    { name: 'React.js / Next.js', level: 90 },
    { name: 'Node.js / Express.js', level: 85 },
    { name: 'Python / TensorFlow', level: 80 },
    { name: 'SQL / MongoDB ', level: 80 },
    { name: 'AI/ML (LLMs, Agents)', level: 75 },
    { name: 'Cloud & DevOps', level: 70 },
  ];

  const softSkills = [
    'Problem Solving',
    'Communication',
    'Team Collaboration',
    'Time Management',
    'Adaptability',
    'Attention to Detail',
    'Critical Thinking',
    'Creativity',
  ];

  const tools = [
    'VS Code',
    'Git & GitHub',
    'Postman',
    'Docker',
    'Firebase Console',
    'Render / Netlify / Vercel',
    'Linux / CLI Tools',
  ];

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title dark:text-white">Skills & Expertise</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4">
            My technical toolkit and professional capabilities that I bring to every project.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-full">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b pb-2 dark:border-gray-700">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="skill-bar bg-gray-200 dark:bg-gray-700">
                      <motion.div
                        className="skill-progress bg-primary-500 dark:bg-primary-400"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white border-b pb-2 dark:border-gray-700">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white border-b pb-2 dark:border-gray-700">Tools & Software</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900/50 text-secondary-700 dark:text-secondary-300 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;