'use client'

import { useRef } from 'react'
import { Wheat, Truck, Landmark, Plane, CalendarDays, HardHat } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const SECTORS: { Icon: LucideIcon; title: string; desc: string }[] = [
  { Icon: Wheat,        title: 'Agronegócio',        desc: 'Rastreamento, gestão de ativos remotos, operações de produtividade na cadeia de suprimentos.' },
  { Icon: Truck,        title: 'Logística',           desc: 'Soluções voltadas para a cibersegurança, bem estar da tripulação, produtividade do navio, gerenciamento de rotas e conformidade ambiental para a frota mercante.' },
  { Icon: Landmark,     title: 'Governo',             desc: 'Comunicação via satélite seguras, otimizadas e economicamente vantajosas para operações militares, serviços públicos e equipes de resposta a emergências.' },
  { Icon: Plane,        title: 'Aviação',             desc: 'Conectividade de ponta a ponta, da decolagem ao pouso, para comunicação de cabine, segurança de voo e experiência do passageiro em rotas nacionais e internacionais.' },
  { Icon: CalendarDays, title: 'Eventos',             desc: 'Transmissão ao vivo, credenciamento e conectividade para eventos em locais sem infraestrutura.' },
  { Icon: HardHat,      title: 'Construção Civil',    desc: 'Canteiros de obras conectados para gestão de projetos, videoconferência e IoT industrial.' },
]

export default function SectorsGrid() {
  const tileRefs = useRef<(HTMLDivElement | null)[]>([])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>, i: number) {
    const tile = tileRefs.current[i]
    if (!tile) return
    const r = tile.getBoundingClientRect()
    tile.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%')
    tile.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%')
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    tile.style.transform = `perspective(700px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-3px)`
  }

  function handleMouseLeave(i: number) {
    const tile = tileRefs.current[i]
    if (!tile) return
    tile.style.transition = 'transform .5s cubic-bezier(.25,.1,.25,1)'
    tile.style.transform = ''
    setTimeout(() => {
      if (tile) tile.style.transition = ''
    }, 500)
  }

  return (
    <div className="sectors-grid sr d2">
      {SECTORS.map((s, i) => (
        <div
          key={i}
          ref={(el) => { tileRefs.current[i] = el }}
          className="sector-tile"
          onMouseMove={(e) => handleMouseMove(e, i)}
          onMouseLeave={() => handleMouseLeave(i)}
        >
          <s.Icon size={28} strokeWidth={1.5} className="tile-icon" />
          <div className="tile-title">{s.title}</div>
          <div className="tile-desc">{s.desc}</div>
          <div className="tile-arrow">→</div>
        </div>
      ))}
    </div>
  )
}
