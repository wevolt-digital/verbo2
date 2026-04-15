'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const STEPS: { eyebrow: string; title: string; description: string; tags: string[]; image: string }[] = [
  {
    eyebrow: 'Starlink',
    title: 'Satélites em órbita baixa, mais perto de você.',
    description: 'Operando a cerca de 550 km de altitude, a constelação LEO (Low Earth Orbit) oferece baixa latência e conexão estável, mesmo em condições climáticas desafiadoras e locais remotos.',
    tags: ['LEO Technology', 'Baixa latência'],
    image: '/starlink.webp',
  },
  {
    eyebrow: 'Inmarsat',
    title: 'Conectividade global, onde a operação não pode parar.',
    description: 'Baseada em satélites geoestacionários (GEO), a tecnologia Inmarsat garante cobertura contínua e comunicação altamente confiável, ideal para operações críticas.',
    tags: ['Cobertura global', 'Alta confiabilidade'],
    image: '/inmarsat.webp',
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

  useEffect(() => {
    function scrollToStep(step: number) {
      const wrap = wrapRef.current
      if (!wrap) return
      const top = wrap.getBoundingClientRect().top + window.scrollY
      const total = wrap.offsetHeight - window.innerHeight
      const target = step === 0 ? top : top + total * (step / (STEPS.length - 1))
      window.scrollTo({ top: target, behavior: 'smooth' })
    }
    function handleHash() {
      const hash = window.location.hash
      if (hash === '#starlink') scrollToStep(0)
      else if (hash === '#inmarsat') scrollToStep(1)
    }
    setTimeout(handleHash, 100)
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

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
                  style={{ display: currentStep === i ? 'block' : 'none' }}
                >
                  <Image
                    src={step.image}
                    alt={step.eyebrow}
                    width={800}
                    height={600}
                    className="w-full"
                  />
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
