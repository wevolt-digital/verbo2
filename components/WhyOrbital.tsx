'use client'

import { useRef, useEffect } from 'react'

export default function WhyOrbital() {
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
      cx = W * .75
      cy = H / 2
    }
    resize()

    function hexRgba(hex: string, a: number): string {
      const r = parseInt(hex.slice(1, 3), 16)
      const g = parseInt(hex.slice(3, 5), 16)
      const b = parseInt(hex.slice(5, 7), 16)
      return `rgba(${r},${g},${b},${a})`
    }

    interface Sat { t: number; trail: { x: number; y: number }[] }
    interface Orbit { a: number; b: number; phi: number; spd: number; col: string; w: number; sats: Sat[] }

    let ORBITS: Orbit[] = []

    function buildOrbits() {
      ORBITS = [
        { a: W * .30, b: W * .30 * .25, phi: 10,  spd: .005,  col: '#0BB5E9', w: 1.6, sats: [{ t: 0, trail: [] }] },
        { a: W * .42, b: W * .42 * .50, phi: 60,  spd: .0035, col: '#1A418C', w: 1.4, sats: [{ t: Math.PI, trail: [] }] },
        { a: W * .20, b: W * .20 * .38, phi: -45, spd: -.008, col: '#0BB5E9', w: 1.2, sats: [{ t: 1.2, trail: [] }] },
        { a: W * .52, b: W * .52 * .20, phi: 25,  spd: .0025, col: '#1A418C', w: 1.0, sats: [{ t: 2.5, trail: [] }, { t: 2.5 + Math.PI, trail: [] }] },
      ]
    }
    buildOrbits()

    const TRAIL_LEN = 36

    function orbitPos(o: Orbit, t: number) {
      const p = o.phi * Math.PI / 180
      const lx = o.a * Math.cos(t)
      const ly = o.b * Math.sin(t)
      return {
        x: cx + lx * Math.cos(p) - ly * Math.sin(p),
        y: cy + lx * Math.sin(p) + ly * Math.cos(p),
      }
    }

    function drawOrbit(o: Orbit) {
      const isCyan = o.col === '#0BB5E9'
      const alpha = isCyan ? 0.18 : 0.11
      ctx!.save()
      ctx!.translate(cx, cy)
      ctx!.rotate(o.phi * Math.PI / 180)
      ctx!.scale(1, o.b / o.a)
      ctx!.beginPath()
      ctx!.arc(0, 0, o.a, 0, Math.PI * 2)
      ctx!.restore()
      ctx!.strokeStyle = hexRgba(o.col, alpha)
      ctx!.lineWidth = 1.4
      ctx!.stroke()
    }

    function drawSat(x: number, y: number, col: string, size: number) {
      const g = ctx!.createRadialGradient(x, y, 0, x, y, size * 5)
      g.addColorStop(0, hexRgba(col, .35))
      g.addColorStop(.3, hexRgba(col, .1))
      g.addColorStop(1, 'transparent')
      ctx!.beginPath(); ctx!.arc(x, y, size * 5, 0, Math.PI * 2); ctx!.fillStyle = g; ctx!.fill()
      ctx!.beginPath(); ctx!.arc(x, y, size, 0, Math.PI * 2); ctx!.fillStyle = col; ctx!.fill()
      const coreCol = col === '#1A418C' ? '#5B8CE8' : '#ffffff'
      ctx!.beginPath(); ctx!.arc(x, y, size * .4, 0, Math.PI * 2); ctx!.fillStyle = coreCol; ctx!.fill()
    }

    function drawTrail(trail: { x: number; y: number }[], col: string) {
      if (trail.length < 2) return
      for (let i = 1; i < trail.length; i++) {
        ctx!.beginPath()
        ctx!.moveTo(trail[i - 1].x, trail[i - 1].y)
        ctx!.lineTo(trail[i].x, trail[i].y)
        ctx!.strokeStyle = hexRgba(col, (i / trail.length) * .22)
        ctx!.lineWidth = (i / trail.length) * 1.8
        ctx!.lineCap = 'round'
        ctx!.stroke()
      }
    }

    function frame() {
      RAF = requestAnimationFrame(frame)
      ctx!.clearRect(0, 0, W, H)
      ORBITS.forEach(o => {
        drawOrbit(o)
        o.sats.forEach(sat => {
          sat.t += o.spd
          const pos = orbitPos(o, sat.t)
          sat.trail.push({ x: pos.x, y: pos.y })
          if (sat.trail.length > TRAIL_LEN) sat.trail.shift()
          drawTrail(sat.trail, o.col)
          drawSat(pos.x, pos.y, o.col, o.w * 1.3)
        })
      })
    }

    RAF = requestAnimationFrame(frame)

    function onVisibility() {
      if (document.hidden) cancelAnimationFrame(RAF)
      else RAF = requestAnimationFrame(frame)
    }
    document.addEventListener('visibilitychange', onVisibility)

    function onResize() { resize(); buildOrbits() }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      cancelAnimationFrame(RAF)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="why-orbital-canvas" />
}
