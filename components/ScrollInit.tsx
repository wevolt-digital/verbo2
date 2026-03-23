'use client'

import { useEffect } from 'react'

export default function ScrollInit() {
  useEffect(() => {
    // Scroll reveal
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('show')
            revealObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.sr,.sr-scale,.sr-left,.sr-right').forEach((el) => revealObs.observe(el))

    // Parallax hero content fadeout
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let ticking = false
    function onScroll() {
      if (ticking || prefersReduced) return
      requestAnimationFrame(() => {
        const sy = window.scrollY
        const heroContent = document.querySelector<HTMLElement>('#hero h1')
        const heroSub = document.querySelector<HTMLElement>('#hero .sub')
        const heroVH = window.innerHeight
        if (sy < heroVH) {
          const f = Math.max(0, 1 - sy / heroVH * 1.6)
          const t = sy * 0.28
          ;[heroContent, heroSub].forEach((el) => {
            if (el) {
              el.style.transform = `translateY(${t}px)`
              el.style.opacity = String(f)
            }
          })
        }
        ticking = false
      })
      ticking = true
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      revealObs.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}
