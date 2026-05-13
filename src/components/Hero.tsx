"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />

      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-bold mb-6 relative z-10"
      >
        Rishav Mondal
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-8 relative z-10"
      >
        Machine Learning • Data Engineering • Analytics
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-black px-6 py-3 rounded-full relative z-10"
      >
        View Projects
      </motion.button>

    </section>
  );
}