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

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll<HTMLElement>('.why-card')
    if (!cards) return

    function onMove(e: MouseEvent, card: HTMLElement) {
      const rect = card.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      card.style.transform = `perspective(700px) rotateX(${-y * 14}deg) rotateY(${x * 14}deg)`
    }

    function onLeave(card: HTMLElement) {
      card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg)'
    }

    const handlers: { move: (e: MouseEvent) => void; leave: () => void }[] = []

    cards.forEach(card => {
      const move = (e: MouseEvent) => onMove(e, card)
      const leave = () => onLeave(card)
      card.addEventListener('mousemove', move)
      card.addEventListener('mouseleave', leave)
      handlers.push({ move, leave })
    })

    return () => {
      cards.forEach((card, i) => {
        card.removeEventListener('mousemove', handlers[i].move)
        card.removeEventListener('mouseleave', handlers[i].leave)
      })
    }
  }, [])

  return (
    <section className="why-section">
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
