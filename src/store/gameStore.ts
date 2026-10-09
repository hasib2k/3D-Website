import { create } from "zustand";
import * as THREE from "three";

// ── Room / destination types ───────────────────────────────────────
export type RoomId =
  | "reception"
  | "boss-cabin"
  | "work-studio"
  | "design-room"
  | "meeting-room";

// ── Journey phases ─────────────────────────────────────────────────
export type Phase =
  | "entering"          // avatar walks from gate → reception
  | "at-reception"      // dialog is open
  | "walking-to-room"   // receptionist leads avatar to chosen room
  | "at-room"           // camera focuses on room, content visible
  | "exploring";        // free-roam (Just Exploring)

// ── Waypoints (world-space positions) ──────────────────────────────
export const WAYPOINTS: Record<string, THREE.Vector3> = {
  gate:           new THREE.Vector3(0, 0, 18),
  "reception":    new THREE.Vector3(0, 0, 8),
  "boss-cabin":   new THREE.Vector3(-12, 0, -8),
  "work-studio":  new THREE.Vector3(12, 0, -4),
  "design-room":  new THREE.Vector3(-12, 0, 4),
  "meeting-room": new THREE.Vector3(12, 0, -12),
};

// Paths from reception to each room (through walkable waypoints)
export const ROOM_PATHS: Record<RoomId, THREE.Vector3[]> = {
  "reception":    [WAYPOINTS["reception"]],
  "boss-cabin":   [
    WAYPOINTS["reception"],
    new THREE.Vector3(-6, 0, 4),
    new THREE.Vector3(-12, 0, 0),
    WAYPOINTS["boss-cabin"],
  ],
  "work-studio":  [
    WAYPOINTS["reception"],
    new THREE.Vector3(6, 0, 0),
    WAYPOINTS["work-studio"],
  ],
  "design-room":  [
    WAYPOINTS["reception"],
    new THREE.Vector3(-6, 0, 4),
    WAYPOINTS["design-room"],
  ],
  "meeting-room": [
    WAYPOINTS["reception"],
    new THREE.Vector3(6, 0, 0),
    new THREE.Vector3(12, 0, -8),
    WAYPOINTS["meeting-room"],
  ],
};

// Camera focus points per room (slightly above the room center)
export const CAMERA_TARGETS: Record<RoomId, THREE.Vector3> = {
  "reception":    new THREE.Vector3(0, 0, 8),
  "boss-cabin":   new THREE.Vector3(-12, 0, -8),
  "work-studio":  new THREE.Vector3(12, 0, -4),
  "design-room":  new THREE.Vector3(-12, 0, 4),
  "meeting-room": new THREE.Vector3(12, 0, -12),
};

// ── Store ──────────────────────────────────────────────────────────
interface GameState {
  phase: Phase;
  targetRoom: RoomId | null;
  statusText: string;
  dialogOpen: boolean;
  showSkip: boolean;
  showRoomContent: boolean;

  // Avatar positions (updated each frame by animation system)
  avatarPos: THREE.Vector3;
  receptionistPos: THREE.Vector3;

  // Actions
  setPhase: (p: Phase) => void;
  setTargetRoom: (r: RoomId) => void;
  setStatusText: (t: string) => void;
  setDialogOpen: (o: boolean) => void;
  setShowSkip: (s: boolean) => void;
  setShowRoomContent: (s: boolean) => void;
  setAvatarPos: (p: THREE.Vector3) => void;
  setReceptionistPos: (p: THREE.Vector3) => void;
  skipToDestination: () => void;
  resetJourney: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  phase: "entering",
  targetRoom: null,
  statusText: "Welcome to the Office",
  dialogOpen: false,
  showSkip: false,
  showRoomContent: false,
  avatarPos: WAYPOINTS.gate.clone(),
  receptionistPos: WAYPOINTS["reception"].clone().add(new THREE.Vector3(1.5, 0, 0)),

  setPhase: (p) => set({ phase: p }),
  setTargetRoom: (r) => set({ targetRoom: r }),
  setStatusText: (t) => set({ statusText: t }),
  setDialogOpen: (o) => set({ dialogOpen: o }),
  setShowSkip: (s) => set({ showSkip: s }),
  setShowRoomContent: (s) => set({ showRoomContent: s }),
  setAvatarPos: (p) => set({ avatarPos: p }),
  setReceptionistPos: (p) => set({ receptionistPos: p }),
  skipToDestination: () =>
    set((state) => {
      if (!state.targetRoom) return {};
      const dest = WAYPOINTS[state.targetRoom];
      return {
        phase: "at-room",
        showSkip: false,
        showRoomContent: true,
        statusText: `Arrived at ${state.targetRoom.replace("-", " ")}`,
        avatarPos: dest.clone().add(new THREE.Vector3(1.5, 0, 1.5)),
        receptionistPos: dest.clone().add(new THREE.Vector3(-1.5, 0, 0)),
      };
    }),
  resetJourney: () =>
    set({
      phase: "entering",
      targetRoom: null,
      statusText: "Welcome to the Office",
      dialogOpen: false,
      showSkip: false,
      showRoomContent: false,
      avatarPos: WAYPOINTS.gate.clone(),
      receptionistPos: WAYPOINTS["reception"].clone().add(new THREE.Vector3(1.5, 0, 0)),
    }),
}));
