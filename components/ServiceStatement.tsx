'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ServiceStatement() {
  const ref = useRef(null);
  // Trigger at 70-80% viewport
  const isInView = useInView(ref, { once: true, margin: '-20% 0px -20% 0px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // 0.2s delay between lines
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30  // translateY: 30px
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9, // 0.8-1.0 seconds
        ease: [0.25, 0.46, 0.45, 0.94], // ease-out
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="bg-[#f5f5f0] py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-4xl text-center"
      >
        {/* First Line - Delay: 0s */}
        <motion.h2
          variants={itemVariants}
          className="text-[#3a3a3a] text-3xl sm:text-4xl md:text-[42px] font-light leading-tight"
        >
          At Danholt Suites, service
        </motion.h2>
        
        {/* Second Line - Delay: 0.2s (automatic via staggerChildren) */}
        <motion.h2
          variants={itemVariants}
          className="text-[#3a3a3a] text-3xl sm:text-4xl md:text-[42px] font-light leading-tight mt-5"
        >
          stops imitating and starts caring.
        </motion.h2>
      </motion.div>
    </section>
  );
}
