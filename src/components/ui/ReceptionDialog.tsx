"use client";

import { useGameStore, type RoomId } from "@/store/gameStore";

// ── Options config ─────────────────────────────────────────────────

const OPTIONS: {
  id: RoomId | "exploring";
  label: string;
  desc: string;
  iconBg: string;
  iconSvg: React.ReactNode;
}[] = [
  {
    id: "boss-cabin",
    label: "Boss Cabin",
    desc: "Meet the CEO — About Me",
    iconBg: "#EEF2FF",
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="#6366F1">
        <path d="M6 3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V3zm2 0v1h4V3H8zM4 8v2h12V8H4z" />
      </svg>
    ),
  },
  {
    id: "work-studio",
    label: "Work Studio",
    desc: "See my projects & code",
    iconBg: "#F0F9FF",
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="#0EA5E9">
        <path d="M12.316 3.051a1 1 0 0 1 .633 1.265l-4 12a1 1 0 1 1-1.898-.632l4-12a1 1 0 0 1 1.265-.633zM5.707 6.293a1 1 0 0 1 0 1.414L3.414 10l2.293 2.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0zm8.586 0a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 0 1 0-1.414z" />
      </svg>
    ),
  },
  {
    id: "design-room",
    label: "Design Room",
    desc: "UI/UX & design portfolio",
    iconBg: "#FFF1F2",
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="#F43F5E">
        <path d="M10 2a2.5 2.5 0 0 0-2.5 2.5c0 .74.323 1.405.835 1.86L3.293 11.4a1 1 0 0 0 0 1.414l3.893 3.893a1 1 0 0 0 1.414 0l5.042-5.042A2.5 2.5 0 1 0 10 2zM4.707 12.107L10 6.814l3.186 3.186-5.293 5.293-3.186-3.186z" />
      </svg>
    ),
  },
  {
    id: "meeting-room",
    label: "Meeting Room",
    desc: "Get in touch — Contact",
    iconBg: "#ECFDF5",
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="#10B981">
        <path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm12.5-1c-.17 0-.33-.02-.5-.05C14.26 12.13 15 11 15 10c0-1.54-1.06-2.84-2.5-3.22.5-.48 1.17-.78 1.92-.78C16.4 6 18 7.6 18 9.5S16.4 13 14.5 13h-1z" />
      </svg>
    ),
  },
  {
    id: "exploring",
    label: "Just Exploring",
    desc: "Look around the office freely",
    iconBg: "#FFFBEB",
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="#F59E0B">
        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1.25-11.89l-3.54 1.77a1 1 0 0 0-.45.45l-1.77 3.54a.5.5 0 0 0 .64.64l3.54-1.77a1 1 0 0 0 .45-.45l1.77-3.54a.5.5 0 0 0-.64-.64zM10 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" clipRule="evenodd" />
      </svg>
    ),
  },
];

// ── Component ──────────────────────────────────────────────────────

export default function ReceptionDialog() {
  const { dialogOpen, setDialogOpen, setTargetRoom, setPhase } = useGameStore();

  if (!dialogOpen) return null;

  const handleSelect = (id: RoomId | "exploring") => {
    setDialogOpen(false);
    if (id === "exploring") {
      setPhase("exploring");
    } else {
      setTargetRoom(id);
      setPhase("walking-to-room");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ padding: 24 }}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      {/* Dialog */}
      <div className="relative w-full animate-in" style={{ maxWidth: 400 }}>
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "#FFFFFF",
            boxShadow: "0 24px 48px -12px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.05)",
          }}
        >
          {/* ── Header ─────────────────────────────── */}
          <div style={{ padding: "24px 24px 20px 24px" }}>
            <div className="flex items-center" style={{ gap: 14 }}>
              {/* Avatar */}
              <div className="relative" style={{ flexShrink: 0 }}>
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "linear-gradient(135deg, #FB923C, #F97316)",
                    boxShadow: "0 4px 12px rgba(249,115,22,0.3)",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5z" />
                    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z" />
                  </svg>
                </div>
                {/* Online dot */}
                <div
                  style={{
                    position: "absolute",
                    bottom: -2,
                    right: -2,
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#10B981",
                    border: "2.5px solid white",
                  }}
                />
              </div>

              {/* Text */}
              <div>
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#F97316",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: 2,
                  }}
                >
                  Receptionist
                </p>
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#111827",
                    lineHeight: 1.2,
                  }}
                >
                  How can I help you?
                </p>
              </div>
            </div>
          </div>

          {/* ── Divider ────────────────────────────── */}
          <div style={{ margin: "0 24px", height: 1, background: "#F3F4F6" }} />

          {/* ── Options ────────────────────────────── */}
          <div style={{ padding: "12px 16px" }}>
            {OPTIONS.map((opt, i) => (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className="group"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  width: "100%",
                  padding: "12px 12px",
                  borderRadius: 12,
                  border: "1.5px solid transparent",
                  background: "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.15s ease",
                  marginBottom: i < OPTIONS.length - 1 ? 2 : 0,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = opt.iconBg;
                  el.style.borderColor = "#E5E7EB";
                  el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "transparent";
                  el.style.borderColor = "transparent";
                  el.style.boxShadow = "none";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = "scale(0.98)";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {/* Icon */}
                <div
                  className="group-hover:scale-105"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: opt.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "transform 0.15s ease",
                  }}
                >
                  {opt.iconSvg}
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#1F2937",
                      lineHeight: 1.3,
                    }}
                  >
                    {opt.label}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 400,
                      color: "#9CA3AF",
                      lineHeight: 1.3,
                      marginTop: 1,
                    }}
                  >
                    {opt.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "#F9FAFB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.15s ease",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M4.5 2.5L8 6L4.5 9.5"
                      stroke="#D1D5DB"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:stroke-gray-500"
                      style={{ transition: "stroke 0.15s ease" }}
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* ── Footer ─────────────────────────────── */}
          <div style={{ padding: "8px 24px 18px 24px" }}>
            <p
              style={{
                fontSize: 10,
                fontWeight: 500,
                color: "#D1D5DB",
                textAlign: "center",
                letterSpacing: "0.04em",
              }}
            >
              Select a destination to begin your tour
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
