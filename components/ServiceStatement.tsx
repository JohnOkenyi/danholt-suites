'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ServiceStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
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
        <motion.h2
          variants={itemVariants}
          className="text-[#3a3a3a] text-3xl sm:text-4xl md:text-5xl font-light leading-tight"
        >
          At Danholt Suites, service
        </motion.h2>
        
        <motion.h2
          variants={itemVariants}
          className="text-[#3a3a3a] text-3xl sm:text-4xl md:text-5xl font-light leading-tight mt-4"
        >
          stops imitating and starts caring.
        </motion.h2>
      </motion.div>
    </section>
  );
}
