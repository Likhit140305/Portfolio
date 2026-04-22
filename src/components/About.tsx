"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const highlights = [
  { icon: "⚡", label: "Systems thinker" },
  { icon: "🔧", label: "Backend-first" },
  { icon: "🧠", label: "AI-curious" },
  { icon: "🚀", label: "Fast learner" },
];

const stats = [
  { value: "4+", label: "Projects Shipped", sub: "across 3 domains" },
  { value: "10+", label: "Technologies", sub: "languages & frameworks" },
  { value: "1", label: "Mission", sub: "build things that matter" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="about" ref={sectionRef} className="py-[100px] md:py-[140px] px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(99,102,241,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — text content */}
          <div>
            <motion.div
              custom={0}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="flex items-center gap-4 mb-8"
            >
              <div className="accent-line" />
              <span className="text-xs tracking-[0.25em] text-indigo-400 uppercase font-medium">
                About
              </span>
            </motion.div>

            <motion.h2
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8 tracking-tight"
            >
              Where systems
              <br />
              meet <span className="gradient-text">intelligence.</span>
            </motion.h2>

            <motion.div
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="space-y-6 text-white/60 text-lg leading-[1.7] max-w-[580px]"
            >
              <p>
                I build intelligent systems that bridge software and real-world complexity —
                from autonomous simulations to scalable backend architectures.
              </p>
              <p>
                Alongside systems engineering, I&apos;m deeply interested in full-stack development,
                crafting performant web applications with clean backend logic and intuitive user experiences.
              </p>
            </motion.div>

            {/* Highlight tags */}
            <motion.div
              custom={3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="flex flex-wrap gap-3 mt-10"
            >
              {highlights.map((h) => (
                <span
                  key={h.label}
                  className="flex items-center gap-2 text-[13px] px-4 py-2.5 rounded-full text-white/60 border border-white/10 bg-white/[0.02] hover:border-indigo-500/30 hover:text-white/90 transition-all duration-300"
                >
                  <span className="opacity-80">{h.icon}</span>
                  {h.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — stats + card */}
          <motion.div style={{ y: parallaxY }} className="flex flex-col gap-4">
            {/* Stats row */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
              }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="glass-card p-6 flex flex-col gap-1 group hover:border-indigo-500/25 transition-all duration-300"
                >
                  <span
                    className="text-3xl font-bold gradient-text"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {s.value}
                  </span>
                  <span className="text-xs font-medium text-white/60">{s.label}</span>
                  <span className="text-[10px] text-white/25">{s.sub}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Currently exploring card */}
            <motion.div
              custom={5}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="glass-card p-6 hover:border-indigo-500/20 transition-all duration-300"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(99,102,241,0.12)" }}
                >
                  <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/80">Currently building</p>
                  <p className="text-xs text-white/30">Expanding into backend systems</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Go REST APIs", "PostgreSQL", "Redis caching", "Docker", "System Design"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full text-indigo-300/80 border border-indigo-500/20 bg-indigo-500/08"
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
              className="glass-card p-6 flex items-center gap-4 hover:border-indigo-500/15 transition-all duration-300"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(139,92,246,0.12)" }}
              >
                <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.42a12.08 12.08 0 01.34 2.76 12 12 0 01-12 12 12 12 0 01-12-12c0-.97.12-1.9.34-2.8L12 14z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-white/75">Computer Science & Engineering</p>
                <p className="text-xs text-white/30">Sem VI · Full-stack + Systems focus</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
