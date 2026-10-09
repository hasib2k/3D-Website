"use client";

import { useGameStore } from "@/store/gameStore";

export default function SkipButton() {
  const { showSkip, skipToDestination } = useGameStore();

  if (!showSkip) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <button
        onClick={skipToDestination}
        className="group flex items-center gap-2 bg-white/90 backdrop-blur-md
                   hover:bg-white rounded-full shadow-xl px-6 py-3
                   border border-gray-200/50 hover:border-blue-300
                   transition-all duration-200 hover:shadow-2xl"
      >
        <svg
          className="w-4 h-4 text-gray-500 group-hover:text-blue-500 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
          />
        </svg>
        <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
          Skip Walk
        </span>
      </button>
    </div>
  );
}
