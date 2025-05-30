"use client";
import { projects } from "@/data";

type Project = {
  id: string;
  title: string;
  des: string;
  image?: string;
  link?: string;
  github?: string;
  iconLists?: string[];
};
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Placeholder from "@/public/placeholder.png";

import { useState, useEffect } from "react";

// Using dynamic import for the image to reduce initial load time
// import dynamic from "next/dynamic";
import { Tilt } from "react-tilt";

const RecentProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });
  const [isClient, setIsClient] = useState(false);
  const [projectsToShow, setProjectsToShow] = useState<Project[]>([]);

  // Handle client-side rendering
  useEffect(() => {
    setIsClient(true);

    // Lazy load projects data
    const loadProjects = () => {
      // Start with just 4 projects or less for initial render
      setProjectsToShow(
        projects.slice(0, Math.min(4, projects.length)).map((project) => ({
          ...project,
          id: project.id.toString(),
        }))
      );

      // Load the rest after initial render
      if (projects.length > 4) {
        setTimeout(() => {
          return setProjectsToShow(
            projects.map((project) => ({
              ...project,
              id: project.id.toString(),
            }))
          );
        }, 300);
      }
    };

    loadProjects();
  }, []);

  // Memoized particle background component to reduce re-renders
  const ParticleBackground = () => {
    // Pre-calculate random values to avoid recalculations during render
    const particles = [...Array(10)].map((_, i) => ({
      width: Math.random() * 10 + 5,
      height: Math.random() * 10 + 5,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      xMovement: Math.random() * 200 - 100,
      yMovement: Math.random() * 200 - 100,
      duration: Math.random() * 10 + 10,
      color: i % 2 === 0 ? "#5a7ef3" : "#3716f2",
    }));

    return (
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
        {isClient &&
          particles.map((particle, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, particle.xMovement],
                y: [0, particle.yMovement],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute rounded-full"
              style={{
                width: particle.width,
                height: particle.height,
                background: particle.color,
                left: particle.left,
                top: particle.top,
              }}
            />
          ))}
      </div>
    );
  };

  // Tech stack pill component
  // const TechPill = ({ tech }) => (
  //   <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-blue-300">
  //     {tech}
  //   </span>
  // );

  const renderProjects = isInView || isClient;

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-20 px-4 sm:px-8"
      id="projects"
    >
      {isClient && <ParticleBackground />}

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#5a7ef3] to-[#3716f2] bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Crafting digital experiences that merge innovation with purpose
        </p>
      </motion.div>

      {/* Projects grid */}
      {renderProjects && (
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projectsToShow.map((project, index) => (
            <Tilt
              key={project.id}
              options={{
                max: 10,
                scale: 1.03,
                glare: false, // Removed glare effect for better performance
              }}
              className="tilt-element"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative h-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Project image with lazy loading */}
                <div className="h-48 overflow-hidden relative">
                  <Image
                    loading="lazy"
                    src={Placeholder}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={500}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Project content */}
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      {project.iconLists?.length
                        ? `${project.iconLists.length} technologies`
                        : "Featured"}
                    </span>
                  </div>

                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    {project.des}
                  </p>

                  {/* {project.iconLists && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.iconLists.slice(0, 5).map((icon, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
                        >
                          <Image
                            loading="lazy"
                            src={icon}
                            alt="tech icon"
                            className="w-4 h-4 object-contain"
                            width={20}
                            height={20}
                          />
                        </div>
                      ))}
                      {project.iconLists.length > 5 && (
                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            +{project.iconLists.length - 5}
                          </span>
                        </div>
                      )}
                    </div>
                  )} */}

                  {/* Project links with simplified animations */}
                  <div className="mt-6 flex gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all opacity-90 hover:opacity-100"
                      >
                        <FiExternalLink />
                        {project.link.includes("github")
                          ? "View Code"
                          : "Live Demo"}
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                      >
                        <FiGithub />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      )}

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Like what you see? Let&apos;s build something amazing together.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#5a7ef3] to-[#3716f2] text-white rounded-full font-medium hover:shadow-lg transition-all hover:scale-105"
        >
          Start a Project
        </a>
      </motion.div>
    </section>
  );
};

export default RecentProjects;
