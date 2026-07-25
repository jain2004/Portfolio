"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function DataNetwork() {
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate an abstract grid network
  const { positions, colors } = useMemo(() => {
    const points = [];
    const colors = [];
    const size = 20;
    const segments = 40;
    const halfSize = size / 2;

    for (let i = 0; i <= segments; i++) {
      const x = (i * size) / segments - halfSize;
      
      // Horizontal lines
      points.push(x, 0, -halfSize);
      points.push(x, 0, halfSize);
      
      // Vertical lines
      points.push(-halfSize, 0, x);
      points.push(halfSize, 0, x);

      // Colors (fading out at edges)
      const alpha = 1 - Math.abs(x / halfSize);
      colors.push(0, 0, 0, alpha * 0.2); // Start point
      colors.push(0, 0, 0, 0);           // End point
      colors.push(0, 0, 0, alpha * 0.2);
      colors.push(0, 0, 0, 0);
    }
    return {
      positions: new Float32Array(points),
      colors: new Float32Array(colors)
    };
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      // Create a flowing wave effect through the grid
      const time = state.clock.getElapsedTime();
      const positions = linesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        // Only distort the y-axis
        positions[i + 1] = Math.sin(x * 0.5 + time) * 0.5 + Math.cos(z * 0.5 + time * 0.8) * 0.5;
      }
      linesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group rotation={[Math.PI / 6, Math.PI / 4, 0]}>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 4]} />
        </bufferGeometry>
        <lineBasicMaterial vertexColors transparent depthWrite={false} linewidth={1} />
      </lineSegments>
    </group>
  );
}

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply">
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <DataNetwork />
      </Canvas>
    </div>
  );
}
