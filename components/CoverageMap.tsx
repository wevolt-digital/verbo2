'use client'

import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import AnimatedCounter from './AnimatedCounter'

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

const BRAZIL_CITIES = [
  { name: 'Belo Horizonte', coords: [-43.9345, -19.9167] as [number, number] },
  { name: 'Brasília',       coords: [-47.9297, -15.7801] as [number, number] },
  { name: 'Rio de Janeiro', coords: [-43.1729, -22.9068] as [number, number] },
  { name: 'Belém',          coords: [-48.5044,  -1.4558] as [number, number] },
]

const PRIMARY = '#1a418c'
const PRIMARY_HOVER = '#1e4fa8'

export default function CoverageMap() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)

  return (
    <section id="coverage">
      <div className="coverage-label sr">
        <span className="eyebrow">Mapa de cobertura</span>
        <h2>Disponível em todo o Brasil.</h2>
        <p>Nossa constelação garante cobertura contínua sobre o território nacional, 24 horas por dia, 365 dias por ano.</p>
      </div>

      <div className="coverage-map-wrap sr-scale d2">
        <ComposableMap
          projection="geoNaturalEarth1"
          style={{ width: '100%', height: 'auto' }}
          projectionConfig={{ scale: 155 }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo: any) => {
                const id     = String(geo.id).padStart(3, '0')
                const active = ACTIVE_COUNTRIES.has(id)
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={active ? PRIMARY : 'transparent'}
                    stroke="#334155"
                    strokeWidth={0.4}
                    style={{
                      default:  { outline: 'none' },
                      hover:    { outline: 'none', fill: active ? PRIMARY_HOVER : 'rgba(255,255,255,.05)' },
                      pressed:  { outline: 'none' },
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
              <circle r={4} fill="#0bb5e9" stroke="#fff" strokeWidth={1.5} style={{ cursor: 'pointer' }} />
              {hoveredCity === city.name && (
                <text
                  textAnchor="middle"
                  y={-10}
                  style={{
                    fontFamily: 'inherit',
                    fontSize: '10px',
                    fontWeight: 600,
                    fill: '#fff',
                    pointerEvents: 'none',
                    textShadow: '0 1px 4px rgba(0,0,0,.8)',
                  }}
                >
                  {city.name}
                </text>
              )}
            </Marker>
          ))}
        </ComposableMap>
      </div>

      <div className="coverage-stats sr d3">
        <div className="cov-stat">
          <div className="cov-num"><AnimatedCounter value={100} /><em>%</em></div>
          <div className="cov-label">Território Coberto</div>
        </div>
        <div className="cov-stat">
          <div className="cov-num"><AnimatedCounter value={5563} localeFormat /><em>+</em></div>
          <div className="cov-label">Municípios Atendidos</div>
        </div>
        <div className="cov-stat">
          <div className="cov-num"><AnimatedCounter value={365} /></div>
          <div className="cov-label">Dias por ano disponível</div>
        </div>
      </div>
    </section>
  )
}
