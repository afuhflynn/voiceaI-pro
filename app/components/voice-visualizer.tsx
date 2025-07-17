"use client"

import { useEffect, useRef } from "react"

interface VoiceVisualizerProps {
  isListening: boolean
  isSpeaking: boolean
  audioLevel: number
  agentStatus: string
}

export function VoiceVisualizer({ isListening, isSpeaking, audioLevel, agentStatus }: VoiceVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<
    Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
      size: number
    }>
  >([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    const centerX = width / 2
    const centerY = height / 2

    // Initialize particles
    if (particlesRef.current.length === 0) {
      for (let i = 0; i < 50; i++) {
        particlesRef.current.push({
          x: centerX,
          y: centerY,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: Math.random() * 100,
          maxLife: 100,
          size: Math.random() * 3 + 1,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Get colors based on status
      const getStatusColors = () => {
        switch (agentStatus) {
          case "listening":
            return {
              primary: "59, 130, 246",
              secondary: "37, 99, 235",
              accent: "147, 197, 253",
            }
          case "thinking":
            return {
              primary: "147, 51, 234",
              secondary: "126, 34, 206",
              accent: "196, 181, 253",
            }
          case "speaking":
            return {
              primary: "16, 185, 129",
              secondary: "5, 150, 105",
              accent: "110, 231, 183",
            }
          case "processing":
            return {
              primary: "245, 158, 11",
              secondary: "217, 119, 6",
              accent: "253, 230, 138",
            }
          default:
            return {
              primary: "107, 114, 128",
              secondary: "75, 85, 99",
              accent: "156, 163, 175",
            }
        }
      }

      const colors = getStatusColors()
      const time = Date.now() * 0.001
      const level = isListening ? audioLevel : isSpeaking ? Math.sin(time * 3) * 0.3 + 0.7 : 0.3

      // Draw background glow
      const glowGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 150)
      glowGradient.addColorStop(0, `rgba(${colors.primary}, ${0.1 + level * 0.2})`)
      glowGradient.addColorStop(0.5, `rgba(${colors.primary}, ${0.05 + level * 0.1})`)
      glowGradient.addColorStop(1, `rgba(${colors.primary}, 0)`)
      ctx.fillStyle = glowGradient
      ctx.fillRect(0, 0, width, height)

      // Draw main orb
      const mainRadius = 50 + level * 20
      const orbGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, mainRadius)
      orbGradient.addColorStop(0, `rgba(${colors.accent}, 0.9)`)
      orbGradient.addColorStop(0.7, `rgba(${colors.primary}, 0.8)`)
      orbGradient.addColorStop(1, `rgba(${colors.secondary}, 0.6)`)

      ctx.beginPath()
      ctx.arc(centerX, centerY, mainRadius, 0, 2 * Math.PI)
      ctx.fillStyle = orbGradient
      ctx.fill()

      // Draw pulsing rings
      if (isListening || isSpeaking || agentStatus === "thinking") {
        for (let i = 1; i <= 4; i++) {
          const ringRadius = mainRadius + i * 25 + Math.sin(time * 2 + i) * 10
          const opacity = (1 - i * 0.2) * (0.3 + level * 0.4)

          ctx.beginPath()
          ctx.arc(centerX, centerY, ringRadius, 0, 2 * Math.PI)
          ctx.strokeStyle = `rgba(${colors.primary}, ${opacity})`
          ctx.lineWidth = 3
          ctx.stroke()
        }
      }

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update particle
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life--

        // Reset particle if dead
        if (particle.life <= 0) {
          const angle = Math.random() * Math.PI * 2
          const distance = Math.random() * 30
          particle.x = centerX + Math.cos(angle) * distance
          particle.y = centerY + Math.sin(angle) * distance
          particle.vx = (Math.random() - 0.5) * 4
          particle.vy = (Math.random() - 0.5) * 4
          particle.life = particle.maxLife
        }

        // Draw particle
        const alpha = (particle.life / particle.maxLife) * (0.3 + level * 0.5)
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI)
        ctx.fillStyle = `rgba(${colors.accent}, ${alpha})`
        ctx.fill()
      })

      // Draw frequency bars for listening state
      if (isListening && audioLevel > 0.1) {
        const barCount = 32
        const barWidth = 3
        const barSpacing = 8
        const startX = centerX - (barCount * (barWidth + barSpacing)) / 2

        for (let i = 0; i < barCount; i++) {
          const barHeight = (Math.random() * 0.5 + audioLevel) * 60
          const x = startX + i * (barWidth + barSpacing)
          const y = centerY + 80

          ctx.fillStyle = `rgba(${colors.primary}, ${0.6 + audioLevel * 0.4})`
          ctx.fillRect(x, y - barHeight / 2, barWidth, barHeight)
        }
      }

      // Draw status text
      ctx.fillStyle = `rgba(${colors.primary}, 0.8)`
      ctx.font = "14px Inter, sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(agentStatus.toUpperCase(), centerX, centerY + 120)

      animationRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isListening, isSpeaking, audioLevel, agentStatus])

  return (
    <div className="relative group">
      {/* Outer glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-chart-1/20 via-transparent to-chart-2/20 rounded-full blur-2xl scale-150 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Main canvas */}
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        className="relative rounded-full shadow-2xl border border-border/20 backdrop-blur-sm bg-background/10"
      />

      {/* Interactive overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-background/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}
