'use client'

import { useRef, useEffect } from 'react'

const QUOTE = 'VERBO é o movimento que conecta o Brasil, levando sinal onde a distância deixou de ser barreira e a tecnologia orbital tornou tudo possível.'

export default function QuoteSection() {
  const blockRef = useRef<HTMLQuoteElement>(null)
  const words = QUOTE.split(' ')

  useEffect(() => {
    const el = blockRef.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const highlights = el.querySelectorAll<HTMLElement>('.word-highlight')
            highlights.forEach((w, i) => setTimeout(() => w.classList.add('lit'), i * 55))
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="quote">
      <div className="quote-inner">
        <span className="eyebrow" style={{ color: 'var(--cyan2)', opacity: .8 }}>Missão VERBO</span>
        <blockquote ref={blockRef}>
          {words.map((word, i) => (
            <span key={i} className="word-highlight">{word} </span>
          ))}
        </blockquote>
        <cite>— Equipe VERBO · Conectando o Brasil Orbital</cite>
      </div>
    </section>
  )
}
