'use client'

import { useRef } from 'react'
import { Wheat, Truck, Landmark, Plane, CalendarDays, HardHat } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const SECTORS: { Icon: LucideIcon; title: string; desc: string; video?: string }[] = [
  { Icon: Wheat,        title: 'Agronegócio',        desc: 'Rastreamento, gestão de ativos remotos, operações de produtividade na cadeia de suprimentos.', video: '/setores/setor-agro.mp4' },
  { Icon: Truck,        title: 'Logística',           desc: 'Soluções voltadas para a cibersegurança, bem estar da tripulação, produtividade do navio, gerenciamento de rotas e conformidade ambiental para a frota mercante.' },
  { Icon: Landmark,     title: 'Governo',             desc: 'Comunicação via satélite seguras, otimizadas e economicamente vantajosas para operações militares, serviços públicos e equipes de resposta a emergências.' },
  { Icon: Plane,        title: 'Aviação',             desc: 'Conectividade de ponta a ponta, da decolagem ao pouso, para comunicação de cabine, segurança de voo e experiência do passageiro em rotas nacionais e internacionais.' },
  { Icon: CalendarDays, title: 'Eventos',             desc: 'Transmissão ao vivo, credenciamento e conectividade para eventos em locais sem infraestrutura.' },
  { Icon: HardHat,      title: 'Construção Civil',    desc: 'Canteiros de obras conectados para gestão de projetos, videoconferência e IoT industrial.' },
]

export default function SectorsGrid() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  function handleMouseEnter(i: number) {
    videoRefs.current[i]?.play()
  }

  function handleMouseLeave(i: number) {
    const v = videoRefs.current[i]
    if (!v) return
    v.pause()
    v.currentTime = 0
  }

  return (
    <div className="sectors-grid sr d2">
      {SECTORS.map((s, i) => (
        <div
          key={i}
          className={`sector-tile${s.video ? ' sector-tile--video' : ''}`}
          onMouseEnter={() => s.video && handleMouseEnter(i)}
          onMouseLeave={() => s.video && handleMouseLeave(i)}
        >
          {s.video && (
            <video
              ref={(el) => { videoRefs.current[i] = el }}
              src={s.video}
              className="tile-video"
              muted
              playsInline
              loop
              preload="metadata"
            />
          )}
          <div className="tile-content">
            <s.Icon size={28} strokeWidth={1.5} className="tile-icon" />
            <div className="tile-title">{s.title}</div>
            <div className="tile-desc">{s.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
