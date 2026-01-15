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
      className="bg-[#f5f5f0] py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-4xl text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-[#4a4a4a] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
        >
          True luxury isn&apos;t designed.
        </motion.h2>
        
        <motion.h2
          variants={itemVariants}
          className="text-[#4a4a4a] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mt-3"
        >
          It&apos;s felt.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-[#6b7280] text-base sm:text-lg md:text-xl font-normal leading-relaxed mt-12 max-w-3xl mx-auto px-4"
        >
          It&apos;s the warmth of a genuine welcome. It&apos;s the anticipation of your unspoken needs. 
          It&apos;s the thousand invisible gestures that make you feel at home.
        </motion.p>
      </motion.div>
    </section>
  );
}
