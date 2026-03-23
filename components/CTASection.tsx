import Link from 'next/link'

export default function CTASection() {
  return (
    <section id="cta-final">
      <div className="cta-inner">
        <h2 className="sr">Pronto para se conectar?</h2>
        <p className="sr d1">Fale com nossos especialistas e descubra o plano ideal para a sua operação. Ativação no mesmo dia, sem burocracia.</p>
        <div className="cta-group sr d2">
          <Link href="/contato" className="btn-white">Falar com especialista</Link>
          <Link href="/sobre" className="btn-ghost">Ver planos →</Link>
        </div>
      </div>
    </section>
  )
}
