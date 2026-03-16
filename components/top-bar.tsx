'use client'

import { useEffect, useState } from 'react'

export function TopBar() {
  const [location, setLocation] = useState('Brasil')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipwho.is/?format=json')
        const data = await response.json()
        
        // Tentar cidade primeiro
        if (data.city && data.city.trim() !== '') {
          setLocation(data.city)
        }
        // Se não houver cidade, tentar estado
        else if (data.region && data.region.trim() !== '') {
          setLocation(data.region)
        }
        // Fallback para Brasil
        else {
          setLocation('Brasil')
        }
      } catch (error) {
        console.error('Erro ao detectar localização:', error)
        setLocation('Brasil')
      } finally {
        setIsLoading(false)
      }
    }

    fetchLocation()
  }, [])

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50 overflow-hidden">
        <div className="marquee-container h-full flex items-center px-4">
          <div className="marquee-content whitespace-nowrap text-white text-sm font-medium flex items-center gap-2">
            <span>📍 Assistências técnicas em {location} já estão usando o OS Digital Plus</span>
            <span className="mx-8">•</span>
            <span>📍 Assistências técnicas em {location} já estão usando o OS Digital Plus</span>
            <span className="mx-8">•</span>
            <span>📍 Assistências técnicas em {location} já estão usando o OS Digital Plus</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          background: linear-gradient(90deg, rgba(15,23,42,1) 0%, rgba(30,41,59,1) 50%, rgba(15,23,42,1) 100%);
        }

        .marquee-content {
          animation: marquee 40s linear infinite;
          will-change: transform;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </>
  )
}
