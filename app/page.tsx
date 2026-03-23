import type { Metadata } from 'next'
import Link from 'next/link'
import OrbitalCanvas from '@/components/OrbitalCanvas'
import StickyFeature from '@/components/StickyFeature'
import MarqueeBar from '@/components/MarqueeBar'
import AnimatedCounter from '@/components/AnimatedCounter'
import QuoteSection from '@/components/QuoteSection'
import CTASection from '@/components/CTASection'
import SectorsGrid from '@/components/SectorsGrid'
import SplitFeatures from '@/components/SplitFeatures'
import CoverageMap from '@/components/CoverageMap'
import ScrollInit from '@/components/ScrollInit'

export const metadata: Metadata = {
  title: 'VERBO — Internet Via Satélite',
  description: 'VERBO leva internet via satélite de alta performance para onde outras tecnologias não chegam. Do campo ao canteiro de obras.',
}

export default function Home() {
  return (
    <>
      <ScrollInit />

      {/* 1. HERO */}
      <section id="hero">
        <OrbitalCanvas />
        <div className="hero-content">
          <div className="hero-eyebrow sr">
            <span />
            Internet via satélite LEO
            <span />
          </div>
          <h1 className="sr d1">
            Conectividade<br /><em>sem limites</em><br />para o Brasil.
          </h1>
          <p className="sub sr d2">
            Tecnologia orbital de última geração levando sinal de alta velocidade a qualquer ponto do território nacional, de forma rápida e confiável.
          </p>
          <div className="hero-ctas sr d3">
            <Link href="/contato" className="btn-p">
              <span className="shine" />
              Contratar plano
            </Link>
            <Link href="/#coverage" className="btn-s">
              <svg viewBox="0 0 16 16" fill="none" strokeWidth="2" style={{ width: 14, height: 14 }}>
                <circle cx="8" cy="8" r="6" />
                <path d="M6 8l2 2 4-4" />
              </svg>
              Ver cobertura
            </Link>
          </div>
        </div>
        <div className="scroll-hint">
          <div className="scroll-hint-line" />
          <span>Rolar</span>
        </div>
      </section>

      {/* 2. STAT CALLOUT */}
      <section id="stat-callout">
        <div className="stat-inner">
          <div className="stat-label-top sr">Velocidade de download</div>
          <div className="stat-giant sr d1">
            <AnimatedCounter value={500} />
          </div>
          <div className="stat-unit sr d1">Mbps</div>
          <p className="stat-context sr d2">Uma conexão que não conhece distância. Disponível em todo o Brasil, de norte a sul.</p>
          <div className="stat-row sr d3">
            <div className="stat-item">
              <div className="stat-val">
                <AnimatedCounter value={99} /><em>%</em>
              </div>
              <div className="stat-desc">Uptime garantido</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-val">
                <AnimatedCounter value={24} /><em>/7</em>
              </div>
              <div className="stat-desc">Suporte técnico</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-val">
                <AnimatedCounter value={500} /><em>+</em>
              </div>
              <div className="stat-desc">Clientes ativos</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-val">
                <AnimatedCounter value={8} /><em>ms</em>
              </div>
              <div className="stat-desc">Latência LEO</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STICKY FEATURE */}
      <StickyFeature />

      {/* 4. MARQUEE */}
      <MarqueeBar />

      {/* 5. SPLIT FEATURES */}
      <SplitFeatures />

      {/* 6. SECTORS */}
      <section id="sectors">
        <div className="sectors-header sr">
          <span className="eyebrow">Setores de atuação</span>
          <h2>Conectamos onde a operação não pode parar.</h2>
          <p>Da roça ao canteiro de obras, da floresta ao mar. A VERBO atende os setores mais críticos com a mesma excelência.</p>
        </div>
        <SectorsGrid />
      </section>

      {/* 7. QUOTE */}
      <QuoteSection />

      {/* 8. COVERAGE MAP */}
      <CoverageMap />

      {/* 9. CTA FINAL */}
      <CTASection />
    </>
  )
}
