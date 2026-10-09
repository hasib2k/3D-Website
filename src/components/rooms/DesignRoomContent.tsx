"use client";

import { clay } from "@/components/ui/clay";

const DESIGNS = [
  { title: "Mobile Banking UI", category: "UI/UX", color: "#4F46E5", gradient: "linear-gradient(135deg, #C7D2FE, #A5B4FC)" },
  { title: "SaaS Dashboard", category: "Web App", color: "#7C3AED", gradient: "linear-gradient(135deg, #DDD6FE, #C4B5FD)" },
  { title: "Brand Identity", category: "Branding", color: "#EA580C", gradient: "linear-gradient(135deg, #FED7AA, #FDBA74)" },
  { title: "NFT Marketplace", category: "Web3", color: "#059669", gradient: "linear-gradient(135deg, #A7F3D0, #6EE7B7)" },
  { title: "Health Tracker", category: "Mobile", color: "#E11D48", gradient: "linear-gradient(135deg, #FECDD3, #FDA4AF)" },
  { title: "Portfolio Kit", category: "Templates", color: "#0891B2", gradient: "linear-gradient(135deg, #A5F3FC, #67E8F9)" },
];

export default function DesignRoomContent() {
  return (
    <div>
      <p style={{ fontSize: 13, color: "#64748B", marginBottom: 14, lineHeight: 1.6 }}>
        The design room showcases UI/UX work, branding, and visual design projects.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {DESIGNS.map((design) => (
          <div
            key={design.title}
            style={{
              ...clay.inset,
              padding: 10,
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, clay.iconBox);
              e.currentTarget.style.padding = "10px";
              e.currentTarget.style.cursor = "pointer";
              e.currentTarget.style.textAlign = "center";
              e.currentTarget.style.borderRadius = "16px";
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, clay.inset);
              e.currentTarget.style.padding = "10px";
              e.currentTarget.style.cursor = "pointer";
              e.currentTarget.style.textAlign = "center";
            }}
          >
            {/* Thumbnail */}
            <div
              style={{
                width: "100%",
                aspectRatio: "1",
                borderRadius: 10,
                background: design.gradient,
                marginBottom: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "inset 2px 2px 4px rgba(255,255,255,0.4), inset -1px -1px 3px rgba(0,0,0,0.06)",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>

            <h4 style={{ fontSize: 11, fontWeight: 700, color: "#2D3748", lineHeight: 1.3 }}>
              {design.title}
            </h4>
            <span
              style={{
                display: "inline-block",
                marginTop: 4,
                fontSize: 9,
                fontWeight: 600,
                padding: "2px 8px",
                borderRadius: 8,
                color: design.color,
                background: "#e0e5ec",
                boxShadow: "inset 1px 1px 2px rgba(163,177,198,0.3), inset -1px -1px 2px rgba(255,255,255,0.4)",
              }}
            >
              {design.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
