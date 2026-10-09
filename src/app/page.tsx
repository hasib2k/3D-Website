"use client";

import dynamic from "next/dynamic";
import StatusBar from "@/components/ui/StatusBar";
import ReceptionDialog from "@/components/ui/ReceptionDialog";
import SkipButton from "@/components/ui/SkipButton";
import RoomContent from "@/components/rooms/RoomContent";

// Dynamic import the 3D canvas to avoid SSR issues with Three.js
const SceneCanvas = dynamic(() => import("@/components/3d/SceneCanvas"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 flex items-center justify-center bg-[#f0f4f8]">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-500 text-sm font-medium">Loading Office...</p>
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="w-screen h-screen relative overflow-hidden">
      {/* 3D Scene (full-screen background) */}
      <SceneCanvas />

      {/* 2D UI Overlays */}
      <StatusBar />
      <ReceptionDialog />
      <SkipButton />
      <RoomContent />
    </main>
  );
}
