'use client'

import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

const GEO_URL = '/world-110m.json'

const SOUTH_AMERICA = new Set([
  '032', // Argentina
  '068', // Bolívia
  '076', // Brasil
  '152', // Chile
  '170', // Colômbia
  '218', // Equador
  '328', // Guiana
  '604', // Peru
  '600', // Paraguai
  '740', // Suriname
  '858', // Uruguai
  '862', // Venezuela
  '254', // Guiana Francesa
])

const BRAZIL_CITIES = [
  { name: 'Belo Horizonte', coords: [-43.9345, -19.9167] as [number, number], anchor: 'start'  as const, dx: 6,  dy: 4   },
  { name: 'Brasília',       coords: [-47.9297, -15.7801] as [number, number], anchor: 'end'    as const, dx: -6, dy: -8  },
  { name: 'Rio de Janeiro', coords: [-43.1729, -22.9068] as [number, number], anchor: 'start'  as const, dx: 6,  dy: 4   },
  { name: 'Belém',          coords: [-48.5044,  -1.4558] as [number, number], anchor: 'middle' as const, dx: 0,  dy: -10 },
]

const PRIMARY       = '#1a418c'
const PRIMARY_HOVER = '#1e4fa8'
const STROKE        = 'rgba(26,65,140,.35)'

export default function CoverageMap() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)

  return (
    <section id="coverage">
      <div className="coverage-label sr">
        <span className="eyebrow">Mapa de cobertura</span>
        <h2>Disponível em todo o Brasil.</h2>
        <p>A VERBO possui escritórios distribuídos em cinco continentes, incluindo Austrália, Nova Zelândia, Indonésia, EUA, Brasil, Colômbia, Holanda, Grécia e Chipre. Todos os pontos de contato com o cliente são locais, com suporte de uma equipe experiente. No Brasil, temos escritórios em Belo Horizonte, Brasília, Rio de Janeiro e Belém.</p>
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
              geographies
                .filter((geo: any) => SOUTH_AMERICA.has(String(geo.id).padStart(3, '0')))
                .map((geo: any) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="transparent"
                    stroke={STROKE}
                    strokeWidth={0.8}
                    style={{
                      default: { outline: 'none' },
                      hover:   { outline: 'none', fill: 'rgba(26,65,140,.06)' },
                      pressed: { outline: 'none' },
                    }}
                  />
                ))
            }
          </Geographies>

          {BRAZIL_CITIES.map((city) => (
            <Marker
              key={city.name}
              coordinates={city.coords}
              onMouseEnter={() => setHoveredCity(city.name)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              <circle r={4} fill="#0bb5e9" stroke="none" style={{ cursor: 'pointer' }} />
              {hoveredCity === city.name && (
                <text
                  textAnchor={city.anchor}
                  x={city.dx}
                  y={city.dy}
                  stroke="#fff"
                  strokeWidth={3}
                  paintOrder="stroke"
                  style={{
                    fontFamily: 'inherit',
                    fontSize: '10px',
                    fontWeight: 700,
                    fill: '#000',
                    pointerEvents: 'none',
                  }}
                >
                  {city.name}
                </text>
              )}
            </Marker>
          ))}
        </ComposableMap>
        </div>
      </div>

    </section>
  )
}
