'use client'

import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

const GEO_URL = '/world-110m.json'

// ISO numeric codes dos países com presença VERBO
const ACTIVE_COUNTRIES = new Set([
  '036', // Austrália
  '554', // Nova Zelândia
  '360', // Indonésia
  '840', // EUA
  '076', // Brasil
  '170', // Colômbia
  '528', // Holanda
  '300', // Grécia
  '196', // Chipre
])

// Antártica (010) — não exibir
const EXCLUDED = new Set(['010'])

const BRAZIL_CITIES = [
  { name: 'Belo Horizonte', coords: [-43.9345, -19.9167] as [number, number] },
  { name: 'Brasília',       coords: [-47.9297, -15.7801] as [number, number] },
  { name: 'Rio de Janeiro', coords: [-43.1729, -22.9068] as [number, number] },
  { name: 'Belém',          coords: [-48.5044,  -1.4558] as [number, number] },
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
          projection="geoNaturalEarth1"
          style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }}
          projectionConfig={{ scale: 155, center: [0, 10] }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: any[] }) =>
              geographies
                .filter((geo: any) => !EXCLUDED.has(String(geo.id).padStart(3, '0')))
                .map((geo: any) => {
                  const id     = String(geo.id).padStart(3, '0')
                  const active = ACTIVE_COUNTRIES.has(id)
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={active ? PRIMARY : 'transparent'}
                      stroke={STROKE}
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover:   { outline: 'none', fill: active ? PRIMARY_HOVER : 'rgba(26,65,140,.06)' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  )
                })
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
                  textAnchor="middle"
                  y={-10}
                  style={{
                    fontFamily: 'inherit',
                    fontSize: '10px',
                    fontWeight: 600,
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
