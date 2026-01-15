'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function LuxuryIntro() {
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
      className="relative bg-[#f5f5f0] py-24 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Accent Bar */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-24 md:h-32 bg-[#d4af37]" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-4xl text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-[#3a3a3a] text-4xl sm:text-5xl md:text-6xl font-light leading-tight"
        >
          True luxury isn&apos;t designed.
        </motion.h2>
        
        <motion.h2
          variants={itemVariants}
          className="text-[#3a3a3a] text-4xl sm:text-5xl md:text-6xl font-light leading-tight mt-5"
        >
          It&apos;s felt.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-[#6a6a6a] text-lg sm:text-xl md:text-2xl font-normal leading-relaxed mt-12 max-w-3xl mx-auto px-4"
        >
          It&apos;s the warmth of a genuine welcome. It&apos;s the anticipation of your unspoken needs. 
          It&apos;s the thousand invisible gestures that make you feel at home.
        </motion.p>
      </motion.div>
    </section>
  );
}
