"use client";

import { motion, useInView } from "framer-motion";
import { CheckCircle2, Briefcase, Calendar, Award } from "lucide-react";
import { useRef } from "react";

export function About() {
  const timelineItems = [
    {
      year: "2022",
      title: "Started Freelancing",
      description: "Began career as a freelance developer working with startups and small businesses",
      icon: <Calendar className="h-5 w-5 text-blue-500" />
    },
    {
      year: "2023",
      title: "Expanded Client Base",
      description: "Successfully delivered over 15 client projects with stellar feedback",
      icon: <Briefcase className="h-5 w-5 text-indigo-500" />
    },
    {
      year: "2024",
      title: "Current",
      description: "Focusing on high-end web applications with modern tech stacks",
      icon: <Award className="h-5 w-5 text-purple-500" />
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const traits = [
    { text: "Pixel-perfect Figma to code", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" },
    { text: "Fast delivery", color: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300" },
    { text: "Team collaboration", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300" },
    { text: "Performance-focused", color: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300" }
  ];

  return (
    <section id="about" className="w-full py-20 mx-auto md:py-28 lg:py-36 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute -top-20 right-0 w-64 h-64 rounded-full bg-blue-100/30 dark:bg-blue-900/10 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.2, 0.3],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-20 left-10 w-80 h-80 rounded-full bg-purple-100/20 dark:bg-purple-900/10 blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 5 }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col items-center space-y-16"
        >
          {/* About me text */}
          <div className="space-y-8 max-w-3xl text-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
                About Me
              </h2>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-20 blur-xl dark:opacity-30" />
              <div className="relative bg-white/80 dark:bg-slate-800/80 p-6 sm:p-8 rounded-xl backdrop-blur-sm shadow-xl border border-slate-200/50 dark:border-slate-700/50">
                <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                  I&apos;m a passionate Front-End and Full Stack Developer with a keen eye for pixel-perfect design implementation. 
                  I specialize in transforming complex Figma designs into high-performance web applications 
                  using modern JavaScript frameworks and libraries. My approach focuses on creating fast, 
                  responsive, and visually stunning interfaces that provide exceptional user experiences.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-3 pt-4"
              variants={itemVariants}
            >
              {traits.map((trait, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-1.5 ${trait.color} rounded-full text-sm font-medium shadow-md dark:shadow-slate-900/30`}
                >
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>{trait.text}</span>
                  </div>
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div 
            variants={itemVariants}
            className="w-full max-w-4xl pt-8 relative"
          >
            <h3 className="text-2xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400">
              Professional Journey
            </h3>
            
            {/* Timeline central line with gradient */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full" />
            
            {/* Timeline items */}
            <div className="space-y-20">
              {timelineItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.3 }}
                  className={`flex flex-col ${
                    index % 2 === 0 
                      ? "md:flex-row" 
                      : "md:flex-row-reverse"
                  } gap-8 relative`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-[-8px] md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg"
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 0 25px rgba(79, 70, 229, 0.6)"
                      }}
                      animate={{
                        boxShadow: [
                          "0 4px 12px rgba(79, 70, 229, 0.3)",
                          "0 4px 24px rgba(79, 70, 229, 0.6)",
                          "0 4px 12px rgba(79, 70, 229, 0.3)"
                        ]
                      }}
                      transition={{
                        boxShadow: {
                          repeat: Infinity,
                          duration: 2
                        }
                      }}
                    >
                      {item.year}
                    </motion.div>
                  </div>
                  
                  <div className="md:w-1/2 flex flex-col md:items-end md:pr-16 md:text-right">
                    <motion.div 
                      className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 relative"
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                      }}
                    >
                      {/* Decorative elements */}
                      <div className="absolute -top-3 -right-3 p-2 bg-white dark:bg-slate-700 rounded-full shadow-md">
                        {item.icon}
                      </div>
                      
                      <div>
                        <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">{item.title}</div>
                        <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
                      </div>
                      
                      {/* 3D depth effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-xl -z-10"
                        style={{ transform: "translateZ(-10px)" }}
                      />
                    </motion.div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-16">
                    {index % 2 !== 0 && (
                      <div className="hidden md:block h-full" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
