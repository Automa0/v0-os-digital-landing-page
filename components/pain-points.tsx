"use client"

import { useRef, useEffect, useState } from "react"
import {
  AlertCircle,
  MessageCircle,
  TrendingDown,
  Info,
  Store,
} from "lucide-react"

const stories = [
  {
    label: "Cliente",
    lines: [
      "Meu celular já ficou pronto?",
      "Você não me respondeu ainda",
      "Qual foi o valor mesmo?",
    ],
  },
  {
    label: "Você (autônomo)",
    lines: [
      "Quanto entrou hoje mesmo?",
      "Esse dinheiro foi de qual cliente?",
      "Já recebi tudo ou ainda falta algo?",
    ],
  },
  {
    label: "Você (dono)",
    lines: [
      "Qual loja fechou mais serviço hoje?",
      "Tem OS parada e eu nem vi?",
      "Quanto cada loja realmente lucrou?",
    ],
  },
  {
    label: "Situação real",
    lines: [
      "Vou te passar o orçamento já já…",
      "(...tempo passa...)",
      "Fechei com outro, obrigado.",
    ],
  },
]

const pains = [
  {
    icon: AlertCircle,
    title: "Se perde nas ordens de serviço",
    description: "Você não sabe em que etapa cada aparelho está e acaba se enrolando no dia a dia",
  },
  {
    icon: MessageCircle,
    title: "Cliente fica te cobrando status toda hora",
    description: "Você precisa parar tudo várias vezes só pra responder mensagens e dar posição",
  },
  {
    icon: TrendingDown,
    title: "Não sabe quanto realmente está lucrando",
    description: "Falta clareza sobre entradas, saídas e o lucro real do mês",
  },
  {
    icon: Info,
    title: "Informações espalhadas no WhatsApp, papel ou anotações",
    description: "Dados importantes ficam perdidos e difíceis de encontrar quando você precisa",
  },
  {
    icon: Store,
    title: "Dificuldade de controlar mais de uma loja",
    description: "Fica difícil acompanhar tudo sem perder controle das operações",
  },
]

export function PainPoints() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused && scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
          const cardWidth = clientWidth / 2

          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            // Voltou ao início suavemente
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
          } else {
            scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
          }
        }
      }, 3000)
    }

    startAutoScroll()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused])

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Label - Realidade do dia a dia */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Realidade do dia a dia
          </p>
        </div>

        {/* Main Title */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 text-balance">
            Você ainda passa por isso na sua <span className="text-blue-600">assistência</span>?
          </h2>
        </div>

        {/* Grid of Problems */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {pains.map((pain, i) => {
            // Último card deve ser centralizado em desktop
            const isLastCard = i === pains.length - 1;
            const gridClass = isLastCard ? "md:col-span-2 md:w-1/2 md:mx-auto" : "";

            return (
              <div
                key={pain.title}
                className={`group relative animate-fade-in ${gridClass}`}
                style={{ animationDelay: `${i * 0.08}s`, animationDuration: '0.6s' }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  {/* Inner background com azul suave */}
                  <div className="absolute inset-0 rounded-2xl" style={{ backgroundColor: 'rgba(59,130,246,0.08)' }} />
                  
                  {/* Flex container para ícone e texto lado a lado */}
                  <div className="relative flex gap-4 items-start">
                    {/* Icon Container - alinhado ao topo */}
                    <div className="flex-shrink-0 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-200">
                      <pain.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 pt-0.5">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight mb-2">
                        {pain.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {pain.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Linha separadora */}
        <div className="border-t border-gray-300 mb-8" />

        {/* Carrossel de frases reais */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory pb-2 -mx-5 px-5 sm:-mx-8 sm:px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {stories.map((story) => (
              <div
                key={story.label}
                className="flex-shrink-0 w-[80%] sm:w-[60%] lg:w-[calc(50%-10px)] snap-center"
              >
                <div className="h-full rounded-2xl bg-white border-2 border-blue-500 p-4 sm:p-5 shadow-sm">
                  <span className="inline-block text-xs font-medium text-blue-600 uppercase tracking-wider mb-3 px-2 py-1 bg-blue-50 rounded-md">
                    {story.label}
                  </span>
                  <div className="space-y-2">
                    {story.lines.map((line, lineIndex) => (
                      <p
                        key={lineIndex}
                        className={`text-sm sm:text-base font-medium leading-relaxed ${
                          line.startsWith("(") ? "text-gray-400 text-xs italic" : "text-gray-800"
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frase de fechamento */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-sm sm:text-base text-gray-700">
            Se você se identificou com isso, sua assistência não tem <span className="text-blue-600 font-bold">falta de clientes</span>… tem <span className="text-blue-600 font-bold">falta de controle.</span>
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
