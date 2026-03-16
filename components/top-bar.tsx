'use client'

import { useEffect, useState } from 'react'

export function TopBar() {
  const [location, setLocation] = useState('Brasil')

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipwho.is/')
        const data = await response.json()
        console.log("[v0] IP data received:", data)
        
        if (data.city && data.city.trim() !== '') {
          console.log("[v0] Setting location to city:", data.city)
          setLocation(data.city)
        } else if (data.region && data.region.trim() !== '') {
          console.log("[v0] Setting location to region:", data.region)
          setLocation(data.region)
        } else {
          console.log("[v0] No city or region, using fallback: Brasil")
          setLocation('Brasil')
        }
      } catch (error) {
        console.log("[v0] Error fetching location:", error)
        setLocation('Brasil')
      }
    }

    fetchLocation()
  }, [])

  const text = `📍 Assistências técnicas espalhada pelo ${location} já estão usando o OS Digital`

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
