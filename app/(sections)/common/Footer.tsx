"use client";
import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center">
      <motion.p
        className="text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        © {new Date().getFullYear()} Clement. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
