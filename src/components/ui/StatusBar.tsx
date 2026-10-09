"use client";

import { useGameStore } from "@/store/gameStore";

const PHASE_ICONS: Record<string, React.ReactNode> = {
  entering: (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="white">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
    </svg>
  ),
  "at-reception": (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="white">
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
    </svg>
  ),
  "walking-to-room": (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="white">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  ),
  "at-room": (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="white">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  ),
  exploring: (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="white">
      <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
    </svg>
  ),
};

const PHASE_COLORS: Record<string, { bg: string; shadow: string }> = {
  entering:          { bg: "linear-gradient(135deg, #6366F1, #818CF8)", shadow: "rgba(99,102,241,0.3)" },
  "at-reception":    { bg: "linear-gradient(135deg, #F97316, #FB923C)", shadow: "rgba(249,115,22,0.3)" },
  "walking-to-room": { bg: "linear-gradient(135deg, #3B82F6, #60A5FA)", shadow: "rgba(59,130,246,0.3)" },
  "at-room":         { bg: "linear-gradient(135deg, #10B981, #34D399)", shadow: "rgba(16,185,129,0.3)" },
  exploring:         { bg: "linear-gradient(135deg, #8B5CF6, #A78BFA)", shadow: "rgba(139,92,246,0.3)" },
};

export default function StatusBar() {
  const { statusText, phase } = useGameStore();

  const colors = PHASE_COLORS[phase] || PHASE_COLORS.entering;
  const icon = PHASE_ICONS[phase] || PHASE_ICONS.entering;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(16px)",
          borderRadius: 14,
          padding: "10px 18px 10px 12px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
        }}
      >
        {/* Phase icon pill */}
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 9,
            background: colors.bg,
            boxShadow: `0 3px 10px ${colors.shadow}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {icon}
        </div>

        {/* Status text */}
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#1F2937",
            whiteSpace: "nowrap",
            letterSpacing: "0.01em",
          }}
        >
          {statusText}
        </span>

        {/* Animated dots */}
        {(phase === "entering" || phase === "walking-to-room") && (
          <div style={{ display: "flex", gap: 3, marginLeft: 2 }}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#D1D5DB",
                  animation: "dotPulse 1.2s ease-in-out infinite",
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Inline keyframes */}
      <style jsx>{`
        @keyframes dotPulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}
