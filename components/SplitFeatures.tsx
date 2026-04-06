'use client'

import { useEffect, useRef } from 'react'
import { Satellite, Zap, Clock, Users } from 'lucide-react'

const CARDS = [
  { Icon: Satellite, label: 'Starlink + Inmarsat', desc: 'LEO e GEO na mesma solução' },
  { Icon: Zap, label: 'Instalação no dia', desc: 'Ativo em menos de 2 horas' },
  { Icon: Clock, label: 'Suporte 24/7', desc: 'Time técnico sempre disponível' },
  { Icon: Users, label: 'Equipe local', desc: 'Presença em todo o Brasil' },
]

export default function SplitFeatures() {
  const cardsRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const cards = Array.from(cardsRef.current?.querySelectorAll<HTMLElement>('.why-card') ?? [])
    const section = sectionRef.current
    if (!cards.length || !section) return

    function onMouseMove(e: MouseEvent) {
      const rect = section!.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      cards.forEach(card => {
        card.style.transform = `perspective(700px) rotateX(${-y * 16}deg) rotateY(${x * 16}deg)`
      })
    }

    function onMouseLeave() {
      cards.forEach(card => {
        card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg)'
      })
    }

    section.addEventListener('mousemove', onMouseMove)
    section.addEventListener('mouseleave', onMouseLeave)

    return () => {
      section.removeEventListener('mousemove', onMouseMove)
      section.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <section className="why-section" ref={sectionRef}>
      <div className="why-inner">
        {/* Texto esquerda */}
        <div className="why-text">
          <span className="eyebrow sr">Por que a VERBO</span>
          <h2 className="why-title sr d1">
            Tecnologia de ponta.<br />
            Suporte de quem conhece o Brasil.
          </h2>
          <p className="sr d2">
            Somos o único provedor que combina as melhores redes de satélite do mundo — Starlink LEO e Inmarsat GEO — com uma equipe técnica certificada presente em todo o território nacional. Do contrato à ativação, você tem um ponto de contato único e suporte com quem fala a sua língua.
          </p>
        </div>

        {/* Cards direita */}
        <div className="why-cards" ref={cardsRef}>
            {CARDS.map((card, i) => (
              <div key={i} className={`why-card sr-scale d${i + 1}`}>
                <div className="why-card-icon">
                  <card.Icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="why-card-label">{card.label}</div>
                  <div className="why-card-desc">{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}
