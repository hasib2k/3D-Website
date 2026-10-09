"use client";

import { useGameStore } from "@/store/gameStore";

export default function SkipButton() {
  const { showSkip, skipToDestination } = useGameStore();

  if (!showSkip) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <button
        onClick={skipToDestination}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: 13,
          fontWeight: 600,
          color: "white",
          background: "linear-gradient(135deg, #4F46E5, #6366F1)",
          border: "none",
          padding: "10px 22px",
          borderRadius: 50,
          cursor: "pointer",
          boxShadow: "0 6px 24px rgba(79,70,229,0.35)",
          transition: "all 0.15s ease",
          letterSpacing: "0.01em",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 8px 30px rgba(79,70,229,0.45)";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 6px 24px rgba(79,70,229,0.35)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(0.97)";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = "translateY(-2px) scale(1)";
        }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="white">
          <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
          <path d="M8.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L14.293 8 8.646 2.354a.5.5 0 0 1 0-.708z" />
        </svg>
        Skip Walk
      </button>
    </div>
  );
}
