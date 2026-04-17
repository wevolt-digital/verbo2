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
            Internet via satélite
            <span />
          </div>
          <h1 className="sr d1">
            Conectividade<br /><em>sem limites</em><br />para o Brasil.
          </h1>
          <p className="sub sr d2">
            Tecnologia orbital de última geração levando sinal de alta velocidade em vários pontos do território nacional, de forma rápida e confiável.
          </p>
          <div className="hero-ctas sr d3" style={{ justifyContent: 'center' }}>
            <Link href="/contato" className="btn-p">
              <span className="shine" />
              Contratar plano
            </Link>
          </div>
        </div>
        <div className="scroll-hint">
          <div className="scroll-hint-line" />
        </div>
      </section>

      {/* 2. STAT CALLOUT */}
      <section id="stat-callout">
        <div className="stat-inner">
          <div className="stat-label-top sr">Escala de operação</div>
          <div className="stat-giant sr d1">
            <AnimatedCounter value={1000} suffix="+" />
          </div>
          <div className="stat-unit sr d1">Pontos contratados</div>
          <p className="stat-context sr d2">Uma conexão que não conhece distância.<br />Disponível de norte a sul.</p>
          <div className="stat-row sr d3">
            <div className="stat-item">
              <div className="stat-val">
                <em><AnimatedCounter value={99} />%</em>
              </div>
              <div className="stat-desc">Uptime garantido</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-val">
                <em><AnimatedCounter value={24} />/7</em>
              </div>
              <div className="stat-desc">Suporte técnico</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-val">
                <em><AnimatedCounter value={2} /></em>
              </div>
              <div className="stat-desc">Tecnologias orbitais</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-val">
                <em><AnimatedCounter value={18} /></em>
              </div>
              <div className="stat-desc">Estados com presença ativa</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STICKY FEATURE */}
      <div id="starlink" />
      <StickyFeature />

      {/* 4. MARQUEE */}
      <MarqueeBar />

      {/* 5. SPLIT FEATURES */}
      <SplitFeatures />

      {/* 6. SECTORS */}
      <section id="sectors">
        <div className="sectors-header sr">
          <span className="eyebrow">Setores de atuação</span>
          <h2>Cada operação tem um desafio.<br className="desktop-br" /> Nós conectamos soluções.</h2>
          <p>Atuamos nos ambientes mais desafiadores, levando conectividade de alta performance aos setores mais críticos.</p>
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
