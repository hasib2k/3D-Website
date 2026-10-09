"use client";

import { useRef } from "react";
import * as THREE from "three";

// ── Reusable primitives ────────────────────────────────────────────

function Box({
  position,
  size,
  color,
}: {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
}) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Desk({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Tabletop */}
      <Box position={[0, 0.75, 0]} size={[1.8, 0.08, 0.9]} color="#8B6914" />
      {/* Legs */}
      <Box position={[-0.8, 0.37, -0.35]} size={[0.06, 0.74, 0.06]} color="#6B5310" />
      <Box position={[0.8, 0.37, -0.35]} size={[0.06, 0.74, 0.06]} color="#6B5310" />
      <Box position={[-0.8, 0.37, 0.35]} size={[0.06, 0.74, 0.06]} color="#6B5310" />
      <Box position={[0.8, 0.37, 0.35]} size={[0.06, 0.74, 0.06]} color="#6B5310" />
      {/* Monitor */}
      <Box position={[0, 1.1, -0.2]} size={[0.7, 0.45, 0.04]} color="#222" />
      <Box position={[0, 0.85, -0.2]} size={[0.08, 0.12, 0.08]} color="#333" />
    </group>
  );
}

function Chair({ position, rotation = 0 }: { position: [number, number, number]; rotation?: number }) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {/* Seat */}
      <Box position={[0, 0.45, 0]} size={[0.5, 0.06, 0.5]} color="#2D3748" />
      {/* Backrest */}
      <Box position={[0, 0.72, -0.22]} size={[0.5, 0.5, 0.06]} color="#2D3748" />
      {/* Base */}
      <mesh position={[0, 0.22, 0]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.44, 8]} />
        <meshStandardMaterial color="#555" />
      </mesh>
    </group>
  );
}

function Plant({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.2, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.25, 0.4, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[0, 0.6, 0]} castShadow>
        <sphereGeometry args={[0.35, 8, 6]} />
        <meshStandardMaterial color="#2E8B57" />
      </mesh>
    </group>
  );
}

function Bookshelf({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <Box position={[0, 0.75, 0]} size={[1.2, 1.5, 0.4]} color="#A0522D" />
      {/* Shelves */}
      <Box position={[0, 0.5, 0.02]} size={[1.1, 0.04, 0.35]} color="#8B4513" />
      <Box position={[0, 1.0, 0.02]} size={[1.1, 0.04, 0.35]} color="#8B4513" />
      {/* Books */}
      <Box position={[-0.3, 0.7, 0.02]} size={[0.08, 0.3, 0.25]} color="#E74C3C" />
      <Box position={[-0.15, 0.7, 0.02]} size={[0.08, 0.28, 0.25]} color="#3498DB" />
      <Box position={[0, 0.7, 0.02]} size={[0.08, 0.32, 0.25]} color="#2ECC71" />
      <Box position={[0.15, 0.7, 0.02]} size={[0.08, 0.26, 0.25]} color="#F39C12" />
      <Box position={[-0.2, 1.2, 0.02]} size={[0.08, 0.28, 0.25]} color="#9B59B6" />
      <Box position={[0.1, 1.2, 0.02]} size={[0.08, 0.3, 0.25]} color="#1ABC9C" />
    </group>
  );
}

function Whiteboard({ position, rotation = 0 }: { position: [number, number, number]; rotation?: number }) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <Box position={[0, 1.3, 0]} size={[2, 1.2, 0.06]} color="#F5F5F5" />
      <Box position={[0, 1.3, -0.04]} size={[2.1, 1.3, 0.04]} color="#777" />
    </group>
  );
}

// ── Room sections ──────────────────────────────────────────────────

function ReceptionArea() {
  return (
    <group position={[0, 0, 8]}>
      {/* Reception desk - large L-shaped counter */}
      <Box position={[0, 0.5, 0]} size={[3.5, 1, 0.8]} color="#5B4A3F" />
      <Box position={[-1.55, 0.5, -0.8]} size={[0.8, 1, 0.8]} color="#5B4A3F" />
      {/* Counter top */}
      <Box position={[0, 1.02, 0]} size={[3.6, 0.06, 0.85]} color="#6B5A4F" />
      {/* Monitor on reception */}
      <Box position={[-0.5, 1.35, -0.1]} size={[0.6, 0.4, 0.04]} color="#222" />
      <Box position={[-0.5, 1.1, -0.1]} size={[0.06, 0.12, 0.06]} color="#333" />
      {/* Decorative sign */}
      <Box position={[0, 2.2, -1.5]} size={[4, 0.6, 0.1]} color="#1a365d" />
      <Chair position={[0, 0, -0.8]} />
      <Plant position={[2.5, 0, 1]} />
      <Plant position={[-2.5, 0, 1]} />
      {/* Waiting area sofa */}
      <Box position={[4, 0.3, 1.5]} size={[1.8, 0.35, 0.8]} color="#4A5568" />
      <Box position={[4, 0.6, 1.9]} size={[1.8, 0.35, 0.12]} color="#4A5568" />
    </group>
  );
}

