"use client";

import { useMemo, useRef, useSyncExternalStore } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useOrbState } from "./useOrbState";
import styles from "./orb.module.css";

const PARTICLE_COUNT = 8_000;
const subscribeToHydration = () => () => undefined;

function ParticleOrb() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const state = useOrbState((store) => store.state);
  const volume = useOrbState((store) => store.volume);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const target = useMemo(() => new THREE.Vector3(), []);
  const color = useMemo(() => new THREE.Color(), []);
  const positions = useMemo(
    () => Array.from({ length: PARTICLE_COUNT }, (_, index) => {
      const fraction = (index + 0.5) / PARTICLE_COUNT;
      const y = 1 - 2 * fraction;
      const radial = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = 2.399963229728653 * index;

      return new THREE.Vector3(
        radial * Math.cos(theta) * 58,
        y * 58,
        radial * Math.sin(theta) * 58,
      );
    }),
    [],
  );
  const material = useMemo(() => new THREE.MeshBasicMaterial({ color: "#ffffff", transparent: true, opacity: 0.92 }), []);
  const geometry = useMemo(() => new THREE.TetrahedronGeometry(0.22), []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const time = clock.getElapsedTime();
    const config = state === "listening"
      ? { flow: 0.72, turbulence: 0.36 + volume * 0.34, hue: 0.46 }
      : state === "thinking"
        ? { flow: 1.35, turbulence: 0.62, hue: 0.12 }
        : state === "speaking"
          ? { flow: 0.18, turbulence: 0.5 + volume * 0.16, hue: 0.78 }
          : { flow: 0.42, turbulence: 0.24, hue: 0.62 };
    const t = time * config.flow;

    for (let index = 0; index < PARTICLE_COUNT; index += 1) {
      const fraction = (index + 0.5) / PARTICLE_COUNT;
      const y = 1 - 2 * fraction;
      const radial = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = 2.399963229728653 * index;
      const x = radial * Math.cos(theta);
      const z = radial * Math.sin(theta);
      const waveOne = Math.sin(x * 3.2 + t * 1.7 + Math.cos(z * 2.1 - t)) * Math.cos(y * 2.4 - t * 1.3);
      const waveTwo = Math.sin(z * 4.1 - t * 1.1 + Math.cos(x * 2.7 + t)) * Math.cos(y * 3.1 + t);
      const breath = 1 + 0.055 * Math.sin(t * 1.4) + 0.025 * Math.sin(t * 2.8 + 1.2);
      const turn = t * 0.24;
      const rotatedX = x * Math.cos(turn) - z * Math.sin(turn);
      const rotatedZ = x * Math.sin(turn) + z * Math.cos(turn);
      const distortion = config.turbulence * 0.24;

      target.set(
        (rotatedX + waveOne * distortion) * 58 * breath,
        (y + waveTwo * distortion * 1.15) * 58 * breath,
        (rotatedZ + (waveOne - waveTwo) * distortion * 0.48) * 58 * breath,
      );
      positions[index].lerp(target, 0.095);
      dummy.position.copy(positions[index]);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(index, dummy.matrix);

      const swirl = 0.5 + 0.5 * Math.sin(y * 2 + rotatedX * 1.4 + t * 1.3 + waveOne * 2);
      color.setHSL((config.hue + swirl * 0.18 + 0.035 * Math.sin(t + fraction * 6.28)) % 1, 0.78 + swirl * 0.17, 0.52 + swirl * 0.22);
      meshRef.current.setColorAt(index, color);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return <instancedMesh ref={meshRef} args={[geometry, material, PARTICLE_COUNT]} />;
}

export function Orb() {
  const state = useOrbState((store) => store.state);
  const hasHydrated = useSyncExternalStore(subscribeToHydration, () => true, () => false);

  return (
    <div className={styles.wrap}>
      <div className={styles.stage} aria-label="Animated TR Fastenings voice assistant orb">
        {hasHydrated && (
          <Canvas camera={{ position: [0, 0, 315], fov: 45 }} gl={{ alpha: true, antialias: true }} onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}>
            <group scale={1.79}><ParticleOrb /></group>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={state === "thinking" ? 2.8 : 0.85} />
          </Canvas>
        )}
      </div>
      <div className={styles.statusLabel} aria-live="polite">
        {state === "idle" && <span className={styles.idleText}>Tap to start</span>}
        {state === "listening" && <span className={styles.listeningText}>Listening…</span>}
        {state === "thinking" && <span className={styles.thinkingText}>Thinking…</span>}
      </div>
    </div>
  );
}
