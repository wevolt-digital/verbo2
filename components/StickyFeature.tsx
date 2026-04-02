'use client'

import { useState, useEffect, useRef } from 'react'
import { Satellite, Zap } from 'lucide-react'
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
    eyebrow: 'Inmarsat',
    title: 'Conectividade global, onde a operação não pode parar.',
    description: 'Baseada em satélites geoestacionários (GEO), a tecnologia Inmarsat garante cobertura contínua e comunicação altamente confiável, ideal para operações críticas mesmo nos ambientes mais remotos.',
    tags: ['Cobertura global', 'Alta confiabilidade'],
    visual: 'v2',
    Icon: Zap,
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
