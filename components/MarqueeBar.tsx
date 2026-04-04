const LOGOS = [
  { src: '/clientes/antt.svg', alt: 'ANTT' },
  { src: '/clientes/banco-amazonia.svg', alt: 'Banco da Amazônia' },
  { src: '/clientes/bec.svg', alt: 'BEC' },
  { src: '/clientes/biodiversitas.svg', alt: 'Biodiversitas' },
  { src: '/clientes/censipam.svg', alt: 'CENSIPAM' },
  { src: '/clientes/defensoria-bahia.svg', alt: 'Defensoria Pública da Bahia' },
  { src: '/clientes/defensoria-rj.svg', alt: 'Defensoria Pública do RJ' },
  { src: '/clientes/ferroeste.svg', alt: 'Ferroeste' },
  { src: '/clientes/funai.svg', alt: 'FUNAI' },
  { src: '/clientes/operacao-acolhida.svg', alt: 'Operação Acolhida' },
]

export default function MarqueeBar() {
  const doubled = [...LOGOS, ...LOGOS]
  return (
    <div id="marquee-section">
      <div className="marquee-track">
        {doubled.map((logo, i) => (
          <div key={i} className="marquee-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo.src} alt={logo.alt} style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
          </div>
        ))}
      </div>
    </div>
  )
}
