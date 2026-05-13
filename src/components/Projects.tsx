"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Optical Music Recognition",

    description:
      "ACM-published deep learning research system for handwritten opera manuscript recognition using 60GB+ archival image datasets and segmentation models.",

    gradient:
      "from-purple-500/20 to-blue-500/20",
  },

  {
    title: "Reverse ATS System",

    description:
      "AI-powered resume optimization platform using NLP and ATS-based scoring to improve resume targeting and job application effectiveness.",

    gradient:
      "from-green-500/20 to-cyan-500/20",
  },

  {
    title: "MediBot AI Platform",

    description:
      "Healthcare-focused AI platform integrating conversational workflows, intelligent assistance, and scalable backend-driven medical support systems.",

    gradient:
      "from-pink-500/20 to-orange-500/20",
  },

  {
    title: "Marketing Analytics Engine",

    description:
      "Customer behavior analytics and experimentation system involving A/B testing, campaign optimization, engagement analysis, and ROI-focused insights.",

    gradient:
      "from-yellow-500/20 to-red-500/20",
  },

  {
    title: "Credit Card Fraud Detection",

    description:
      "Graph-based fraud detection system using Neo4j, machine learning, and anomaly detection techniques to identify suspicious transaction behavior.",

    gradient:
      "from-indigo-500/20 to-violet-500/20",
  },

  {
    title: "Azure Data Engineering Pipelines",

    description:
      "Scalable cloud-based ETL and analytics pipelines built using Azure Data Factory, Databricks, Python, and SQL for ML-ready data workflows.",

    gradient:
      "from-cyan-500/20 to-sky-500/20",
  },

  {
    title: "Ad Spend Optimization System",

    description:
      "Large-scale marketing analytics project analyzing 300K+ campaign records using PySpark and predictive modeling to optimize ROI and conversions.",

    gradient:
      "from-emerald-500/20 to-teal-500/20",
  },

  {
    title: "Campus Store Analytics",

    description:
      "Data-driven customer analytics project analyzing survey and transaction data to improve engagement, optimize product strategy, and validate marketing campaigns.",

    gradient:
      "from-rose-500/20 to-pink-500/20",
  },
  {
  title: "Music Genre Prediction",

  description:
    "Machine learning classification system for predicting music genres using audio feature extraction and supervised learning techniques.",

  gradient:
    "from-fuchsia-500/20 to-purple-500/20",
},

{
  title: "Handwritten Digit Recognition",

  description:
    "Computer vision and deep learning project for handwritten digit classification using neural network-based image recognition models.",

  gradient:
    "from-blue-500/20 to-cyan-500/20",
},

{
  title: "Commodity Price Forecasting",

  description:
    "Predictive analytics and time-series forecasting system for commodity price analysis using statistical modeling and machine learning approaches.",

  gradient:
    "from-orange-500/20 to-yellow-500/20",
},

{
  title: "Twitter Sentiment Analysis",

  description:
    "Natural language processing project analyzing public sentiment from Twitter data using text preprocessing, classification, and sentiment scoring techniques.",

  gradient:
    "from-sky-500/20 to-indigo-500/20",
},

{
  title: "National Commercial Bank Analysis",

  description:
    "Financial analytics and business intelligence project focused on banking performance analysis, operational insights, and strategic decision support.",

  gradient:
    "from-emerald-500/20 to-green-500/20",
},
{
  title: "Cardiovascular Stroke Analysis",

  description:
    "Healthcare analytics and machine learning project focused on identifying stroke risk patterns using patient health indicators, statistical analysis, and predictive modeling techniques.",

  gradient:
    "from-red-500/20 to-pink-500/20",
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