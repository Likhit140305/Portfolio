"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  category: string;
  featured?: boolean;
  size?: "large" | "medium" | "small";
  accent?: string;
  stat?: { value: string; label: string };
}

const projects: Project[] = [
  {
    title: "NayePankh Foundation Platform",
    description:
      "Production NGO platform with AI screening agents that auto-score volunteer applications, a persona-adaptive web engine that remaps layouts by visitor type, and 5 role-based portals (Admin, Volunteer, Visitor, Analytics, Donor). JWT + bcrypt auth, serverless Express backend, Vercel-deployed.",
    tags: ["Next.js", "Node.js", "AI Agents", "JWT", "Serverless", "MongoDB"],
    href: "https://github.com/Likhit140305/NayePankh_Website_Internship_Demo",
    category: "Full-Stack",
    featured: true,
    size: "large",
    accent: "#6366f1",
    stat: { value: "5", label: "Sub-portals" },
  },
  {
    title: "ADAS RL — 3-Stage Autonomous Driving",
    description:
      "A three-stage RL framework escalating from a Q-table RTOS agent (0 deadline misses across 20K episodes) to a CNN/DQN visual agent, to a Hybrid DQN inside CARLA with a 7.8M-param dual-branch network fusing camera frames and kinematic state. Priority pre-emptive scheduler with 6 real-time tasks.",
    tags: ["PyTorch", "CARLA", "DQN", "RTOS", "CNN", "RL"],
    href: "https://github.com/Likhit140305/Reinforcement_Learning_ADAS",
    category: "AI / Systems",
    featured: true,
    size: "large",
    accent: "#8b5cf6",
    stat: { value: "0", label: "Deadline misses" },
  },
  {
    title: "Enterprise HR + Oracle ML Security",
    description:
      "Enterprise platform combining HR payroll management with an Oracle ML-powered network intrusion detection engine. Real-time threat classification (DoS, Recon, Probe) using OML algorithms, PL/SQL stored procedures, Docker containerization, and full pytest coverage.",
    tags: ["Oracle ML", "PL/SQL", "Docker", "FastAPI", "pytest"],
    href: "https://github.com/Likhit140305/enterprise-platform",
    category: "Data / ML",
    size: "medium",
    accent: "#0ea5e9",
    stat: { value: "3", label: "Threat classes" },
  },
  {
    title: "HFPN — Age & Gender Detection",
    description:
      "Hierarchical Feature Pyramid Network in PyTorch combining ResNet backbone, mixed pooling, and dual cross-task attention for simultaneous age regression and gender classification on UTKFace. Achieved 81.7% gender accuracy and 14.7 MAE for age.",
    tags: ["PyTorch", "ResNet", "Attention", "Computer Vision"],
    href: "https://github.com/Likhit140305/Hierarchial-Feature-Pyramid-for-Age-and-Gender-Detection",
    category: "AI / ML",
    size: "medium",
    accent: "#f59e0b",
    stat: { value: "81.7%", label: "Gender accuracy" },
  },
  {
    title: "DefiBridge — Cross-Border Payment",
    description:
      "Blockchain-based payment platform routing multi-hop currency swaps through AMM liquidity pools (x·y=k formula). Solidity smart contracts (StablecoinToken, PaymentRouter, LiquidityPool) across 9 corridors. FastAPI backend + React frontend with live WebSocket confirmations.",
    tags: ["Solidity", "Hardhat", "FastAPI", "React", "Web3"],
    href: "https://github.com/Likhit140305/DefiBridge--LIquidity-cross-border-payment-Platform",
    category: "Blockchain",
    size: "medium",
    accent: "#10b981",
    stat: { value: "9", label: "Corridors" },
  },
  {
    title: "AI Finance Tracker",
    description:
      "Expense tracking system with multi-modal NLP ingestion, async BullMQ job queue, PostgreSQL analytics views, and Redis caching. Parses receipts via text and image, produces spending category summaries.",
    tags: ["Next.js", "BullMQ", "PostgreSQL", "Redis", "NLP"],
    href: "https://github.com/Likhit140305/finance-tracker",
    category: "Full-Stack",
    size: "small",
    accent: "#6366f1",
  },
  {
    title: "Abhinaya Theatre App",
    description:
      "Full-stack theatre booking platform with FastAPI backend, MongoDB Motor async driver, JWT auth, interactive seat booking, and dark-mode React frontend with Framer Motion animations.",
    tags: ["React", "FastAPI", "MongoDB", "JWT", "Framer Motion"],
    href: "https://github.com/Likhit140305/Abhinaya-Web-App",
    category: "Full-Stack",
    size: "small",
    accent: "#ec4899",
  },
  {
    title: "JARVIS — Modular AI Assistant",
    description:
      "Hybrid voice AI assistant with OpenWakeWord trigger, faster-whisper transcription, Piper + Kokoro TTS pipeline, local LLM kernel orchestration, and sub-second response latency on CPU.",
    tags: ["Python", "Whisper", "TTS", "LLM", "Voice AI"],
    href: "#",
    category: "AI Systems",
    size: "small",
    accent: "#8b5cf6",
  },
];

