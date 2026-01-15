'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Rooms & Suites',
    description: 'Luxurious suites with modern facilities in a serene environment',
    image: '/images/room-suite.jpg',
    link: '/rooms',
  },
  {
    id: 2,
    title: 'Restaurant & Bar',
    description: 'Delicious Nigerian cuisines and exotic drinks',
    image: '/images/restaurant.jpg',
    link: '/dining',
  },
  {
    id: 3,
    title: 'Sports & Facilities',
    description: 'World class 5-aside football pitch and conference hall',
    image: '/images/sports.jpg',
    link: '/facilities',
  },
];

export default function CraftedExperiences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 bg-[#1A1A2E] overflow-hidden"
    >
      {/* Decorative Accent Line */}
      <div className="absolute top-0 left-8 lg:left-16 w-1 h-24 bg-gradient-to-b from-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-sm lg:text-base tracking-[0.3em] text-[#D4AF37] uppercase mb-6 font-light">
            DISCOVER
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight">
            Crafted Experiences
          </h2>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.7,
                delay: 0.2 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative"
            >
              <Link href={experience.link} className="block">
                {/* Card Container */}
                <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#2A2A3E] to-[#1A1A2E] shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl">
                  {/* Image Container */}
                  <div className="relative h-64 lg:h-80 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('${experience.image}')`,
                      }}
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-[#1A1A2E]/60 to-transparent opacity-90" />
                  </div>

                  {/* Content Container */}
                  <div className="relative p-6 lg:p-8 -mt-16 z-10">
                    <h3 className="text-2xl lg:text-3xl font-light text-white mb-3 leading-tight">
                      {experience.title}
                    </h3>
                    <p className="text-base text-[#B8B8C0] font-light leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    {/* Explore Link */}
                    <div className="flex items-center gap-3 text-[#D4AF37] group/link">
                      <span className="text-sm tracking-wider font-normal">Explore</span>
                      <ArrowRight
                        className="w-4 h-4 transform transition-transform duration-300 group-hover/link:translate-x-2"
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-[#D4AF37]/30 via-[#D4AF37]/10 to-transparent" />
    </section>
  );
}
