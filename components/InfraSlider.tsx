'use client'

import { useState, useEffect } from 'react'
import { Server, Shield, Globe } from 'lucide-react'

const cards = [
  {
    Icon: Server,
    title: 'Totalmente redundante',
    text: 'Infraestrutura de nível operadora interligada diretamente às maiores operadoras globais de satélite, sem ponto único de falha.',
  },
  {
    Icon: Shield,
    title: 'Alta disponibilidade',
    text: 'Rede moderna baseada em IP com segurança de ponta, gerenciamento eficiente de chamadas e alertas inteligentes em tempo real.',
  },
  {
    Icon: Globe,
    title: 'Voz, dados e mais',
    text: 'Oferecemos voz, dados e serviços de valor agregado com alta performance para as operações mais exigentes do planeta.',
  },
]

export default function InfraSlider() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive(i => (i + 1) % cards.length), 3500)
    return () => clearInterval(id)
  }, [paused])

  const { Icon, title, text } = cards[active]

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ position: 'relative' }}
    >
      <div className="mission-card infra-slide">
        <Icon size={28} strokeWidth={1.5} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', gap: '8px', marginTop: '1.5rem' }}>
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Card ${i + 1}`}
            style={{
              width: active === i ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: active === i ? 'var(--primary)' : 'var(--border)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all .3s',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  )
}
