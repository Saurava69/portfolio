import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const experiences = [
  {
    title: 'AI Intern (Synthetic Media Detection)',
    company: 'SAP Labs',
    period: 'May 2024 – Jul 2024',
    description: [
      'Engineered CNN models (EfficientNet-B4) achieving 97.16% accuracy for image authenticity and 98.0% for audio deepfake detection using mel-spectrogram analysis.',
      'Deployed models using Hugging Face Inference API with REST endpoints, integrated into SAP Fiori applications via UI5 and OData services.',
      'Designed a real-time video pipeline with OpenCV and WebRTC for 1080p stream analysis at 18 FPS on cloud infrastructure.',
      'Built a Python Flask backend to handle 30+ concurrent media analysis requests efficiently.',
      'Trained and validated detection models using TensorFlow on a dataset of over 140k synthetic and natural media samples.'
    ]
  },
  {
    title: 'Undergraduate Researcher – RIS & FPGA',
    company: 'NIT Warangal',
    period: 'Aug 2024 – Mar 2025',
    description: [
      'Designed control architecture for Reconfigurable Intelligent Surface (RIS) hardware using Arduino and FPGA.',
      'Programmed shift registers to manage 256 diodes across 16 RIS elements using efficient digital logic.',
      'Simulated wireless signal behavior in MATLAB to evaluate RIS performance across configurations.',
      'Integrated embedded hardware with signal processing algorithms to enable passive beamforming.'
    ]
  },
];

  return (
    <section id="experience" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            My journey through various roles that have shaped my skills and expertise.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="timeline-item">
              <div className="timeline-dot"></div>
              
              <div className="ml-2 md:ml-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1 md:mt-0">
                    <Calendar size={16} className="mr-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-primary-600 mb-3">
                  <Briefcase size={16} className="mr-2" />
                  <span className="font-medium">{exp.company}</span>
                </div>
                
                <ul className="list-disc list-inside space-y-1 text-gray-700 pl-1">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-base">{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;