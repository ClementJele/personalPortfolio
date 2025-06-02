"use client";
import { motion } from "framer-motion";
import { FiDownload, FiAward, FiBriefcase, FiCode } from "react-icons/fi";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Image from "next/image";
import Portfolio from "@/app/Images/Portfolio.png";

const AboutPage = () => {
  // Stats data
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "∞", label: "Cups of Coffee" },
  ];

  // Timeline data
  const timeline = [
    {
      year: "2024 - Present",
      title: "Started A Software Development Company",
      company: "OpenINFINITY",
      description:
        "Began putting all skills to use with real clients to drive real results.",
    },
    {
      year: "2023 - 2024",
      title: "Built Projects Deployable and considered SaaS",
      company: "Self Learning",
      description:
        "Developed web applications and design systems that follow modern standards.",
    },
    {
      year: "2022 - 2023",
      title: "Built Personal Learning Projects",
      company: "Self Learning",
      description:
        "Built MVP products and contributed to all stages of development lifecycle.",
    },
  ];

  return (
    <section className="relative bg-white dark:bg-gray-950 py-20 px-4 sm:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600" />
      <div className="absolute top-20 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Crafting Digital Excellence
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I bridge the gap between stunning design and robust engineering to
            create products that users love.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Photo & Quick Facts */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="relative group">
                <Image
                  width={300}
                  //   height={700}
                  src={Portfolio}
                  alt="Clement Jele"
                  className="w-full h-auto rounded-2xl shadow-xl border-4 border-white dark:border-gray-800 transform group-hover:-rotate-1 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-2xl border-4 border-transparent group-hover:border-blue-400/30 transition-all duration-500" />
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl text-center border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow"
                >
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Download Resume */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="/Clement_Jele_CV.pdf"
                download="Clement_Jele_CV.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                <FiDownload />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Middle Column - Bio & Skills */}
          <div className="lg:col-span-2 space-y-12">
            {/* Personal Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FiAward className="text-blue-500" />
                <span>My Journey</span>
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  With over 2 years in the tech industry, I&apos;ve evolved from
                  a curious computer science student to a seasoned full-stack
                  developer specializing in modern web technologies.
                </p>
                <p>
                  My passion lies in solving complex problems through elegant
                  code and intuitive design. I thrive in environments where I
                  can bridge the gap between technical implementation and user
                  experience.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring the
                  latest advancements in AI and web development.
                </p>
              </div>
            </motion.div>

            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FiCode className="text-blue-500" />
                <span>Technical Arsenal</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Core Skills */}
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <FaReact className="text-blue-500 text-xl" />
                    <span className="font-medium">React Ecosystem</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Next.js, Redux, React Query, Framer Motion
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <SiTypescript className="text-blue-600 text-xl" />
                    <span className="font-medium">TypeScript</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Strong typing, advanced patterns, full-stack TS
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <FaNodeJs className="text-green-500 text-xl" />
                    <span className="font-medium">Node.js</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Express, NestJS, REST & GraphQL APIs
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <SiNextdotjs className="text-black dark:text-white text-xl" />
                    <span className="font-medium">Next.js</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    SSR, ISR, Route Handlers, App Router
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <SiTailwindcss className="text-cyan-500 text-xl" />
                    <span className="font-medium">Tailwind CSS</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Utility-first, responsive design systems
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <FaFigma className="text-purple-500 text-xl" />
                    <span className="font-medium">UI/UX Design</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Prototyping, design systems, accessibility
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Professional Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FiBriefcase className="text-blue-500" />
                <span>Professional Timeline</span>
              </h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:to-purple-600 before:dark:from-blue-400 before:dark:to-purple-500 md:before:ml-7">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-10 md:pl-12 group">
                    <div className="absolute left-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 top-1 z-10" />
                    <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                      <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                        {item.company}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
