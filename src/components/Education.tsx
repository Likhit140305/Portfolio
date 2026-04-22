"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const educationData = [
  {
    institution: "Amrita Vishwa Vidyapeetham",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    duration: "Pre-final year Undergraduate",
    score: "7.83 CGPA",
    details: [
      "Actively participated in extracurricular activities including Drama, serving as the President of the university's drama club.",
      "Served as Senior Executive in the automation club and IEEE CIS chapter."
    ],
    skills: ["Leadership", "Calm under pressure", "Quick to adapt"],
    tech: ["Web Development", "Python", "SQL", "Java", "Machine Learning", "Reinforcement Learning"],
    accent: "#6366f1", // Indigo
    accentRgb: "99,102,241",
  },
  {
    institution: "Vismaya PU College",
    degree: "Pre-University",
    duration: "Completed",
    score: "92%",
    details: [],
    skills: [],
    tech: [],
    accent: "#8b5cf6", // Violet
    accentRgb: "139,92,246",
  },
  {
    institution: "Parivarthan Gurukul Heritage",
    degree: "10th Grade",
    duration: "Completed",
    score: "92%",
    details: [
      "Consistently achieved excellent academic results throughout schooling.",
      "Played inter-school Badminton and maintained a strong foundation in both academics and extracurriculars."
    ],
    skills: ["Teamwork", "Discipline", "Leadership", "Strong Academic Foundation"],
    tech: [],
    accent: "#a78bfa", // Purple
    accentRgb: "167,139,250",
  }
];

function EduCard({ item, index }: { item: typeof educationData[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-8 md:pl-0"
    >
      {/* Timeline explicit line (Mobile only) */}
      <div className="md:hidden absolute left-[15px] top-6 bottom-[-60px] w-px bg-white/10 last:hidden" />
      
      {/* Timeline Dot (Mobile only) */}
      <div 
        className="md:hidden absolute w-3 h-3 rounded-full left-[10px] top-6 border-2 border-black"
        style={{ background: item.accent }}
      />

      <div 
        className="glass-card p-6 md:p-7 rounded-2xl group transition-all duration-300 hover:border-white/15"
        style={{
          background: "rgba(255,255,255,0.025)",
          border: `1px solid rgba(255,255,255,0.07)`,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Left Column: Headers & Info */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-3">
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
              {item.institution}
            </h3>
            <p className="text-sm font-medium" style={{ color: item.accent }}>
              {item.degree}
            </p>
            <div className="flex items-center gap-3 text-sm text-white/50 mt-1">
              <span>{item.duration}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="font-semibold text-white/80">{item.score}</span>
            </div>
          </div>

          {/* Right Column: Details & Extracurriculars */}
          <div className="col-span-1 md:col-span-7 flex flex-col gap-6">
            {item.details.length > 0 && (
              <ul className="flex flex-col gap-3">
                {item.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span 
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: item.accent }} 
                    />
                    <span className="text-[15px] text-white/60 leading-[1.7]">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Skills & Tech Section */}
            {(item.skills.length > 0 || item.tech.length > 0) && (
              <div className="flex flex-col gap-4 mt-2 pt-6 border-t border-white/5">
                {item.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map(tech => (
                      <span 
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-white/70 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {item.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map(skill => (
                      <span 
                        key={skill}
                        className="text-xs font-medium tracking-wide"
                        style={{ color: `rgba(${item.accentRgb}, 0.8)` }}
                      >
                        #{skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-[100px] md:py-[140px] px-6 md:px-16 lg:px-24 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 24 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.7 }}
           className="flex items-center gap-4 mb-8"
        >
          <div className="accent-line" />
          <span className="text-xs tracking-[0.25em] text-indigo-400 uppercase font-medium">
            Education
          </span>
        </motion.div>

        <motion.h2
           initial={{ opacity: 0, y: 24 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.7, delay: 0.08 }}
           className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight"
        >
           Academic Journey.
        </motion.h2>

        <motion.p
           initial={{ opacity: 0, y: 24 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.7, delay: 0.14 }}
           className="text-white/60 text-[15px] leading-[1.7] mb-12 max-w-xl"
        >
           A timeline of my formal engineering studies and active participation in university boards and extracurriculars.
        </motion.p>

        {/* Timeline Stack */}
        <div className="flex flex-col gap-8">
          {educationData.map((item, i) => (
            <EduCard key={item.institution} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
