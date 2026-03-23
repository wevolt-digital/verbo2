import AnimatedCounter from './AnimatedCounter'

export default function CoverageMap() {
  return (
    <section id="coverage">
      <div className="coverage-label sr">
        <span className="eyebrow">Mapa de cobertura</span>
        <h2>Disponível em todo o Brasil.</h2>
        <p>Nossa constelação garante cobertura contínua sobre o território nacional, 24 horas por dia, 365 dias por ano.</p>
      </div>
      <div className="coverage-map-wrap sr-scale d2">
        <div className="coverage-map-inner">
          <div className="map-grid-lines" />
          <div className="map-arc" />
          <div className="map-arc2" />
          {/* Pulsing dots */}
          <div className="map-dot" style={{ top: '42%', left: '48%' }} />
          <div className="map-dot" style={{ top: '28%', left: '38%', animationDelay: '.4s' }} />
          <div className="map-dot" style={{ top: '60%', left: '62%', animationDelay: '.8s' }} />
          <div className="map-dot" style={{ top: '35%', left: '58%', animationDelay: '.2s' }} />
          <div className="map-dot" style={{ top: '72%', left: '42%', animationDelay: '1.1s' }} />
          <div className="map-label">Cobertura Nacional VERBO</div>
        </div>
      </div>
      <div className="coverage-stats sr d3">
        <div className="cov-stat">
          <div className="cov-num">
            <AnimatedCounter value={100} /><em>%</em>
          </div>
          <div className="cov-label">Território Coberto</div>
        </div>
        <div className="cov-stat">
          <div className="cov-num">
            <AnimatedCounter value={5563} localeFormat /><em>+</em>
          </div>
          <div className="cov-label">Municípios Atendidos</div>
        </div>
        <div className="cov-stat">
          <div className="cov-num">
            <AnimatedCounter value={365} />
          </div>
          <div className="cov-label">Dias por ano disponível</div>
        </div>
      </div>
    </section>
  )
}
