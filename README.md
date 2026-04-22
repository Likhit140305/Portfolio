# 🚀 Likhit Hegde — Developer Portfolio

[![CI/CD](https://github.com/likhithegde/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/likhithegde/portfolio/actions)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-ff69b4)](https://www.framer.com/motion/)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ed?logo=docker)](./Dockerfile)

> Award-level developer portfolio built with Next.js App Router, Tailwind CSS v4, and Framer Motion — showcasing scalable backend systems, full-stack engineering, and intelligent simulations.

**Live**: [likhithegde.dev](https://likhithegde.dev) · **Preview**: `http://localhost:3000`

---

## ✨ Features

| Feature | Implementation |
|---|---|
| Immersive Hero | Parallax scroll, staggered text reveal, animated orbs |
| Navbar | Fixed, glassmorphism, active section via IntersectionObserver |
| Scroll Progress | Framer Motion spring-based progress bar |
| Custom Cursor | Lagged dot + ambient glow follower |
| Projects Showcase | Featured full-width card, 3D tilt hover on secondary cards |
| Skills | Category-based badge layout with proficiency color coding |
| Contact | Two-column layout, per-link accent colors, availability badge |
| Noise Texture | SVG-based fixed overlay for cinematic depth |
| API Routes | `/api/projects` · `/api/health` (simulated backend) |
| Docker | Multi-stage build, non-root user, HEALTHCHECK |
| CI/CD | GitHub Actions: lint → build → Docker push to GHCR |

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** (App Router, `use client`, API Routes)
- **Tailwind CSS v4** (utility-first, custom design tokens)
- **Framer Motion 12** (scroll animations, layout transitions, spring physics)
- **TypeScript** (strict mode)
- **Inter** (Google Fonts via `next/font`)

### DevOps
- **Docker** — multi-stage Alpine build, production-optimized
- **docker-compose** — single-command local production run
- **GitHub Actions** — lint → type-check → build → push to GHCR

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── health/route.ts      # Health check endpoint
│   │   │   └── projects/route.ts    # Projects data API
│   │   ├── globals.css              # Design system, tokens, animations
│   │   ├── layout.tsx               # Root layout + metadata + SEO
│   │   └── page.tsx                 # Single-page assembly
│   └── components/
│       ├── Navbar.tsx               # Fixed nav + scroll progress + active section
│       ├── CursorGlow.tsx           # Custom cursor with lag effect
│       ├── Hero.tsx                 # Full-screen parallax hero
│       ├── About.tsx                # About + stats + parallax right column
│       ├── Projects.tsx             # Featured card + 3D tilt grid
│       ├── Skills.tsx               # Category badge layout with legend
│       └── Contact.tsx              # Two-column contact + footer
├── .github/workflows/ci.yml        # CI/CD pipeline
├── Dockerfile                       # Multi-stage Docker build
├── docker-compose.yml               # Local production deployment
├── next.config.ts                   # Standalone output + security headers
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn
- Docker (optional, for containerized run)

### Development

```bash
# Clone the repository
git clone https://github.com/likhithegde/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

### Docker (Production)

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or manually
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## 🌐 API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/api/health` | GET | Health check — returns service status and uptime |
| `/api/projects` | GET | Returns all portfolio projects with metadata |

### Example Response — `/api/health`

```json
{
  "status": "ok",
  "service": "portfolio-frontend",
  "timestamp": "2026-04-21T09:00:00.000Z",
  "version": "1.0.0",
  "uptime": "42.35s"
}
```

### Example Response — `/api/projects`

```json
{
  "success": true,
  "count": 4,
  "data": [...],
  "meta": {
    "cached": false,
    "source": "next-api",
    "note": "Production version: Gin REST API + PostgreSQL + Redis cache"
  }
}
```

> 💡 **Note**: These Next.js API routes simulate what a production **GoVault** Golang backend (Gin + PostgreSQL + Redis) would serve. A full Go backend implementation is planned as a companion project.

---

## 🏗️ Architecture Notes

```
Browser → Next.js App Router → API Routes (/api/*)
                             → Static Pages (React + Framer Motion)

Production Docker:
  [builder stage] node:20-alpine → npm run build → .next/standalone
  [runner stage]  node:20-alpine → non-root user → server.js

CI/CD (GitHub Actions):
  push to main → lint → tsc --noEmit → next build → docker push ghcr.io
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#000000` |
| Accent | `#6366f1` (indigo) |
| Accent-2 | `#8b5cf6` (violet) |
| Glass Card | `rgba(255,255,255,0.025)` + `backdrop-filter: blur(16px)` |
| Border | `rgba(255,255,255,0.07)` |
| Font | Inter (300–900), `next/font/google` |

---

## 📦 Sections

1. **Hero** — Full-screen with parallax, animated orbs, tech stack row
2. **About** — Bio (exact spec content), 3 stats, currently-building card, education card
3. **Projects** — ADAS (featured), DeFi, Abhinaya Theatre, Finance Tracker
4. **Skills** — Backend / Frontend / DevOps / Other badge grid with proficiency legend
5. **Contact** — Email, GitHub, LinkedIn with availability badge

---

## 📄 License

MIT © 2026 Likhit Hegde
