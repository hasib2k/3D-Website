"use client";

import { useRef, useEffect, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import {
  useGameStore,
  WAYPOINTS,
  ROOM_PATHS,
  type RoomId,
} from "@/store/gameStore";

const WALK_SPEED = 3.5; // units per second

/**
 * Invisible component that drives the avatar and receptionist along
 * waypoint paths using GSAP timelines, and updates the Zustand store
 * each frame so other components (camera, UI) stay in sync.
 */
export default function WaypointNavigator() {
  const avatarObj = useRef(new THREE.Vector3().copy(WAYPOINTS.gate));
  const receptionistObj = useRef(
    new THREE.Vector3().copy(WAYPOINTS.reception).add(new THREE.Vector3(1.5, 0, 0))
  );
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const phaseHandled = useRef<string>("");

  const {
    phase,
    targetRoom,
    setPhase,
    setStatusText,
    setDialogOpen,
    setShowSkip,
    setShowRoomContent,
    setAvatarPos,
    setReceptionistPos,
  } = useGameStore();

  // Helper: duration between two points at WALK_SPEED
  const walkDuration = useCallback((a: THREE.Vector3, b: THREE.Vector3) => {
    return a.distanceTo(b) / WALK_SPEED;
  }, []);

  // ── Phase: entering (gate → reception) ───────────────────────────
  useEffect(() => {
    if (phase !== "entering" || phaseHandled.current === "entering") return;
    phaseHandled.current = "entering";

    setStatusText("Walking to reception...");

    const start = WAYPOINTS.gate;
    const end = WAYPOINTS.reception.clone().add(new THREE.Vector3(0, 0, 2));

    const tl = gsap.timeline({
      onComplete: () => {
        setPhase("at-reception");
        setStatusText("At the reception desk");
        setDialogOpen(true);
        phaseHandled.current = "";
      },
    });

    tl.to(avatarObj.current, {
      x: end.x,
      y: end.y,
      z: end.z,
      duration: walkDuration(start, end),
      ease: "none",
    });

    timelineRef.current = tl;
  }, [phase, setPhase, setStatusText, setDialogOpen, walkDuration]);

  // ── Phase: walking-to-room ───────────────────────────────────────
  useEffect(() => {
    if (phase !== "walking-to-room" || !targetRoom || phaseHandled.current === "walking-to-room") return;
    phaseHandled.current = "walking-to-room";

    const roomName = targetRoom.replace("-", " ");
    setStatusText(`Walking to ${roomName}...`);
    setShowSkip(true);

    const path = ROOM_PATHS[targetRoom as RoomId];
    if (!path || path.length === 0) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setPhase("at-room");
        setStatusText(`Arrived at ${roomName}`);
        setShowSkip(false);
        setShowRoomContent(true);
        phaseHandled.current = "";
      },
    });

    // Receptionist walks first (slightly ahead), avatar follows with delay
    let prevR = receptionistObj.current.clone();
    let prevA = avatarObj.current.clone();

    for (let i = 0; i < path.length; i++) {
      const wp = path[i];
      const rTarget = wp.clone().add(new THREE.Vector3(0.8, 0, -0.5));
      const aTarget = wp.clone().add(new THREE.Vector3(-0.8, 0, 0.5));

      const rDur = walkDuration(prevR, rTarget);
      const aDur = walkDuration(prevA, aTarget);

      // Receptionist moves
      tl.to(
        receptionistObj.current,
        {
          x: rTarget.x,
          y: rTarget.y,
          z: rTarget.z,
          duration: rDur,
          ease: "none",
        },
        i === 0 ? 0 : `>-0.3`
      );

      // Avatar follows with slight delay
      tl.to(
        avatarObj.current,
        {
          x: aTarget.x,
          y: aTarget.y,
          z: aTarget.z,
          duration: aDur,
          ease: "none",
        },
        i === 0 ? 0.4 : `>-0.5`
      );

      prevR = rTarget;
      prevA = aTarget;
    }

    timelineRef.current = tl;
  }, [phase, targetRoom, setPhase, setStatusText, setShowSkip, setShowRoomContent, walkDuration]);

  // ── Phase: exploring (just free text) ────────────────────────────
  useEffect(() => {
    if (phase !== "exploring" || phaseHandled.current === "exploring") return;
    phaseHandled.current = "exploring";
    setStatusText("Exploring the office...");
    setShowRoomContent(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // Kill timeline on skip
  useEffect(() => {
    const unsub = useGameStore.subscribe((state, prev) => {
      if (state.phase === "at-room" && prev.phase === "walking-to-room") {
        // Skip was pressed — kill running timeline
        if (timelineRef.current) {
          timelineRef.current.kill();
          timelineRef.current = null;
        }
        if (state.targetRoom) {
          const dest = WAYPOINTS[state.targetRoom];
          avatarObj.current.copy(dest.clone().add(new THREE.Vector3(1.5, 0, 1.5)));
          receptionistObj.current.copy(dest.clone().add(new THREE.Vector3(-1.5, 0, 0)));
        }
      }
    });
    return unsub;
  }, []);

  // ── Sync positions into store every frame ────────────────────────
  useFrame(() => {
    setAvatarPos(avatarObj.current.clone());
    setReceptionistPos(receptionistObj.current.clone());
  });

  return null; // invisible logic component
}
