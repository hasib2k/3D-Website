"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

interface CharacterProps {
  position: THREE.Vector3;
  color: string;
  label: string;
  labelColor: string;
  isWalking?: boolean;
}

export default function Character({
  position,
  color,
  label,
  labelColor,
  isWalking = false,
}: CharacterProps) {
  const groupRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  const leftLegRef = useRef<THREE.Mesh>(null);
  const rightLegRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Smoothly lerp to target position
    groupRef.current.position.lerp(position, 0.15);

    // Walking animation
    if (isWalking) {
      const t = state.clock.elapsedTime * 6;
      const swing = Math.sin(t) * 0.4;

      if (leftLegRef.current) leftLegRef.current.rotation.x = swing;
      if (rightLegRef.current) rightLegRef.current.rotation.x = -swing;
      if (leftArmRef.current) leftArmRef.current.rotation.x = -swing * 0.6;
      if (rightArmRef.current) rightArmRef.current.rotation.x = swing * 0.6;

      // Subtle body bob
      if (bodyRef.current) {
        bodyRef.current.position.y = 1.05 + Math.abs(Math.sin(t)) * 0.04;
      }
    } else {
      // Reset to idle
      if (leftLegRef.current) leftLegRef.current.rotation.x = 0;
      if (rightLegRef.current) rightLegRef.current.rotation.x = 0;
      if (leftArmRef.current) leftArmRef.current.rotation.x = 0;
      if (rightArmRef.current) rightArmRef.current.rotation.x = 0;
      if (bodyRef.current) bodyRef.current.position.y = 1.05;
    }
  });

  const skinColor = "#FDBCB4";
  const darkerColor = new THREE.Color(color).multiplyScalar(0.8).getStyle();

  return (
    <group ref={groupRef} position={position.clone()}>
      {/* Head */}
      <mesh position={[0, 1.65, 0]} castShadow>
        <sphereGeometry args={[0.18, 12, 10]} />
        <meshStandardMaterial color={skinColor} />
      </mesh>

      {/* Hair */}
      <mesh position={[0, 1.78, -0.02]} castShadow>
        <sphereGeometry args={[0.16, 10, 8]} />
        <meshStandardMaterial color={darkerColor} />
      </mesh>

      {/* Body / Torso */}
      <mesh ref={bodyRef} position={[0, 1.05, 0]} castShadow>
        <capsuleGeometry args={[0.18, 0.45, 8, 12]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Left Arm */}
      <mesh ref={leftArmRef} position={[-0.3, 1.2, 0]} castShadow>
        <capsuleGeometry args={[0.06, 0.35, 6, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Right Arm */}
      <mesh ref={rightArmRef} position={[0.3, 1.2, 0]} castShadow>
        <capsuleGeometry args={[0.06, 0.35, 6, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Left Leg */}
      <mesh ref={leftLegRef} position={[-0.1, 0.4, 0]} castShadow>
        <capsuleGeometry args={[0.07, 0.35, 6, 8]} />
        <meshStandardMaterial color="#4A5568" />
      </mesh>

      {/* Right Leg */}
      <mesh ref={rightLegRef} position={[0.1, 0.4, 0]} castShadow>
        <capsuleGeometry args={[0.07, 0.35, 6, 8]} />
        <meshStandardMaterial color="#4A5568" />
      </mesh>

      {/* Shoes */}
      <mesh position={[-0.1, 0.08, 0.04]} castShadow>
        <boxGeometry args={[0.12, 0.08, 0.2]} />
        <meshStandardMaterial color="#2D3748" />
      </mesh>
      <mesh position={[0.1, 0.08, 0.04]} castShadow>
        <boxGeometry args={[0.12, 0.08, 0.2]} />
        <meshStandardMaterial color="#2D3748" />
      </mesh>

      {/* Floating label */}
      <Html position={[0, 2.2, 0]} center distanceFactor={15} zIndexRange={[100, 0]}>
        <div
          className="px-3 py-1 rounded-full text-white text-xs font-bold whitespace-nowrap shadow-lg pointer-events-none select-none"
          style={{ backgroundColor: labelColor }}
        >
          {label}
        </div>
      </Html>
    </group>
  );
}
