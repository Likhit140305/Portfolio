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
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/likhit-hegde",
    href: "https://www.linkedin.com/in/likhit-hegde-304b532b3",
    sub: "Professional profile",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

function ContactCard({ link, index }: { link: (typeof contactLinks)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={link.href}
      target={link.label !== "Email" ? "_blank" : undefined}
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-8 rounded-[32px] p-8 md:p-10 transition-all duration-400"
      style={{
        background: hovered ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.01)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.04)"}`,
      }}
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-400"
        style={{
          background: hovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.05)",
          color: hovered ? "#000" : "rgba(255,255,255,0.7)",
        }}
      >
        {link.icon}
      </div>

      <div className="flex flex-col gap-1 min-w-0 flex-grow">
        <span className="text-[11px] text-white/70 uppercase tracking-[0.2em] font-semibold">{link.label}</span>
        <span className="text-[17px] font-medium text-white/80 group-hover:text-white transition-colors duration-200 truncate">
          {link.value}
        </span>
        <span className="text-[14px] text-white/60 font-light mt-1">{link.sub}</span>
      </div>

      <div className="hidden md:flex w-12 h-12 rounded-full border border-white/10 items-center justify-center text-white/40 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-400 flex-shrink-0">
        <svg
          className="w-4 h-4 transition-transform duration-400 group-hover:-rotate-45"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </motion.a>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="contact" className="py-[140px] md:py-[240px] px-6 md:px-16 lg:px-24 relative bg-[#030303] overflow-hidden">
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />
      <motion.div
        className="absolute bottom-0 left-0 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.08), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* Left — text */}
          <div className="flex flex-col gap-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="w-12 h-px bg-gradient-to-r from-indigo-500/50 to-transparent" />
                <span className="text-[11px] tracking-[0.25em] text-indigo-300/80 uppercase font-medium">
                  Contact
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-clash text-5xl md:text-7xl lg:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 mb-8 leading-[1.05] tracking-[-0.02em] drop-shadow-sm"
              >
                Let&apos;s build
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">something.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-white/50 text-lg md:text-xl font-light leading-[1.7] max-w-md"
              >
                Open to engineering roles, ambitious projects, and conversations around backend systems, applied AI, or scalable full-stack products.
              </motion.p>
            </div>

            {/* Availability tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex self-start items-center gap-3 px-6 py-4 rounded-full text-[13px] font-medium bg-white/5 border border-white/10"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-white/80 uppercase tracking-widest text-[11px]">Available for opportunities</span>
            </motion.div>
          </div>

          {/* Right — contact links */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
            }}
            className="flex flex-col gap-6"
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
        transition={{ duration: 1, delay: 0.6 }}
        className="max-w-7xl mx-auto mt-40 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <span className="text-[13px] font-medium text-white/30 tracking-wide uppercase">
          © 2026 Likhit Hegde.
        </span>
        <span className="text-[13px] font-medium text-white/20 tracking-wide">
          Engineered with Next.js & Framer Motion
        </span>
      </motion.div>
    </section>
  );
}
