'use client'

import { useState, useEffect, useRef } from 'react'
import { Satellite, Zap, Lock } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const STEPS: { eyebrow: string; title: string; description: string; tags: string[]; visual: string; Icon: LucideIcon }[] = [
  {
    eyebrow: 'Starlink',
    title: 'Satélites em órbita baixa, mais perto de você.',
    description: 'Operando a cerca de 550 km de altitude, a constelação LEO (Low Earth Orbit) oferece baixa latência e conexão estável, mesmo em condições climáticas desafiadoras e locais remotos.',
    tags: ['LEO Technology', 'Baixa latência'],
    visual: 'v1',
    Icon: Satellite,
  },
  {
    eyebrow: 'Alta performance',
    title: 'Velocidade que não compromete a operação.',
    description: 'Com até 500 Mbps de download e upload simétrico, a VERBO suporta videoconferência, telemetria e transmissão ao vivo simultaneamente, sem perda de qualidade.',
    tags: ['500 Mbps', 'Upload simétrico'],
    visual: 'v2',
    Icon: Zap,
  },
  {
    eyebrow: 'Segurança e controle',
    title: 'Sua rede, protegida do ponto de origem ao destino.',
    description: 'Criptografia de ponta a ponta, VPN dedicada e painel de gestão em tempo real. Monitore, controle e proteja toda a sua infraestrutura de comunicação.',
    tags: ['Criptografia E2E', 'Dashboard em tempo real'],
    visual: 'v3',
    Icon: Lock,
  },
]

export default function StickyFeature() {
  const [currentStep, setCurrentStep] = useState(0)
  const wrapRef = useRef<HTMLDivElement>(null)

  function goStep(i: number) {
    if (i === currentStep) return
    setCurrentStep(i)
  }

  useEffect(() => {
    function onScroll() {
      const wrap = wrapRef.current
      if (!wrap) return
      const rect = wrap.getBoundingClientRect()
      const total = wrap.offsetHeight - window.innerHeight
      const scrolled = -rect.top
      if (scrolled < 0 || scrolled > total) return
      const p = scrolled / total
      const idx = Math.min(Math.floor(p * STEPS.length), STEPS.length - 1)
      if (idx !== currentStep) goStep(idx)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep])

  return (
    <div id="sticky-wrap" ref={wrapRef}>
      <div id="sticky-inner">
        <div className="sticky-grid">
          {/* Visual side */}
          <div className="sticky-img-side sr-left">
            <div className="sticky-img-wrap">
              {STEPS.map((step, i) => (
                <div
                  key={i}
                  className={`sticky-img-visual ${step.visual}`}
                  style={{ display: currentStep === i ? 'flex' : 'none' }}
                >
                  <div className="sticky-icon-wrap"><step.Icon size={44} strokeWidth={1.2} color="#fff" /></div>
                </div>
              ))}
            </div>
          </div>
          {/* Steps side */}
          <div className="sticky-steps sr-right">
            {STEPS.map((step, i) => (
              <div key={i} className={`sticky-step${currentStep === i ? ' active' : ''}`}>
                <span className="eyebrow">{step.eyebrow}</span>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
                <div>
                  {step.tags.map((tag) => (
                    <span key={tag} className="sticky-tag">{tag}</span>
                  ))}
                </div>
                <div className="sticky-progress">
                  {STEPS.map((_, j) => (
                    <div
                      key={j}
                      className={`prog-dot${currentStep === j ? ' active' : ''}`}
                      onClick={() => goStep(j)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
