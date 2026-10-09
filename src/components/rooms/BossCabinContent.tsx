"use client";

import { clay } from "@/components/ui/clay";

const STATS = [
  { value: "5+", label: "Years Exp.", color: "#4F46E5" },
  { value: "50+", label: "Projects", color: "#0EA5E9" },
  { value: "30+", label: "Clients", color: "#10B981" },
];

const SKILLS = [
  "React", "Next.js", "Three.js", "TypeScript",
  "Node.js", "Figma", "Tailwind CSS", "GSAP",
];

export default function BossCabinContent() {
  return (
    <div>
      {/* Profile */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: 14,
            background: "linear-gradient(135deg, #4F46E5, #6366F1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: "inset 1px 1px 3px rgba(255,255,255,0.3), 4px 4px 10px rgba(99,102,241,0.25)",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div>
          <h3 style={{ fontSize: 17, fontWeight: 800, color: "#2D3748", lineHeight: 1.2 }}>
            Hasib Ahmed
          </h3>
          <p style={{ fontSize: 12, color: "#64748B", marginTop: 2 }}>
            Creative Developer &amp; Designer
          </p>
        </div>
      </div>

      {/* Bio */}
      <p style={{ fontSize: 13, lineHeight: 1.7, color: "#4B5563", marginBottom: 16 }}>
        Welcome to my office! I&apos;m a passionate full-stack developer and designer
        who loves building immersive web experiences. With expertise in React,
        Three.js, and modern web technologies, I craft digital experiences that stand out.
      </p>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 16 }}>
        {STATS.map((stat) => (
          <div key={stat.label} style={{ ...clay.inset, padding: "14px 10px", textAlign: "center" }}>
            <p style={{ fontSize: 20, fontWeight: 800, color: stat.color, lineHeight: 1 }}>
              {stat.value}
            </p>
            <p style={{ fontSize: 10, fontWeight: 500, color: "#64748B", marginTop: 4 }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div>
        <p style={{ fontSize: 11, fontWeight: 700, color: "#475569", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Skills
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {SKILLS.map((skill) => (
            <span
              key={skill}
              style={{
                ...clay.pill,
                fontSize: 11,
                fontWeight: 500,
                color: "#475569",
                padding: "5px 14px",
                borderRadius: 50,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
