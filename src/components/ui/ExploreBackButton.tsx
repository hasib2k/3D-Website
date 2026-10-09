"use client";

import { useGameStore } from "@/store/gameStore";

export default function ExploreBackButton() {
  const { phase, resetJourney } = useGameStore();

  if (phase !== "exploring") return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <button
        onClick={resetJourney}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: 13,
          fontWeight: 600,
          color: "#374151",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(0,0,0,0.06)",
          padding: "10px 20px",
          borderRadius: 50,
          cursor: "pointer",
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          transition: "all 0.15s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#FFFFFF";
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.16)";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.92)";
          e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="#6B7280">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Reception
      </button>
    </div>
  );
}
