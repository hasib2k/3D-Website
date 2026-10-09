"use client";

import { useGameStore } from "@/store/gameStore";
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
      <svg width="18" height="18" viewBox="0 0 20 20" fill="#6366F1">
        <path d="M6 3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V3zm2 0v1h4V3H8zM4 8v2h12V8H4z" />
      </svg>
    ),
  },
  "work-studio": {
    title: "Work Studio",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="#0EA5E9">
        <path d="M12.316 3.051a1 1 0 0 1 .633 1.265l-4 12a1 1 0 1 1-1.898-.632l4-12a1 1 0 0 1 1.265-.633zM5.707 6.293a1 1 0 0 1 0 1.414L3.414 10l2.293 2.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0zm8.586 0a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 0 1 0-1.414z" />
      </svg>
    ),
  },
  "design-room": {
    title: "Design Room",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="#F43F5E">
        <path d="M10 2a2.5 2.5 0 0 0-2.5 2.5c0 .74.323 1.405.835 1.86L3.293 11.4a1 1 0 0 0 0 1.414l3.893 3.893a1 1 0 0 0 1.414 0l5.042-5.042A2.5 2.5 0 1 0 10 2zM4.707 12.107L10 6.814l3.186 3.186-5.293 5.293-3.186-3.186z" />
      </svg>
    ),
  },
  "meeting-room": {
    title: "Meeting Room",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="#10B981">
        <path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm12.5-1c-.17 0-.33-.02-.5-.05C14.26 12.13 15 11 15 10c0-1.54-1.06-2.84-2.5-3.22.5-.48 1.17-.78 1.92-.78C16.4 6 18 7.6 18 9.5S16.4 13 14.5 13h-1z" />
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
      <div
        className="pointer-events-auto w-full animate-in"
        style={{ maxWidth: 560 }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(20px)",
            borderRadius: 20,
            boxShadow: "0 20px 50px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.04)",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: "1px solid #F3F4F6",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "#F9FAFB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {roomInfo.icon}
              </div>
              <h2
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#111827",
                }}
              >
                {roomInfo.title}
              </h2>
            </div>

            <button
              onClick={resetJourney}
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#6B7280",
                background: "#F3F4F6",
                border: "none",
                padding: "6px 14px",
                borderRadius: 20,
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#EEF2FF";
                e.currentTarget.style.color = "#4F46E5";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#F3F4F6";
                e.currentTarget.style.color = "#6B7280";
              }}
            >
              Back to Reception
            </button>
          </div>

          {/* Content */}
          <div
            style={{
              padding: 20,
              maxHeight: "48vh",
              overflowY: "auto",
            }}
          >
            <ContentComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
