const LOGOS = [
  { src: '/clientes/antt.svg', alt: 'ANTT', large: true },
  { src: '/clientes/banco-amazonia.svg', alt: 'Banco da Amazônia', large: true },
  { src: '/clientes/bec.svg', alt: 'BEC', large: false },
  { src: '/clientes/biodiversitas.svg', alt: 'Biodiversitas', large: false },
  { src: '/clientes/censipam.svg', alt: 'CENSIPAM', large: false },
  { src: '/clientes/defensoria-bahia.svg', alt: 'Defensoria Pública da Bahia', large: true },
  { src: '/clientes/defensoria-rj.svg', alt: 'Defensoria Pública do RJ', large: false },
  { src: '/clientes/ferroeste.svg', alt: 'Ferroeste', large: true },
  { src: '/clientes/funai.svg', alt: 'FUNAI', large: false },
  { src: '/clientes/operacao-acolhida.svg', alt: 'Operação Acolhida', large: false },
]

export default function MarqueeBar() {
  const doubled = [...LOGOS, ...LOGOS]
  return (
    <div id="marquee-section">
      <div className="marquee-track">
        {doubled.map((logo, i) => (
          <div key={i} className="marquee-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo.src} alt={logo.alt} style={{ height: logo.large ? '128px' : undefined, width: 'auto', objectFit: 'contain' }} />
          </div>
        ))}
      </div>
    </div>
  )
}
