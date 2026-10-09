"use client";

const DESIGNS = [
  { title: "Mobile Banking UI", category: "UI/UX", catBg: "#EEF2FF", catColor: "#4F46E5", bg: "linear-gradient(135deg, #C7D2FE, #A5B4FC)" },
  { title: "SaaS Dashboard", category: "Web App", catBg: "#F3E8FF", catColor: "#7C3AED", bg: "linear-gradient(135deg, #DDD6FE, #C4B5FD)" },
  { title: "Brand Identity Pack", category: "Branding", catBg: "#FFF7ED", catColor: "#EA580C", bg: "linear-gradient(135deg, #FED7AA, #FDBA74)" },
  { title: "NFT Marketplace", category: "Web3", catBg: "#ECFDF5", catColor: "#059669", bg: "linear-gradient(135deg, #A7F3D0, #6EE7B7)" },
  { title: "Health Tracker App", category: "Mobile", catBg: "#FFF1F2", catColor: "#E11D48", bg: "linear-gradient(135deg, #FECDD3, #FDA4AF)" },
  { title: "Portfolio Templates", category: "Templates", catBg: "#ECFEFF", catColor: "#0891B2", bg: "linear-gradient(135deg, #A5F3FC, #67E8F9)" },
];

export default function DesignRoomContent() {
  return (
    <div>
      <p style={{ fontSize: 13, color: "#6B7280", marginBottom: 16, lineHeight: 1.6 }}>
        The design room showcases UI/UX work, branding, and visual design projects.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {DESIGNS.map((design) => (
          <div
            key={design.title}
            style={{
              borderRadius: 12,
              padding: 12,
              border: "1px solid #F3F4F6",
              textAlign: "center",
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
            {/* Thumbnail placeholder */}
            <div
              style={{
                width: "100%",
                aspectRatio: "1",
                borderRadius: 8,
                background: design.bg,
                marginBottom: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>

            <h4 style={{ fontSize: 12, fontWeight: 700, color: "#111827", lineHeight: 1.3 }}>
              {design.title}
            </h4>
            <span
              style={{
                display: "inline-block",
                marginTop: 6,
                fontSize: 10,
                fontWeight: 600,
                padding: "3px 8px",
                borderRadius: 10,
                background: design.catBg,
                color: design.catColor,
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
