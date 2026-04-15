const LOGOS = [
  { src: '/clientes/presidencia-republica.svg', alt: 'Presidência da República', height: 56 },
  { src: '/clientes/anatel.svg',                alt: 'Anatel',                   height: 36 },
  { src: '/clientes/cemig.svg',                 alt: 'CEMIG',                    height: 32 },
  { src: '/clientes/funai.svg',                 alt: 'FUNAI',                    height: 96 },
  { src: '/clientes/banco-amazonia.svg',         alt: 'Banco da Amazônia',        height: 128 },
  { src: '/clientes/sesi-senai.svg',             alt: 'SESI/SENAI',               height: 56 },
  { src: '/clientes/cma.svg',                   alt: 'Comando Militar da Amazônia', height: 60 },
  { src: '/clientes/antt.svg',                  alt: 'ANTT',                     height: 106 },
  { src: '/clientes/tribunal-justica-ms.svg',   alt: 'Tribunal de Justiça MS',   height: 80 },
  { src: '/clientes/tribunal-justica-ro.svg',   alt: 'Tribunal de Justiça RO',   height: 88 },
  { src: '/clientes/justica-federal-pr.svg',    alt: 'Justiça Federal PR',        height: 96 },
  { src: '/clientes/seplag-mg.svg',             alt: 'SEPLAG MG',                height: 80 },
  { src: '/clientes/seduc-rs.svg',              alt: 'SEDUC RS',                 height: 96 },
  { src: '/clientes/ferroeste.svg',             alt: 'Ferroeste',                height: 128 },
  { src: '/clientes/tre.svg',                   alt: 'TRE Roraima/Rondônia/Acre', height: 46 },
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
            <img src={logo.src} alt={logo.alt} style={{ height: `${logo.height}px`, width: 'auto', objectFit: 'contain' }} />
          </div>
        ))}
      </div>
    </div>
  )
}
