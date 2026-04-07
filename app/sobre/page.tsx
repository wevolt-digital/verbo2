import type { Metadata } from 'next'
import { Server, Shield, Globe } from 'lucide-react'
import CTASection from '@/components/CTASection'
import ScrollInit from '@/components/ScrollInit'
import HeroParticles from '@/components/HeroParticles'

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
        <HeroParticles />
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
            <span className="hero-block-line">
              <span className="g-text">conecta o Brasil</span>
            </span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: '480px', lineHeight: 1.75 }}>
            Somos uma empresa de tecnologia satelital dedicada a eliminar o isolamento digital no Brasil e no mundo.
          </p>
        </div>
      </section>

      {/* Essência */}
      <section style={{ padding: '100px 5%', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div className="sr-left">
            <div className="eyebrow">Nossa Essência</div>
            <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, marginBottom: '1.2rem', color: 'var(--text)' }}>
              Simples, acessível <span className="g-text">e sem fronteiras</span>
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Acreditamos que soluções móveis via satélite devem ser simples e acessíveis. Por isso, desenvolvemos nossa própria rede terrestre exclusiva para conectar você a soluções incomparáveis, com as redes móveis por satélite mais confiáveis do mundo.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              Isso nos permite oferecer a cada usuário soluções mais rápidas, melhores e mais flexíveis. Em outras palavras, conexões que não apenas funcionam — elas se destacam.
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

      {/* Alcance */}
      <section style={{ padding: '90px 5%', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <div className="eyebrow sr">Alcance</div>
          <h2 className="sr d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem' }}>
            Conectividade onde <span className="g-text">você precisar</span>
          </h2>
          <p className="sr d2" style={{ fontSize: '1.15rem', color: 'var(--muted)', lineHeight: 1.9 }}>
            Mesmo com a complexidade por trás da tecnologia, nossas soluções via satélite oferecem um serviço simples, confiável e premiado. Seja em áreas remotas, em alto-mar ou onde a cobertura tradicional não alcança, garantimos conectividade contínua para empresas, embarcações e operações exigentes.
          </p>
        </div>
      </section>

      {/* Infraestrutura */}
      <section style={{ padding: '100px 5%', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="eyebrow sr">Infraestrutura</div>
            <h2 className="sr d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, color: 'var(--text)' }}>
              Rede de <span className="g-text">nível operadora</span>
            </h2>
          </div>
          <div className="mission-grid">
            <div className="mission-card sr d1">
              <Server size={28} strokeWidth={1.5} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
              <h3>Totalmente redundante</h3>
              <p>Infraestrutura de nível operadora interligada diretamente às maiores operadoras globais de satélite, sem ponto único de falha.</p>
            </div>
            <div className="mission-card sr d2">
              <Shield size={28} strokeWidth={1.5} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
              <h3>Alta disponibilidade</h3>
              <p>Rede moderna baseada em IP com segurança de ponta, gerenciamento eficiente de chamadas e alertas inteligentes em tempo real.</p>
            </div>
            <div className="mission-card sr d3">
              <Globe size={28} strokeWidth={1.5} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
              <h3>Voz, dados e mais</h3>
              <p>Oferecemos voz, dados e serviços de valor agregado com alta performance para as operações mais exigentes do planeta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section style={{ padding: '100px 5%', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="eyebrow sr">Nossa Equipe</div>
            <h2 className="sr d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, color: 'var(--text)' }}>
              As pessoas por trás <span className="g-text">da VERBO</span>
            </h2>
          </div>
          <div className="team-grid">
            {[
              { name: 'Helon Junior',    role: 'Chief Business Officer' },
              { name: 'Lorrane Souza',   role: 'Diretora Financeiro' },
              { name: 'Felicia Borges',  role: 'Políticas ESG' },
              { name: 'Osvaldo Katsumi', role: 'Diretor Técnico' },
            ].map((member, i) => (
              <div key={member.name} className={`team-card sr d${i + 1}`}>
                <div className="team-photo" />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  )
}
