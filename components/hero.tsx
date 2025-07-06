"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Send } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{
    width: number;
    height: number;
    left: string;
    top: string;
    yOffset: number;
    duration: number;
  }>>([]);

  // Generate particles only on the client side
  useEffect(() => {
    const newParticles = Array(8).fill(0).map(() => ({
      width: Math.random() * 10 + 5,
      height: Math.random() * 10 + 5,
      left: `${Math.random() * 90 + 5}%`,
      top: `${Math.random() * 90 + 5}%`,
      yOffset: Math.random() * 100 - 50,
      duration: Math.random() * 10 + 10
    }));
    
    setParticles(newParticles);
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      {/* Static gradient background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-50 via-indigo-50/80 to-white dark:from-slate-950 dark:via-blue-950/50 dark:to-slate-900 -z-10" />
      
      {/* Animated background elements */}
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
        {mounted && particles.map((particle, i) => (
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
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 flex flex-col items-center">
        {/* Profile Card - Instagram/Facebook style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden"
        >
          {/* Cover image */}
          <div className="relative h-48 md:h-60 w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700">
              {/* Cover pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                      <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>
            </div>
            
            {/* Small header - floating above cover */}
            <motion.div 
              className="absolute top-4 left-4 right-4 flex justify-between items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="text-white text-lg font-bold">Portfolio</div>
              <div className="flex gap-2">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Github className="h-4 w-4 text-white" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-white" />
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          {/* Profile image */}
          <div className="relative flex justify-center">
            <motion.div 
              className="absolute -top-16 w-32 h-32 md:w-40 md:h-40"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl">
                <Image
                  alt="Zeyad Mostafa"
                  className="object-cover rounded-full"
                  src="/image.png"
                  fill
                  sizes="(max-width: 768px) 8rem, 10rem"
                  priority
                />
              </div>
              
              {/* Subtle overlay shine effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 rounded-full"
                initial={{ rotate: -20, scale: 1.5 }}
                animate={{ 
                  rotate: [0, 180],
                  x: ['0%', '100%', '0%'],
                }}
                transition={{ 
                  duration: 8, 
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
              />
            </motion.div>
          </div>
          
          {/* Profile info */}
          <div className="pt-20 md:pt-24 px-6 pb-8">
            <div className="flex flex-col items-center text-center">
              <motion.h1 
                className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 mb-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Ziad Mostafa
              </motion.h1>
              <motion.p 
                className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Front-End Developer
              </motion.p>
              <motion.p 
                className="text-sm text-gray-500 dark:text-gray-400 max-w-md mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Crafting sleek interfaces with performance and precision.
              </motion.p>
              
              {/* Stats */}
              <motion.div 
                className="flex justify-between w-full border-t border-b border-slate-200 dark:border-slate-700 py-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="text-center px-4">
                  <p className="text-lg font-bold">15+</p>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">Projects</p>
                </div>
                <div className="text-center px-4 border-x border-slate-200 dark:border-slate-700">
                  <p className="text-lg font-bold">2+</p>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">Years</p>
                </div>
                <div className="text-center px-4">
                  <p className="text-lg font-bold">20+</p>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">Skills</p>
                </div>
              </motion.div>
              
              {/* Action buttons */}
              <motion.div 
                className="flex flex-wrap justify-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button 
                  asChild 
                  className="shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-600 dark:to-indigo-600 border-0 transition-all duration-300"
                >
                  <Link href="#contact">
                    <Send className="mr-2 h-4 w-4" /> Contact Me
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  asChild 
                  className="shadow-lg hover:shadow-lg hover:shadow-indigo-500/10 dark:border-indigo-800/50 hover:border-indigo-500 dark:hover:border-indigo-600 transition-all duration-300"
                >
                  <a href="/resume.pdf" target="_blank" download>
                    <Download className="mr-2 h-4 w-4" /> View CV
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}