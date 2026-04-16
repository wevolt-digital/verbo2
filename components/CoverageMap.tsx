'use client'

import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const GEO_URL = '/brazil-states.geojson'

// Estados com presença VERBO (infraestrutura ativa)
const VERBO_STATES = new Set([
  'RS', // Rio Grande do Sul
  'SP', // São Paulo
  'RJ', // Rio de Janeiro
  'MG', // Minas Gerais
  'ES', // Espírito Santo
  'BA', // Bahia
  'PE', // Pernambuco
  'CE', // Ceará
  'MA', // Maranhão
  'AP', // Amapá
  'RR', // Roraima
  'AM', // Amazonas
  'AC', // Acre
  'RO', // Rondônia
  'MS', // Mato Grosso do Sul
  'GO', // Goiás
  'TO', // Tocantins
  'DF', // Distrito Federal
])

const COLOR_ACTIVE  = '#1a418c'
const COLOR_IDLE    = 'rgba(26,65,140,.10)'
const STROKE_ACTIVE = 'rgba(26,65,140,.5)'
const STROKE_IDLE   = 'rgba(26,65,140,.2)'

export default function CoverageMap() {
  return (
    <section id="coverage">
      <div className="coverage-label sr">
        <span className="eyebrow">Mapa de cobertura</span>
        <h2>Presença em todo o território nacional.</h2>
        <p>
          A VERBO opera com infraestrutura ativa em 18 estados brasileiros e no Distrito Federal.
          Nossa presença é definida por pontos de operação instalados — não apenas clientes locais —
          garantindo conectividade confiável mesmo nas regiões mais remotas do país.
        </p>
      </div>

      <div className="coverage-map-wrap sr-scale d2">
        <div className="map-grid-lines" />
        <div className="map-crop">
          <ComposableMap
            projection="geoMercator"
            style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }}
            projectionConfig={{ scale: 620, center: [-52, -14] }}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }: { geographies: any[] }) =>
                geographies.map((geo: any) => {
                  const sigla  = geo.properties?.sigla as string | undefined
                  const active = sigla ? VERBO_STATES.has(sigla) : false
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={active ? COLOR_ACTIVE : COLOR_IDLE}
                      stroke={active ? STROKE_ACTIVE : STROKE_IDLE}
                      strokeWidth={0.6}
                      style={{
                        default: { outline: 'none' },
                        hover:   { outline: 'none', fill: active ? '#1e4fa8' : 'rgba(26,65,140,.18)' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  )
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </section>
  )
}
