import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedButton, { NeuButton } from '../AnimatedButton';

export default function HeroSection() {
  const navigate = useNavigate();

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, delay: 0.2 } 
    },
  };

  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden bg-[#f1f1f1]">
      {/* Grid lines background */}
      <div className="absolute inset-0 z-1">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            mask: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            WebkitMask: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
          }}
        />
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 h-[60vh] flex items-center justify-center">
        {/* Animated Text Content */}
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="mb-2 text-6xl font-bold tracking-tight text-black sm:text-7xl"
            variants={childVariants}
          >
            ALPHA OMEGA
          </motion.h1>
          <motion.p 
            className="mb-6 font-bold text-lg"
            variants={childVariants}
          >
            From Concept to Creation
          </motion.p>
          <motion.p 
            className="mx-auto mb-8 max-w-2xl text-center text-gray-600"
            variants={childVariants}
          >
            An electronics manufacturing company in Nepal. We are pioneering electronics mass-manufacturing in Nepal with global standards. Based in Kathmandu, Alpha Omega leads the nation's growing electronics sector, aiming to redefine "Made in Nepal" with its globally competitive tech products.
          </motion.p>
          <motion.div variants={childVariants}>
            <NeuButton onClick={() => navigate("/projects")} text="Our Projects" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
