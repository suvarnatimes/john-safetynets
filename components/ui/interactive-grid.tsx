"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useAnimationFrame, useMotionValue, useSpring } from "framer-motion"

interface InteractiveGridProps {
    className?: string
    cellCount?: number
    repelRadius?: number
    repelStrength?: number
    waveSpeed?: number
    waveAmplitude?: number
}

export const InteractiveGrid: React.FC<InteractiveGridProps> = ({
    className,
    cellCount = 18,
    repelRadius = 200,
    repelStrength = 50,
    waveSpeed = 0.001,
    waveAmplitude = 15,
}) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    const mouseX = useMotionValue(-1000)
    const mouseY = useMotionValue(-1000)
    const time = useMotionValue(0)

    useAnimationFrame((t) => {
        time.set(t * waveSpeed)
    })

    useEffect(() => {
        if (!containerRef.current) return

        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight,
                })
            }
        }

        updateDimensions()
        window.addEventListener("resize", updateDimensions)
        return () => window.removeEventListener("resize", updateDimensions)
    }, [])

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
    }

    const handleMouseLeave = () => {
        mouseX.set(-1000)
        mouseY.set(-1000)
    }

    const cellSize = dimensions.width / cellCount
    const cols = cellCount
    const rows = Math.ceil(dimensions.height / cellSize)

    const hLines = []
    for (let y = 0; y <= rows; y++) {
        const points = []
        const segments = 10 // Sub-divide lines for smoother waves
        for (let x = 0; x <= segments; x++) {
            points.push({
                x: (x * dimensions.width) / segments,
                y: y * cellSize,
                baseX: (x * dimensions.width) / segments,
                baseY: y * cellSize
            })
        }
        hLines.push(points)
    }

    const vLines = []
    for (let x = 0; x <= cols; x++) {
        const points = []
        const segments = 10
        for (let y = 0; y <= segments; y++) {
            points.push({
                x: x * cellSize,
                y: (y * dimensions.height) / segments,
                baseX: x * cellSize,
                baseY: (y * dimensions.height) / segments
            })
        }
        vLines.push(points)
    }

    if (dimensions.width === 0) return <div ref={containerRef} className={className} style={{ position: "absolute", inset: 0 }} />

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
            style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "all" }}
        >
            <svg
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
            >
                {hLines.map((points, i) => (
                    <InteractivePath
                        key={`h-${i}`}
                        points={points}
                        mouseX={mouseX}
                        mouseY={mouseY}
                        time={time}
                        repelRadius={repelRadius}
                        repelStrength={repelStrength}
                        amplitude={waveAmplitude}
                    />
                ))}
                {vLines.map((points, i) => (
                    <InteractivePath
                        key={`v-${i}`}
                        points={points}
                        mouseX={mouseX}
                        mouseY={mouseY}
                        time={time}
                        repelRadius={repelRadius}
                        repelStrength={repelStrength}
                        amplitude={waveAmplitude}
                    />
                ))}
            </svg>
        </div>
    )
}

const InteractivePath = ({
    points,
    mouseX,
    mouseY,
    time,
    repelRadius,
    repelStrength,
    amplitude,
}: {
    points: { x: number; y: number; baseX: number; baseY: number }[]
    mouseX: any
    mouseY: any
    time: any
    repelRadius: number
    repelStrength: number
    amplitude: number
}) => {
    const pathRef = useRef<SVGPathElement>(null)

    useAnimationFrame(() => {
        if (!pathRef.current) return

        const mx = mouseX.get()
        const my = mouseY.get()
        const t = time.get()

        const newPoints = points.map((p) => {
            // 1. Base Animated Wave (Organic flow)
            const waveX = Math.sin(t + p.baseY * 0.01) * amplitude * 0.5
            const waveY = Math.cos(t + p.baseX * 0.01) * amplitude * 0.5

            const currentX = p.baseX + waveX
            const currentY = p.baseY + waveY

            // 2. Mouse Repel
            const dx = currentX - mx
            const dy = currentY - my
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < repelRadius) {
                const angle = Math.atan2(dy, dx)
                const force = (1 - distance / repelRadius) * repelStrength
                return {
                    x: currentX + Math.cos(angle) * force,
                    y: currentY + Math.sin(angle) * force,
                }
            }

            return { x: currentX, y: currentY }
        })

        const pathData = newPoints.reduce((acc, p, i) => {
            return acc + `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)} `
        }, "")

        pathRef.current.setAttribute("d", pathData)
    })

    return (
        <path
            ref={pathRef}
            d="" // Initialize with empty path
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-blue-600/25"
            style={{ transition: "stroke 0.3s ease" }}
        />
    )
}
