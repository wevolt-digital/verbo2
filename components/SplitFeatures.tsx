import { Globe, Zap, BarChart2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const FEATURES: { eyebrow: string; title: string; description: string; tags: string[]; Icon: LucideIcon; colorClass: string; rev: boolean }[] = [
  {
    eyebrow: 'Cobertura nacional',
    title: 'Do Oiapoque ao Chuí, o sinal chega antes de tudo.',
    description: 'A infraestrutura VERBO cobre 100% do território brasileiro, incluindo áreas rurais, remotas e de difícil acesso onde operadoras terrestres não chegam.',
    tags: ['100% Brasil', 'Zonas rurais', 'Áreas remotas'],
    Icon: Globe,
    colorClass: 'c1',
    rev: false,
  },
  {
    eyebrow: 'Instalação rápida',
    title: 'Ativo em menos de 2 horas, sem obra nem burocracia.',
    description: 'O kit VERBO é plug-and-play. Nosso time de técnicos certificados instala, configura e ativa sua conexão no mesmo dia, sem dependência de infraestrutura local.',
    tags: ['Plug-and-play', 'Ativação no dia'],
    Icon: Zap,
    colorClass: 'c2',
    rev: true,
  },
  {
    eyebrow: 'Gestão inteligente',
    title: 'Visibilidade total da sua rede, em qualquer lugar.',
    description: 'Painel unificado com métricas em tempo real, alertas inteligentes e suporte técnico 24/7. Gerencie múltiplos pontos de conexão com poucos cliques.',
    tags: ['Dashboard em tempo real', 'Suporte 24/7'],
    Icon: BarChart2,
    colorClass: 'c3',
    rev: false,
  },
]

export default function SplitFeatures() {
  return (
    <div className="features-section">
      {FEATURES.map((f, i) => (
        <div key={i} className={`feature-row${f.rev ? ' rev' : ''}`}>
          <div className={`feature-visual ${f.rev ? 'sr-right' : 'sr-left'}`}>
            <div className={`fv-inner ${f.colorClass}`}>
              <f.Icon size={48} strokeWidth={1.2} className="fv-icon" />
            </div>
          </div>
          <div className={`feature-text ${f.rev ? 'sr-left' : 'sr-right'}`}>
            <span className="eyebrow">{f.eyebrow}</span>
            <h2>{f.title}</h2>
            <p>{f.description}</p>
            <div>
              {f.tags.map((tag) => (
                <span key={tag} className="feature-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
