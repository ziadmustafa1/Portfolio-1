"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { OptimizedImage } from "@/components/ui/optimized-image";

// Dynamically import icons with loading state
const DynamicIcons = {
  Github: dynamic(() => import("lucide-react").then(mod => mod.Github), { 
    ssr: false,
    loading: () => <div className="w-5 h-5 bg-white/20 rounded-full" />
  }),
  Linkedin: dynamic(() => import("lucide-react").then(mod => mod.Linkedin), { 
    ssr: false,
    loading: () => <div className="w-5 h-5 bg-white/20 rounded-full" />
  }),
  Download: dynamic(() => import("lucide-react").then(mod => mod.Download), { 
    ssr: false,
    loading: () => <div className="w-5 h-5 bg-white/20 rounded-full" />
  }),
  Send: dynamic(() => import("lucide-react").then(mod => mod.Send), { 
    ssr: false,
    loading: () => <div className="w-5 h-5 bg-white/20 rounded-full" />
  }),
  Mail: dynamic(() => import("lucide-react").then(mod => mod.Mail), {
    ssr: false,
    loading: () => <div className="w-5 h-5 bg-white/20 rounded-full" />
  }),
  MapPin: dynamic(() => import("lucide-react").then(mod => mod.MapPin), {
    ssr: false,
    loading: () => <div className="w-5 h-5 bg-white/20 rounded-full" />
  })
};

// Separate background animations into a dynamic component
const BackgroundAnimations = dynamic(() => import("./background-animations").then(mod => mod.BackgroundAnimations), {
  ssr: false,
  loading: () => null
});

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
    idleCallback(() => setMounted(true));
    return () => setMounted(false);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative w-full min-h-screen">
        {/* Cover Image / Background */}
        <div className="absolute inset-0 h-[40vh] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          {mounted && <BackgroundAnimations />}
        </div>

        {/* Profile Content */}
        <div className="relative pt-[25vh]">
          <div className="container mx-auto px-4">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 dark:border-slate-700/30"
            >
              {/* Profile Header */}
              <div className="px-6 pt-20 pb-6 md:px-8 relative">
                {/* Profile Picture */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0">
                  <m.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-32 h-32 md:w-40 md:h-40"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 p-1">
                      <div className="rounded-full overflow-hidden p-2">
                        <OptimizedImage
                          alt="Ziad Mostafa"
                          className="rounded-full object-cover p-1"
                          src="/file.enc"
                          fill
                          sizes="(max-width: 768px) 128px, 160px"
                          priority
                          quality={90}
                        />
                      </div>
                    </div>
                    {/* Online Status Indicator */}
                    <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full ring-2 ring-white dark:ring-slate-900" />
                  </m.div>
                </div>

                {/* Profile Info */}
                <div className="md:ml-44">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="text-center md:text-left">
                      <m.h1 
                        className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        Ziad Mostafa
                      </m.h1>
                      <m.p 
                        className="text-slate-600 dark:text-slate-400 mt-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        Front-End Developer
                      </m.p>
                      <m.div 
                        className="flex items-center justify-center md:justify-start gap-2 mt-2 text-sm text-slate-500 dark:text-slate-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {mounted && <DynamicIcons.MapPin className="w-4 h-4" />}
                        <span>Egypt</span>
                      </m.div>
                    </div>

                    {/* Action Buttons */}
                    <m.div 
                      className="flex flex-wrap justify-center md:justify-end gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button 
                        asChild
                        size="lg"
                        className="shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                      >
                        <Link href="#contact">
                          {mounted && <DynamicIcons.Send className="mr-2 h-4 w-4" />}
                          Contact Me
                        </Link>
                      </Button>
                      <Button 
                        variant="outline"
                        size="lg"
                        asChild
                        className="shadow-lg hover:shadow-lg hover:shadow-indigo-500/10 dark:border-indigo-800/50 hover:border-indigo-500 dark:hover:border-indigo-600"
                      >
                        <a href="/Ziad-Mostafa-Front-End-Developer.pdf" target="_blank" download>
                          {mounted && <DynamicIcons.Download className="mr-2 h-4 w-4" />}
                          Download CV
                        </a>
                      </Button>
                    </m.div>
                  </div>

                  {/* Stats Section */}
                  <m.div 
                    className="grid grid-cols-3 gap-4 mt-6 py-4 border-t border-b border-slate-200 dark:border-slate-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Projects</div>
                    </div>
                    <div className="text-center border-x border-slate-200 dark:border-slate-800">
                      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">2+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">20+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Skills</div>
                    </div>
                  </m.div>

                  {/* Social Links */}
                  <m.div 
                    className="flex justify-center md:justify-start gap-3 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <m.a
                      href="https://github.com/ziadmustafa1"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all duration-300"
                    >
                      {mounted && (
                        <>
                          <DynamicIcons.Github className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
                            GitHub
                          </span>
                        </>
                      )}
                    </m.a>
                    <m.a
                      href="https://www.linkedin.com/in/ziad-mostafa-2a4315179"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all duration-300"
                    >
                      {mounted && (
                        <>
                          <DynamicIcons.Linkedin className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
                            LinkedIn
                          </span>
                        </>
                      )}
                    </m.a>
                    <m.a
                      href="mailto:ziadmostafadev@gmail.com"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all duration-300"
                    >
                      {mounted && (
                        <>
                          <DynamicIcons.Mail className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
                            Email
                          </span>
                        </>
                      )}
                    </m.a>
                  </m.div>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}