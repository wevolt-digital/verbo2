'use client'

import { useRef } from 'react'
import { Wheat, Truck, Landmark, Pickaxe, CalendarDays, HardHat } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const SECTORS: { Icon: LucideIcon; title: string; desc: string }[] = [
  { Icon: Wheat,        title: 'Agronegócio',      desc: 'Telemetria de maquinário, rastreamento de frota e gestão de safra com conexão estável no campo.' },
  { Icon: Truck,        title: 'Logística',         desc: 'Rastreamento em tempo real de frotas e cargas, em rodovias e estradas vicinais sem cobertura.' },
  { Icon: Landmark,     title: 'Governo',           desc: 'Conectividade para escolas, postos de saúde e órgãos públicos em regiões vulneráveis do Brasil.' },
  { Icon: Pickaxe,      title: 'Mineração e Energia', desc: 'Operações críticas em áreas de difícil acesso com SLA garantido e redundância de link.' },
  { Icon: CalendarDays, title: 'Eventos',           desc: 'Transmissão ao vivo, credenciamento e conectividade para eventos em locais sem infraestrutura.' },
  { Icon: HardHat,      title: 'Construção Civil',  desc: 'Canteiros de obras conectados para gestão de projetos, videoconferência e IoT industrial.' },
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
