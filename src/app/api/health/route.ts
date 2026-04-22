import { NextResponse } from "next/server";

/**
 * GET /api/health
 * Health check endpoint — standard in production backends.
 * Mirrors the /health endpoint in the GoVault Golang backend.
 */
export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "portfolio-frontend",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
    uptime: process.uptime().toFixed(2) + "s",
  });
}