const categories = ["All", "AI / Systems", "AI / ML", "Full-Stack", "Blockchain", "Data / ML", "AI Systems"];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const hasLink = project.href && project.href !== "#";

  const isLarge = project.size === "large";
  const isMedium = project.size === "medium";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative rounded-[32px] flex flex-col overflow-hidden
        ${isLarge ? "col-span-1 lg:col-span-2 p-10 md:p-14" : isMedium ? "p-10" : "p-8"}
      `}
      style={{
        background: hovered
          ? `linear-gradient(135deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.01) 100%)`
          : "rgba(255,255,255,0.012)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.04)"}`,
        transition: "all 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: hovered ? `0 0 60px -20px ${project.accent}25` : "none",
      }}
    >
      {/* Accent glow on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-[32px]"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `radial-gradient(ellipse 60% 50% at 0% 0%, ${project.accent}12 0%, transparent 70%)`,
        }}
      />

      {/* Top Row */}
      <div className="flex items-start justify-between mb-8 relative">
        <div className="flex items-center gap-3">
          {/* Color dot */}
          <span
            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ background: project.accent, boxShadow: `0 0 10px ${project.accent}60` }}
          />
          <span className="text-[10px] text-white/50 uppercase tracking-[0.22em] font-medium">
            {project.category}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {project.stat && (
            <div className="text-right mr-4">
              <p className="font-clash text-xl font-semibold text-white/90">{project.stat.value}</p>
              <p className="text-[10px] text-white/35 uppercase tracking-wider">{project.stat.label}</p>
            </div>
          )}
          {hasLink && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/35
                hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 flex-grow relative">
        <h3
          className={`font-clash font-semibold text-white/90 group-hover:text-white transition-colors duration-300 leading-tight tracking-tight
            ${isLarge ? "text-3xl md:text-4xl" : isMedium ? "text-2xl" : "text-xl"}
          `}
        >
          {project.title}
        </h3>
        <p
          className={`text-white/45 font-light leading-[1.75]
            ${isLarge ? "text-base md:text-lg max-w-3xl" : "text-[14px]"}
          `}
        >
          {project.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-2 pt-7 mt-7 border-t border-white/[0.04] relative">
        {project.tags.map((tag, i) => (
          <div key={tag} className="flex items-center gap-2 text-[11px] font-semibold tracking-widest text-white/55 uppercase">
            <span>{tag}</span>
            {i < project.tags.length - 1 && (
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: project.accent, opacity: 0.6 }}
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-[140px] md:py-[200px] px-6 md:px-16 lg:px-24 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-white/20" />
            <span className="text-[11px] tracking-[0.25em] text-white/60 uppercase font-medium">
              Selected Works
            </span>
            <div className="w-12 h-px bg-white/20" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-clash text-5xl md:text-7xl font-semibold text-white tracking-[-0.02em] mb-6"
          >
            Projects.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/40 text-lg md:text-xl max-w-2xl font-light leading-[1.6] mb-12"
          >
            Real systems, real code — from RL agents to production platforms.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="text-[11px] px-4 py-2 rounded-full font-semibold uppercase tracking-[0.18em] transition-all duration-300"
                style={{
                  background: activeCategory === cat ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${activeCategory === cat ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.06)"}`,
                  color: activeCategory === cat ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.45)",
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Bento Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <a
            href="https://github.com/Likhit140305"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.2em] uppercase text-white/50
              hover:text-white/90 transition-colors duration-300 group"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View all projects on GitHub
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
