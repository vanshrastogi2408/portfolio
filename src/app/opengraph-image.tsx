import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vansh Rastogi — Android & KMM Developer · Tech Lead";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "hsl(201, 100%, 8%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top gradient bar */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #8b5cf6, #3b82f6, #06b6d4)",
          }}
        />

        {/* Available badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#4ade80",
              boxShadow: "0 0 12px #4ade80",
            }}
          />
          <span style={{ color: "#a78bfa", fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <div style={{ display: "flex", gap: 20, alignItems: "baseline", marginBottom: 16 }}>
          <span style={{ fontSize: 80, fontWeight: 700, color: "#ffffff", lineHeight: 1 }}>
            Vansh
          </span>
          <span
            style={{
              fontSize: 80, fontWeight: 700, lineHeight: 1,
              background: "linear-gradient(90deg, #a78bfa, #60a5fa, #67e8f9)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Rastogi
          </span>
        </div>

        {/* Role */}
        <div style={{ fontSize: 26, color: "#94a3b8", marginBottom: 48 }}>
          Tech Lead · Android & KMM → Full-Stack SaaS
        </div>

        {/* Skill chips */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {["Kotlin", "KMM", "Jetpack Compose", "Next.js", "TypeScript", "PostgreSQL"].map((skill) => (
            <div
              key={skill}
              style={{
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid rgba(139, 92, 246, 0.5)",
                color: "#c4b5fd",
                fontSize: 16,
                background: "rgba(139, 92, 246, 0.08)",
              }}
            >
              {skill}
            </div>
          ))}
        </div>

        {/* URL bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 60, right: 80,
            color: "#334155",
            fontSize: 16,
            letterSpacing: "0.05em",
          }}
        >
          vanshrastogi.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
