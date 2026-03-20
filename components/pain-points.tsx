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
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-background py-16 sm:py-20 lg:py-24">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        {/* Main Title */}
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white text-balance mb-3">
            Você ainda passa por isso na sua <span className="text-blue-400">assistência</span>?
          </h2>
          <p className="text-base sm:text-lg text-white/60">
            Se identificou com algum desses problemas?
          </p>
        </div>

        {/* Grid of Problems */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {pains.map((pain, i) => (
            <div
              key={pain.title}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s`, animationDuration: '0.6s' }}
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-7 lg:p-8 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/8 hover:shadow-lg hover:shadow-blue-500/10 group-hover:scale-105">
                {/* Icon Container */}
                <div className="mb-4 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/10 text-blue-400 transition-all duration-300 group-hover:from-blue-500/30 group-hover:to-blue-600/20 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                  <pain.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>

                {/* Text Content */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white leading-snug">
                  {pain.title}
                </h3>
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
