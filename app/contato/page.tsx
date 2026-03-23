import type { Metadata } from 'next'
import { Mail, Phone, MapPin } from 'lucide-react'
import OrbitalCanvas from '@/components/OrbitalCanvas'
import ContactForm from '@/components/ContactForm'
import ScrollInit from '@/components/ScrollInit'

export const metadata: Metadata = {
  title: 'Contato | VERBO',
  description: 'Entre em contato com a VERBO para solicitar uma proposta de internet via satélite.',
}

export default function ContatoPage() {
  return (
    <>
      <ScrollInit />

      {/* Hero */}
      <section id="hero">
        <OrbitalCanvas />
        <div className="hero-content">
          <div className="hero-eyebrow sr">
            <span />
            Fale Conosco
            <span />
          </div>
          <h1 className="sr d1">
            Vamos <em>conectar</em> sua operação
          </h1>
          <p className="sub sr d2">
            Nossa equipe está pronta para criar a solução de conectividade ideal para seu negócio.
          </p>
        </div>
      </section>

      {/* Contact Layout */}
      <section style={{ padding: '100px 5%', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          {/* Form */}
          <div className="sr-left">
            <div className="eyebrow">Envie uma mensagem</div>
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text)' }}>
              Solicite uma <span className="g-text">proposta</span>
            </h2>
            <ContactForm />
          </div>

          {/* Contact info */}
          <div className="sr-right" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <div className="eyebrow">Contato direto</div>
              <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text)' }}>
                Prefere falar <span className="g-text">agora?</span>
              </h2>
            </div>

            {[
              { Icon: Mail,   label: 'E-mail',   value: 'contato@verbo.com.br', href: 'mailto:contato@verbo.com.br' },
              { Icon: Phone,  label: 'Telefone', value: '+55 (11) 0000-0000', href: 'tel:+551100000000' },
              { Icon: MapPin, label: 'Endereço', value: 'São Paulo, SP — Brasil', href: null },
            ].map((item) => (
              <div key={item.label} style={{
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
                padding: '1.25rem 1.5rem', background: 'rgba(0,0,0,.02)',
                border: '1px solid var(--border)', borderRadius: 16,
              }}>
                <item.Icon size={20} strokeWidth={1.5} style={{ color: 'var(--cyan)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)', marginBottom: '.25rem' }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} style={{ fontSize: '.95rem', fontWeight: 600, color: 'var(--text)' }}>{item.value}</a>
                  ) : (
                    <span style={{ fontSize: '.95rem', fontWeight: 600, color: 'var(--text)' }}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5511000000000"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1.25rem 1.75rem',
                background: 'rgba(37,211,102,.08)',
                border: '1px solid rgba(37,211,102,.25)',
                borderRadius: 16, cursor: 'pointer',
                transition: 'all .25s',
              }}
            >
              <span style={{ fontSize: '1.8rem' }}>💬</span>
              <div>
                <div style={{ fontSize: '.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: '#25D366', marginBottom: '.2rem' }}>WhatsApp</div>
                <div style={{ fontSize: '.9rem', color: 'var(--muted)' }}>Resposta em até 1 hora</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
