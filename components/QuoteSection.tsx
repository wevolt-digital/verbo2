'use client'

import { useRef, useEffect } from 'react'

const QUOTE = 'VERBO é o movimento que conecta o Brasil, levando sinal onde a distância deixou de ser barreira e a tecnologia orbital tornou tudo possível.'

export default function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const wordsRef   = useRef<HTMLSpanElement[]>([])
  const rafRef     = useRef<number>(0)
  const words      = QUOTE.split(' ')

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    function update() {
      const rect     = section!.getBoundingClientRect()
      const vh       = window.innerHeight
      // 0 quando o topo da section chega no fundo da tela, 1 quando sai pelo topo
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)))
      const total    = wordsRef.current.length
      wordsRef.current.forEach((span, i) => {
        // cada palavra ilumina proporcionalmente ao scroll
        const threshold = i / total
        const lit = progress >= threshold
        span.style.color      = lit ? '#fff' : 'rgba(255,255,255,.12)'
        span.style.textShadow = lit ? '0 0 32px rgba(11,181,233,.2)' : 'none'
      })
    }

    function onScroll() {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section id="quote" ref={sectionRef}>
      <div className="quote-inner">
        <span className="eyebrow" style={{ color: 'var(--cyan2)', opacity: .8 }}>Missão</span>
        <blockquote>
          {words.map((word, i) => (
            <span
              key={i}
              ref={(el) => { if (el) wordsRef.current[i] = el }}
              style={{ color: 'rgba(255,255,255,.12)', transition: 'color .3s, text-shadow .3s' }}
            >
              {word}{' '}
            </span>
          ))}
        </blockquote>
        <cite>VERBO, AÇÃO QUE CONECTA.</cite>
      </div>
    </section>
  )
}
