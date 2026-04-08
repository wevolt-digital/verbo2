import type { Metadata } from 'next'
import Image from 'next/image'
import InfraSlider from '@/components/InfraSlider'
import CTASection from '@/components/CTASection'
import ScrollInit from '@/components/ScrollInit'
import HeroParticles from '@/components/HeroParticles'
import EssenciaVideo from '@/components/EssenciaVideo'

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
        minHeight: '52vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(26,65,140,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,65,140,.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
        <HeroParticles />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
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
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: '480px', lineHeight: 1.75, margin: '0 auto' }}>
            Somos uma empresa de soluções móveis via satélite dedicada a eliminar o isolamento digital.
          </p>
        </div>
      </section>

      {/* Essência */}
      <section style={{ padding: '100px 5%', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div className="sr-left">
            <div className="eyebrow">Nossa Essência</div>
            <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, marginBottom: '1.2rem', color: 'var(--text)' }}>
              Simples, acessível{' '}
              <span className="hero-block-line">
                e sem fronteiras
              </span>
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Acreditamos que soluções móveis via satélite devem ser simples e acessíveis. Por isso, desenvolvemos nossa própria rede terrestre exclusiva para conectar você a soluções incomparáveis, com as redes móveis por satélite mais confiáveis do mundo.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              Isso nos permite oferecer a cada usuário soluções mais rápidas, melhores e mais flexíveis. Em outras palavras, conexões que não apenas funcionam, elas se destacam.
            </p>
          </div>
          <EssenciaVideo />
        </div>
      </section>

      {/* Alcance */}
      <section style={{ padding: '90px 5%', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <div className="eyebrow sr">Alcance</div>
          <h2 className="sr d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem' }}>
            Conectividade onde você precisar
          </h2>
          <p className="sr d2" style={{ fontSize: '1.15rem', color: 'var(--muted)', lineHeight: 1.9 }}>
            Mesmo com a complexidade por trás da tecnologia, nossas soluções via satélite oferecem um serviço simples, confiável e premiado. Seja em áreas remotas, em alto-mar ou onde a cobertura tradicional não alcança, garantimos conectividade contínua para empresas, embarcações e operações exigentes.
          </p>
        </div>
      </section>

      {/* Infraestrutura */}
      <section style={{ padding: '100px 5%', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          {/* Slider — esquerda */}
          <InfraSlider />
          {/* Conteúdo — direita */}
          <div className="sr-right">
            <div className="eyebrow">Infraestrutura</div>
            <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, color: 'var(--text)', marginBottom: '1.2rem' }}>
              Rede de nível operadora
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              A infraestrutura da VERBO é totalmente redundante e interligada diretamente a operadoras globais de satélite. Com uma rede moderna baseada em IP, oferecemos voz, dados e serviços de valor agregado com alta disponibilidade, segurança e alertas inteligentes.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section style={{ padding: '100px 5%', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="eyebrow sr">Nossa Equipe</div>
            <h2 className="sr d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, color: 'var(--text)' }}>
              As pessoas por trás da VERBO
            </h2>
          </div>
          <div className="team-grid">
            {[
              { name: 'Helon Junior',    role: 'Chief Business Officer', photo: '/staff-hellon.webp' },
              { name: 'Lorrane Souza',   role: 'Diretora Financeiro',    photo: '/staff-lorrane.webp' },
              { name: 'Felicia Borges',  role: 'Políticas ESG',          photo: '/staff-felicia.webp' },
              { name: 'Osvaldo Katsumi', role: 'Diretor Técnico',        photo: '/staff-osvaldo.webp' },
            ].map((member, i) => (
              <div key={member.name} className={`team-card sr d${i + 1}`}>
                <div className="team-photo">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover', borderRadius: 16 }}
                  />
                </div>
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
