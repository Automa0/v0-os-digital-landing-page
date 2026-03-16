"use client"

import { X, Check } from "lucide-react"

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
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Transforme sua assistência técnica
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Veja a diferença entre funcionar sem organização e ter tudo sob controle
          </p>
        </div>

        {/* Comparison cards */}
        <div className="relative mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-4 mb-8">
            {/* Left side - Problems */}
            <div className="space-y-4">
              <div className="text-center md:text-right mb-8">
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Sem um sistema organizado
                </h3>
              </div>

              {comparison.map((item, idx) => (
                <div
                  key={idx}
                  className="group p-4 rounded-lg bg-red-50 border border-red-200/50 hover:border-red-300 transition-all hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-red-900/80">
                      {item.problem}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* VS divider */}
            <div className="hidden md:flex items-center justify-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg">
                  <span className="text-sm font-bold text-white">VS</span>
                </div>
              </div>
            </div>

            {/* Right side - Solutions */}
            <div className="space-y-4">
              <div className="text-center md:text-left mb-8">
                <h3 className="font-heading text-2xl font-bold text-primary">
                  Com OS Digital Plus
                </h3>
              </div>

              {comparison.map((item, idx) => (
                <div
                  key={idx}
                  className="group p-4 rounded-lg bg-blue-50 border border-primary/30 hover:border-primary/60 transition-all hover:shadow-md hover:bg-blue-100/50"
                >
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-primary/90">
                      {item.solution}
                    </p>
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
