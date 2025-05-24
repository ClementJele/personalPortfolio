"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiGitPullRequest,
} from "react-icons/fi";
import { useState } from "react";

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "PARTNER",
      content:
        "Clement delivered our SaaS platform 3 weeks ahead of schedule while implementing performance optimizations that reduced our AWS costs by 40%. His architectural decisions continue to pay dividends as we scale.",
      image: "/client1.jpg",
      logo: "/techinnovate-logo.svg",
      rating: 5,
    },
    // {
    //   id: 2,
    //   name: "Michael Chen",
    //   role: "Lead Product Manager at Finova",
    //   content:
    //     "Working with Clement was a masterclass in modern web development. He transformed our legacy React codebase into a TypeScript-powered Next.js application with 98% Lighthouse scores across all pages.",
    //   image: "/client2.jpg",
    //   logo: "/finova-logo.svg",
    //   rating: 5,
    // },
    // {
    //   id: 3,
    //   name: "David Okafor",
    //   role: "Founder at StartupX",
    //   content:
    //     "As a non-technical founder, I needed someone who could own the entire stack. Clement built our MVP in record time while documenting every decision - making it easy for our team to take over later.",
    //   image: "/client3.jpg",
    //   logo: "/startupx-logo.svg",
    //   rating: 5,
    // },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-20 px-4 sm:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      <div className="absolute top-20 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Professional Endorsements
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            What industry leaders say about working with me
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-200 dark:border-gray-800"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Client Info */}
                <div className="flex-shrink-0">
                  <div className="relative group">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                    />
                    <div className="absolute -bottom-2 right-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md">
                      <img
                        src={testimonials[currentIndex].logo}
                        alt="Company logo"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <div className="mt-6 text-center md:text-left">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonials[currentIndex].role}
                    </p>
                    <div className="flex justify-center md:justify-start mt-2">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 relative">
                  <FiGitPullRequest className="absolute -top-4 left-0 text-blue-500/20 dark:text-blue-400/20 text-6xl" />
                  <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 relative z-10">
                    &quot;{testimonials[currentIndex].content}&quot;
                  </blockquote>
                  <div className="mt-8 flex justify-end">
                    <div className="flex items-center gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            currentIndex === index
                              ? "bg-blue-600 w-6"
                              : "bg-gray-300 dark:bg-gray-700"
                          }`}
                          aria-label={`View testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="text-gray-800 dark:text-gray-200" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="text-gray-800 dark:text-gray-200" />
          </button>
        </div>

        {/* Video Testimonials Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            Video Endorsements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden aspect-video relative group">
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-bold">
                  Mark Williams, Engineering Director
                </h3>
                <p className="text-blue-200">
                  &quot;Consistently exceeded expectations&quot;
                </p>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden aspect-video relative group">
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-bold">
                  Lisa Park, Product Lead
                </h3>
                <p className="text-blue-200">
                  &quot;Transformed our development workflow&quot;
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ready to Experience This Level of Quality?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how I can bring this same expertise to your
              project or team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
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

export default TestimonialsPage;
