'use client'

import { useState, useEffect } from 'react'
const sections = [
  {
    id: 'privacidade',
    title: 'Política de Privacidade',
    content: [
      { h: null, p: 'A VERBO Telecomunicações Ltda. está comprometida com a proteção da sua privacidade. Esta Política descreve como coletamos, usamos e protegemos suas informações pessoais.' },
      { h: 'Dados que coletamos', p: 'Coletamos informações fornecidas diretamente, como nome, empresa, e-mail e telefone em formulários de contato. Também coletamos dados de navegação de forma anônima para melhorar nossa plataforma.' },
      { h: 'Como usamos seus dados', p: 'Utilizamos seus dados para prestar os serviços contratados, enviar comunicações relevantes, realizar suporte técnico e cumprir obrigações legais e regulatórias.' },
      { h: 'Compartilhamento', p: 'Não vendemos suas informações. Compartilhamos dados apenas com parceiros essenciais à prestação do serviço e quando exigido por lei.' },
      { h: 'Segurança', p: 'Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo criptografia SSL, controle de acesso e monitoramento contínuo.' },
    ],
  },
  {
    id: 'termos',
    title: 'Termos de Uso',
    content: [
      { h: null, p: 'Ao utilizar os serviços da VERBO, você concorda com estes Termos de Uso. Leia com atenção antes de contratar ou utilizar qualquer solução VERBO.' },
      { h: 'Uso permitido', p: 'O serviço destina-se exclusivamente ao uso legítimo e lícito. É proibido utilizar nossa infraestrutura para atividades ilegais, envio de spam ou ataques cibernéticos.' },
      { h: 'Responsabilidades', p: 'A VERBO compromete-se a manter o serviço disponível conforme o SLA contratado. O cliente é responsável pela segurança de sua rede interna.' },
      { h: 'Suspensão e cancelamento', p: 'A VERBO reserva-se o direito de suspender serviços em caso de inadimplência ou uso indevido, com notificação prévia de 48 horas.' },
    ],
  },
  {
    id: 'cookies',
    title: 'Política de Cookies',
    content: [
      { h: null, p: 'Utilizamos cookies para melhorar sua experiência em nosso site, analisar o tráfego e personalizar conteúdo.' },
      { h: 'Tipos de cookies', p: 'Essenciais: necessários para o funcionamento básico. Analíticos: nos ajudam a entender como você usa o site (Google Analytics com IP anonimizado). Funcionais: lembram suas preferências de navegação.' },
      { h: 'Como gerenciar', p: 'Você pode gerenciar ou desativar cookies nas configurações do seu navegador. A desativação de cookies essenciais pode afetar o funcionamento do site.' },
    ],
  },
  {
    id: 'lgpd',
    title: 'LGPD — Lei Geral de Proteção de Dados',
    content: [
      { h: null, p: 'A VERBO está em conformidade com a Lei nº 13.709/2018 (LGPD). Como titular dos seus dados pessoais, você possui direitos garantidos por lei.' },
      { h: 'Seus direitos', p: 'Confirmação de existência de tratamento; acesso aos dados; correção de dados incorretos; anonimização ou eliminação de dados desnecessários; portabilidade; revogação do consentimento a qualquer momento.' },
      { h: 'DPO e canal de contato', p: 'Nosso Encarregado de Proteção de Dados (DPO) está disponível em privacidade@verbo.com.br. Respondemos solicitações em até 15 dias úteis, conforme a LGPD.' },
    ],
  },
]

export default function PoliticasPage() {
  const [activeSection, setActiveSection] = useState('privacidade')

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.policy-section')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* ── Hero (light, sem canvas) ── */}
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
        {/* Waveform signal */}
        <div className="hero-wave-wrap">
          <svg className="hero-wave-svg" viewBox="0 0 2000 60" width="2000" height="60" fill="none">
            <path d="M 0,30 C 36,6 64,6 100,30 C 136,54 164,54 200,30 C 236,6 264,6 300,30 C 336,54 364,54 400,30 C 436,6 464,6 500,30 C 536,54 564,54 600,30 C 636,6 664,6 700,30 C 736,54 764,54 800,30 C 836,6 864,6 900,30 C 936,54 964,54 1000,30 C 1036,6 1064,6 1100,30 C 1136,54 1164,54 1200,30 C 1236,6 1264,6 1300,30 C 1336,54 1364,54 1400,30 C 1436,6 1464,6 1500,30 C 1536,54 1564,54 1600,30 C 1636,6 1664,6 1700,30 C 1736,54 1764,54 1800,30 C 1836,6 1864,6 1900,30 C 1936,54 1964,54 2000,30" stroke="rgba(11,181,233,1)" strokeWidth="1.5"/>
          </svg>
          <svg className="hero-wave-svg hero-wave-svg--2" viewBox="0 0 2000 60" width="2000" height="60" fill="none">
            <path d="M 0,30 C 36,6 64,6 100,30 C 136,54 164,54 200,30 C 236,6 264,6 300,30 C 336,54 364,54 400,30 C 436,6 464,6 500,30 C 536,54 564,54 600,30 C 636,6 664,6 700,30 C 736,54 764,54 800,30 C 836,6 864,6 900,30 C 936,54 964,54 1000,30 C 1036,6 1064,6 1100,30 C 1136,54 1164,54 1200,30 C 1236,6 1264,6 1300,30 C 1336,54 1364,54 1400,30 C 1436,6 1464,6 1500,30 C 1536,54 1564,54 1600,30 C 1636,6 1664,6 1700,30 C 1736,54 1764,54 1800,30 C 1836,6 1864,6 1900,30 C 1936,54 1964,54 2000,30" stroke="rgba(26,65,140,1)" strokeWidth="1"/>
          </svg>
        </div>
        {/* Pulse sonar */}
        <div className="hero-pulse-wrap">
          <div className="hero-pulse-ring" />
          <div className="hero-pulse-ring" />
          <div className="hero-pulse-ring" />
          <div className="hero-pulse-dot" />
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
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
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: '480px', lineHeight: 1.75 }}>
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
            <h4 style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>
              Índice
            </h4>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`sidebar-link${activeSection === s.id ? ' active' : ''}`}
              >
                {s.title}
              </a>
            ))}
          </div>
        </aside>

        {/* Content */}
        <div>
          {sections.map((section, si) => (
            <section
              key={section.id}
              id={section.id}
              className="policy-section"
              style={{ borderBottom: si < sections.length - 1 ? '1px solid var(--border)' : 'none' }}
            >
              <h2>{section.title}</h2>
              {section.content.map((block, i) => (
                <div key={i}>
                  {block.h && <h3>{block.h}</h3>}
                  <p>{block.p}</p>
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
