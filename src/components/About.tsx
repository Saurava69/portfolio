import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {  Smartphone, Code, Layout, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
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
      transition: { duration: 0.6 }
    }
  };

  const services = [
    {
      icon: <Code size={28} className="text-primary-600" />,
      title: 'Full-Stack Development',
      description: 'Building secure, scalable apps with React, Next.js, Node.js & MongoDB.'
    },
    {
      icon: <Layout size={28} className="text-primary-600" />,
      title: 'AI, LLMs & Automation',
      description: 'Building AI solutions with TensorFlow, LLMs & autonomous agents.'
    },
    {
      icon: <Smartphone size={28} className="text-primary-600" />,
      title: 'Embedded & FPGA Systems',
      description: 'Building hardware control systems with microcontrollers & FPGAs.'
    },
    {
      icon: <Lightbulb size={28} className="text-primary-600" />,
      title: 'Creative Tech Solutions',
      description: 'creating scalable web apps with modern stacks.'
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="section-title mb-6 inline-block">About Me</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
              Full-stack developer with 1 year of experience building practical software solutions across web, AI, and embedded systems. Passionate about clean code, real-world impact, and continuous learning.
            </p>
          </motion.div>


          <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-center mb-8">
            What I Do
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="card group hover:border-l-4 hover:border-primary-500"
              >
                <div className="mb-4 p-3 inline-block rounded-lg bg-primary-50 group-hover:bg-primary-100 transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;