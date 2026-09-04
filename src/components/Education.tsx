"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const educationData = [
  {
    institution: "Amrita Vishwa Vidyapeetham",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    duration: "2023 - Present",
    score: "7.83 CGPA",
    details: "Pre-final year. Active in IEEE CIS chapter and University Drama Club (President).",
  },
  {
    institution: "Vismaya PU College",
    degree: "Pre-University (Class 12)",
    duration: "Completed",
    score: "92%",
    details: "Strong academic foundation in science and mathematics.",
  },
  {
    institution: "Parivarthan Gurukul Heritage",
    degree: "10th Grade",
    duration: "Completed",
    score: "92%",
    details: "Consistently achieved excellent academic results. Inter-school Badminton player.",
  }
];

function EduCard({ item, index }: { item: typeof educationData[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative pl-10 md:pl-16 py-10 border-l border-white/5 hover:border-white/20 transition-colors duration-500"
    >
      {/* Timeline Dot */}
      <div 
        className="absolute left-[-5px] top-12 w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-white/50 transition-colors duration-500"
      />

      {/* Content strictly separated by Flex gap */}
      <div className="flex flex-col gap-6">
        
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-white/60 uppercase">
              {item.duration}
            </span>
            <h3 className="font-clash text-3xl md:text-4xl font-medium text-white/90 tracking-tight">
              {item.institution}
            </h3>
          </div>
          
          <div className="inline-flex items-center gap-3 text-[13px] font-medium px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="text-white/70 uppercase tracking-widest">Score</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/90">{item.score}</span>
          </div>
        </div>

        {/* Details row */}
        <div className="flex flex-col gap-4 mt-2">
          <p className="text-[17px] font-medium text-white/70">
            {item.degree}
          </p>
          <p className="text-[15px] font-light text-white/60 leading-[1.8] max-w-2xl">
            {item.details}
          </p>
        </div>
        
      </div>
    </motion.div>
  );
}

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="education" className="py-[140px] md:py-[200px] px-6 md:px-16 lg:px-24 relative bg-[#030303] overflow-hidden">
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_20%_40%,#000_70%,transparent_100%)] opacity-70" />
      <motion.div
        className="absolute top-20 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.08), transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        
        {/* Header */}
        <div className="mb-24 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-gradient-to-r from-indigo-500/50 to-transparent" />
            <span className="text-[11px] tracking-[0.25em] text-indigo-300/80 uppercase font-medium">
              Education
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-clash text-5xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 tracking-[-0.02em] drop-shadow-sm"
          >
            Academic Background.
          </motion.h2>
        </div>

        {/* Timeline Stack */}
        <div className="flex flex-col ml-2 md:ml-4">
          {educationData.map((item, i) => (
            <EduCard key={item.institution} item={item} index={i} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
