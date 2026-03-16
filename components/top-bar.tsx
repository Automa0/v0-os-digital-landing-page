'use client'

import { useEffect, useState } from 'react'

type LocationState =
  | { type: 'city'; value: string }
  | { type: 'state'; value: string }
  | { type: 'brazil' }

function buildText(loc: LocationState): string {
  if (loc.type === 'city') {
    return `📍 Assistências técnicas em ${loc.value} já estão usando o OS Digital Plus.`
  }
  if (loc.type === 'state') {
    return `📍 Assistências técnicas no estado de ${loc.value} já estão usando o OS Digital Plus.`
  }
  return '📍 Assistências técnicas em todo o Brasil já estão usando o OS Digital Plus.'
}

export function TopBar() {
  const [loc, setLoc] = useState<LocationState>({ type: 'brazil' })

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // Tenta API de geolocalização do browser primeiro
        try {
          const response = await fetch('https://ipwho.is/')
          const data = await response.json()
          console.log("[v0] ipwho.is response:", data)

          if (data.success) {
            if (data.city && data.city.trim()) {
              setLoc({ type: 'city', value: data.city })
              return
            } else if (data.region && data.region.trim()) {
              setLoc({ type: 'state', value: data.region })
              return
            }
          }
        } catch (err) {
          console.log("[v0] ipwho.is error:", err)
        }

        // Fallback: ip-api.com (free tier)
        try {
          const response = await fetch('https://ip-api.com/json/?fields=status,city,region,country')
          const data = await response.json()
          console.log("[v0] ip-api.com response:", data)

          if (data.status === 'success') {
            if (data.city) {
              setLoc({ type: 'city', value: data.city })
              return
            } else if (data.region) {
              setLoc({ type: 'state', value: data.region })
              return
            }
          }
        } catch (err) {
          console.log("[v0] ip-api.com error:", err)
        }

        // Fallback final
        console.log("[v0] Using default Brazil fallback")
        setLoc({ type: 'brazil' })
      } catch (err) {
        console.log("[v0] Unexpected error in fetchLocation:", err)
        setLoc({ type: 'brazil' })
      }
    }

    fetchLocation()
  }, [])

  const text = buildText(loc)

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
