"use client";
import React, { JSX, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
// import ContactPopup from "../contantPopup";
import Image from "next/image";
import LogoSVG3 from "@/images/logo.png"

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
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu visibility
  const [activeSection, setActiveSection] = useState<string | null>(null);

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

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
    }
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

  // const openPopup = () => setIsPopupOpen(true);
  // const closePopup = () => setIsPopupOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            width: visible ? "100%" : "fit-content",
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex fixed top-1 md:top-2 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] dark:bg-[#080a23] bg-gray-700 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[7000] px-8 py-2 items-center justify-between gap-1 rounded-md",
            className
          )}
        >
          {/* Logo section - aligned to the left */}
          <div className="flex-none">
            {/* <h1 className="text-left text-4xl font-bold font-sans mr-2 md:hidden  bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">
              PIN
            </h1> */}
            <Link
            href={ "/#home" }
            
            >
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
            <Link
            href={ "/#home" }
            
            >
              <Image
              src={LogoSVG3}
              height={70}
              width={70}
              alt="logo"
              className="rounded-full bg-clip-content "
            />
            </Link>
            {/* <Image
              src={LogoSVG}
              height={70}
              width={70}
              alt="logo"
              className="rounded-full bg-orange-600"
            /> */}
          </div>
          
          {/* Navigation links - centered */}
          <div className="hidden sm:flex items-center justify-center gap-6 flex-grow">
             {/*eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-white dark:hover:text-neutral-300 hover:text-neutral-500",
                  activeSection === navItem.link.replace("#", "")
                    ? "text-blue-500 dark:text-blue-400"
                    : ""
                )}
                onClick={() => {
                  // e.preventDefault();
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
                // onClick={openPopup}
                
                
              >
                <span className="text-gray-200">Contacts</span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
              </button>
            </Link>
           
            
            {/* Hamburger Menu - visible on small screens */}
            <button
              className="sm:hidden p-2 text-gray-200  dark:text-white bg-gray-900 rounded-md z-[6000]"
              onClick={toggleMenu}
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dropdown Menu for Small Devices */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-18 inset-x-0 mx-4 bg-white dark:bg-gray-600 shadow-lg rounded-md z-[6000] sm:hidden px-2"
          >
            <div className="flex flex-col p-4">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`dropdown-link=${idx}`}
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
                    setIsMenuOpen(false); 
                  }}
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Popup */}
      {/* <ContactPopup isOpen={isPopupOpen} onClose={closePopup} /> */}
    </>
  );
};

export default FloatingNav;