"use client";

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    tech: "Next.js, Stripe, Prisma",
    desc: "Full-stack e-commerce with real-time inventory and payments.",
    gradient: "linear-gradient(135deg, #8B5CF6, #EC4899)",
  },
  {
    title: "AI Dashboard",
    tech: "React, Python, TensorFlow",
    desc: "ML analytics dashboard with real-time data visualization.",
    gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)",
  },
  {
    title: "Social Media App",
    tech: "React Native, Firebase",
    desc: "Cross-platform social app with messaging and stories.",
    gradient: "linear-gradient(135deg, #F97316, #EF4444)",
  },
  {
    title: "3D Portfolio Website",
    tech: "Three.js, React, GSAP",
    desc: "This website — an immersive 3D office portfolio.",
    gradient: "linear-gradient(135deg, #10B981, #14B8A6)",
  },
];

export default function WorkStudioContent() {
  return (
    <div>
      <p style={{ fontSize: 13, color: "#6B7280", marginBottom: 16, lineHeight: 1.6 }}>
        A selection of projects from the studio. Each one pushed the boundaries
        of what&apos;s possible on the web.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            style={{
              border: "1px solid #F3F4F6",
              borderRadius: 14,
              padding: 16,
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#E5E7EB";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#F3F4F6";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Accent bar */}
            <div
              style={{
                width: "100%",
                height: 3,
                borderRadius: 2,
                background: project.gradient,
                marginBottom: 12,
              }}
            />
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "#111827", lineHeight: 1.3 }}>
              {project.title}
            </h4>
            <p style={{ fontSize: 11, color: "#9CA3AF", marginTop: 4, lineHeight: 1.5 }}>
              {project.desc}
            </p>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#6366F1", marginTop: 8 }}>
              {project.tech}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
