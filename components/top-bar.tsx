'use client'

import { useEffect, useState } from 'react'

export function TopBar() {
  const [location, setLocation] = useState('')

  useEffect(() => {
    fetch('https://ipwho.is/')
      .then((res) => res.json())
      .then((data) => {
        if (data.city && data.city.trim() !== '') {
          setLocation(data.city)
        } else if (data.region && data.region.trim() !== '') {
          setLocation(data.region)
        } else {
          setLocation('todo o Brasil')
        }
      })
      .catch(() => setLocation('todo o Brasil'))
  }, [])

  const text = location
    ? `📍 Assistências técnicas espalhada pelo ${location} já estão usando o OS Digital`
    : '📍 Assistências técnicas espalhada pelo Brasil já estão usando o OS Digital'

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-10 overflow-hidden border-b border-slate-700/50" style={{ background: 'linear-gradient(90deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}>
        <div className="marquee-track h-full flex items-center">
          <div className="marquee-inner whitespace-nowrap text-white text-sm font-medium">
            <span>{text}</span>
            <span className="mx-10">·</span>
            <span>{text}</span>
            <span className="mx-10">·</span>
            <span>{text}</span>
            <span className="mx-10">·</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          overflow: hidden;
        }

        .marquee-inner {
          display: inline-block;
          animation: marquee 35s linear infinite;
          will-change: transform;
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .marquee-track:hover .marquee-inner {
          animation-play-state: paused;
        }
      `}</style>
    </>
  )
}
