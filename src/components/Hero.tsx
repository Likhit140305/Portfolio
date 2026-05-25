"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.1) 0%, transparent 70%)",
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
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10 md:mb-12">
            <span className="glow-dot" />
            <span className="text-xs tracking-[0.25em] text-white/40 uppercase font-medium">
              Software Engineer
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="font-clash text-[clamp(4rem,12vw,10rem)] font-semibold leading-[0.9] tracking-[-0.02em] mb-8"
          >
            <span className="text-white">Likhit</span>
            <br />
            <span className="text-white/40">Hegde.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-white/50 font-light leading-[1.6] max-w-xl mb-12"
          >
            Building{" "}
            <span className="text-white/90 font-medium">scalable systems</span>,{" "}
            <span className="text-white/90 font-medium">intelligent simulations</span>,
            <br className="hidden md:block" />
            and <span className="text-white/90 font-medium">full-stack applications</span>.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex items-center gap-5 flex-wrap">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-[15px] font-medium text-black bg-white transition-all duration-300 hover:bg-white/90"
            >
              View Projects
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[15px] font-medium text-white/60 hover:text-white transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.2, 0.6, 0.2] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[1px] h-16 origin-top"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.4), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
