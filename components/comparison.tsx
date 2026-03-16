"use client"

import { X, Check } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const comparison = [
  {
    problem: "Anotações em papel",
    solution: "Ordens de serviço digitais"
  },
  {
    problem: "Cliente perguntando status",
    solution: "Cliente acompanha status online"
  },
  {
    problem: "Difícil saber o lucro",
    solution: "Controle financeiro completo"
  },
  {
    problem: "Serviços desorganizados",
    solution: "Tudo organizado em um sistema"
  },
  {
    problem: "Histórico perdido",
    solution: "Histórico completo de clientes"
  },
]

export function Comparison() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Transforme sua assistência técnica
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Veja a diferença entre funcionar sem organização e ter tudo sob controle
          </p>
        </div>

        {/* Comparison cards - side by side */}
        <div className="relative mx-auto max-w-5xl">
          {/* Mobile: stacked rows showing problem → solution */}
          <div className="block lg:hidden space-y-3">
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="text-center">
                <h3 className="font-heading text-base font-bold text-foreground opacity-60">Sem sistema</h3>
              </div>
              <div className="text-center">
                <h3 className="font-heading text-base font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Com OS Digital+</h3>
              </div>
            </div>
            {comparison.map((item, idx) => (
              <div key={idx} className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 flex items-start gap-2">
                  <X className="h-4 w-4 text-slate-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-medium text-slate-500 leading-snug">{item.problem}</p>
                </div>
                <div className="p-3 rounded-xl bg-blue-50 border border-primary/30 flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-medium text-primary leading-snug">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: original side-by-side layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-4 mb-8">
            {/* Left side - Problems */}
            <div className="space-y-4">
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl font-bold text-foreground opacity-60">
                  Sem um sistema organizado
                </h3>
              </div>
              {comparison.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-slate-700/20 border border-slate-600/30 hover:border-slate-500 transition-all hover:shadow-md transform opacity-75 ${
                    isVisible ? "translate-x-0 opacity-75" : "-translate-x-8 opacity-30"
                  }`}
                  style={{ transitionDelay: `${idx * 50}ms`, transition: isVisible ? `all 0.6s ease-out ${idx * 50}ms` : "none" }}
                >
                  <div className="flex items-start gap-3">
                    <X className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-slate-600">{item.problem}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* VS divider with central circle */}
            <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-20 top-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute inset-0 h-20 w-20 rounded-full bg-gradient-to-br from-primary to-accent opacity-30 blur-2xl animate-pulse" />
                <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent shadow-2xl shadow-primary/40 hover:scale-110 transition-transform">
                  <span className="text-sm font-bold text-white">VS</span>
                </div>
                <div className="absolute top-1/2 -left-8 w-8 h-0.5 bg-gradient-to-r from-transparent to-primary/30" />
                <div className="absolute top-1/2 -right-8 w-8 h-0.5 bg-gradient-to-l from-transparent to-primary/30" />
              </div>
            </div>

            {/* Right side - Solutions */}
            <div className="space-y-4">
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Com OS Digital Plus
                </h3>
              </div>
              {comparison.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-gradient-to-br from-blue-50/90 to-blue-50/50 border border-primary/50 shadow-lg shadow-primary/15 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/70 transition-all transform ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-30"
                  }`}
                  style={{ transitionDelay: `${idx * 50}ms`, transition: isVisible ? `all 0.6s ease-out ${idx * 50}ms` : "none" }}
                >
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-primary">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
