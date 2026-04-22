import { NextResponse } from "next/server";

/**
 * GET /api/projects
 * Returns portfolio projects — simulates a real backend API endpoint.
 * In a production Go backend, this would be a GET /api/v1/projects route
 * served via Gin with PostgreSQL + Redis caching.
 */
export async function GET() {
  const projects = [
    {
      id: "adas-simulation",
      title: "ADAS Level 2 Simulation",
      description:
        "Real-time autonomous driving simulation with RTOS-like scheduling, emergency preemption, and multi-sensor fusion.",
      category: "Systems & AI",
      tags: ["Python", "SimPy", "RTOS", "Multi-Sensor Fusion", "RL Agent"],
      featured: true,
      highlights: [
        "RTOS-style task scheduler with preemption",
        "Multi-sensor data fusion pipeline",
        "Modular microservice-like architecture",
        "Real-time emergency braking system",
      ],
      github: "https://github.com/likhithegde",
      createdAt: "2025-11-01",
    },
    {
      id: "defi-cross-border",
      title: "DeFi Cross-Border System",
      description:
        "Decentralized payment protocol with AMM logic, liquidity pools, and high-volume transaction handling.",
      category: "Blockchain",
      tags: ["Solidity", "Blockchain", "AMM", "Web3", "DeFi"],
      featured: false,
      highlights: [
        "AMM-based settlement protocol",
        "Liquidity pool management",
        "High-volume transaction design",
      ],
      github: "https://github.com/likhithegde",
      createdAt: "2025-09-15",
    },
    {
      id: "abhinaya-theatre",
      title: "Abhinaya Theatre App",
      description:
        "Full-stack theatre booking platform with event management APIs, seat selection, and admin flows.",
      category: "Full-Stack",
      tags: ["React", "Node.js", "MongoDB", "REST API"],
      featured: false,
      highlights: [
        "Full-stack booking workflow",
        "RESTful API architecture",
        "Admin & user role management",
      ],
      github: "https://github.com/likhithegde",
      createdAt: "2025-07-20",
    },
    {
      id: "finance-tracker",
      title: "AI Finance Tracker",
      description:
        "AI-powered expense tracker with multi-modal NLP ingestion, SQL analytics, and Redis caching concepts.",
      category: "Full-Stack",
      tags: ["Next.js", "BullMQ", "NLP", "PostgreSQL", "Redis"],
      featured: false,
      highlights: [
        "Multi-modal NLP extraction",
        "BullMQ async job processing",
        "Redis caching layer",
      ],
      github: "https://github.com/likhithegde",
      createdAt: "2025-06-01",
    },
  ];

  return NextResponse.json({
    success: true,
    count: projects.length,
    data: projects,
    meta: {
      cached: false,
      source: "next-api",
      note: "Production version: Gin REST API + PostgreSQL + Redis cache",
    },
  });
}
