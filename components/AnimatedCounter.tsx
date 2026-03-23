'use client'

import { useRef, useEffect, useState } from 'react'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  decimals?: boolean
  className?: string
  localeFormat?: boolean
}

export default function AnimatedCounter({ value, suffix = '', decimals = false, className = '', localeFormat = false }: AnimatedCounterProps) {
  const [display, setDisplay] = useState('0')
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true
            const dur = 1800
            const start = performance.now()
            function step(now: number) {
              const p = Math.min((now - start) / dur, 1)
              const ease = 1 - Math.pow(1 - p, 3)
              const v = value * ease
              const rounded = decimals ? v.toFixed(1) : String(Math.round(v))
              setDisplay(localeFormat ? Math.round(v).toLocaleString('pt-BR') : rounded)
              if (p < 1) requestAnimationFrame(step)
            }
            requestAnimationFrame(step)
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [value, decimals, localeFormat])

  return (
    <span ref={ref} className={className}>
      {display}{suffix}
    </span>
  )
}
