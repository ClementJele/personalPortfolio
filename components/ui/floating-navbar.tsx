"use client";
import React, { JSX, useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import LogoSVG3 from "@/images/logo.png";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.link.replace("#", ""));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && 
          !(event.target as Element).closest('.hamburger-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Change navbar size based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      if (current < 0.05) {
        setVisible(true); // Full width at the top
      } else {
        setVisible(false); // Smaller width when scrolling
      }
    }
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Simple animation variants
  const navVariants = {
    initial: { opacity: 1, y: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      width: visible ? "80%" : "fit-content" 
    },
    exit: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={navVariants}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex fixed top-1 md:top-2 inset-x-0 mx-6 justify-center border border-transparent dark:border-white/[0.2] dark:bg-[#080a23] bg-gray-700 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[7000] px-8 py-2 items-center justify-between gap-1 rounded-md",
          className
        )}
      >
        {/* Logo section - aligned to the left */}
        <div className="flex-none">
          <Link href="/#home">
            <Image
              src={LogoSVG3}
              height={70}
              width={70}
              alt="logo"
              className="rounded-full bg-clip-content md:hidden"
            />
          </Link>
        </div>

        <div className="max-sm:hidden sm:block mr-2">
          <Link href="/#home">
            <Image
              src={LogoSVG3}
              height={70}
              width={70}
              alt="logo"
              className="rounded-full bg-clip-content"
            />
          </Link>
        </div>
        
        {/* Navigation links - centered */}
        <div className="hidden sm:flex items-center justify-center gap-6 flex-grow">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-white dark:hover:text-neutral-300 hover:text-neutral-500",
                activeSection === navItem.link.replace("#", "")
                  ? "text-blue-500 dark:text-blue-400"
                  : ""
              )}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(navItem.link.replace("#", ""));
              }}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-sm">{navItem.name}</span>
            </Link>
          ))}
        </div>
        
        {/* Right side content - Contact button or hamburger */}
        <div className="flex-none flex items-center">
          {/* Contacts Button - visible on larger screens */}
          <Link href="#services">
            <button
              className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full hidden sm:block ml-2"
            >
              <span className="text-gray-200">Contacts</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </button>
          </Link>
          
          {/* Hamburger Menu - visible on small screens */}
          <button
            className="sm:hidden p-2 text-gray-200 dark:text-white bg-gray-900 rounded-md z-[6000] hamburger-button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Dropdown Menu for Small Devices - Using regular div instead of motion.div */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed top-28 inset-x-0 mx-4 bg-white dark:bg-[#12103e] shadow-lg rounded-md z-[8000] sm:hidden p-2"
          style={{ 
            animation: isMenuOpen ? "fadeIn 0.5s ease forwards" : "none" 
          }}
        >
          <style jsx>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          <div className="flex flex-col p-4">
            {navItems.map((navItem, idx) => (
              <a
                key={`dropdown-link-${idx}`}
                href={navItem.link}
                className={cn(
                  "py-2 px-4 text-neutral-600 dark:text-neutral-50 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md",
                  activeSection === navItem.link.replace("#", "")
                    ? "text-blue-500 dark:text-blue-400"
                    : ""
                )}
                onClick={() => {
                  // e.preventDefault();
                  scrollToSection(navItem.link.replace("#", ""));
                }}
              >
                {navItem.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingNav;