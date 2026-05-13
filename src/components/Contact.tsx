"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >

      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl" />

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-bold mb-6 relative z-10"
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-zinc-400 text-lg mb-10 max-w-xl relative z-10"
      >
        Interested in AI, machine learning, data engineering,
        or building impactful products together? Let’s talk.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="flex gap-6 relative z-10"
      >

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://github.com/RishavMondal"
          target="_blank"
          className="bg-white text-black px-6 py-3 rounded-full"
        >
          GitHub
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://linkedin.com"
          target="_blank"
          className="border border-white/20 px-6 py-3 rounded-full"
        >
          LinkedIn
        </motion.a>

      </motion.div>

    </section>
  );
}