const ITEMS = [
  'Agronegócio', 'Logística', 'Governo', 'Operações Remotas', 'Eventos',
  'Mineração', 'Internet LEO', 'Alta Performance', 'Instalação Rápida',
  'Suporte 24/7', 'Cobertura Nacional', 'Tecnologia Orbital'
]

export default function MarqueeBar() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div id="marquee-section">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="marquee-item">{item}</div>
        ))}
      </div>
    </div>
  )
}
