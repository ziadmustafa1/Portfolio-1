'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

type Star = {
  size: number;
  opacity: number;
  left: string;
  top: string;
  animationDuration: number;
  delay: number;
};

export const SpaceBackground = () => {
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Limit stars count for mobile devices
    const starCount = window.innerWidth < 768 ? 30 : 60;

    const newStars = Array(starCount)
      .fill(0)
      .map(() => ({
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      }));

    setStars(newStars);
    setMounted(true);

    return () => {
      setStars([]);
      setMounted(false);
    };
  }, []);

  // Separate the stars into batches for better performance
  const starBatches = useMemo(() => {
    if (!mounted) return [];

    const result = [];
    const batchSize = 15; // Reduced batch size for better performance

    for (let i = 0; i < stars.length; i += batchSize) {
      result.push(stars.slice(i, i + batchSize));
    }

    return result;
  }, [stars, mounted]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Stars - only rendered client-side in batches */}
      {starBatches.map((batch, batchIndex) => (
        <div key={batchIndex} className="absolute inset-0">
          {batch.map((star, i) => (
            <motion.div
              key={`${batchIndex}-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: star.size,
                height: star.size,
                opacity: star.opacity,
                left: star.left,
                top: star.top,
              }}
              animate={{
                opacity: [star.opacity, star.opacity * 0.5, star.opacity],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: star.animationDuration,
                repeat: Infinity,
                delay: star.delay,
              }}
            />
          ))}
        </div>
      ))}

      {/* Nebula effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 15, repeat: Infinity, delay: 5 }}
      />
    </div>
  );
};
