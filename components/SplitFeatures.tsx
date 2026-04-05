import { Satellite, Zap, Clock, Users } from 'lucide-react'
import WhyOrbital from './WhyOrbital'

const CARDS = [
  { Icon: Satellite, label: 'Starlink + Inmarsat', desc: 'LEO e GEO na mesma solução' },
  { Icon: Zap, label: 'Instalação no dia', desc: 'Ativo em menos de 2 horas' },
  { Icon: Clock, label: 'Suporte 24/7', desc: 'Time técnico sempre disponível' },
  { Icon: Users, label: 'Equipe local', desc: 'Presença em todo o Brasil' },
]

export default function SplitFeatures() {
  return (
    <section className="why-section">
      <div className="why-inner">
        {/* Texto esquerda */}
        <div className="why-text">
          <span className="eyebrow sr">Por que a VERBO</span>
          <h2 className="why-title sr d1">
            Tecnologia de ponta.<br />
            Suporte de quem conhece o Brasil.
          </h2>
          <p className="sr d2">
            Somos o único provedor que combina as melhores redes de satélite do mundo — Starlink LEO e Inmarsat GEO — com uma equipe técnica certificada presente em todo o território nacional. Do contrato à ativação, você tem um ponto de contato único e suporte com quem fala a sua língua.
          </p>
        </div>

        {/* Cards direita */}
        <div className="why-cards-wrap">
          <WhyOrbital />
        <div className="why-cards">
          {CARDS.map((card, i) => (
            <div key={i} className={`why-card sr-scale d${i + 1}`}>
              <div className="why-card-icon">
                <card.Icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <div className="why-card-label">{card.label}</div>
                <div className="why-card-desc">{card.desc}</div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
