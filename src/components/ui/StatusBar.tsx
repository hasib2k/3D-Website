"use client";

import { useGameStore } from "@/store/gameStore";

export default function StatusBar() {
  const { statusText, phase } = useGameStore();

  const phaseIcon: Record<string, string> = {
    entering: "🚶",
    "at-reception": "🏢",
    "walking-to-room": "🚶‍♂️",
    "at-room": "📍",
    exploring: "🔍",
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl px-8 py-3 flex items-center gap-3 border border-gray-200/50">
        <span className="text-lg">{phaseIcon[phase] || "🏢"}</span>
        <span className="text-sm font-semibold text-gray-700 tracking-wide">
          {statusText}
        </span>
        <div className="flex gap-1 ml-2">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse [animation-delay:0.2s]" />
          <span className="w-2 h-2 rounded-full bg-blue-200 animate-pulse [animation-delay:0.4s]" />
        </div>
      </div>
    </div>
  );
}
