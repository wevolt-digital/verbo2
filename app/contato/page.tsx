import type { Metadata } from 'next'
import { Mail, Phone, MapPin } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import ScrollInit from '@/components/ScrollInit'
import HeroParticles from '@/components/HeroParticles'

export const metadata: Metadata = {
  title: 'Contato | VERBO',
  description: 'Entre em contato com a VERBO para solicitar uma proposta de internet via satélite.',
}

export default function ContatoPage() {
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
          backgroundImage: 'linear-gradient(rgba(26,65,140,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,65,140,.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
        <HeroParticles />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
          <span className="eyebrow">Fale Conosco</span>
          <h1 style={{
            fontSize: 'clamp(2.6rem, 6vw, 4.8rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-.03em',
            color: 'var(--text)',
            marginBottom: '1rem',
          }}>
            Vamos <span className="g-text">conectar</span> sua operação
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: '480px', lineHeight: 1.75, margin: '0 auto' }}>
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
              { Icon: Mail,   label: 'E-mail',   value: 'contato@verbo.com.br',                          href: 'mailto:contato@verbo.com.br' },
              { Icon: Phone,  label: 'Telefone', value: '0800 746 4613',                                  href: 'tel:08007464613' },
              { Icon: MapPin, label: 'Endereço', value: 'Avenida Getúlio Vargas, 447 – 1º ANDAR\nBelo Horizonte, MG', href: null },
            ].map((item) => (
              <div key={item.label} style={{
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
                padding: '1.25rem 1.5rem', background: 'rgba(0,0,0,.02)',
                border: '1px solid var(--border)', borderRadius: 16,
              }}>
                <item.Icon size={20} strokeWidth={1.5} style={{ color: 'var(--cyan)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)', marginBottom: '.25rem' }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} style={{ fontSize: '.95rem', fontWeight: 600, color: 'var(--text)' }}>{item.value}</a>
                  ) : (
                    <span style={{ fontSize: '.95rem', fontWeight: 600, color: 'var(--text)', whiteSpace: 'pre-line' }}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
