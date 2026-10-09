"use client";

import { useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { useGameStore, CAMERA_TARGETS } from "@/store/gameStore";

const ISO_OFFSET = new THREE.Vector3(18, 22, 18);
const ROOM_ZOOM_OFFSET = new THREE.Vector3(10, 14, 10);

export default function CameraController() {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3());
  const cameraOffset = useRef(ISO_OFFSET.clone());
  const isAnimating = useRef(false);
  const orbitRef = useRef<any>(null);

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
      cameraOffset.current.copy(ISO_OFFSET);
    } else if (phase === "entering" || phase === "walking-to-room") {
      cameraOffset.current.copy(ISO_OFFSET);
      isAnimating.current = false;
    } else if (phase === "exploring") {
      // Animate to wide overview, then orbit controls take over
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
          // Set orbit target to center
          if (orbitRef.current) {
            orbitRef.current.target.copy(overviewPos);
            orbitRef.current.update();
          }
        },
      });
    }
  }, [phase, targetRoom, camera]);

  // Smooth follow each frame (only when not exploring and not animating)
  useFrame(() => {
    if (isAnimating.current || phase === "exploring") return;

    if (phase === "entering" || phase === "walking-to-room") {
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

  // Only enable orbit controls during exploring phase
  return (
    <OrbitControls
      ref={orbitRef}
      enabled={phase === "exploring" && !isAnimating.current}
      enablePan={false}
      enableZoom={true}
      enableRotate={true}
      minDistance={15}
      maxDistance={55}
      minPolarAngle={Math.PI * 0.15}
      maxPolarAngle={Math.PI * 0.45}
      rotateSpeed={0.5}
      zoomSpeed={0.6}
      target={[0, 0, 0]}
    />
  );
}
