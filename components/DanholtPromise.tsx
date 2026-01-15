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
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-white to-[#F8F6F3] overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2 className="text-base sm:text-lg font-light tracking-[0.2em] text-[#2D2D2D] uppercase mb-4">
            The Danholt Suites Promise.
          </h2>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#2D2D2D] leading-tight">
            Excellence in every detail.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.15,
                ease: 'easeOut',
              }}
              className="group relative"
            >
              {/* Feature Card */}
              <div className="relative h-full">
                {/* Top Accent Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + index * 0.15,
                    ease: 'easeOut',
                  }}
                  className="absolute top-0 left-0 w-12 h-[2px] bg-[#D4AF37] origin-left"
                />

                {/* Content */}
                <div className="pt-8">
                  <h3 className="text-2xl font-light text-[#2D2D2D] mb-3 leading-tight">
                    {feature.heading}
                  </h3>
                  <p className="text-base text-[#6A6A6A] font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
