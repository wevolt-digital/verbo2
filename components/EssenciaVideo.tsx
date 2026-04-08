'use client'

import { useRef } from 'react'

export default function EssenciaVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  function handleMouseEnter() {
    videoRef.current?.play()
  }

  function handleMouseLeave() {
    const v = videoRef.current
    if (!v) return
    v.pause()
    v.currentTime = 0
  }

  return (
    <div
      className="essencia-video-wrap sr-right"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src="/essencia-verbo.mp4"
        className="essencia-video"
        muted
        playsInline
        loop
        preload="metadata"
      />
    </div>
  )
}
