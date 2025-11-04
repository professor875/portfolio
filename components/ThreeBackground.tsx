'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
    const mountRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const mount = mountRef.current
        if (!mount) return

        // Scene
        const scene = new THREE.Scene()

        // Camera
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        camera.position.z = 5

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setClearColor(0x000000, 1) // black background
        mount.appendChild(renderer.domElement)

        // Particles
        const particles = new THREE.BufferGeometry()
        const count = 2000
        const positions = new Float32Array(count * 3)
        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10
        }
        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02 })
        const points = new THREE.Points(particles, material)
        scene.add(points)

        // Animate
        const animate = () => {
            requestAnimationFrame(animate)
            points.rotation.x -= 0.0015
            points.rotation.y -= 0.0018
            renderer.render(scene, camera)
        }
        animate()

        // Resize handling
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            mount.removeChild(renderer.domElement)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div
            ref={mountRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1,
                width: '100%',
                height: '100%',
            }}
        />
    )
}
