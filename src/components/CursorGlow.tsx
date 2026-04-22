"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    const animate = () => {
      // Smooth lag for cursor glow (large blob)
      if (cursorRef.current) {
        cursorRef.current.style.left = `${pos.current.x}px`;
        cursorRef.current.style.top = `${pos.current.y}px`;
      }
      // Tighter lag for dot follower
      dotPos.current.x += (pos.current.x - dotPos.current.x) * 0.18;
      dotPos.current.y += (pos.current.y - dotPos.current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.left = `${dotPos.current.x}px`;
        dotRef.current.style.top = `${dotPos.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [visible]);

  return (
    <>
      {/* Large ambient glow */}
      <div
        ref={cursorRef}
        className="cursor-glow"
        style={{ opacity: visible ? 1 : 0 }}
      />
      {/* Small precise dot */}
      <motion.div
        ref={dotRef}
        style={{
          position: "fixed",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          opacity: visible ? 1 : 0,
          boxShadow: "0 0 12px rgba(99,102,241,0.6)",
          transition: "opacity 0.3s ease",
          mixBlendMode: "difference",
        }}
      />
      {/* Ring */}
      <motion.div
        style={{
          position: "fixed",
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1px solid rgba(99,102,241,0.35)",
          pointerEvents: "none",
          zIndex: 9997,
          left: `${dotPos.current.x}px`,
          top: `${dotPos.current.y}px`,
          transform: "translate(-50%, -50%)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </>
  );
}
