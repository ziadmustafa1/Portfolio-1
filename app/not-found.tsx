"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [backgroundElements, setBackgroundElements] = useState<Array<{
    width: number;
    height: number;
    left: string;
    top: string;
    duration: number;
  }>>([]);

  // Generate background elements only on the client side
  useEffect(() => {
    const elements = Array(6).fill(0).map(() => ({
      width: Math.random() * 200 + 50,
      height: Math.random() * 200 + 50,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 5 + 5
    }));
    
    setBackgroundElements(elements);
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="space-y-8 max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <motion.h1 
            className="text-8xl font-extrabold text-blue-600 dark:text-blue-500"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2
            }}
          >
            404
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold tracking-tight mb-4">Page not found</h2>
            <p className="text-muted-foreground mb-8">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button asChild>
            <Link href="/" className="flex items-center">
              <Home className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </motion.div>
        
        {/* Animated background elements - only rendered client-side */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {mounted && backgroundElements.map((element, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500/10 dark:bg-blue-500/5"
              style={{
                width: element.width,
                height: element.height,
                left: element.left,
                top: element.top,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 