const LOGOS = [
  { src: '/clientes/presidencia-republica.svg', alt: 'Presidência da República' },
  { src: '/clientes/anatel.svg',                alt: 'Anatel' },
  { src: '/clientes/cemig.svg',                 alt: 'CEMIG' },
  { src: '/clientes/funai.svg',                 alt: 'FUNAI' },
  { src: '/clientes/banco-amazonia.svg',         alt: 'Banco da Amazônia' },
  { src: '/clientes/sesi-senai.svg',             alt: 'SESI/SENAI' },
  { src: '/clientes/cma.svg',                   alt: 'Comando Militar da Amazônia' },
  { src: '/clientes/antt.svg',                  alt: 'ANTT' },
  { src: '/clientes/tribunal-justica-ms.svg',   alt: 'Tribunal de Justiça MS' },
  { src: '/clientes/tribunal-justica-ro.svg',   alt: 'Tribunal de Justiça RO' },
  { src: '/clientes/justica-federal-pr.svg',    alt: 'Justiça Federal PR' },
  { src: '/clientes/seplag-mg.svg',             alt: 'SEPLAG MG' },
  { src: '/clientes/seduc-rs.svg',              alt: 'SEDUC RS' },
  { src: '/clientes/ferroeste.svg',             alt: 'Ferroeste' },
  { src: '/clientes/tre.svg',                   alt: 'TRE Roraima/Rondônia/Acre' },
]

export default function MarqueeBar() {
  const doubled = [...LOGOS, ...LOGOS]
  return (
    <div id="marquee-section">
      <p className="marquee-title sr d2">Empresas que confiam nas soluções de conectividade VERBO</p>
      <div className="marquee-track">
        {doubled.map((logo, i) => (
          <div key={i} className="marquee-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo.src} alt={logo.alt} style={{ height: '96px', width: 'auto', objectFit: 'contain' }} />
          </div>
        ))}
      </div>
    </div>
  )
}
