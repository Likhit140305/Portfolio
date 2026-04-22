"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Project {
  title: string;
  description: string;
  longDesc: string;
  tags: string[];
  href: string;
  accent: string;
  accentRgb: string;
  icon: string;
  featured?: boolean;
  category: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "ADAS Level 2 Simulation",
    description:
      "Real-time autonomous driving simulation with RTOS-like scheduling, emergency preemption, and multi-sensor fusion.",
    longDesc:
      "Built a comprehensive autonomous driving simulation using SimPy with RTOS-style task scheduling, emergency braking, and lane-keep assist. Processed multi-sensor data (camera, lidar, radar) through a modular pipeline architected like microservices — focused on low latency and high-concurrency processing.",
    tags: ["Python", "SimPy", "RTOS", "Multi-Sensor Fusion", "RL Agent"],
    href: "https://github.com/likhithegde",
    accent: "#6366f1",
    accentRgb: "99,102,241",
    icon: "🚗",
    featured: true,
    category: "Systems & AI",
    highlights: [
      "RTOS-style task scheduler with preemption",
      "Multi-sensor data fusion pipeline",
      "Modular microservice-like architecture",
      "Real-time emergency braking system",
    ],
  },
  {
    title: "DeFi Cross-Border System",
    description:
      "Decentralized payment protocol with AMM logic, liquidity pools, and high-volume transaction handling.",
    longDesc:
      "Developed a scalable decentralized payment system with AMM-based settlement logic and liquidity pools. Designed a REST-like interaction layer and optimized transaction throughput for high-volume DeFi usage.",
    tags: ["Solidity", "Blockchain", "AMM", "Web3", "DeFi"],
    href: "https://github.com/likhithegde",
    accent: "#8b5cf6",
    accentRgb: "139,92,246",
    icon: "⛓️",
    featured: false,
    category: "Blockchain",
    highlights: [
      "AMM-based settlement protocol",
      "Liquidity pool management",
      "High-volume transaction design",
      "Trustless clearing mechanism",
    ],
  },
  {
    title: "Abhinaya Theatre App",
    description:
      "Full-stack theatre booking platform with event management APIs, seat selection, and admin flows.",
    longDesc:
      "Built a complete full-stack web application with React frontend and Node.js REST APIs for event management, booking flows, and admin dashboards. Focused on clean UI/UX and structured data handling.",
    tags: ["React", "Node.js", "MongoDB", "REST API", "Express"],
    href: "https://github.com/likhithegde",
    accent: "#a78bfa",
    accentRgb: "167,139,250",
    icon: "🎭",
    featured: false,
    category: "Full-Stack",
    highlights: [
      "Full-stack booking workflow",
      "RESTful API architecture",
      "Admin & user role management",
      "Seat selection UI system",
    ],
  },
  {
    title: "AI Finance Tracker",
    description:
      "AI-powered expense tracker with multi-modal NLP ingestion, SQL analytics, and Redis caching concepts.",
    longDesc:
      "Developed a full-stack expense tracking system with RESTful APIs, SQL-based queries, and category-based analytics. Integrated multi-modal NLP pipeline for transaction extraction from CSV/PDF inputs. Implemented caching concepts with Redis for performance optimization.",
    tags: ["Next.js", "BullMQ", "NLP", "PostgreSQL", "Redis"],
    href: "https://github.com/likhithegde",
    accent: "#6366f1",
    accentRgb: "99,102,241",
    icon: "📊",
    featured: false,
    category: "Full-Stack",
    highlights: [
      "Multi-modal NLP extraction",
      "RESTful API design",
      "BullMQ async job processing",
      "Redis caching layer",
    ],
  },
];

function FeaturedCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group col-span-full relative overflow-hidden rounded-2xl cursor-pointer"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: `1px solid ${hovered ? `rgba(${project.accentRgb},0.35)` : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered
          ? `0 0 60px rgba(${project.accentRgb},0.12), 0 30px 80px rgba(0,0,0,0.5)`
          : "0 20px 50px rgba(0,0,0,0.3)",
        transition: "border-color 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(ellipse 70% 60% at 30% 50%, rgba(${project.accentRgb},0.07) 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left content */}
        <div className="p-6 md:p-7 flex flex-col justify-between gap-8">
          <div>
            {/* Featured badge + category */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs px-3 py-1 rounded-full font-semibold tracking-wide"
                style={{
                  background: `rgba(${project.accentRgb},0.15)`,
                  color: project.accent,
                  border: `1px solid rgba(${project.accentRgb},0.3)`,
                }}
              >
                ★ Featured
              </span>
              <span className="text-xs text-white/30 uppercase tracking-widest">
                {project.category}
              </span>
            </div>

            {/* Icon + title */}
            <div className="flex items-start gap-4 mb-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: `rgba(${project.accentRgb},0.12)` }}
              >
                {project.icon}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-white/40 mt-1">{project.category}</p>
              </div>
            </div>

            <p className="text-white/60 text-[15px] leading-relaxed mb-8 max-w-lg">
              {project.longDesc}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full font-medium"
                style={{
                  background: `rgba(${project.accentRgb},0.1)`,
                  color: project.accent,
                  border: `1px solid rgba(${project.accentRgb},0.2)`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right — highlights */}
        <div
          className="p-6 md:p-7 md:border-l flex flex-col justify-center gap-4"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs text-white/25 uppercase tracking-widest mb-2">Key Features</p>
          {project.highlights.map((h, i) => (
            <motion.div
              key={h}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: project.accent, boxShadow: `0 0 8px ${project.accent}` }}
              />
              <span className="text-sm text-white/55">{h}</span>
            </motion.div>
          ))}

          {/* View project link */}
          <div className="mt-6 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-200" style={{ color: project.accent }}>
            View Project
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x, y });
  };

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl p-6 md:p-7 flex flex-col gap-6 cursor-pointer overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: `1px solid ${hovered ? `rgba(${project.accentRgb},0.3)` : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered
          ? `0 0 40px rgba(${project.accentRgb},0.1), 0 20px 60px rgba(0,0,0,0.4)`
          : "none",
        transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.15s ease",
      }}
    >
      {/* Hover glow top */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(${project.accentRgb},0.08) 0%, transparent 70%)`,
        }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between relative z-10">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
          style={{ background: `rgba(${project.accentRgb},0.12)` }}
        >
          {project.icon}
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-[10px] px-2.5 py-1 rounded-full font-medium uppercase tracking-wide"
            style={{
              background: `rgba(${project.accentRgb},0.08)`,
              color: `rgba(${project.accentRgb},0.8)`,
            }}
          >
            {project.category}
          </span>
          <svg
            className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 relative z-10">
        <h3 className="text-lg font-semibold text-white/90 leading-snug">{project.title}</h3>
        <p className="text-[15px] text-white/60 leading-[1.7]">{project.description}</p>
      </div>

      {/* Highlights */}
      <div className="flex flex-col gap-3 relative z-10 mt-2">
        {project.highlights.slice(0, 2).map((h) => (
          <div key={h} className="flex items-center gap-2">
            <div
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: project.accent }}
            />
            <span className="text-xs text-white/30">{h}</span>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-6 relative z-10">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full font-medium"
            style={{
              background: `rgba(${project.accentRgb},0.08)`,
              color: `rgba(${project.accentRgb}, 0.9)`,
              border: `1px solid rgba(${project.accentRgb},0.2)`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-[100px] md:py-[140px] px-6 md:px-16 lg:px-24 relative">
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
            Projects
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight"
        >
          Things I&apos;ve built.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.14 }}
          className="text-white/40 text-[15px] mb-12 max-w-xl leading-[1.7]"
        >
          Real engineering across AI, systems, blockchain, and full-stack product layers.
        </motion.p>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Featured — spans full width */}
          <FeaturedCard project={featured} />

          {/* Rest */}
          {rest.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
