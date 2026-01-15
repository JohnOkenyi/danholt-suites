'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bed, UtensilsCrossed, Dumbbell, Zap, Wifi } from 'lucide-react';

const features = [
  { 
    id: 1, 
    icon: Bed, 
    label: 'Luxury Rooms',
    position: 'top-0 left-4 md:left-12 lg:left-24'
  },
  { 
    id: 2, 
    icon: UtensilsCrossed, 
    label: 'Nigerian Cuisine',
    position: 'top-0 right-4 md:right-12 lg:right-24'
  },
  { 
    id: 3, 
    icon: Dumbbell, 
    label: 'Sports Facilities',
    position: 'top-1/2 -translate-y-1/2 left-0 md:left-8'
  },
  { 
    id: 4, 
    icon: Zap, 
    label: '24/7 Electricity',
    position: 'top-1/2 -translate-y-1/2 right-0 md:right-8'
  },
  { 
    id: 5, 
    icon: Wifi, 
    label: 'Free WiFi',
    position: 'bottom-8 left-1/2 -translate-x-1/2'
  },
];

export default function AnticipatedNeeds() {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="bg-[#f5f5f0] py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Desktop: Floating Cards Layout */}
      <div className="hidden lg:block relative min-h-[600px]">
        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-4xl"
        >
          <motion.h2
            variants={headingVariants}
            className="text-[#4a4a4a] text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
          >
            Where every need is anticipated.
          </motion.h2>
          <motion.h2
            variants={headingVariants}
            className="text-[#4a4a4a] text-4xl md:text-5xl lg:text-6xl font-light leading-tight mt-3"
          >
            Before you even ask.
          </motion.h2>
        </motion.div>

        {/* Floating Cards */}
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
              className={`absolute ${feature.position} group cursor-pointer`}
            >
              <div className="flex flex-col items-center">
                <div className="bg-[#1a1a2e] rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-shadow">
                  <Icon className="w-10 h-10 text-[#d4af37]" strokeWidth={1.5} />
                </div>
                <p className="mt-3 text-white text-sm font-light text-center whitespace-nowrap">
                  {feature.label}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile & Tablet: Stacked Layout */}
      <div className="lg:hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <motion.h2
            variants={headingVariants}
            className="text-[#4a4a4a] text-3xl sm:text-4xl md:text-5xl font-light leading-tight"
          >
            Where every need is anticipated.
          </motion.h2>
          <motion.h2
            variants={headingVariants}
            className="text-[#4a4a4a] text-3xl sm:text-4xl md:text-5xl font-light leading-tight mt-3"
          >
            Before you even ask.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="bg-[#1a1a2e] rounded-2xl p-6 shadow-lg">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#d4af37]" strokeWidth={1.5} />
                </div>
                <p className="mt-3 text-[#4a4a4a] text-xs sm:text-sm font-light text-center">
                  {feature.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
