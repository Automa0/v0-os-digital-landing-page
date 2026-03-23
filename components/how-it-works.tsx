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
  {
    title: "Informações centralizadas",
    description: "Pare de depender de WhatsApp, papel ou memória — tudo fica salvo no sistema",
  },
  {
    title: "Controle de múltiplas lojas",
    description: "Gerencie duas ou mais unidades sem se perder ou misturar informações",
  },
  {
    title: "Orçamento automático em segundos",
    description: "Crie e envie orçamentos rapidamente, mesmo sem ter o valor definido ainda.",
    highlighted: true,
  },
] as const

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#020617] to-black" />
      
      {/* Glow radial azul */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl opacity-25 pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        {/* Título Principal */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-16">
          <h2 className="font-heading font-extrabold leading-tight text-white text-balance" style={{ fontSize: 'clamp(24px, 6vw, 50px)' }}>
            Como o OS Digital+ <span className="text-blue-400">organiza</span> na prática
          </h2>
        </div>

        {/* Subtítulo */}
        <div className="mx-auto max-w-2xl text-center -mt-8 sm:-mt-6 mb-10 sm:mb-16">
          <p className="text-sm sm:text-base text-white/60 tracking-tighter">
            Menos bagunça, mais controle e mais resultado no dia a dia
          </p>
        </div>

        {/* Timeline - Mobile (vertical) */}
        <div className="relative lg:hidden">
          {/* Linha vertical - mobile apenas */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-blue-500/20 to-transparent" />

          {/* Items */}
          <div className="space-y-6 sm:space-y-8">
            {timelineItems.map((item, index) => {
              const isHighlighted = 'highlighted' in item && item.highlighted
              
              return (
                <div
                  key={item.title}
                  className="relative animate-fade-in flex items-start gap-4"
                  style={{ animationDelay: `${index * 0.1}s`, animationDuration: '0.6s' }}
                >
                  {/* Bolinha do timeline - centralizada */}
                  <div className="flex-shrink-0 mt-2">
                    <div className={`relative z-10 h-10 w-10 rounded-full flex items-center justify-center shadow-lg ${
                      isHighlighted 
                        ? 'bg-gradient-to-br from-green-500 to-green-600 border-2 border-green-400 shadow-green-500/50 animate-pulse' 
                        : 'bg-black border-2 border-blue-500 shadow-blue-500/30'
                    }`}>
                      <CheckCircle2 className={`h-5 w-5 ${isHighlighted ? 'text-white' : 'text-blue-400'}`} />
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1 min-w-0">
                    <div className={`rounded-xl backdrop-blur-md p-4 sm:p-5 transition-all duration-300 relative overflow-hidden ${
                      isHighlighted 
                        ? 'border-2 border-green-500/50 bg-gradient-to-br from-green-500/10 to-green-600/5 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20' 
                        : 'border border-white/10 bg-white/5 hover:border-blue-500/30 hover:bg-white/8'
                    }`}>
                      {isHighlighted && (
                        <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-bl-lg rounded-tr-lg" style={{ lineHeight: '1.7em', letterSpacing: '0.026em' }}>
                          IMPORTANTE
                        </div>
                      )}
                      <h3 className={`text-sm sm:text-base font-bold mb-2 ${isHighlighted ? 'text-green-400' : 'text-white'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-xs sm:text-sm leading-relaxed whitespace-pre-line ${isHighlighted ? 'text-white/70' : 'text-white/60'}`}>
                        {item.description}
                      </p>
                      {isHighlighted && (
                        <p className="text-xs sm:text-sm leading-relaxed mt-3 pt-3 border-t border-green-500/30">
                          <span className="text-green-300 font-semibold">E mais:</span> {' '}
                          <span className="text-green-200 font-bold">se você esquecer de enviar o valor, o sistema te avisa para você não perder o cliente.</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Desktop Layout - Timeline Central Vertical */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Linha vertical central */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-500/30 to-green-500/50 -translate-x-1/2" />

            {/* Items da timeline */}
            <div className="space-y-8">
              {timelineItems.map((item, index) => {
                const isHighlighted = 'highlighted' in item && item.highlighted
                const isEven = index % 2 === 0

                return (
                  <div
                    key={item.title}
                    className="relative animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s`, animationDuration: '0.6s' }}
                  >
                    {/* Container flex para alinhar bolinha e card */}
                    <div className={`flex items-center gap-6 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                      {/* Card - ocupa metade da largura */}
                      <div className={`w-[calc(50%-32px)] ${isEven ? 'text-right' : 'text-left'}`}>
                        <div className={`rounded-xl backdrop-blur-md p-5 transition-all duration-300 relative overflow-hidden inline-block w-full ${
                          isHighlighted 
                            ? 'border-2 border-green-500/50 bg-gradient-to-br from-green-500/10 to-green-600/5 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20' 
                            : 'border border-white/10 bg-white/5 hover:border-blue-500/30 hover:bg-white/8'
                        }`}>
                          {isHighlighted && (
                            <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-bl-lg rounded-tr-lg" style={{ lineHeight: '1.7em', letterSpacing: '0.026em' }}>
                              IMPORTANTE
                            </div>
                          )}
                          <h3 className={`text-base font-bold mb-2 ${isHighlighted ? 'text-green-400' : 'text-white'}`}>
                            {item.title}
                          </h3>
                          <p className={`text-sm leading-relaxed ${isHighlighted ? 'text-white/70' : 'text-white/60'}`}>
                            {item.description}
                          </p>
                          {isHighlighted && (
                            <p className="text-sm leading-relaxed mt-4 pt-4 border-t border-green-500/30">
                              <span className="text-green-300 font-semibold">E mais:</span>{' '}
                              <span className="text-green-200 font-bold">se você esquecer de enviar o valor, o sistema te avisa para você não perder o cliente.</span>
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Bolinha central - exatamente no meio */}
                      <div className="flex-shrink-0 z-10">
                        <div className={`h-12 w-12 rounded-full flex items-center justify-center shadow-lg ${
                          isHighlighted 
                            ? 'bg-gradient-to-br from-green-500 to-green-600 border-2 border-green-400 shadow-green-500/50 animate-pulse' 
                            : 'bg-black border-2 border-blue-500 shadow-blue-500/30'
                        }`}>
                          <CheckCircle2 className={`h-6 w-6 ${isHighlighted ? 'text-white' : 'text-blue-400'}`} />
                        </div>
                      </div>

                      {/* Espaço vazio do outro lado */}
                      <div className="w-[calc(50%-32px)]" />
                    </div>
                  </div>
                )
              })}
            </div>
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
