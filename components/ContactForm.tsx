'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({ nome: '', empresa: '', email: '', telefone: '', mensagem: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 1200)
  }

  if (success) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 0' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '.5rem', color: 'var(--text)' }}>Mensagem enviada!</h3>
        <p style={{ color: 'var(--muted)', fontSize: '.92rem' }}>Nossa equipe entrará em contato em breve.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" type="text" placeholder="Seu nome" value={form.nome} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="empresa">Empresa</label>
          <input id="empresa" name="empresa" type="text" placeholder="Nome da empresa" value={form.empresa} onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" placeholder="seu@email.com" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone</label>
          <input id="telefone" name="telefone" type="tel" placeholder="+55 (11) 00000-0000" value={form.telefone} onChange={handleChange} />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" placeholder="Descreva sua necessidade..." value={form.mensagem} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn-p" disabled={loading} style={{ opacity: loading ? 0.7 : 1, width: '100%', justifyContent: 'center' }}>
        {loading ? 'Enviando...' : 'Enviar mensagem'}
        {!loading && <span className="shine" />}
        {!loading && (
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    </form>
  )
}
