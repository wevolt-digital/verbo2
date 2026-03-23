'use client'

import { useEffect, useRef } from 'react'

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function SectionReveal({ children, className = 'sr', style }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('show')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