function BossCabin() {
  return (
    <group position={[-12, 0, -8]}>
      {/* Walls */}
      <Box position={[0, 1.5, -3]} size={[8, 3, 0.15]} color="#E2E8F0" />
      <Box position={[-4, 1.5, 0]} size={[0.15, 3, 6]} color="#E2E8F0" />
      {/* Executive desk */}
      <Box position={[0, 0.75, -1]} size={[3, 0.08, 1.4]} color="#4A3728" />
      <Box position={[-1.4, 0.37, -1.6]} size={[0.06, 0.74, 0.06]} color="#3A2718" />
      <Box position={[1.4, 0.37, -1.6]} size={[0.06, 0.74, 0.06]} color="#3A2718" />
      <Box position={[-1.4, 0.37, -0.4]} size={[0.06, 0.74, 0.06]} color="#3A2718" />
      <Box position={[1.4, 0.37, -0.4]} size={[0.06, 0.74, 0.06]} color="#3A2718" />
      {/* Large monitor */}
      <Box position={[0, 1.2, -1.5]} size={[0.9, 0.55, 0.04]} color="#1a1a1a" />
      <Box position={[0, 0.88, -1.5]} size={[0.08, 0.18, 0.08]} color="#333" />
      {/* Executive chair */}
      <Box position={[0, 0.5, 0]} size={[0.6, 0.08, 0.6]} color="#1A202C" />
      <Box position={[0, 0.82, 0.28]} size={[0.6, 0.6, 0.08]} color="#1A202C" />
      {/* Guest chairs */}
      <Chair position={[-1, 0, 1.5]} />
      <Chair position={[1, 0, 1.5]} />
      <Bookshelf position={[-3.5, 0, -1]} />
      <Plant position={[3, 0, -2]} />
      {/* Nameplate */}
      <Box position={[0, 0.82, -0.3]} size={[0.5, 0.12, 0.08]} color="#DAA520" />
      {/* Floor carpet */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[6, 5]} />
        <meshStandardMaterial color="#2D3748" />
      </mesh>
    </group>
  );
}

function WorkStudio() {
  return (
    <group position={[12, 0, -4]}>
      {/* Walls */}
      <Box position={[0, 1.5, -4]} size={[8, 3, 0.15]} color="#E2E8F0" />
      <Box position={[4, 1.5, -1]} size={[0.15, 3, 6]} color="#E2E8F0" />
      {/* Multiple workstations */}
      <Desk position={[-2, 0, -1]} />
      <Chair position={[-2, 0, 0]} />
      <Desk position={[1, 0, -1]} />
      <Chair position={[1, 0, 0]} />
      <Desk position={[-2, 0, -3]} />
      <Chair position={[-2, 0, -2]} />
      <Desk position={[1, 0, -3]} />
      <Chair position={[1, 0, -2]} />
      {/* Whiteboard */}
      <Whiteboard position={[0, 0, -3.8]} />
      <Plant position={[3, 0, 1]} />
    </group>
  );
}

