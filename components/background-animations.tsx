'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

type Particle = {
  width: number;
  height: number;
  left: string;
  top: string;
  yOffset: number;
  duration: number;
};

// Extract background particles to a separate component
const BackgroundParticles = ({
  mounted,
  particles,
}: {
  mounted: boolean;
  particles: Particle[];
}) => {
  if (!mounted) return null;

  return (
    <>
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/10 dark:bg-blue-400/5"
          style={{
            width: particle.width,
            height: particle.height,
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, particle.yOffset],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  );
};

export const BackgroundAnimations = () => {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Limit particles on mobile
    const particleCount = window.innerWidth < 768 ? 4 : 8;

    const newParticles = Array(particleCount)
      .fill(0)
      .map(() => ({
        width: Math.random() * 10 + 5,
        height: Math.random() * 10 + 5,
        left: `${Math.random() * 90 + 5}%`,
        top: `${Math.random() * 90 + 5}%`,
        yOffset: Math.random() * 100 - 50,
        duration: Math.random() * 10 + 10,
      }));

    setParticles(newParticles);
    setMounted(true);

    return () => {
      setParticles([]);
      setMounted(false);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-100/30 dark:bg-blue-900/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-purple-100/20 dark:bg-purple-900/10 blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 20, repeat: Infinity, delay: 5 }}
      />

      {/* Floating particles - only rendered client-side */}
      <BackgroundParticles mounted={mounted} particles={particles} />
    </div>
  );
};
