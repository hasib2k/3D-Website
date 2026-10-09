"use client";

import { useGameStore } from "@/store/gameStore";
import { clay } from "@/components/ui/clay";
import BossCabinContent from "./BossCabinContent";
import WorkStudioContent from "./WorkStudioContent";
import DesignRoomContent from "./DesignRoomContent";
import MeetingRoomContent from "./MeetingRoomContent";

const ROOM_COMPONENTS: Record<string, React.FC> = {
  "boss-cabin": BossCabinContent,
  "work-studio": WorkStudioContent,
  "design-room": DesignRoomContent,
  "meeting-room": MeetingRoomContent,
};

const ROOM_LABELS: Record<string, { title: string; icon: React.ReactNode }> = {
  "boss-cabin": {
    title: "Boss Cabin",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="#6366F1">
        <path d="M6 3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V3zm2 0v1h4V3H8zM4 8v2h12V8H4z" />
      </svg>
    ),
  },
  "work-studio": {
    title: "Work Studio",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="#0EA5E9">
        <path d="M12.316 3.051a1 1 0 0 1 .633 1.265l-4 12a1 1 0 1 1-1.898-.632l4-12a1 1 0 0 1 1.265-.633zM5.707 6.293a1 1 0 0 1 0 1.414L3.414 10l2.293 2.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0zm8.586 0a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 0 1 0-1.414z" />
      </svg>
    ),
  },
  "design-room": {
    title: "Design Room",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="#F43F5E">
        <path d="M10 2a2.5 2.5 0 0 0-2.5 2.5c0 .74.323 1.405.835 1.86L3.293 11.4a1 1 0 0 0 0 1.414l3.893 3.893a1 1 0 0 0 1.414 0l5.042-5.042A2.5 2.5 0 1 0 10 2z" />
      </svg>
    ),
  },
  "meeting-room": {
    title: "Meeting Room",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="#10B981">
        <path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1z" />
      </svg>
    ),
  },
};

export default function RoomContent() {
  const { showRoomContent, targetRoom, resetJourney } = useGameStore();

  if (!showRoomContent || !targetRoom) return null;

  const ContentComponent = ROOM_COMPONENTS[targetRoom];
  const roomInfo = ROOM_LABELS[targetRoom];
  if (!ContentComponent || !roomInfo) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-end justify-center pointer-events-none"
      style={{ padding: "0 20px 20px 20px" }}
    >
      <div className="pointer-events-auto w-full animate-in" style={{ maxWidth: 560 }}>
        <div style={{ ...clay.card, overflow: "hidden", padding: 0 }}>

          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 18px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  ...clay.iconBox,
                  width: 32,
                  height: 32,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {roomInfo.icon}
              </div>
              <h2 style={{ fontSize: 15, fontWeight: 700, color: "#2D3748" }}>
                {roomInfo.title}
              </h2>
            </div>

            <button
              onClick={resetJourney}
              style={{
                ...clay.pill,
                fontSize: 11,
                fontWeight: 600,
                color: "#64748B",
                padding: "6px 14px",
                cursor: "pointer",
                borderRadius: 50,
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, clay.pillPressed);
                e.currentTarget.style.padding = "6px 14px";
                e.currentTarget.style.cursor = "pointer";
                e.currentTarget.style.fontSize = "11px";
                e.currentTarget.style.fontWeight = "600";
                e.currentTarget.style.color = "#4338CA";
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, clay.pill);
                e.currentTarget.style.padding = "6px 14px";
                e.currentTarget.style.cursor = "pointer";
                e.currentTarget.style.fontSize = "11px";
                e.currentTarget.style.fontWeight = "600";
                e.currentTarget.style.color = "#64748B";
              }}
            >
              Back to Reception
            </button>
          </div>

          {/* Content */}
          <div style={{ padding: "4px 18px 18px 18px", maxHeight: "48vh", overflowY: "auto" }}>
            <ContentComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
