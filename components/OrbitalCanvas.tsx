'use client'

import { useRef, useEffect } from 'react'

export default function OrbitalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0, H = 0, cx = 0, cy = 0
    let RAF = 0

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = canvas!.offsetWidth
      H = canvas!.offsetHeight
      canvas!.width = W * dpr
      canvas!.height = H * dpr
      ctx!.scale(dpr, dpr)
      cx = W / 2
      cy = H / 2
    }
    resize()

    function hexRgba(hex: string, a: number): string {
      if (hex.startsWith('rgba') || hex.startsWith('rgb')) return hex
      const r = parseInt(hex.slice(1, 3), 16)
      const g = parseInt(hex.slice(3, 5), 16)
      const b = parseInt(hex.slice(5, 7), 16)
      return `rgba(${r},${g},${b},${a})`
    }

    interface Sat { t: number; trail: { x: number; y: number }[] }
    interface Orbit { a: number; b: number; phi: number; spd: number; col: string; w: number; sats: Sat[] }

    let ORBITS: Orbit[] = []

    function buildOrbits() {
      const prev = ORBITS
      ORBITS = [
        { a: W * .28, b: W * .28 * .22, phi: 8,   spd: .0055, col: '#0BB5E9', w: 2.2, sats: [{ t: prev[0]?.sats[0]?.t ?? 0, trail: [] }] },
        { a: W * .38, b: W * .38 * .55, phi: 65,  spd: .0038, col: '#1A418C', w: 1.8, sats: [{ t: prev[1]?.sats[0]?.t ?? Math.PI, trail: [] }] },
        { a: W * .22, b: W * .22 * .35, phi: -40, spd: -.0072, col: '#0BB5E9', w: 1.6, sats: [{ t: prev[2]?.sats[0]?.t ?? 1.2, trail: [] }] },
        { a: W * .48, b: W * .48 * .18, phi: 22,  spd: .003, col: '#1A418C', w: 1.5, sats: [{ t: prev[3]?.sats[0]?.t ?? 2.8, trail: [] }, { t: prev[3]?.sats[1]?.t ?? (2.8 + Math.PI), trail: [] }] },
        { a: W * .16, b: W * .16 * .42, phi: -75, spd: .011, col: '#0BB5E9', w: 1.4, sats: [{ t: prev[4]?.sats[0]?.t ?? .6, trail: [] }] },
        { a: W * .56, b: W * .56 * .28, phi: 48,  spd: .0022, col: '#1A418C', w: 1.2, sats: [{ t: prev[5]?.sats[0]?.t ?? Math.PI * .7, trail: [] }] },
      ]
    }
    buildOrbits()

    const TRAIL_LEN = 48

    function orbitPos(o: Orbit, t: number) {
      const p = o.phi * Math.PI / 180
      const lx = o.a * Math.cos(t)
      const ly = o.b * Math.sin(t)
      return {
        x: cx + lx * Math.cos(p) - ly * Math.sin(p),
        y: cy + lx * Math.sin(p) + ly * Math.cos(p)
      }
    }

    const mouse = { x: -9999, y: -9999, inside: false }
    let spotX = -9999, spotY = -9999

    const section = canvas.closest('section')
    function onMouseMove(e: MouseEvent) {
      const r = canvas!.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
      mouse.inside = true
    }
    function onMouseLeave() { mouse.inside = false }
    section?.addEventListener('mousemove', onMouseMove, { passive: true })
    section?.addEventListener('mouseleave', onMouseLeave)

    function orbitProximity(o: Orbit, mx: number, my: number): number {
      let minD2 = Infinity
      for (let i = 0; i < 48; i++) {
        const p = orbitPos(o, (i / 48) * Math.PI * 2)
        const dx = p.x - mx, dy = p.y - my
        const d2 = dx * dx + dy * dy
        if (d2 < minD2) minD2 = d2
      }
      return Math.sqrt(minD2)
    }

    function drawOrbit(o: Orbit, brightBoost: number) {
      const isCyan = o.col === '#0BB5E9'
      const baseAlpha = (isCyan ? 0.22 : 0.14) + brightBoost * 0.45
      const lineWidth = 1.6 + brightBoost * 1.6

      ctx!.save()
      ctx!.translate(cx, cy)
      ctx!.rotate(o.phi * Math.PI / 180)
      ctx!.scale(1, o.b / o.a)
      ctx!.beginPath()
      ctx!.arc(0, 0, o.a, 0, Math.PI * 2)
      ctx!.restore()
      ctx!.strokeStyle = hexRgba(o.col, baseAlpha)
      ctx!.lineWidth = lineWidth
      ctx!.stroke()

      if (brightBoost > 0.06) {
        ctx!.save()
        ctx!.translate(cx, cy)
        ctx!.rotate(o.phi * Math.PI / 180)
        ctx!.scale(1, o.b / o.a)
        ctx!.beginPath()
        ctx!.arc(0, 0, o.a, 0, Math.PI * 2)
        ctx!.restore()
        ctx!.strokeStyle = hexRgba(o.col, brightBoost * 0.18)
        ctx!.lineWidth = lineWidth + 6
        ctx!.filter = 'blur(5px)'
        ctx!.stroke()
        ctx!.filter = 'none'
      }
    }

    function drawSat(x: number, y: number, col: string, size: number, boost: number) {
      const s = size * (1 + boost * .4)
      const g = ctx!.createRadialGradient(x, y, 0, x, y, s * 5.5)
      g.addColorStop(0, hexRgba(col, .45 + boost * .2))
      g.addColorStop(.3, hexRgba(col, .12 + boost * .1))
      g.addColorStop(1, 'transparent')
      ctx!.beginPath(); ctx!.arc(x, y, s * 5.5, 0, Math.PI * 2); ctx!.fillStyle = g; ctx!.fill()
      ctx!.beginPath(); ctx!.arc(x, y, s, 0, Math.PI * 2); ctx!.fillStyle = col; ctx!.fill()
      const coreCol = col === '#1A418C' ? '#5B8CE8' : '#ffffff'
      ctx!.beginPath(); ctx!.arc(x, y, s * .42, 0, Math.PI * 2); ctx!.fillStyle = coreCol; ctx!.fill()
    }

    function drawTrail(trail: { x: number; y: number }[], col: string) {
      if (trail.length < 2) return
      for (let i = 1; i < trail.length; i++) {
        ctx!.beginPath()
        ctx!.moveTo(trail[i - 1].x, trail[i - 1].y)
        ctx!.lineTo(trail[i].x, trail[i].y)
        ctx!.strokeStyle = hexRgba(col, (i / trail.length) * .32)
        ctx!.lineWidth = (i / trail.length) * 2.2
        ctx!.lineCap = 'round'
        ctx!.stroke()
      }
    }

    function drawEarth() {
      const r = Math.min(W, H) * .08
      const g = ctx!.createRadialGradient(cx, cy, 0, cx, cy, r * 5)
      g.addColorStop(0, 'rgba(11,181,233,.10)')
      g.addColorStop(.3, 'rgba(11,181,233,.04)')
      g.addColorStop(.6, 'rgba(26,65,140,.02)')
      g.addColorStop(1, 'transparent')
      ctx!.beginPath(); ctx!.arc(cx, cy, r * 5, 0, Math.PI * 2); ctx!.fillStyle = g; ctx!.fill()
      ctx!.beginPath(); ctx!.arc(cx, cy, r, 0, Math.PI * 2)
      ctx!.strokeStyle = 'rgba(26,65,140,.12)'; ctx!.lineWidth = 1; ctx!.stroke()
      const cg = ctx!.createRadialGradient(cx, cy, 0, cx, cy, r)
      cg.addColorStop(0, 'rgba(11,181,233,.22)')
      cg.addColorStop(.5, 'rgba(26,65,140,.10)')
      cg.addColorStop(1, 'rgba(26,65,140,.04)')
      ctx!.beginPath(); ctx!.arc(cx, cy, r, 0, Math.PI * 2); ctx!.fillStyle = cg; ctx!.fill()
      ctx!.beginPath(); ctx!.arc(cx, cy, r * 1.5, 0, Math.PI * 2)
      ctx!.strokeStyle = 'rgba(11,181,233,.07)'; ctx!.lineWidth = 1; ctx!.stroke()
    }

    function drawSpotlight() {
      if (!mouse.inside) return
      const LERP = .08
      spotX += (mouse.x - spotX) * LERP
      spotY += (mouse.y - spotY) * LERP
      const radius = Math.min(W, H) * .36
      const g = ctx!.createRadialGradient(spotX, spotY, 0, spotX, spotY, radius)
      g.addColorStop(0, 'rgba(11,181,233,.07)')
      g.addColorStop(.35, 'rgba(11,181,233,.025)')
      g.addColorStop(1, 'transparent')
      ctx!.beginPath(); ctx!.rect(0, 0, W, H); ctx!.fillStyle = g; ctx!.fill()
    }

    const orbitBoosts: number[] = ORBITS.map(() => 0)

    function frame() {
      RAF = requestAnimationFrame(frame)
      ctx!.clearRect(0, 0, W, H)

      const hoverRadius = Math.min(W, H) * .12
      ORBITS.forEach((o, i) => {
        let targetBoost = 0
        if (mouse.inside) {
          const dist = orbitProximity(o, mouse.x, mouse.y)
          targetBoost = Math.max(0, 1 - dist / hoverRadius)
        }
        orbitBoosts[i] = orbitBoosts[i] + (targetBoost - orbitBoosts[i]) * .07
      })

      drawSpotlight()
      drawEarth()

      ORBITS.forEach((o, i) => {
        drawOrbit(o, orbitBoosts[i])
        o.sats.forEach(sat => {
          const ecc = 1 + 0.18 * Math.cos(sat.t)
          sat.t += o.spd * ecc
          const pos = orbitPos(o, sat.t)
          sat.trail.push({ x: pos.x, y: pos.y })
          if (sat.trail.length > TRAIL_LEN) sat.trail.shift()
          drawTrail(sat.trail, o.col)
          drawSat(pos.x, pos.y, o.col, o.w * 1.4, orbitBoosts[i])
        })
      })
    }

    RAF = requestAnimationFrame(frame)

    function onVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(RAF)
      } else {
        RAF = requestAnimationFrame(frame)
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    function onResize() { resize(); buildOrbits() }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      cancelAnimationFrame(RAF)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('resize', onResize)
      section?.removeEventListener('mousemove', onMouseMove)
      section?.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="orbital-canvas"
    />
  )
}
