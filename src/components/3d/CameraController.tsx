"use client";

import { useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { useGameStore, CAMERA_TARGETS } from "@/store/gameStore";

/**
 * Isometric camera that:
 * - Follows the avatar during "entering" and "walking-to-room"
 * - Smoothly focuses on a specific room during "at-room"
 * - Holds steady at reception during "at-reception"
 */

const ISO_OFFSET = new THREE.Vector3(18, 22, 18); // isometric offset
const ROOM_ZOOM_OFFSET = new THREE.Vector3(10, 14, 10); // closer for room focus

export default function CameraController() {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3());
  const cameraOffset = useRef(ISO_OFFSET.clone());
  const isAnimating = useRef(false);

  const { phase, targetRoom, avatarPos } = useGameStore();

  // Set initial camera
  useEffect(() => {
    camera.position.copy(avatarPos.clone().add(ISO_OFFSET));
    camera.lookAt(avatarPos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Respond to phase changes
  useEffect(() => {
    if (phase === "at-room" && targetRoom) {
      // Animate camera to room focus
      const roomTarget = CAMERA_TARGETS[targetRoom];
      const newCamPos = roomTarget.clone().add(ROOM_ZOOM_OFFSET);

      isAnimating.current = true;
      gsap.to(camera.position, {
        x: newCamPos.x,
        y: newCamPos.y,
        z: newCamPos.z,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => {
          camera.lookAt(roomTarget);
        },
        onComplete: () => {
          isAnimating.current = false;
          targetPos.current.copy(roomTarget);
          cameraOffset.current.copy(ROOM_ZOOM_OFFSET);
        },
      });
    } else if (phase === "at-reception") {
      // Hold at reception overview
      cameraOffset.current.copy(ISO_OFFSET);
    } else if (phase === "entering" || phase === "walking-to-room") {
      // Follow mode — use full isometric offset
      cameraOffset.current.copy(ISO_OFFSET);
      isAnimating.current = false;
    } else if (phase === "exploring") {
      // Pull back to wide overview
      const overviewPos = new THREE.Vector3(0, 0, 0);
      const wideOffset = new THREE.Vector3(22, 28, 22);
      const newCamPos = overviewPos.clone().add(wideOffset);

      isAnimating.current = true;
      gsap.to(camera.position, {
        x: newCamPos.x,
        y: newCamPos.y,
        z: newCamPos.z,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => {
          camera.lookAt(overviewPos);
        },
        onComplete: () => {
          isAnimating.current = false;
          targetPos.current.copy(overviewPos);
          cameraOffset.current.copy(wideOffset);
        },
      });
    }
  }, [phase, targetRoom, camera]);

  // Smooth follow each frame (only when not doing a GSAP animation)
  useFrame(() => {
    if (isAnimating.current) return;

    if (phase === "entering" || phase === "walking-to-room") {
      // Follow the avatar
      const desiredPos = avatarPos.clone().add(cameraOffset.current);
      camera.position.lerp(desiredPos, 0.04);
      targetPos.current.lerp(avatarPos, 0.04);
      camera.lookAt(targetPos.current);
    } else if (phase === "at-reception") {
      const receptionCenter = new THREE.Vector3(0, 0, 8);
      const desiredPos = receptionCenter.clone().add(cameraOffset.current);
      camera.position.lerp(desiredPos, 0.04);
      targetPos.current.lerp(receptionCenter, 0.04);
      camera.lookAt(targetPos.current);
    }
  });

  return null;
}
