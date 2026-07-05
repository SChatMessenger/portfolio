import { useEffect, useRef } from 'react'

// A lightweight wind-field animation: particles drift along a simulated
// flow field (two offset sine waves standing in for wind vectors), leaving
// short fading streaks. No external data, physics engine, or noise library —
// just enough motion to evoke atmospheric flow behind the hero text.

interface Particle {
  x: number
  y: number
  px: number
  py: number
  speed: number
  life: number
  maxLife: number
}

const PARTICLE_COUNT = 110

function fieldAngle(x: number, y: number, t: number) {
  return Math.sin(x * 0.0026 + t * 0.5) * 1.7 + Math.cos(y * 0.0031 - t * 0.35) * 1.7
}

function spawnParticle(width: number, height: number): Particle {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    px: 0,
    py: 0,
    speed: 0.5 + Math.random() * 0.7,
    life: 0,
    maxLife: 220 + Math.random() * 260,
  }
}

export function AtmosphereBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const canvasEl = canvas
    const context = ctx

    let width = 0
    let height = 0
    let particles: Particle[] = []
    let strokeColor = 'rgba(120, 160, 150, 1)'
    let time = 0
    let raf = 0

    const readColor = () => {
      strokeColor = getComputedStyle(canvasEl).color
    }

    const resize = () => {
      const rect = canvasEl.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvasEl.width = Math.round(width * dpr)
      canvasEl.height = Math.round(height * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = Array.from({ length: PARTICLE_COUNT }, () => spawnParticle(width, height))
    }

    const frame = () => {
      time += 0.016

      context.globalCompositeOperation = 'destination-out'
      context.fillStyle = 'rgba(0, 0, 0, 0.055)'
      context.fillRect(0, 0, width, height)
      context.globalCompositeOperation = 'source-over'

      context.strokeStyle = strokeColor
      context.lineWidth = 1
      context.globalAlpha = 0.4

      for (const particle of particles) {
        particle.px = particle.x
        particle.py = particle.y
        const angle = fieldAngle(particle.x, particle.y, time)
        particle.x += Math.cos(angle) * particle.speed
        particle.y += Math.sin(angle) * particle.speed
        particle.life += 1

        const outOfBounds = particle.x < 0 || particle.x > width || particle.y < 0 || particle.y > height
        if (particle.life > particle.maxLife || outOfBounds) {
          Object.assign(particle, spawnParticle(width, height))
          continue
        }

        context.beginPath()
        context.moveTo(particle.px, particle.py)
        context.lineTo(particle.x, particle.y)
        context.stroke()
      }

      raf = requestAnimationFrame(frame)
    }

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf)
      } else {
        raf = requestAnimationFrame(frame)
      }
    }

    const schemeQuery = window.matchMedia('(prefers-color-scheme: dark)')

    readColor()
    resize()
    raf = requestAnimationFrame(frame)

    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', handleVisibility)
    schemeQuery.addEventListener('change', readColor)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibility)
      schemeQuery.removeEventListener('change', readColor)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
