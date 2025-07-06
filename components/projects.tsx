"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Layers, Zap, Cpu, Database, Globe } from "lucide-react";
import { useState, useEffect } from "react";

// Define skill categories
const skillCategories = [
  {
    title: "Front-End Development",
    description: "Building responsive, interactive, and high-performance user interfaces using modern JavaScript frameworks and libraries.",
    icon: <Code className="h-5 w-5 text-blue-400" />,
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Framer Motion", level: "Intermediate" },
      { name: "Redux", level: "Advanced" },
      { name: "React Query", level: "Advanced" },
    ]
  },
  {
    title: "UI/UX Implementation",
    description: "Transforming design mockups into pixel-perfect interfaces with smooth animations and micro-interactions.",
    icon: <Layers className="h-5 w-5 text-indigo-400" />,
    skills: [
      { name: "Figma to Code", level: "Advanced" },
      { name: "Responsive Design", level: "Advanced" },
      { name: "CSS/SASS", level: "Advanced" },
      { name: "Animations", level: "Intermediate" },
      { name: "Accessibility", level: "Intermediate" },
      { name: "Design Systems", level: "Advanced" },
    ]
  },
  {
    title: "Performance Optimization",
    description: "Enhancing application speed and efficiency through code optimization, lazy loading, and modern web techniques.",
    icon: <Zap className="h-5 w-5 text-yellow-400" />,
    skills: [
      { name: "Code Splitting", level: "Advanced" },
      { name: "Lazy Loading", level: "Advanced" },
      { name: "Image Optimization", level: "Advanced" },
      { name: "Bundle Size Reduction", level: "Intermediate" },
      { name: "Performance Monitoring", level: "Intermediate" },
    ]
  },
  {
    title: "State Management",
    description: "Implementing efficient state management solutions for complex applications with various data requirements.",
    icon: <Cpu className="h-5 w-5 text-green-400" />,
    skills: [
      { name: "Redux", level: "Advanced" },
      { name: "Context API", level: "Advanced" },
      { name: "Zustand", level: "Intermediate" },
      { name: "Recoil", level: "Intermediate" },
      { name: "Jotai", level: "Basic" },
    ]
  },
  {
    title: "API Integration",
    description: "Connecting front-end applications with back-end services and third-party APIs for data exchange.",
    icon: <Database className="h-5 w-5 text-purple-400" />,
    skills: [
      { name: "RESTful APIs", level: "Advanced" },
      { name: "GraphQL", level: "Intermediate" },
      { name: "WebSockets", level: "Intermediate" },
      { name: "Authentication", level: "Advanced" },
      { name: "Data Fetching", level: "Advanced" },
    ]
  },
  {
    title: "Project Types",
    description: "Experience with various types of web applications and platforms across different industries.",
    icon: <Globe className="h-5 w-5 text-orange-400" />,
    skills: [
      { name: "Dashboards & Analytics", level: "Advanced" },
      { name: "E-commerce Platforms", level: "Advanced" },
      { name: "SaaS Applications", level: "Advanced" },
      { name: "Content Management", level: "Intermediate" },
      { name: "Social Platforms", level: "Intermediate" },
    ]
  }
];

const SkillCategory = ({ category, index }: { category: typeof skillCategories[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full shadow-lg dark:shadow-slate-800/30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              {category.title}
            </h3>
          </div>
          
          <p className="text-slate-700 dark:text-slate-300 text-sm mb-6">
            {category.description}
          </p>
          
          <div className="space-y-3">
            {category.skills.map((skill, idx) => (
              <div 
                key={skill.name}
                className="flex items-center justify-between"
              >
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Badge 
                    className={`
                      ${skill.level === 'Advanced' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 
                        skill.level === 'Intermediate' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 
                        'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400'}
                    `}
                  >
                    {skill.name}
                  </Badge>
                </motion.div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                  className={`
                    text-xs font-medium
                    ${skill.level === 'Advanced' ? 'text-green-600 dark:text-green-400' : 
                      skill.level === 'Intermediate' ? 'text-blue-600 dark:text-blue-400' : 
                      'text-slate-600 dark:text-slate-400'}
                  `}
                >
                  {skill.level}
                </motion.span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Space particles component
const SpaceBackground = () => {
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState<Array<{
    size: number;
    opacity: number;
    left: string;
    top: string;
    animationDuration: number;
    delay: number;
  }>>([]);

  // Generate stars only on the client side
  useEffect(() => {
    const newStars = Array(100).fill(0).map(() => ({
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }));
    
    setStars(newStars);
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Stars - only rendered client-side */}
      {mounted && stars.map((star, i) => (
        <motion.div
          key={i}
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

export function Projects() {
  return (
    <section id="projects" className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Space-themed animated background */}
      <SpaceBackground />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-12 text-center"
        >
          <div className="space-y-4 max-w-3xl">
            <motion.h2 
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Front-End Expertise
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-700 dark:text-slate-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Specialized in creating modern, responsive, and high-performance web applications across various domains.
            </motion.p>
          </div>
          
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <SkillCategory key={category.title} category={category} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}