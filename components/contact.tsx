'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Send,
  ExternalLink,
  CheckCircle,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
});

type FormData = {
  name: string;
  email: string;
  message: string;
};

type ContactParticle = {
  width: number;
  height: number;
  left: string;
  top: string;
  xOffset: number;
  yOffset: number;
  duration: number;
};

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [contactParticles, setContactParticles] = useState<ContactParticle[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Generate particles only on the client side
  useEffect(() => {
    const newParticles = Array(8)
      .fill(0)
      .map(() => ({
        width: Math.random() * 60 + 10,
        height: Math.random() * 60 + 10,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        xOffset: Math.random() * 100 - 50,
        yOffset: Math.random() * 100 - 50,
        duration: Math.random() * 10 + 10,
      }));

    setContactParticles(newParticles);
    setMounted(true);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(data);

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactItems = [
    {
      title: 'Email',
      value: 'ziadmostafadev@gmail.com',
      link: 'mailto:ziadmostafadev@gmail.com',
      icon: <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      bg: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      title: 'WhatsApp',
      value: '+201154790469',
      link: 'https://wa.me/201154790469',
      icon: <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />,
      bg: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      title: 'LinkedIn',
      value: 'https://www.linkedin.com/in/ziad-mostafa-2a4315179',
      link: 'https://www.linkedin.com/in/ziad-mostafa-2a4315179',
      icon: <Linkedin className="h-6 w-6 text-blue-500" />,
      bg: 'bg-slate-100 dark:bg-slate-800',
    },
    {
      title: 'GitHub',
      value: 'https://github.com/ziadmustafa1',
      link: 'https://github.com/ziadmustafa1',
      icon: <Github className="h-6 w-6" />,
      bg: 'bg-slate-100 dark:bg-slate-800',
    },
  ];

  return (
    <section
      id="contact"
      className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 blur-3xl opacity-40 dark:opacity-20"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-purple-100 to-indigo-100 dark:from-purple-900/10 dark:to-indigo-900/10 blur-3xl opacity-30 dark:opacity-15"
          animate={{
            scale: [1, 0.95, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 5 }}
        />

        {/* Floating particles - only rendered client-side */}
        {mounted &&
          contactParticles.map((particle, i) => (
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
                x: [0, particle.xOffset],
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
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="flex flex-col items-center space-y-14 text-center"
        >
          <div className="space-y-4 max-w-3xl">
            <motion.h2
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400"
              variants={itemVariants}
            >
              Get In Touch
            </motion.h2>
            <motion.p
              className="text-lg text-slate-700 dark:text-slate-300"
              variants={itemVariants}
            >
              Have a project in mind or want to discuss opportunities? I&apos;d love to hear from
              you.
            </motion.p>
          </div>

          <motion.div className="w-full max-w-5xl" variants={itemVariants}>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <Card className="overflow-hidden relative backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 bg-white/70 dark:bg-slate-900/70">
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-20 blur-xl dark:opacity-30"
                  animate={{
                    opacity: [0.2, 0.25, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
                <CardContent className="pt-6 relative z-10">
                  {isSubmitted ? (
                    <motion.div
                      className="flex flex-col items-center justify-center min-h-[360px] text-center p-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, type: 'spring' }}
                    >
                      <motion.div
                        className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6"
                        animate={{
                          scale: [1, 1.2, 1],
                          boxShadow: [
                            '0 0 0 0 rgba(74, 222, 128, 0.4)',
                            '0 0 0 20px rgba(74, 222, 128, 0)',
                            '0 0 0 0 rgba(74, 222, 128, 0)',
                          ],
                        }}
                        transition={{ duration: 2, repeat: 1 }}
                      >
                        <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                        Message Sent!
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-6">
                        Thank you for reaching out. I&apos;ll get back to you as soon as possible!
                      </p>
                      <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      <div className="space-y-2">
                        <motion.div whileTap={{ scale: 0.99 }} whileFocus={{ scale: 1.01 }}>
                          <Input
                            {...register('name')}
                            placeholder="Your Name"
                            className="border-slate-200 dark:border-slate-800 focus:border-blue-500 transition-all duration-300 bg-white dark:bg-slate-800"
                          />
                        </motion.div>
                        {errors.name && (
                          <motion.p
                            className="text-red-500 text-sm"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {errors.name.message}
                          </motion.p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <motion.div whileTap={{ scale: 0.99 }} whileFocus={{ scale: 1.01 }}>
                          <Input
                            {...register('email')}
                            placeholder="Your Email"
                            className="border-slate-200 dark:border-slate-800 focus:border-blue-500 transition-all duration-300 bg-white dark:bg-slate-800"
                          />
                        </motion.div>
                        {errors.email && (
                          <motion.p
                            className="text-red-500 text-sm"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {errors.email.message}
                          </motion.p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <motion.div whileTap={{ scale: 0.99 }} whileFocus={{ scale: 1.01 }}>
                          <Textarea
                            {...register('message')}
                            placeholder="Your Message"
                            className="min-h-[120px] border-slate-200 dark:border-slate-800 focus:border-blue-500 transition-all duration-300 bg-white dark:bg-slate-800"
                          />
                        </motion.div>
                        {errors.message && (
                          <motion.p
                            className="text-red-500 text-sm"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {errors.message.message}
                          </motion.p>
                        )}
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0 shadow-lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center">
                              <motion.div
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              />
                              Sending...
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <Send className="mr-2 h-4 w-4" /> Send Message
                            </div>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  )}
                </CardContent>
              </Card>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactItems.map((item, index) => (
                    <motion.a
                      key={item.title}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-xl transition-all duration-300 hover:shadow-md bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`${item.bg} p-3 rounded-lg mr-4`}>{item.icon}</div>
                      <div className="flex-grow">
                        <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          {item.title}
                        </h4>
                        <p className="font-medium text-slate-900 dark:text-white">{item.value}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </motion.a>
                  ))}
                </div>

                <motion.div
                  className="mt-8 p-5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800 border border-slate-200/50 dark:border-slate-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">Response Time</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    I typically respond within 24 hours during business days.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
