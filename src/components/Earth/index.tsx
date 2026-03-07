'use client'

import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import { useScroll, useMotionValueEvent } from "framer-motion"
import { useRef, useMemo } from "react"
import type * as THREE from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'

function EarthMesh({ color, normal, aoMap, scrollRef }: {
  color: THREE.Texture
  normal: THREE.Texture
  aoMap: THREE.Texture
  scrollRef: React.MutableRefObject<number>
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = scrollRef.current * Math.PI * 2
    }
  })
  return (
    <mesh ref={meshRef} scale={2.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
    </mesh>
  )
}

export default function Earth() {
    const [color, normal, aoMap] = useLoader(TextureLoader, [
        '/assets/color.jpg',
        '/assets/normal.png',
        '/assets/occlusion.jpg'
    ])

    const scene = useRef(null)
    const scrollProgressRef = useRef(0)
    const { scrollYProgress } = useScroll({
        target: scene,
        offset: ['start end', 'end start']
    })

    useMotionValueEvent(scrollYProgress, 'change', (v) => {
        scrollProgressRef.current = v
    })

    return (
        <Canvas ref={scene}>
            <ambientLight intensity={.1} />
            <directionalLight intensity={3.5} position={[1, 0, -.25]} />
            <EarthMesh color={color} normal={normal} aoMap={aoMap} scrollRef={scrollProgressRef} />
        </Canvas>
    )
}
