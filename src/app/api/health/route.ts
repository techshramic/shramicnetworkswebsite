import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    services: {
      website: "up",
      database: process.env.DATABASE_URL ? "configured" : "not_configured"
    }
  });
}
