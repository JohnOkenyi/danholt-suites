'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function LuxuryIntro() {
  const ref = useRef(null);
  // Trigger at 70-80% viewport - using margin to control when animation triggers
  const isInView = useInView(ref, { once: true, margin: '-20% 0px -20% 0px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // 0.2s delay between each child
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
        ease: [0.25, 0.46, 0.45, 0.94], // cubic-bezier(0.25, 0.46, 0.45, 0.94) - ease-out
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="relative bg-[#f5f5f0] py-24 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      {/* Gold Accent Bar - 3-4px width, absolute left edge */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-[#d4af37]" 
        style={{ height: '100px' }}
      />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-4xl text-center"
      >
        {/* First Line - Delay: 0s */}
        <motion.h2
          variants={itemVariants}
          className="text-[#3a3a3a] text-4xl sm:text-5xl md:text-[48px] font-light leading-tight"
        >
          True luxury isn't designed.
        </motion.h2>
        
        {/* Second Line - Delay: 0.2s (automatic via staggerChildren) */}
        <motion.h2
          variants={itemVariants}
          className="text-[#3a3a3a] text-4xl sm:text-5xl md:text-[48px] font-light leading-tight mt-5"
        >
          It's felt.
        </motion.h2>

        {/* Paragraph - Delay: 0.4s (automatic via staggerChildren) */}
        <motion.p
          variants={itemVariants}
          className="text-[#6a6a6a] text-lg sm:text-xl md:text-[19px] font-normal leading-relaxed mt-12 max-w-3xl mx-auto px-4"
          style={{ lineHeight: '1.8' }}
        >
          It's the warmth of a genuine welcome. It's the anticipation of your unspoken needs. It's the thousand invisible gestures that make you feel at home.
        </motion.p>
      </motion.div>
    </section>
  );
}
