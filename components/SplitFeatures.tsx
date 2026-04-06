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

    // Remove a transição de transform herdada do sr-scale após o reveal
    setTimeout(() => {
      cards.forEach(card => {
        card.style.transition = 'border-color .3s ease, box-shadow .3s ease'
      })
    }, 1000)

    let targetX = 0, targetY = 0
    let currentX = 0, currentY = 0
    let inside = false
    let RAF = 0

    function onMouseMove(e: MouseEvent) {
      const rect = section!.getBoundingClientRect()
      targetX = (e.clientX - rect.left) / rect.width - 0.5
      targetY = (e.clientY - rect.top) / rect.height - 0.5
      inside = true
    }

    function onMouseLeave() {
      inside = false
    }

    function frame() {
      RAF = requestAnimationFrame(frame)
      const tx = inside ? targetX : 0
      const ty = inside ? targetY : 0
      currentX += (tx - currentX) * 0.08
      currentY += (ty - currentY) * 0.08
      const rx = -currentY * 16
      const ry = currentX * 16
      cards.forEach(card => {
        card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg)`
      })
    }

    RAF = requestAnimationFrame(frame)
    section.addEventListener('mousemove', onMouseMove)
    section.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(RAF)
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
