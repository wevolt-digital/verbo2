'use client'

import { useState } from 'react'

export default function CTASection() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="cta-final">
      <div className="cta-inner">
        <h2 className="sr">Pronto para se conectar?</h2>
        <p className="sr d1">Fale com nossos especialistas e descubra a solução ideal para a sua empresa.</p>

        {sent ? (
          <div className="cta-thanks sr">
            <span>Mensagem enviada! Em breve entraremos em contato.</span>
          </div>
        ) : (
          <form className="cta-form sr d2" onSubmit={handleSubmit}>
            <div className="cta-form-row">
              <input  type="text"  name="nome"     placeholder="Nome"    required />
              <input  type="text"  name="empresa"  placeholder="Empresa" required />
            </div>
            <div className="cta-form-row">
              <input  type="email" name="email"    placeholder="E-mail"  required />
              <input  type="tel"   name="telefone" placeholder="Telefone" />
            </div>
            <textarea name="mensagem" placeholder="Mensagem" rows={4} required />
            <button type="submit" className="btn-white">Fale com a VERBO</button>
          </form>
        )}
      </div>
    </section>
  )
}
