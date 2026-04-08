'use client'

import { useState } from 'react'
import HeroParticles from '@/components/HeroParticles'

const sections = [
  {
    id: 'etica',
    title: 'Canal de ética e conduta',
    cta: { label: 'Relatar ocorrência em nosso canal de denúncias', href: '#' },
    content: [
      { h: null, p: 'A VERBO conta com esse canal para que toda pessoa que se relaciona direta ou indiretamente conosco (colaboradores, clientes, franqueados, acionistas, fornecedores, parceiros e sociedade na qual estamos inseridos) possam comunicar com confidencialidade uma situação que possa caracterizar uma violação do Código de Ética e Conduta VERBO, demais normas internas ou à legislação vigente.' },
      { h: null, p: 'As informações aqui registradas serão recebidas por uma empresa independente e especializada, assegurando sigilo absoluto e o tratamento adequado de cada situação pela VERBO sem conflitos de interesses.' },
      { h: null, p: 'Lembrando que o/a declarante é responsável pela veracidade das informações relatadas.' },
      { h: null, p: 'Para relatar algum fato, clique em "Relatar ocorrência". Siga os passos para relatar o incidente de forma sigilosa. Ao final, você receberá um número de protocolo.' },
      { h: null, p: 'Esse canal tem como objetivo recepcionar as denúncias relacionadas a qualquer conduta inapropriada que fere os princípios éticos definidos no Código de Ética e Conduta e/ou na legislação vigente, como: fraudes internas, conflitos de interesses, irregularidades em processos contábeis e financeiros, governança corporativa, situações relacionadas à corrupção e demais irregularidades previstas nas Leis anticorrupção aplicáveis, incluindo a Lei nº 12.846/2013.' },
      { h: null, p: 'Para esclarecimentos, reclamações, elogios ou sugestões de outros assuntos, por favor acesse a nossa página de contato e conheça os outros canais de comunicação conosco.' },
    ],
  },
  {
    id: 'socioambiental',
    title: 'Responsabilidade socioambiental',
    cta: null,
    content: [
      { h: null, p: 'A tecnologia tem um papel fundamental na construção de um futuro mais sustentável e inclusivo. Na VERBO, a responsabilidade socioambiental guia nossas ações, garantindo que a inovação esteja a serviço da sociedade sem comprometer o meio ambiente.' },
      { h: null, p: 'Nosso Programa de Integridade reforça esse compromisso, assegurando que operamos com ética, transparência e respeito aos direitos fundamentais. A conectividade, dentro desse contexto, é um vetor de transformação, permitindo que comunidades em áreas remotas tenham acesso a serviços essenciais, como educação, saúde e oportunidades econômicas.' },
      { h: null, p: 'Ao investir em soluções tecnológicas sustentáveis, contribuímos para a inclusão digital e o desenvolvimento responsável, conectando pessoas sem os impactos ambientais de grandes infraestruturas físicas. Esse é o nosso compromisso: promover um mundo mais conectado, ético e sustentável.' },
    ],
  },
]

export default function PoliticasPage() {
  const [active, setActive] = useState('etica')

  const current = sections.find(s => s.id === active)!

  return (
    <>
      {/* ── Hero ── */}
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
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(26,65,140,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(26,65,140,.12) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
        <HeroParticles />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
          <span className="eyebrow">Legal</span>
          <h1 style={{
            fontSize: 'clamp(2.6rem, 6vw, 4.8rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-.03em',
            color: 'var(--text)',
            marginBottom: '1rem',
          }}>
            Políticas{' '}
            <span className="g-text">e Termos</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: '480px', lineHeight: 1.75, margin: '0 auto' }}>
            Transparência e respeito são parte dos nossos valores. Conheça como tratamos seus dados.
          </p>
        </div>
      </section>

      {/* ── Layout: sidebar + content ── */}
      <div className="policies-layout">
        {/* Sidebar */}
        <aside className="policies-sidebar">
          <div style={{
            background: '#fff',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '1.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          }}>
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`sidebar-link${active === s.id ? ' active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}
              >
                {s.title}
              </button>
            ))}
          </div>
        </aside>

        {/* Content */}
        <div key={active} className="policy-section policy-fade" style={{ borderBottom: 'none' }}>
          <h2>{current.title}</h2>
          {current.content.map((block, i) => (
            <div key={i}>
              {block.h && <h3>{block.h}</h3>}
              <p>{block.p}</p>
            </div>
          ))}
          {current.cta && (
            <a
              href={current.cta.href}
              className="btn-p"
              style={{ display: 'inline-flex', marginTop: '2rem' }}
            >
              {current.cta.label}
              <span className="shine" />
            </a>
          )}
        </div>
      </div>
    </>
  )
}
