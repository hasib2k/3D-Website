"use client";

import { clay } from "@/components/ui/clay";

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    tech: "Next.js, Stripe, Prisma",
    desc: "Full-stack e-commerce with real-time inventory and payments.",
    color: "#8B5CF6",
  },
  {
    title: "AI Dashboard",
    tech: "React, Python, TensorFlow",
    desc: "ML analytics dashboard with real-time data visualization.",
    color: "#3B82F6",
  },
  {
    title: "Social Media App",
    tech: "React Native, Firebase",
    desc: "Cross-platform social app with messaging and stories.",
    color: "#F97316",
  },
  {
    title: "3D Portfolio Website",
    tech: "Three.js, React, GSAP",
    desc: "This website — an immersive 3D office portfolio.",
    color: "#10B981",
  },
];

export default function WorkStudioContent() {
  return (
    <div>
      <p style={{ fontSize: 13, color: "#64748B", marginBottom: 14, lineHeight: 1.6 }}>
        A selection of projects from the studio. Each one pushed the boundaries
        of what&apos;s possible on the web.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            style={{
              ...clay.inset,
              padding: 14,
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, clay.iconBox);
              e.currentTarget.style.padding = "14px";
              e.currentTarget.style.cursor = "pointer";
              e.currentTarget.style.borderRadius = "16px";
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, clay.inset);
              e.currentTarget.style.padding = "14px";
              e.currentTarget.style.cursor = "pointer";
            }}
          >
            {/* Accent dot */}
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: project.color,
                marginBottom: 10,
                boxShadow: `0 2px 6px ${project.color}44`,
              }}
            />
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "#2D3748", lineHeight: 1.3 }}>
              {project.title}
            </h4>
            <p style={{ fontSize: 11, color: "#94A3B8", marginTop: 4, lineHeight: 1.5 }}>
              {project.desc}
            </p>
            <p style={{ fontSize: 11, fontWeight: 600, color: project.color, marginTop: 8 }}>
              {project.tech}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
