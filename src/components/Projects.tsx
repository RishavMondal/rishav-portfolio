"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Optical Music Recognition",
    description:
      "Deep learning research project focused on handwritten music manuscript recognition and segmentation, published by ACM.",
    gradient:
      "from-purple-500/20 to-blue-500/20",
  },

  {
    title: "Reverse ATS System",
    description:
      "AI-powered resume analysis platform that evaluates ATS compatibility and improves resume optimization using NLP techniques.",
    gradient:
      "from-green-500/20 to-cyan-500/20",
  },

  {
    title: "MediBot",
    description:
      "Intelligent healthcare assistant platform integrating AI-driven workflows, conversational interfaces, and medical support tools.",
    gradient:
      "from-pink-500/20 to-orange-500/20",
  },

  {
    title: "Marketing Analytics",
    description:
      "Customer behavior and campaign analytics project involving A/B testing, engagement optimization, and ROI-focused insights.",
    gradient:
      "from-yellow-500/20 to-red-500/20",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-8 md:px-20 py-24"
    >

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold mb-16"
      >
        Featured Projects
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          staggerChildren: 0.15,
        }}
        className="grid md:grid-cols-2 gap-8"
      >

        {projects.map((project, index) => (

          <motion.div
            key={index}
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}

            whileHover={{
              y: -10,
            }}

            transition={{
              duration: 0.4,
            }}

            className="
              group
              relative
              border
              border-white/10
              bg-white/5
              rounded-3xl
              p-8
              overflow-hidden
              transition-all
              hover:border-white/20
              hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]
            "
          >

            {/* Background Glow */}
            <div
              className={`
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
                bg-gradient-to-br
                ${project.gradient}
              `}
            />

            {/* Image Area */}
            <div className="relative z-10 h-52 rounded-2xl bg-zinc-900 mb-6 overflow-hidden">

              <div
                className={`
                  w-full
                  h-full
                  bg-gradient-to-br
                  ${project.gradient}
                  group-hover:scale-110
                  transition-transform
                  duration-700
                `}
              />

            </div>

            {/* Content */}
            <div className="relative z-10">

              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-zinc-400 leading-7">
                {project.description}
              </p>

            </div>

          </motion.div>

        ))}

      </motion.div>

    </section>
  );
}