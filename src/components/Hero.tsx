"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-100px] w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-3xl" />

      {/* Small Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-6"
        >
        Applied AI • Machine Learning • Data Engineering
      </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-none mb-8"
        >
          Rishav
          <br />
          Mondal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl leading-8 mb-10"
          >
          Building scalable AI systems, intelligent analytics platforms,
          and machine learning workflows across research and real-world applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center"
        >

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="bg-white text-black px-8 py-4 rounded-full font-medium"
          >
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="bg-white text-black px-8 py-4 rounded-full font-medium"
          >
            Contact Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Rishav_Mondal_Resume.pdf"
            target="_blank"
            className="bg-white text-black px-8 py-4 rounded-full font-medium"
          >
            Resume
          </motion.a>
        </motion.div>

      </motion.div>

    </section>
  );
}