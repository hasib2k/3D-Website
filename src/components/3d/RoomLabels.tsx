"use client";

import { useState, useEffect } from "react";
import { Html } from "@react-three/drei";
import { useGameStore, WAYPOINTS, type RoomId } from "@/store/gameStore";

const ROOMS: {
  id: RoomId;
  label: string;
  icon: React.ReactNode;
  color: string;
  position: [number, number, number];
}[] = [
  {
    id: "boss-cabin",
    label: "Boss Cabin",
    color: "#4F46E5",
    position: [WAYPOINTS["boss-cabin"].x, 3.5, WAYPOINTS["boss-cabin"].z],
    icon: (
      <svg width="14" height="14" viewBox="0 0 20 20" fill="white">
        <path d="M6 3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V3zm2 0v1h4V3H8zM4 8v2h12V8H4z" />
      </svg>
    ),
  },
  {
    id: "work-studio",
    label: "Work Studio",
    color: "#0EA5E9",
    position: [WAYPOINTS["work-studio"].x, 3.5, WAYPOINTS["work-studio"].z],
    icon: (
      <svg width="14" height="14" viewBox="0 0 20 20" fill="white">
        <path d="M12.316 3.051a1 1 0 0 1 .633 1.265l-4 12a1 1 0 1 1-1.898-.632l4-12a1 1 0 0 1 1.265-.633zM5.707 6.293a1 1 0 0 1 0 1.414L3.414 10l2.293 2.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0zm8.586 0a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 0 1 0-1.414z" />
      </svg>
    ),
  },
  {
    id: "design-room",
    label: "Design Room",
    color: "#F43F5E",
    position: [WAYPOINTS["design-room"].x, 3.5, WAYPOINTS["design-room"].z],
    icon: (
      <svg width="14" height="14" viewBox="0 0 20 20" fill="white">
        <path d="M10 2a2.5 2.5 0 0 0-2.5 2.5c0 .74.323 1.405.835 1.86L3.293 11.4a1 1 0 0 0 0 1.414l3.893 3.893a1 1 0 0 0 1.414 0l5.042-5.042A2.5 2.5 0 1 0 10 2z" />
      </svg>
    ),
  },
  {
    id: "meeting-room",
    label: "Meeting Room",
    color: "#10B981",
    position: [WAYPOINTS["meeting-room"].x, 3.5, WAYPOINTS["meeting-room"].z],
    icon: (
      <svg width="14" height="14" viewBox="0 0 20 20" fill="white">
        <path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1z" />
      </svg>
    ),
  },
  {
    id: "reception",
    label: "Reception",
    color: "#F97316",
    position: [WAYPOINTS["reception"].x, 3.5, WAYPOINTS["reception"].z],
    icon: (
      <svg width="14" height="14" viewBox="0 0 20 20" fill="white">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function RoomLabels() {
  const { phase, setPhase, setTargetRoom, setDialogOpen } = useGameStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Only show during exploring phase
  if (phase !== "exploring" || !mounted) return null;

  const handleClick = (id: RoomId) => {
    if (id === "reception") {
      // Go back to reception dialog
      setPhase("at-reception");
      setDialogOpen(true);
    } else {
      setTargetRoom(id);
      setPhase("walking-to-room");
    }
  };

  return (
    <>
      {ROOMS.map((room) => (
        <group key={room.id} position={room.position}>
          <Html center distanceFactor={18} zIndexRange={[100, 0]}>
            <button
              onClick={() => handleClick(room.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(8px)",
                borderRadius: 10,
                padding: "7px 12px 7px 8px",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
                transition: "all 0.15s ease",
                animation: "labelFloat 3s ease-in-out infinite",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.12)";
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 7,
                  background: room.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {room.icon}
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#2D3748" }}>
                {room.label}
              </span>
            </button>
          </Html>
        </group>
      ))}
    </>
  );
}
