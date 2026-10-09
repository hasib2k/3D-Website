"use client";

import { useGameStore, type RoomId } from "@/store/gameStore";
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

export default function RoomContent() {
  const { showRoomContent, targetRoom, resetJourney } = useGameStore();

  if (!showRoomContent || !targetRoom) return null;

  const ContentComponent = ROOM_COMPONENTS[targetRoom];
  if (!ContentComponent) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center pointer-events-none">
      <div className="pointer-events-auto w-full max-w-2xl mx-4 mb-6 animate-in slide-in-from-bottom duration-500">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 capitalize">
              {targetRoom.replace("-", " ")}
            </h2>
            <button
              onClick={resetJourney}
              className="text-xs font-medium text-gray-500 hover:text-blue-500
                         bg-gray-100 hover:bg-blue-50 px-3 py-1.5 rounded-full
                         transition-all duration-200"
            >
              ← Back to Reception
            </button>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[50vh] overflow-y-auto">
            <ContentComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
