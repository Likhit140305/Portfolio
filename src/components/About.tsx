"use client";

import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const highlights = [
  { icon: "⚡", label: "Systems thinker" },
  { icon: "🔧", label: "Backend-first" },
  { icon: "🧠", label: "AI-curious" },
  { icon: "🚀", label: "Fast learner" },
];

const stats = [
  { value: "8+", label: "Projects Shipped", sub: "across 4 domains" },
  { value: "15+", label: "Technologies", sub: "languages & frameworks" },
  { value: "1", label: "Mission", sub: "build things that matter" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="about" ref={sectionRef} className="min-h-screen w-full flex items-center justify-center py-24 md:py-32 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Dynamic background accents with parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle 800px at 80% 40%, rgba(120, 119, 198, 0.12), transparent)",
          y: useTransform(scrollYProgress, [0, 1], [-150, 150]),
        }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle 600px at 20% 80%, rgba(99, 102, 241, 0.08), transparent)",
          y: useTransform(scrollYProgress, [0, 1], [150, -150]),
        }}
      />
      
      {/* Premium Grid Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />

      <div className="max-w-7xl mx-auto w-full relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Left — text content */}
          <div>
            <motion.div
              custom={0}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-12 h-px bg-gradient-to-r from-indigo-500/50 to-transparent" />
              <span className="text-[11px] tracking-[0.25em] text-indigo-300/80 uppercase font-medium">
                About
              </span>
            </motion.div>

            <motion.h2
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="font-clash text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 leading-[1.1] mb-10 tracking-[-0.02em]"
            >
              Where systems
              <br />
              meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">intelligence.</span>
            </motion.h2>

            <motion.div
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="space-y-8 text-white/50 text-lg leading-[1.8] max-w-[580px]"
            >
              <p>
                I build intelligent systems that bridge the gap between complex algorithms and real-world utility. My focus spans <strong className="text-white/90 font-medium">Applied AI/ML</strong>, <strong className="text-white/90 font-medium">Systems Engineering</strong>, <strong className="text-white/90 font-medium">Full-Stack Development</strong>, and <strong className="text-white/90 font-medium">Data Platforms</strong>.
              </p>
              <p>
                Whether I&apos;m training RL agents for autonomous driving, building ML-powered enterprise platforms with Oracle OML, deploying production NGO infrastructure, or crafting blockchain payment systems — I care about writing clean, correct, and fast code.
              </p>
            </motion.div>

            {/* Highlight tags */}
            <motion.div
              custom={3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="flex flex-wrap gap-4 mt-12"
            >
              {highlights.map((h) => (
                <span
                  key={h.label}
                  className="flex items-center gap-2 text-[13px] px-5 py-2.5 rounded-full text-white/80 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-300 cursor-default"
                >
                  <span className="opacity-90">{h.icon}</span>
                  {h.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — stats + card */}
          <motion.div style={{ y: parallaxY }} className="flex flex-col gap-6 relative">
            {/* Ambient glow behind cards */}
            <div className="absolute -inset-10 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent blur-3xl -z-10 rounded-full" />
            
            {/* Stats row */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
              }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                  className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.05] flex flex-col gap-2 hover:border-white/[0.1] hover:shadow-[0_0_30px_rgba(120,119,198,0.1)] transition-all duration-300 relative overflow-hidden group cursor-default"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span
                    className="font-clash text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 relative z-10"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {s.value}
                  </span>
                  <span className="text-xs font-medium text-white/50 uppercase tracking-wider relative z-10">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Currently exploring card */}
            <motion.div
              custom={5}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.05] hover:border-indigo-500/20 hover:bg-white/[0.03] hover:shadow-[0_0_40px_rgba(99,102,241,0.08)] transition-all duration-300 relative overflow-hidden group"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-white/90">Currently building</p>
                  <p className="text-[13px] text-white/40 mt-0.5">Applied AI & Scalable Systems</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {["LLM Orchestration", "Next.js", "Go Backend", "PyTorch", "System Design"].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium uppercase tracking-widest px-3 py-1.5 rounded-full text-white/70 bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Education / learning card */}
            <motion.div
              custom={6}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.05] flex items-center gap-5 hover:border-purple-500/20 hover:bg-white/[0.03] hover:shadow-[0_0_40px_rgba(147,51,234,0.08)] transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 p-32 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 transition-colors duration-300 relative z-10">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.42a12.08 12.08 0 01.34 2.76 12 12 0 01-12 12 12 12 0 01-12-12c0-.97.12-1.9.34-2.8L12 14z" />
                </svg>
              </div>
              <div className="relative z-10">
                <p className="text-[15px] font-medium text-white/90">Computer Science & Engineering</p>
                <p className="text-[13px] text-white/40 mt-0.5">Sem VI · Full-stack + Systems focus</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
