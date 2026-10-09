"use client";

import { useGameStore } from "@/store/gameStore";
import { clay } from "./clay";

export default function SkipButton() {
  const { showSkip, skipToDestination } = useGameStore();

  if (!showSkip) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <button
        onClick={skipToDestination}
        style={{
          ...clay.pill,
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: 13,
          fontWeight: 700,
          color: "#4F46E5",
          padding: "12px 24px",
          cursor: "pointer",
          transition: "all 0.15s ease",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
        onMouseEnter={(e) => {
          Object.assign(e.currentTarget.style, clay.pillPressed);
          e.currentTarget.style.padding = "12px 24px";
          e.currentTarget.style.cursor = "pointer";
          e.currentTarget.style.color = "#4338CA";
        }}
        onMouseLeave={(e) => {
          Object.assign(e.currentTarget.style, clay.pill);
          e.currentTarget.style.padding = "12px 24px";
          e.currentTarget.style.cursor = "pointer";
          e.currentTarget.style.color = "#4F46E5";
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = "scale(0.96)";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="#4F46E5">
          <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
          <path d="M8.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L14.293 8 8.646 2.354a.5.5 0 0 1 0-.708z" />
        </svg>
        Skip Walk
      </button>
    </div>
  );
}
