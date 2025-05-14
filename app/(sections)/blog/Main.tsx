"use client";
import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiTag, FiArrowRight } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Optimizing Next.js Performance: Advanced Caching Strategies",
      excerpt:
        "Learn how to leverage ISR, SWR, and Edge Functions to make your Next.js apps blazing fast.",
      date: "May 15, 2024",
      readTime: "8 min read",
      tags: ["Next.js", "Performance", "React"],
      icon: <SiNextdotjs className="text-black dark:text-white" />,
      featured: true,
    },
    {
      id: 2,
      title: "State Management in 2024: Beyond Redux",
      excerpt:
        "Comparing Zustand, Jotai, and React Query for modern state management solutions.",
      date: "April 28, 2024",
      readTime: "6 min read",
      tags: ["React", "State Management", "Frontend"],
      icon: <FaReact className="text-blue-500" />,
      featured: true,
    },
    {
      id: 3,
      title: "Building Scalable APIs with Node.js & GraphQL",
      excerpt:
        "A deep dive into schema stitching, caching, and security best practices.",
      date: "April 10, 2024",
      readTime: "10 min read",
      tags: ["Node.js", "GraphQL", "Backend"],
      icon: <FaNodeJs className="text-green-500" />,
      featured: false,
    },
    {
      id: 4,
      title: "Why TypeScript is Taking Over Frontend Development",
      excerpt:
        "How strict typing improves maintainability and reduces bugs in large-scale apps.",
      date: "March 22, 2024",
      readTime: "5 min read",
      tags: ["TypeScript", "Frontend", "Best Practices"],
      icon: <SiTypescript className="text-blue-600" />,
      featured: false,
    },
    {
      id: 5,
      title: "Tailwind CSS vs. Styled Components: A 2024 Comparison",
      excerpt: "When to use utility-first CSS vs. CSS-in-JS for your projects.",
      date: "March 5, 2024",
      readTime: "7 min read",
      tags: ["CSS", "Tailwind", "Frontend"],
      icon: <SiTailwindcss className="text-cyan-500" />,
      featured: false,
    },
    {
      id: 6,
      title: "The Future of Web Development: WASM, Edge Computing, and AI",
      excerpt:
        "Exploring emerging trends that will shape the next decade of web apps.",
      date: "February 18, 2024",
      readTime: "12 min read",
      tags: ["WebAssembly", "AI", "Trends"],
      icon: <FiTag className="text-purple-500" />,
      featured: true,
    },
  ];

  return (
    <section className="relative bg-white dark:bg-gray-950 py-20 px-4 sm:px-8 overflow-hidden">
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
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Insights & Tutorials
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Sharing knowledge on modern web development, performance, and
            emerging tech trends.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm">
              Featured
            </span>
            <span>Latest Deep Dives</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="p-6 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                      {post.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <FiCalendar size={14} /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiClock size={14} /> {post.readTime}
                        </span>
                      </div>
                      <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1">
                        Read <FiArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* All Blog Posts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8">All Articles</h2>
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ x: 5 }}
                className="group relative bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-16 h-16 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                    {post.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <FiCalendar size={14} /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiClock size={14} /> {post.readTime}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="self-start md:self-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1 mt-4 md:mt-0">
                    Read <FiArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Want More Technical Insights?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
              Subscribe to my newsletter for exclusive deep dives, tutorials,
              and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-6 py-3 rounded-full text-gray-900 flex-1 max-w-md"
              />
              <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPage;
