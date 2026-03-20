"use client"

import {
  AlertCircle,
  MessageCircle,
  TrendingDown,
  Info,
  Store,
} from "lucide-react"

const pains = [
  {
    icon: AlertCircle,
    title: "Se perde nas ordens de serviço",
  },
  {
    icon: MessageCircle,
    title: "Cliente fica te cobrando status toda hora",
  },
  {
    icon: TrendingDown,
    title: "Não sabe quanto realmente está lucrando",
  },
  {
    icon: Info,
    title: "Informações espalhadas no WhatsApp, papel ou cabeça",
  },
  {
    icon: Store,
    title: "Dificuldade de controlar mais de uma loja",
  },
]

export function PainPoints() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      {/* Gradient background moderno */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#020617] to-black" />
      
      {/* Glow radial azul no centro */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Título acima dos cards */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-sm sm:text-base font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Realidade do dia a dia
          </p>
          <p className="text-lg sm:text-xl text-white/70">
            O problema não é falta de trabalho… é falta de <span className="text-blue-300 font-semibold">controle.</span>
          </p>
        </div>

        {/* Main Title */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white text-balance mb-4">
            Você ainda passa por isso na sua <span className="text-blue-400">assistência</span>?
          </h2>
          <p className="text-base sm:text-lg text-white/60">
            Se identificou com algum desses problemas?
          </p>
        </div>

        {/* Grid of Problems */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pains.map((pain, i) => (
            <div
              key={pain.title}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${i * 0.08}s`, animationDuration: '0.6s' }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900/60 hover:shadow-2xl hover:shadow-blue-500/10 group-hover:scale-105">
                {/* Flex container para ícone e texto lado a lado */}
                <div className="flex gap-4 items-start">
                  {/* Icon Container - Aumentado e mais destacado */}
                  <div className="flex-shrink-0 inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300 transition-all duration-300 group-hover:bg-blue-500/30 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                    <pain.icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                      {pain.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
