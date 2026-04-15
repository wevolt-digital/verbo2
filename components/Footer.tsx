'use client'

import Link from 'next/link'
import Image from 'next/image'

function scrollToInmarsat() {
  const wrap = document.getElementById('sticky-wrap')
  if (!wrap) return
  const top = wrap.offsetTop
  const total = wrap.offsetHeight - window.innerHeight
  window.scrollTo({ top: top + total, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo-f">
            <Image src="/verbo-logo-full.svg" alt="VERBO" width={800} height={570} style={{ height: '100px', width: 'auto' }} />
          </div>
        </div>
        <div className="footer-col">
          <h4>Empresa</h4>
          <Link href="/sobre">Sobre a VERBO</Link>
        </div>
        <div className="footer-col">
          <h4>Soluções</h4>
          <Link href="/#starlink">Starlink</Link>
          <a onClick={scrollToInmarsat} style={{ cursor: 'pointer' }}>Inmarsat</a>
        </div>
        <div className="footer-col">
          <h4>Suporte</h4>
          <a href="mailto:contato@verbo.com.br">contato@verbo.com.br</a>
          <Link href="/politicas">Políticas</Link>
          <Link href="/contato">Contato</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 VERBO. Todos os direitos reservados.</span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="/politicas">Privacidade</Link>
        </div>
      </div>
    </footer>
  )
}
