"use client";

const STATS = [
  { value: "5+", label: "Years Exp.", color: "#4F46E5", bg: "#EEF2FF" },
  { value: "50+", label: "Projects", color: "#0EA5E9", bg: "#F0F9FF" },
  { value: "30+", label: "Clients", color: "#10B981", bg: "#ECFDF5" },
];

const SKILLS = [
  "React", "Next.js", "Three.js", "TypeScript",
  "Node.js", "Figma", "Tailwind CSS", "GSAP",
];

export default function BossCabinContent() {
  return (
    <div>
      {/* Profile header */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 14,
            background: "linear-gradient(135deg, #4F46E5, #6366F1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: "0 4px 12px rgba(79,70,229,0.25)",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: "#111827", lineHeight: 1.2 }}>
            Hasib Ahmed
          </h3>
          <p style={{ fontSize: 13, color: "#6B7280", marginTop: 2 }}>
            Creative Developer &amp; Designer
          </p>
        </div>
      </div>

      {/* Bio */}
      <p style={{ fontSize: 13, lineHeight: 1.7, color: "#4B5563", marginBottom: 18 }}>
        Welcome to my office! I&apos;m a passionate full-stack developer and designer
        who loves building immersive web experiences. With expertise in React,
        Three.js, and modern web technologies, I craft digital experiences that
        stand out.
      </p>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 18 }}>
        {STATS.map((stat) => (
          <div
            key={stat.label}
            style={{
              background: stat.bg,
              borderRadius: 12,
              padding: "14px 12px",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: 20, fontWeight: 800, color: stat.color, lineHeight: 1 }}>
              {stat.value}
            </p>
            <p style={{ fontSize: 11, fontWeight: 500, color: "#6B7280", marginTop: 4 }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div>
        <p style={{ fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Skills
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {SKILLS.map((skill) => (
            <span
              key={skill}
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "#374151",
                background: "#F3F4F6",
                padding: "5px 12px",
                borderRadius: 20,
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
