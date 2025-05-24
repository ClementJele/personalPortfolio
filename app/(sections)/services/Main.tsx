"use client";
import { motion } from "framer-motion";
import {
  FiCode,
  FiLayers,
  FiSmartphone,
  FiServer,
  FiBarChart2,
  FiDatabase,
} from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";

const ServicesPage = () => {
  const services = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Custom Web Development",
      description:
        "Tailored web solutions built with modern technologies like React, Next.js, and TypeScript for optimal performance and scalability.",
      features: [
        "Responsive, mobile-first development",
        "SEO-optimized architecture",
        "Accessibility compliance (WCAG 2.1)",
        "Cross-browser compatibility",
      ],
      technologies: [
        <FaReact key="react" />,
        <SiNextdotjs key="next" />,
        <SiTypescript key="ts" />,
      ],
      price: "From R10,000",
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: "UI/UX Design Systems",
      description:
        "Comprehensive design systems that ensure visual consistency and superior user experiences across all digital products.",
      features: [
        "Figma component libraries",
        "Design token implementation",
        "User flow optimization",
        "Interactive prototyping",
      ],
      technologies: [<SiFigma key="figma" />, <SiTailwindcss key="tailwind" />],
      price: "From R7,500",
    },
    {
      icon: <FiServer className="w-6 h-6" />,
      title: "Backend & API Development",
      description:
        "Robust server-side solutions and efficient APIs that power modern web applications with Node.js ecosystem.",
      features: [
        "REST & GraphQL API design",
        "Database architecture",
        "Authentication systems",
        "Cloud deployment",
      ],
      technologies: [<FaNodeJs key="node" />, <FiDatabase key="db" />],
      price: "From R8,500",
    },
    {
      icon: <FiSmartphone className="w-6 h-6" />,
      title: "Progressive Web Apps",
      description:
        "Native-like web applications with offline capabilities, push notifications, and installable features.",
      features: [
        "Service worker implementation",
        "App-like navigation",
        "Offline data sync",
        "Performance optimization",
      ],
      technologies: [<FaReact key="react" />, <SiNextdotjs key="next" />],
      price: "From R15,000",
    },
    {
      icon: <FiBarChart2 className="w-6 h-6" />,
      title: "Performance Optimization",
      description:
        "Comprehensive audits and enhancements to maximize your application's speed and efficiency.",
      features: [
        "Lighthouse score improvement",
        "Bundle size reduction",
        "Render performance",
        "CDN configuration",
      ],
      technologies: [<FaReact key="react" />, <SiNextdotjs key="next" />],
      price: "From R6,500",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-20 px-4 sm:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
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
            Full-Cycle Development Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From concept to deployment, I deliver comprehensive solutions
            tailored to your business objectives.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-5">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
                  <div className="flex space-x-2">
                    {service.technologies.map((tech, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {service.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how I can help bring your vision to life with
              custom solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Get in Touch
              </a>
              <a
                href="/projects"
                className="px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                View My Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
