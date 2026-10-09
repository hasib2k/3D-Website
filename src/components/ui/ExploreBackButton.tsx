"use client";

import { useGameStore } from "@/store/gameStore";
import { clay } from "./clay";

export default function ExploreBackButton() {
  const { phase, resetJourney } = useGameStore();

  if (phase !== "exploring") return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <button
        onClick={resetJourney}
        style={{
          ...clay.pill,
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: 13,
          fontWeight: 700,
          color: "#374151",
          padding: "12px 24px",
          cursor: "pointer",
          transition: "all 0.15s ease",
        }}
        onMouseEnter={(e) => {
          Object.assign(e.currentTarget.style, clay.pillPressed);
          e.currentTarget.style.padding = "12px 24px";
          e.currentTarget.style.cursor = "pointer";
          e.currentTarget.style.color = "#1F2937";
        }}
        onMouseLeave={(e) => {
          Object.assign(e.currentTarget.style, clay.pill);
          e.currentTarget.style.padding = "12px 24px";
          e.currentTarget.style.cursor = "pointer";
          e.currentTarget.style.color = "#374151";
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = "scale(0.96)";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <svg width="14" height="14" viewBox="0 0 20 20" fill="#6B7280">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Reception
      </button>
    </div>
  );
}
