'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <Link href="/" className="logo">
        VERBO
      </Link>
      <nav>
        <Link href="/">Início</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/#coverage">Cobertura</Link>
        <Link href="/#sectors">Setores</Link>
        <Link href="/politicas">Políticas</Link>
        <Link href="/contato">Contato</Link>
      </nav>
      <Link href="/contato" className="btn-header">
        Conectar agora
      </Link>
    </header>
  )
}
