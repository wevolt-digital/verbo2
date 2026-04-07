'use client'

import { useState, useEffect } from 'react'

interface Particle {
  id: number
  left: number
  delay: number
  duration: number
  size: number
}

export default function HeroParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 7,
        duration: 5 + Math.random() * 6,
        size: 3 + Math.random() * 3,
      }))
    )
  }, [])

  return (
    <div className="hero-particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="hero-particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
