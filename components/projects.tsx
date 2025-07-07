"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";

// Dynamically import icons
const DynamicIcons = {
  Code: dynamic(() => import("lucide-react").then(mod => mod.Code), { 
    ssr: false,
    loading: () => <div className="w-5 h-5 bg-blue-400/20 rounded" />
  }),
  Layers: dynamic(() => import("lucide-react").then(mod => mod.Layers), {
    ssr: false,
    loading: () => <div className="w-5 h-5 bg-indigo-400/20 rounded" />
  }),
  Zap: dynamic(() => import("lucide-react").then(mod => mod.Zap), {
    ssr: false,
    loading: () => <div className="w-5 h-5 bg-yellow-400/20 rounded" />
  }),
  Cpu: dynamic(() => import("lucide-react").then(mod => mod.Cpu), {
    ssr: false,
    loading: () => <div className="w-5 h-5 bg-green-400/20 rounded" />
  }),
  Database: dynamic(() => import("lucide-react").then(mod => mod.Database), {
    ssr: false,
    loading: () => <div className="w-5 h-5 bg-purple-400/20 rounded" />
  }),
  Globe: dynamic(() => import("lucide-react").then(mod => mod.Globe), {
    ssr: false,
    loading: () => <div className="w-5 h-5 bg-orange-400/20 rounded" />
  })
};

// Define skill categories
const skillCategories = [
  {
    title: "Front-End Development",
    description: "Building responsive, interactive, and high-performance user interfaces using modern JavaScript frameworks and libraries.",
    icon: "Code",
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
    icon: "Layers",
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
    icon: "Zap",
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
    icon: "Cpu",
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
    icon: "Database",
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
    icon: "Globe",
    skills: [
      { name: "Dashboards & Analytics", level: "Advanced" },
      { name: "E-commerce Platforms", level: "Advanced" },
      { name: "SaaS Applications", level: "Advanced" },
      { name: "Content Management", level: "Intermediate" },
      { name: "Social Platforms", level: "Intermediate" },
    ]
  }
];

type CategoryProps = {
  category: typeof skillCategories[0];
  index: number;
  inView: boolean;
};

const SkillCategory = ({ category, index, inView }: CategoryProps) => {
  const IconComponent = DynamicIcons[category.icon as keyof typeof DynamicIcons];
  
  return (
    <m.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full shadow-lg dark:shadow-slate-800/30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
              <IconComponent />
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
                <m.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
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
                </m.div>
                <m.span 
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                  className={`
                    text-xs font-medium
                    ${skill.level === 'Advanced' ? 'text-green-600 dark:text-green-400' : 
                      skill.level === 'Intermediate' ? 'text-blue-600 dark:text-blue-400' : 
                      'text-slate-600 dark:text-slate-400'}
                  `}
                >
                  {skill.level}
                </m.span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </m.div>
  );
};

// Dynamically import space background
const SpaceBackground = dynamic(() => import("./space-background").then(mod => mod.SpaceBackground), {
  ssr: false,
  loading: () => null
});

export function Projects() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
    idleCallback(() => setMounted(true));

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "50px",
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      setMounted(false);
      observer.disconnect();
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section 
        ref={containerRef}
        className="relative w-full py-20 md:py-32 overflow-hidden bg-slate-50 dark:bg-slate-900/50"
      >
        {mounted && <SpaceBackground />}
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCategory 
                key={category.title} 
                category={category} 
                index={index}
                inView={isInView}
              />
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}