"use client"

import { CheckCircle2 } from "lucide-react"

const timelineItems = [
  {
    title: "Controle total das ordens de serviço",
    description: "Acompanhe cada aparelho em tempo real sem se perder ou esquecer nada",
  },
  {
    title: "Cliente acompanha sem te incomodar",
    description: "Envie um link automático e deixe o cliente ver o status sozinho",
  },
  {
    title: "Financeiro claro e organizado",
    description: "Saiba exatamente quanto entrou, saiu e quanto você realmente lucrou",
  },
]

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#020617] to-black" />
      
      {/* Glow radial azul */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl opacity-25 pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        {/* Título Principal */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white text-balance">
            Como o OS Digital+ <span className="text-blue-400">organiza</span> sua assistência na prática
          </h2>
        </div>

        {/* Subtítulo */}
        <div className="mx-auto max-w-2xl text-center mb-14 sm:mb-20">
          <p className="text-base sm:text-lg text-white/60">
            Menos bagunça, mais controle e mais resultado no dia a dia
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha vertical - responsiva */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-blue-500/20 to-transparent sm:-translate-x-1/2" />

          {/* Items */}
          <div className="space-y-8 sm:space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={item.title}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s`, animationDuration: '0.6s' }}
              >
                {/* Bolinha do timeline */}
                <div className="absolute left-0 sm:left-1/2 top-0 sm:-translate-x-1/2 -translate-y-1/2">
                  <div className="relative z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black border-2 border-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                  </div>
                </div>

                {/* Conteúdo - alinhado à direita em mobile, alternado em desktop */}
                <div className={`pl-20 sm:pl-0 ${index % 2 === 0 ? 'sm:pr-1/2 sm:text-right' : 'sm:pl-1/2'}`}>
                  <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-6 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/8">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fechamento */}
        <div className="mt-16 sm:mt-20 text-center">
          <p className="text-base sm:text-lg text-white/70">
            Tudo isso em um único sistema <span className="text-blue-300 font-semibold">simples</span>, rápido e <span className="text-blue-300 font-semibold">fácil</span> de usar.
          </p>
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
