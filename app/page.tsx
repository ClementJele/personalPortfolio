"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={ref}
      className="relative min-h-screen overflow-hidden p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100"
    >
      {/* Animated background elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              background: i % 2 === 0 ? "#3b82f6" : "#6366f1",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      {/* Header */}

      {/* Hero Section */}
      <motion.main
        className="relative z-10 max-w-6xl mx-auto grid gap-12 text-center items-center justify-items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="grid gap-8">
          <motion.p
            className="text-lg text-blue-600 dark:text-blue-400 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="inline-block animate-float">✨</span> Satisfactory
            Web Experience With Clement
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Delivering{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Enterprise-Grade</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-2 bg-blue-400/30 dark:bg-blue-600/30"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "backOut" }}
              />
            </span>{" "}
            <span className="text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-500/20 to-purple-500/20 bg-[length:100%_40%] bg-no-repeat bg-bottom">
              Seamless Experiences
            </span>{" "}
            for Your Ideas
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Hi! I&apos;m Clement. A Self-Driven Full Stack Developer creating
            performant, accessible, and visually stunning web experiences.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/20"
          >
            View My Work{" "}
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-full transition-all hover:bg-gray-100 dark:hover:bg-gray-800/50"
          >
            Let&apos;s Talk
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="https://github.com"
            className="p-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50 hover:bg-gray-300/50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <FiGithub className="text-gray-700 dark:text-gray-300" />
          </a>
          <a
            href="https://linkedin.com"
            className="p-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50 hover:bg-gray-300/50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <FiLinkedin className="text-gray-700 dark:text-gray-300" />
          </a>
          <a
            href="https://twitter.com"
            className="p-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50 hover:bg-gray-300/50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <FiTwitter className="text-gray-700 dark:text-gray-300" />
          </a>
        </motion.div>
      </motion.main>

      {/* Services CTA */}
      <motion.section
        className="relative z-10 w-full max-w-4xl mx-auto mt-32 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <div className="grid gap-6 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Have a Project Idea?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I specialize in creating high-performance, visually stunning
            websites that drive real business results.
          </p>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              Get in Touch
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      {/* <motion.footer 
        className="relative z-10 w-full text-center mt-32 text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        © {new Date().getFullYear()} Clement. All rights reserved.
      </motion.footer> */}
    </div>
  );
}
