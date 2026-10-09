"use client";

import { Canvas } from "@react-three/fiber";
import { useGameStore } from "@/store/gameStore";
import Office from "./Office";
import Character from "./Character";
import CameraController from "./CameraController";
import WaypointNavigator from "./WaypointNavigator";
import RoomLabels from "./RoomLabels";

export default function SceneCanvas() {
  const { avatarPos, receptionistPos, phase } = useGameStore();

  const isWalking = phase === "entering" || phase === "walking-to-room";

  return (
    <Canvas
      shadows
      camera={{
        fov: 35,
        near: 0.1,
        far: 200,
        position: [18, 22, 26],
      }}
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%" }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[15, 20, 10]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={60}
        shadow-camera-left={-25}
        shadow-camera-right={25}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
      />
      <directionalLight position={[-10, 15, -10]} intensity={0.3} />
      <hemisphereLight args={["#87CEEB", "#E2E8F0", 0.4]} />

      {/* Fog for depth */}
      <fog attach="fog" args={["#e8edf2", 40, 80]} />

      {/* Office environment */}
      <Office />

      {/* Characters */}
      <Character
        position={avatarPos}
        color="#4299E1"
        label="YOU"
        labelColor="#3182CE"
        isWalking={isWalking}
      />
      <Character
        position={receptionistPos}
        color="#ED8936"
        label="RECEPTIONIST"
        labelColor="#DD6B20"
        isWalking={phase === "walking-to-room"}
      />

      {/* Room labels (visible during exploring) */}
      <RoomLabels />

      {/* Logic components */}
      <CameraController />
      <WaypointNavigator />
    </Canvas>
  );
}
