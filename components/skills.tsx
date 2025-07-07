'use client';

import { motion, useInView } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { useRef, useState, useEffect } from 'react';

// Define skill type
type Skill = {
  name: string;
  level: number;
  color: string;
  icon: string;
};

// Define skill categories with enhanced data
const skills: Record<string, Skill[]> = {
  Core: [
    { name: 'HTML5', level: 95, color: 'bg-orange-500', icon: '🌐' },
    { name: 'CSS3', level: 90, color: 'bg-blue-500', icon: '🎨' },
    { name: 'JavaScript', level: 92, color: 'bg-yellow-500', icon: '⚡' },
    { name: 'TypeScript', level: 88, color: 'bg-blue-600', icon: '📝' },
  ],
  Frameworks: [
    { name: 'React', level: 94, color: 'bg-cyan-500', icon: '⚛️' },
    { name: 'Next.js', level: 90, color: 'bg-slate-900', icon: '▲' },
    { name: 'Redux', level: 85, color: 'bg-purple-600', icon: '🔄' },
    { name: 'Zustand', level: 82, color: 'bg-amber-600', icon: '🐻' },
    { name: 'React Query', level: 80, color: 'bg-rose-600', icon: '🔍' },
  ],
  UI: [
    { name: 'Tailwind CSS', level: 96, color: 'bg-sky-500', icon: '🌊' },
    { name: 'Shadcn UI', level: 88, color: 'bg-slate-700', icon: '🧩' },
    { name: 'Bootstrap 5', level: 85, color: 'bg-purple-700', icon: '🅱️' },
    { name: 'Framer Motion', level: 82, color: 'bg-pink-600', icon: '🎭' },
  ],
  'Forms & Validation': [
    { name: 'React Hook Form', level: 90, color: 'bg-pink-500', icon: '📋' },
    { name: 'Formik', level: 82, color: 'bg-teal-600', icon: '📝' },
    { name: 'Yup', level: 80, color: 'bg-emerald-600', icon: '✅' },
  ],
  APIs: [
    { name: 'Axios', level: 92, color: 'bg-violet-600', icon: '🔌' },
    { name: 'Fetch', level: 95, color: 'bg-slate-600', icon: '📡' },
    { name: 'REST', level: 90, color: 'bg-green-600', icon: '🌐' },
    { name: 'GraphQL', level: 78, color: 'bg-pink-700', icon: '📊' },
  ],
  'Dev Tools': [
    { name: 'Git', level: 88, color: 'bg-orange-600', icon: '🔄' },
    { name: 'GitHub', level: 90, color: 'bg-slate-800', icon: '🐙' },
    { name: 'CI/CD', level: 75, color: 'bg-green-700', icon: '🚀' },
    { name: 'Vercel', level: 85, color: 'bg-black', icon: '▲' },
  ],
  Testing: [
    { name: 'Jest', level: 75, color: 'bg-red-600', icon: '🧪' },
    { name: 'React Testing Library', level: 72, color: 'bg-red-500', icon: '🧪' },
    { name: 'Cypress', level: 68, color: 'bg-slate-700', icon: '🧪' },
  ],
  UX: [
    { name: 'A11y', level: 82, color: 'bg-blue-700', icon: '♿' },
    { name: 'Pixel-Perfect', level: 95, color: 'bg-indigo-600', icon: '📐' },
    { name: 'Micro-Interactions', level: 85, color: 'bg-amber-500', icon: '✨' },
  ],
};

// 3D floating skill cube component
const SkillCube = ({ icon, color }: { icon: string; color: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
        rotateY: [0, 180, 360],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
        delay: Math.random() * 2,
      }}
      className={`w-8 h-8 ${color} flex items-center justify-center rounded-lg text-white shadow-lg`}
    >
      <span className="text-sm">{icon}</span>
    </motion.div>
  );
};

const SkillCategory = ({
  category,
  skills,
  index,
}: {
  category: string;
  skills: Skill[];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="p-6 shadow-lg backdrop-blur-sm bg-white/90 dark:bg-slate-900/90 border border-slate-200/50 dark:border-slate-700/50 overflow-hidden relative">
        {/* Background gradient */}
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-blue-500 to-purple-500 dark:opacity-20" />

        <div className="space-y-5 relative z-10">
          <div className="flex items-center gap-3 border-b pb-3 border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              {category}
            </h3>

            {/* Floating icon for the category */}
            <motion.div
              className="ml-auto"
              animate={{
                y: [0, -5, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <SkillCube
                icon={skills[0].icon}
                color={skills[0].color.replace('bg-', 'bg-opacity-90 bg-')}
              />
            </motion.div>
          </div>

          <div className="space-y-4">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.1 + 0.2 }}
                className="space-y-1.5"
              >
                <div className="flex justify-between text-sm font-medium items-center">
                  <div className="flex items-center gap-2">
                    <motion.span
                      className="text-base"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.2,
                      }}
                    >
                      {skill.icon}
                    </motion.span>
                    <Badge className={`${skill.color} text-white`}>{skill.name}</Badge>
                  </div>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{
                      duration: 1,
                      delay: 0.2 + idx * 0.1,
                      ease: 'easeOut',
                      bounce: 0.2,
                    }}
                    className={`${skill.color} h-2 rounded-full relative`}
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                        repeatDelay: 1,
                        delay: idx * 0.1,
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export function Skills() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true });
  const [mounted, setMounted] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    setMounted(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="skills" className="w-full py-20 md:py-28 lg:py-36 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-100/50 dark:bg-blue-900/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.2, 0.3],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-100/40 dark:bg-purple-900/10 blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 5 }}
        />

        {/* Floating skill cubes in the background - client-side only */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-10">
            {Object.values(skills)
              .flat()
              .slice(0, 12)
              .map((skill, i) => {
                // Generate random positions that are safe
                const randomX = Math.floor(Math.random() * (windowSize.width * 0.8));
                const randomY = Math.floor(Math.random() * (windowSize.height * 0.8));

                return (
                  <motion.div
                    key={i}
                    initial={{
                      x: randomX,
                      y: randomY,
                      opacity: 0,
                    }}
                    animate={{
                      x: [randomX, randomX + Math.random() * 100 - 50],
                      y: [randomY, randomY + Math.random() * 100 - 50],
                      opacity: [0.3, 0.7, 0.3],
                      rotate: [0, 360],
                      scale: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: Math.random() * 30 + 30,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                    className="absolute"
                  >
                    <SkillCube icon={skill.icon} color={skill.color} />
                  </motion.div>
                );
              })}
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-12 text-center relative z-10"
        >
          <div className="space-y-4 max-w-3xl">
            <motion.h2
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Skills & Technologies
            </motion.h2>
            <motion.p
              className="text-lg text-slate-700 dark:text-slate-300"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              My arsenal of technologies and skills that I use to bring ideas to life.
            </motion.p>
          </div>

          <div className="w-full max-w-6xl mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillsList], index) => (
                <SkillCategory
                  key={category}
                  category={category}
                  skills={skillsList}
                  index={index}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
