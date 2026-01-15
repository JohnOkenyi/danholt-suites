'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    id: 1,
    heading: 'Personalized Service',
    description: 'Every preference remembered',
  },
  {
    id: 2,
    heading: '24/7 Concierge',
    description: 'Always at your service',
  },
  {
    id: 3,
    heading: 'Seamless Experience',
    description: 'From booking to checkout',
  },
  {
    id: 4,
    heading: 'Exclusive Access',
    description: 'Members-only privileges',
  },
];

export default function DanholtPromise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const headingVariants = {
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

  const boxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      ref={ref}
      className="bg-[#f5f5f0] py-24 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={headingVariants}
            className="text-[#3a3a3a] text-4xl sm:text-5xl md:text-6xl font-light leading-tight"
          >
            The Danholt Suites Promise.
          </motion.h2>

          <motion.p
            variants={headingVariants}
            className="text-[#6a6a6a] text-xl sm:text-2xl md:text-3xl font-light mt-6"
          >
            Excellence in every detail.
          </motion.p>
        </motion.div>

        {/* Feature Boxes - 2x2 Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={boxVariants}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl md:rounded-2xl p-8 md:p-10 shadow-sm border border-black/5 hover:shadow-md transition-shadow"
            >
              <h3 className="text-[#2a2a2a] text-xl md:text-2xl font-medium mb-3">
                {feature.heading}
              </h3>
              <p className="text-[#6a6a6a] text-base md:text-lg font-normal leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