function DesignRoom() {
  return (
    <group position={[-12, 0, 4]}>
      {/* Walls */}
      <Box position={[-4, 1.5, 1]} size={[0.15, 3, 6]} color="#E2E8F0" />
      <Box position={[0, 1.5, 4]} size={[8, 3, 0.15]} color="#E2E8F0" />
      {/* Large drawing table */}
      <Box position={[0, 0.7, 1]} size={[3, 0.06, 2]} color="#DDD" />
      <Box position={[-1.4, 0.35, 0]} size={[0.06, 0.7, 0.06]} color="#888" />
      <Box position={[1.4, 0.35, 0]} size={[0.06, 0.7, 0.06]} color="#888" />
      <Box position={[-1.4, 0.35, 2]} size={[0.06, 0.7, 0.06]} color="#888" />
      <Box position={[1.4, 0.35, 2]} size={[0.06, 0.7, 0.06]} color="#888" />
      {/* Color swatches on wall */}
      <Box position={[-3.8, 1.5, 1]} size={[0.05, 0.3, 0.3]} color="#E74C3C" />
      <Box position={[-3.8, 1.5, 1.5]} size={[0.05, 0.3, 0.3]} color="#3498DB" />
      <Box position={[-3.8, 1.5, 2]} size={[0.05, 0.3, 0.3]} color="#F1C40F" />
      <Box position={[-3.8, 1.1, 1]} size={[0.05, 0.3, 0.3]} color="#2ECC71" />
      <Box position={[-3.8, 1.1, 1.5]} size={[0.05, 0.3, 0.3]} color="#9B59B6" />
      <Box position={[-3.8, 1.1, 2]} size={[0.05, 0.3, 0.3]} color="#E67E22" />
      {/* Drafting stools */}
      <Chair position={[-1, 0, 2.5]} />
      <Chair position={[1, 0, 2.5]} />
      {/* Tablet / drawing pad on table */}
      <Box position={[-0.5, 0.76, 1]} size={[0.6, 0.02, 0.4]} color="#2C3E50" />
      <Plant position={[3, 0, 3]} />
    </group>
  );
}

function MeetingRoom() {
  return (
    <group position={[12, 0, -12]}>
      {/* Walls */}
      <Box position={[4, 1.5, -2]} size={[0.15, 3, 6]} color="#E2E8F0" />
      <Box position={[0, 1.5, -5]} size={[8, 3, 0.15]} color="#E2E8F0" />
      {/* Conference table */}
      <Box position={[0, 0.72, -2]} size={[3.5, 0.08, 1.6]} color="#5B4A3F" />
      <Box position={[-1.5, 0.36, -2]} size={[0.1, 0.72, 0.1]} color="#4A3A2F" />
      <Box position={[1.5, 0.36, -2]} size={[0.1, 0.72, 0.1]} color="#4A3A2F" />
      {/* Chairs around table */}
      <Chair position={[-1.2, 0, -0.8]} />
      <Chair position={[0, 0, -0.8]} />
      <Chair position={[1.2, 0, -0.8]} />
      <Chair position={[-1.2, 0, -3.2]} rotation={Math.PI} />
      <Chair position={[0, 0, -3.2]} rotation={Math.PI} />
      <Chair position={[1.2, 0, -3.2]} rotation={Math.PI} />
      {/* Projector screen */}
      <Whiteboard position={[0, 0, -4.8]} />
      {/* Projector */}
      <Box position={[0, 2.8, -2]} size={[0.4, 0.2, 0.3]} color="#555" />
      <Plant position={[-3, 0, -4]} />
    </group>
  );
}

// ── Floor & Outer structure ────────────────────────────────────────

function FloorAndWalls() {
  return (
    <group>
      {/* Main floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#CBD5E0" />
      </mesh>

      {/* Office carpet area */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, -2]} receiveShadow>
        <planeGeometry args={[32, 28]} />
        <meshStandardMaterial color="#EDF2F7" />
      </mesh>

      {/* Outer walls */}
      <Box position={[0, 1.5, -16]} size={[34, 3, 0.2]} color="#CBD5E0" />
      <Box position={[-17, 1.5, 0]} size={[0.2, 3, 32]} color="#CBD5E0" />
      <Box position={[17, 1.5, 0]} size={[0.2, 3, 32]} color="#CBD5E0" />
      {/* Front wall with gap for entrance */}
      <Box position={[-10, 1.5, 16]} size={[14, 3, 0.2]} color="#CBD5E0" />
      <Box position={[10, 1.5, 16]} size={[14, 3, 0.2]} color="#CBD5E0" />
      {/* Entrance pillars */}
      <Box position={[-3, 1.5, 16]} size={[0.4, 3, 0.4]} color="#A0AEC0" />
      <Box position={[3, 1.5, 16]} size={[0.4, 3, 0.4]} color="#A0AEC0" />

      {/* Walkway line markers on floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.015, 12]} receiveShadow>
        <planeGeometry args={[1.5, 8]} />
        <meshStandardMaterial color="#E2E8F0" />
      </mesh>
    </group>
  );
}

// ── Main Office component ──────────────────────────────────────────

export default function Office() {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef}>
      <FloorAndWalls />
      <ReceptionArea />
      <BossCabin />
      <WorkStudio />
      <DesignRoom />
      <MeetingRoom />

      {/* Room label signs (floating above each room) */}
      {/* These are handled by HTML overlays in the UI layer */}
    </group>
  );
}
