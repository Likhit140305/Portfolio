"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2 + i * 0.05,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const words = ["scalable", "intelligent", "full-stack"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />

      {/* Deep radial glow — left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 10% 55%, rgba(99,102,241,0.1) 0%, transparent 65%)",
        }}
      />

      {/* Deep radial glow — right accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 30%, rgba(139,92,246,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Animated orbs */}
      <motion.div
        animate={{ y: [0, -24, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-[20%] right-[15%] w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[15%] right-[30%] w-48 h-48 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="max-w-6xl mx-auto w-full relative z-10"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Status badge */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-16">
            <span className="glow-dot" />
            <span className="text-xs tracking-[0.22em] text-white/35 uppercase font-medium">
              Open to opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(3.5rem,10vw,9rem)] font-bold leading-[0.92] tracking-tight mb-8"
          >
            <span className="gradient-text">Likhit</span>
            <br />
            <span className="text-white">Hegde.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-white/40 font-light leading-[1.7] max-w-lg mb-8 md:text-xl"
            style={{ letterSpacing: "0.005em" }}
          >
            Building{" "}
            <span className="text-white/70 font-medium">scalable systems</span>,{" "}
            <span className="text-white/70 font-medium">intelligent simulations</span>,
            <br className="hidden md:block" />
            and <span className="text-white/70 font-medium">full-stack applications</span>.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 flex-wrap">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow: "0 0 30px rgba(99,102,241,0.35), 0 4px 24px rgba(0,0,0,0.4)",
              }}
              onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 50px rgba(99,102,241,0.55), 0 4px 30px rgba(0,0,0,0.5)")
              }
              onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 30px rgba(99,102,241,0.35), 0 4px 24px rgba(0,0,0,0.4)")
              }
            >
              View My Work
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white/55 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Tech quick-stack */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 mt-16 flex-wrap"
          >
            <span className="text-xs text-white/20 tracking-widest uppercase">Stack</span>
            <div className="w-10 h-px bg-white/10" />
            {["Go", "React", "Next.js", "PostgreSQL", "Docker", "Redis"].map((tech) => (
              <span
                key={tech}
                className="text-xs text-white/30 font-mono tracking-wide hover:text-white/60 transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-white/18 tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 origin-top"
          style={{ background: "linear-gradient(180deg, rgba(99,102,241,0.6), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
