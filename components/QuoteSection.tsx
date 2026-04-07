'use client'

import { useRef, useEffect } from 'react'

const QUOTE = 'VERBO é o movimento que conecta o Brasil, levando sinal onde a distância deixou de ser barreira e a tecnologia orbital tornou tudo possível.'

export default function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const blockRef  = useRef<HTMLQuoteElement>(null)
  const citeRef   = useRef<HTMLElement>(null)
  const rafRef    = useRef<number>(0)

  useEffect(() => {
    const section = sectionRef.current
    const block   = blockRef.current
    const cite    = citeRef.current
    if (!section || !block || !cite) return

    function update() {
      const rect = section!.getBoundingClientRect()
      const vh   = window.innerHeight
      // normaliza: -1 (acima do viewport) → 0 (centro) → 1 (abaixo)
      const progress = 1 - (rect.top + rect.height / 2) / vh
      block!.style.transform = `translateY(${-progress * 32}px)`
      cite!.style.transform  = `translateY(${-progress * 16}px)`
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
        <blockquote ref={blockRef}>{QUOTE}</blockquote>
        <cite ref={citeRef}>VERBO, AÇÃO QUE CONECTA.</cite>
      </div>
    </section>
  )
}
