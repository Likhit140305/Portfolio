"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  category: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "ADAS Level 2 Simulation",
    description:
      "Real-time autonomous driving simulation with RTOS-like scheduling, emergency preemption, and multi-sensor fusion. Built a comprehensive pipeline architected like microservices for low latency and high-concurrency processing.",
    tags: ["Python", "SimPy", "RTOS", "Sensor Fusion", "RL Agent"],
    href: "https://github.com/Likhit140305/Reinforcement_Learning_ADAS",
    category: "Systems & AI",
    featured: true,
  },
  {
    title: "Modular AI Assistant (JARVIS)",
    description:
      "Modular AI Assistant with speech recognition, LLM orchestration, task automation, and hybrid voice interaction.",
    tags: ["Python", "Speech AI", "LLMs", "Automation"],
    href: "#",
    category: "AI Systems",
  },
  {
    title: "Context-Aware Next Word Prediction Engine",
    description:
      "Developed an intelligent next-word prediction system leveraging NLP techniques and large language model concepts for contextual text generation.",
    tags: ["Python", "NLP", "Transformers", "LLMs"],
    href: "#",
    category: "AI / NLP",
  },
  {
    title: "DeFi Liquidity / Cross-Border Payment System",
    description:
      "Built a decentralized payment and liquidity management system using AMM logic and liquidity pools for cross-border transaction handling.",
    tags: ["Solidity", "Web3", "Node.js", "AMM", "DeFi"],
    href: "#",
    category: "Blockchain",
  },
  {
    title: "AI Finance Tracker",
    description:
      "AI-powered expense tracker with multi-modal NLP ingestion, SQL analytics, and Redis caching concepts. Implemented async job processing with BullMQ.",
    tags: ["Next.js", "BullMQ", "NLP", "PostgreSQL", "Redis"],
    href: "https://github.com/Likhit140305/finance-tracker",
    category: "Full-Stack",
  },
  {
    title: "Abhinaya Theatre App",
    description:
      "Full-stack theatre booking platform with event management APIs, seat selection, and admin flows. Focused on clean UI/UX and structured data handling.",
    tags: ["React", "Node.js", "MongoDB", "REST API", "Express"],
    href: "https://github.com/Likhit140305/Abhinaya-Web-App",
    category: "Full-Stack",
  },
];

function FeaturedCard({ project }: { project: Project }) {
  const hasLink = project.href && project.href !== "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group col-span-full rounded-[40px] overflow-hidden mb-12 md:mb-16"
      style={{
        background: "rgba(255,255,255,0.015)",
        border: "1px solid rgba(255,255,255,0.03)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center col-span-1 lg:col-span-9">
          
          {/* Top Meta */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] px-3 py-1.5 rounded-full font-semibold tracking-[0.2em] uppercase bg-white/10 text-white border border-white/5">
              Featured
            </span>
            <span className="w-8 h-px bg-white/20" />
            <span className="text-xs font-medium text-white/70 tracking-widest uppercase">
              {project.category}
            </span>
          </div>

          {/* Content Group (using flex gap to guarantee spacing) */}
          <div className="flex flex-col gap-8 mb-12">
            <h3 className="font-clash text-4xl md:text-6xl font-semibold text-white leading-[1.1] tracking-tight">
              {project.title}
            </h3>
            <p className="text-white/50 text-lg md:text-xl leading-[1.8] max-w-3xl font-light">
              {project.description}
            </p>
          </div>

          {/* Tags & Action Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-10 border-t border-white/5">
            {/* Minimal dot-separated tags */}
            <div className="flex flex-wrap items-center gap-3">
              {project.tags.map((tag, i) => (
                <div key={tag} className="flex items-center gap-3 text-[13px] font-semibold tracking-wide text-white/80 uppercase">
                  <span>{tag}</span>
                  {i < project.tags.length - 1 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  )}
                </div>
              ))}
            </div>

            {hasLink && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-white hover:text-white/70 transition-colors duration-300"
              >
                View Live
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            )}
          </div>

        </div>
      </div>
    </motion.div>
  );
}

function ProjectGridCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const hasLink = project.href && project.href !== "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-[32px] p-10 md:p-12 flex flex-col h-full overflow-hidden"
      style={{
        background: hovered ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.01)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)"}`,
        transition: "all 0.5s ease",
      }}
    >
      {/* Category & Link */}
      <div className="flex items-center justify-between mb-10">
        <span className="text-[10px] text-white/70 uppercase tracking-[0.2em] font-medium">
          {project.category}
        </span>
        {hasLink && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-white hover:text-black hover:border-white transition-all duration-400"
          >
            <svg className="w-4 h-4 transition-transform duration-400 group-hover:-rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        )}
      </div>

      {/* Content Group */}
      <div className="flex flex-col gap-6 mb-12 flex-grow">
        <h3 className="font-clash text-3xl font-semibold text-white/90 leading-tight group-hover:text-white transition-colors duration-400">
          {project.title}
        </h3>
        <p className="text-[16px] text-white/50 font-light leading-[1.8]">
          {project.description}
        </p>
      </div>

      {/* Clean Tags at bottom */}
      <div className="flex flex-wrap items-center gap-2.5 pt-8 border-t border-white/5">
        {project.tags.map((tag, i) => (
          <div key={tag} className="flex items-center gap-2.5 text-[12px] font-semibold tracking-widest text-white/70 uppercase">
            <span>{tag}</span>
            {i < project.tags.length - 1 && (
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/70" />
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
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-[140px] md:py-[200px] px-6 md:px-16 lg:px-24 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-white/20" />
            <span className="text-[11px] tracking-[0.25em] text-white/70 uppercase font-medium">
              Projects
            </span>
            <div className="w-12 h-px bg-white/20" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-clash text-5xl md:text-7xl font-semibold text-white tracking-[-0.02em] mb-6"
          >
            Selected Works.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/40 text-lg md:text-xl max-w-2xl font-light leading-[1.6]"
          >
            Engineering scalable platforms, intelligent systems, and seamless user experiences.
          </motion.p>
        </div>

        {/* Featured Project */}
        <FeaturedCard project={featured} />

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {rest.map((project, i) => (
            <ProjectGridCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
