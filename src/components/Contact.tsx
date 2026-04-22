"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "lphegde2005@gmail.com",
    href: "mailto:lphegde2005@gmail.com",
    sub: "Preferred for opportunities",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    accent: "#6366f1",
    accentRgb: "99,102,241",
  },
  {
    label: "Phone",
    value: "+91 8722803560",
    href: "tel:+918722803560",
    sub: "Direct calls",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    accent: "#10b981",
    accentRgb: "16,185,129",
  },
  {
    label: "GitHub",
    value: "github.com/Likhit140305",
    href: "https://github.com/Likhit140305",
    sub: "Source code & projects",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    accent: "#8b5cf6",
    accentRgb: "139,92,246",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/likhit-hegde-304b532b3",
    href: "https://www.linkedin.com/in/likhit-hegde-304b532b3",
    sub: "Professional profile",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    accent: "#a78bfa",
    accentRgb: "167,139,250",
  },
];

function ContactCard({ link, index }: { link: (typeof contactLinks)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={link.href}
      target={link.label !== "Email" ? "_blank" : undefined}
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ x: 6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex items-center gap-5 rounded-2xl px-6 py-5 transition-all duration-300"
      style={{
        background: hovered ? `rgba(${link.accentRgb},0.05)` : "rgba(255,255,255,0.025)",
        border: `1px solid ${hovered ? `rgba(${link.accentRgb},0.3)` : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered ? `0 0 30px rgba(${link.accentRgb},0.08)` : "none",
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200"
        style={{
          background: hovered ? `rgba(${link.accentRgb},0.18)` : `rgba(${link.accentRgb},0.1)`,
          color: link.accent,
        }}
      >
        {link.icon}
      </div>

      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-[10px] text-white/25 uppercase tracking-widest">{link.label}</span>
        <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-200 truncate">
          {link.value}
        </span>
        <span className="text-xs text-white/25">{link.sub}</span>
      </div>

      <svg
        className="w-4 h-4 text-white/20 group-hover:text-white/50 ml-auto flex-shrink-0 transition-all duration-200 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </motion.a>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-[100px] md:py-[140px] px-6 md:px-16 lg:px-24 relative">
      {/* Gradient line divider */}
      <div
        className="max-w-6xl mx-auto mb-24"
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), rgba(139,92,246,0.2), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="accent-line" />
              <span className="text-xs tracking-[0.25em] text-indigo-400 uppercase font-medium">
                Contact
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
            >
              Let&apos;s build something
              <br />
              <span className="gradient-text">worth using.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.14 }}
              className="text-white/60 text-[15px] leading-[1.7] mb-8 max-w-lg"
            >
              Open to work, collaborations, and conversations around
              full-stack development, backend systems, and AI.
            </motion.p>

            {/* Availability tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm"
              style={{
                background: "rgba(110,231,183,0.06)",
                border: "1px solid rgba(110,231,183,0.2)",
                color: "#6ee7b7",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </motion.div>
          </div>

          {/* Right — contact links */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            }}
            className="flex flex-col gap-3"
          >
            {contactLinks.map((link, i) => (
              <ContactCard key={link.label} link={link} index={i} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-6xl mx-auto mt-24 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <span className="text-xs text-white/20">
          © 2026 Likhit Hegde. All rights reserved.
        </span>
        <span className="text-xs text-white/15">
          Built with Next.js · Tailwind CSS · Framer Motion
        </span>
      </motion.div>
    </section>
  );
}
