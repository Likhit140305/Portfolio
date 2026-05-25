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
  { value: "4+", label: "Projects Shipped", sub: "across 3 domains" },
  { value: "10+", label: "Technologies", sub: "languages & frameworks" },
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
    <section id="about" ref={sectionRef} className="py-[120px] md:py-[180px] px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 80% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto" ref={ref}>
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
              <div className="w-12 h-px bg-white/20" />
              <span className="text-[11px] tracking-[0.25em] text-white/40 uppercase font-medium">
                About
              </span>
            </motion.div>

            <motion.h2
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="font-clash text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-10 tracking-[-0.02em]"
            >
              Where systems
              <br />
              meet <span className="text-white/40">intelligence.</span>
            </motion.h2>

            <motion.div
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="space-y-8 text-white/50 text-lg leading-[1.8] max-w-[580px]"
            >
              <p>
                I build intelligent systems that bridge the gap between complex algorithms and real-world utility. My focus lies at the intersection of <strong className="text-white/80 font-medium">Applied AI/ML</strong>, <strong className="text-white/80 font-medium">Systems Engineering</strong>, and <strong className="text-white/80 font-medium">Full-Stack Development</strong>.
              </p>
              <p>
                Whether I&apos;m developing autonomous simulations, orchestrating LLMs for modular assistants, or crafting performant web architectures, I care deeply about writing clean backend logic and delivering intuitive user experiences.
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
                  className="flex items-center gap-2 text-[13px] px-5 py-2.5 rounded-full text-white/80 bg-white/10 border border-white/10 hover:bg-white/20 hover:text-white transition-all duration-300"
                >
                  <span className="opacity-80">{h.icon}</span>
                  {h.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — stats + card */}
          <motion.div style={{ y: parallaxY }} className="flex flex-col gap-6">
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
                  className="p-8 rounded-3xl bg-white/[0.015] border border-white/[0.03] flex flex-col gap-2 hover:bg-white/[0.03] transition-colors duration-300"
                >
                  <span
                    className="font-clash text-4xl font-semibold text-white/90"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {s.value}
                  </span>
                  <span className="text-xs font-medium text-white/50 uppercase tracking-wider">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Currently exploring card */}
            <motion.div
              custom={5}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="p-8 rounded-3xl bg-white/[0.015] border border-white/[0.03] hover:bg-white/[0.03] transition-colors duration-300"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/5"
                >
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-white/90">Currently building</p>
                  <p className="text-[13px] text-white/40 mt-0.5">Applied AI & Scalable Systems</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {["LLM Orchestration", "Next.js", "Go Backend", "PyTorch", "System Design"].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium uppercase tracking-widest px-3 py-1.5 rounded-full text-white/80 bg-white/10"
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
              className="p-8 rounded-3xl bg-white/[0.015] border border-white/[0.03] flex items-center gap-5 hover:bg-white/[0.03] transition-colors duration-300"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/5"
              >
                <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.42a12.08 12.08 0 01.34 2.76 12 12 0 01-12 12 12 12 0 01-12-12c0-.97.12-1.9.34-2.8L12 14z" />
                </svg>
              </div>
              <div>
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
