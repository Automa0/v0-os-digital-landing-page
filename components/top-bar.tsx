'use client'

import { useEffect, useState } from 'react'

export function TopBar() {
  const [location, setLocation] = useState('Brasil')

  useEffect(() => {
    const fetchLocation = async () => {
      // Tenta API principal
      try {
        const res = await fetch('https://ip-api.com/json/?fields=status,city,regionName,country', {
          cache: 'no-store'
        })
        const data = await res.json()
        console.log("[v0] ip-api.com response:", data)
        
        if (data.status === 'success') {
          if (data.city) {
            setLocation(data.city)
            return
          } else if (data.regionName) {
            setLocation(data.regionName)
            return
          }
        }
      } catch (err) {
        console.log("[v0] ip-api.com failed:", err)
      }

      // Fallback: ipapi.co
      try {
        const res2 = await fetch('https://ipapi.co/json/', { cache: 'no-store' })
        const data2 = await res2.json()
        console.log("[v0] ipapi.co response:", data2)
        
        if (data2.city) {
          setLocation(data2.city)
          return
        } else if (data2.region) {
          setLocation(data2.region)
          return
        }
      } catch (err2) {
        console.log("[v0] ipapi.co failed:", err2)
      }

      // Fallback final
      setLocation('Brasil')
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
