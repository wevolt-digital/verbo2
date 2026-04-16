'use client'

import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const GEO_WORLD   = '/world-110m.json'
const GEO_STATES  = '/brazil-states.geojson'

const SOUTH_AMERICA = new Set([
  '032', '068', '076', '152', '170', '218',
  '328', '604', '600', '740', '858', '862', '254',
])

// codarea IBGE → sigla
const IBGE: Record<string, string> = {
  '11':'RO','12':'AC','13':'AM','14':'RR','15':'PA','16':'AP','17':'TO',
  '21':'MA','22':'PI','23':'CE','24':'RN','25':'PB','26':'PE','27':'AL',
  '28':'SE','29':'BA','31':'MG','32':'ES','33':'RJ','35':'SP',
  '41':'PR','42':'SC','43':'RS',
  '50':'MS','51':'MT','52':'GO','53':'DF',
}

// Estados com presença VERBO (infraestrutura ativa)
const VERBO_STATES = new Set([
  'RS','SP','RJ','MG','ES','BA','PE','CE','MA',
  'AP','RR','AM','AC','RO','MS','GO','TO','DF',
])

const PRIMARY       = '#1a418c'
const PRIMARY_LIGHT = 'rgba(26,65,140,.18)'
const STROKE_BR     = 'rgba(26,65,140,.35)'
const STROKE_SA     = 'rgba(26,65,140,.25)'

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
            {/* Camada 1: América do Sul como fundo */}
            <Geographies geography={GEO_WORLD}>
              {({ geographies }: { geographies: any[] }) =>
                geographies
                  .filter((geo: any) => SOUTH_AMERICA.has(String(geo.id).padStart(3, '0')))
                  .map((geo: any) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="transparent"
                      stroke={STROKE_SA}
                      strokeWidth={0.8}
                      style={{
                        default: { outline: 'none' },
                        hover:   { outline: 'none' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
              }
            </Geographies>

            {/* Camada 2: Estados do Brasil */}
            <Geographies geography={GEO_STATES}>
              {({ geographies }: { geographies: any[] }) =>
                geographies.map((geo: any) => {
                  const sigla  = IBGE[String(geo.properties?.codarea)]
                  const active = sigla ? VERBO_STATES.has(sigla) : false
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={active ? PRIMARY : PRIMARY_LIGHT}
                      stroke={STROKE_BR}
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover:   { outline: 'none', fill: active ? '#1e4fa8' : 'rgba(26,65,140,.28)' },
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
