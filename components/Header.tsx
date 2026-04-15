'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NAV_LINKS = [
  { href: '/',          label: 'Início' },
  { href: '/sobre',     label: 'Sobre' },
  { href: '/#sectors',  label: 'Setores' },
  { href: '/#coverage', label: 'Cobertura' },
  { href: '/politicas', label: 'Políticas' },
  { href: '/contato',   label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Fecha o menu ao redimensionar para desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <>
      <header className={scrolled ? 'scrolled' : ''}>
        <Link href="/" className="logo">
          <span className="logo-img-wrap">
            <Image
              src="/verbo-logo.svg"
              alt="VERBO"
              width={800}
              height={570}
              priority
              className={`logo-full${scrolled ? ' logo-hidden' : ''}`}
            />
            <Image
              src="/verbo-simbolo.svg"
              alt="VERBO"
              width={800}
              height={570}
              priority
              className={`logo-simbolo logo-simbolo-img${scrolled ? '' : ' logo-hidden'}`}
            />
          </span>
        </Link>

        <nav>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>

        <Link href="/contato" className="btn-header btn-header-desktop">
          Conectar agora
        </Link>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </header>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <nav className="mobile-nav">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/contato" className="btn-header mobile-menu-cta" onClick={() => setMenuOpen(false)}>
            Conectar agora
          </Link>
        </nav>
      </div>
    </>
  )
}
