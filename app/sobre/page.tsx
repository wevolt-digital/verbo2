import type { Metadata } from 'next'
import Link from 'next/link'
import { Target, Telescope, Sparkles } from 'lucide-react'
import CTASection from '@/components/CTASection'
import ScrollInit from '@/components/ScrollInit'

export const metadata: Metadata = {
  title: 'Sobre | VERBO',
  description: 'Conheça a VERBO — o movimento que conecta o Brasil via satélite de baixa órbita.',
}

export default function SobrePage() {
  return (
    <>
      <ScrollInit />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(160deg, #FFFFFF 0%, #F0F6FF 50%, #E8F0FF 100%)',
        minHeight: '38vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '72px',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '60px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(26,65,140,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,65,140,.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
        {/* Radial accent */}
        <div style={{
          position: 'absolute', right: '-10%', top: '-20%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(11,181,233,.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <span className="eyebrow">Sobre a VERBO</span>
          <h1 style={{
            fontSize: 'clamp(2.6rem, 6vw, 4.8rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-.03em',
            color: 'var(--text)',
            marginBottom: '1rem',
          }}>
            O movimento que{' '}
            <span className="g-text">conecta o Brasil</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: '480px', lineHeight: 1.75, marginBottom: '2rem' }}>
            Somos uma empresa de tecnologia satelital dedicada a eliminar o isolamento digital no Brasil e no mundo.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contato" className="btn-p">
              Fale Conosco <span className="shine" />
            </Link>
            <Link href="/" className="btn-s">Nossas Soluções</Link>
          </div>
        </div>
      </section>

      {/* Essência */}
      <section style={{ padding: '100px 5%', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div className="sr-left">
            <div className="eyebrow">Nossa Essência</div>
            <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, marginBottom: '1.2rem', color: 'var(--text)' }}>
              Tecnologia orbital <span className="g-text">a serviço das pessoas</span>
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              A VERBO nasceu da convicção de que a internet de alta qualidade não é privilégio de quem mora próximo a centros urbanos. Nossa missão é tornar a conectividade acessível em todo o território nacional.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              Com cobertura que alcança desde grandes centros até os rincões mais remotos do Brasil, a VERBO representa o futuro da conectividade: confiável, rápida e sem fronteiras geográficas.
            </p>
          </div>
          <div className="sr-right" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 400 400" width="100%" style={{ maxWidth: 360 }}>
              <defs>
                <radialGradient id="earthGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3DD6FF" stopOpacity="0.3"/>
                  <stop offset="60%" stopColor="#0BB5E9" stopOpacity="0.15"/>
                  <stop offset="100%" stopColor="#1A418C" stopOpacity="0.05"/>
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="60" fill="url(#earthGrad)" stroke="#0BB5E9" strokeWidth="1" strokeOpacity="0.3"/>
              <circle cx="200" cy="200" r="30" fill="#0BB5E9" fillOpacity="0.15" stroke="#3DD6FF" strokeWidth="1.5" strokeOpacity="0.5"/>
              <ellipse cx="200" cy="200" rx="120" ry="45" fill="none" stroke="#0BB5E9" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 3">
                <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="12s" repeatCount="indefinite"/>
              </ellipse>
              <ellipse cx="200" cy="200" rx="155" ry="70" fill="none" stroke="#3DD6FF" strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="3 4">
                <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="20s" repeatCount="indefinite"/>
              </ellipse>
              <circle cx="320" cy="200" r="5" fill="#0BB5E9" fillOpacity="0.8">
                <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="12s" repeatCount="indefinite"/>
              </circle>
              <circle cx="355" cy="200" r="4" fill="#3DD6FF" fillOpacity="0.7">
                <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="20s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
        </div>
      </section>

      {/* Missão / Visão / Valores */}
      <section style={{ padding: '100px 5%', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="eyebrow sr">Propósito</div>
            <h2 className="sr d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, color: 'var(--text)' }}>
              Nossa <span className="g-text">razão de existir</span>
            </h2>
          </div>
          <div className="mission-grid">
            <div className="mission-card sr d1">
              <Target size={28} strokeWidth={1.5} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
              <h3>Missão</h3>
              <p>Democratizar o acesso à internet de alta performance no Brasil e no mundo, usando tecnologia de satélites LEO para eliminar barreiras geográficas.</p>
            </div>
            <div className="mission-card sr d2">
              <Telescope size={28} strokeWidth={1.5} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
              <h3>Visão</h3>
              <p>Ser a principal provedora de conectividade via satélite da América Latina, referência em tecnologia, confiabilidade e impacto social positivo até 2030.</p>
            </div>
            <div className="mission-card sr d3">
              <Sparkles size={28} strokeWidth={1.5} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
              <h3>Valores</h3>
              <p>Inovação sem limites, compromisso com o cliente, responsabilidade social e transparência total em todas as nossas operações e relacionamentos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personality chips */}
      <section style={{ padding: '80px 5%', background: 'var(--surface)', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="eyebrow sr">Identidade</div>
          <h2 className="sr d1" style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 700, marginBottom: '2.5rem', color: 'var(--text)' }}>
            O que nos <span className="g-text">define</span>
          </h2>
          <div className="personality-chips sr d2">
            {['Inovadora', 'Confiável', 'Ousada', 'Humana', 'Global', 'Sustentável', 'Tecnológica', 'Acessível', 'Resiliente', 'Colaborativa'].map((chip) => (
              <span key={chip} className="p-chip">{chip}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  )
}
