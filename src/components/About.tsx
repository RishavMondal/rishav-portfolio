"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-8 md:px-20"
    >
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-5xl font-bold mb-8"
      >
        About Me
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-zinc-400 max-w-3xl text-lg leading-8 mb-12"
      >
        I work across machine learning, data engineering, and analytics,
        building scalable systems that combine AI with real-world impact.
        My interests include deep learning, cloud data infrastructure,
        intelligent automation, and data-driven decision systems.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6">

        <motion.div
          whileHover={{ y: -8 }}
          className="border border-white/10 bg-white/5 rounded-3xl p-6"
        >
          <h3 className="text-3xl font-bold mb-2">60GB+</h3>
          <p className="text-zinc-400">
            Archival ML dataset processed
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          className="border border-white/10 bg-white/5 rounded-3xl p-6"
        >
          <h3 className="text-3xl font-bold mb-2">ACM</h3>
          <p className="text-zinc-400">
            Published research conference
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          className="border border-white/10 bg-white/5 rounded-3xl p-6"
        >
          <h3 className="text-3xl font-bold mb-2">AI + Data</h3>
          <p className="text-zinc-400">
            Engineering and analytics systems
          </p>
        </motion.div>

      </div>
    </section>
  );
}