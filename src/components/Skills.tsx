"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    label: "Backend & Systems",
    skills: ["Go (Golang)", "PostgreSQL / SQL", "REST API Design", "System Design", "Microservices Concepts", "Redis", "Python"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "DevOps & Tools",
    skills: ["Docker", "Git & GitHub", "GitHub Actions CI/CD", "AWS/GCP Basics"],
  },
  {
    label: "AI & Machine Learning",
    skills: ["PyTorch", "TensorFlow / RL", "LLM Orchestration", "NLP", "Transformers", "Computer Vision", "SimPy"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="skills" className="py-[120px] md:py-[180px] px-6 md:px-16 lg:px-24 relative bg-[#030303] overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_20%_50%,#000_70%,transparent_100%)] opacity-70" />
      <motion.div
        className="absolute bottom-0 right-0 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.08), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column - Header */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
              <span className="text-[11px] tracking-[0.25em] text-purple-300/80 uppercase font-medium">
                Capabilities
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-clash text-4xl md:text-5xl lg:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 tracking-[-0.02em] mb-8"
            >
              Tools of<br/>the trade.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/50 text-[15px] leading-[1.8] max-w-sm mb-12"
            >
              Currently bridging the gap between <strong className="text-white/90 font-medium">Applied AI/ML</strong>, <strong className="text-white/90 font-medium">scalable backend systems</strong>, and <strong className="text-white/90 font-medium">full-stack web development</strong>.
            </motion.p>
          </div>

          {/* Right Column - Skills Rails */}
          <div className="lg:col-span-8 flex flex-col gap-12 lg:gap-16 pt-4">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                className="group relative"
              >
                <h3 className="font-clash text-xl font-medium text-white/90 mb-6 pb-4 border-b border-white/5 group-hover:border-purple-500/30 transition-colors duration-500">
                  {cat.label}
                </h3>
                
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {cat.skills.map((skill, si) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) + (si * 0.05) }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-5 py-2.5 rounded-full text-sm font-medium bg-white/5 text-white/90 border border-white/10 hover:bg-white/10 hover:text-white hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.15)] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
