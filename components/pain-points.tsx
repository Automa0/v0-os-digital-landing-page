"use client"

import { useRef, useEffect, useState } from "react"
import {
  AlertCircle,
  MessageCircle,
  TrendingDown,
  Info,
  Store,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const stories = [
  {
    label: "Cliente",
    lines: [
      "Meu celular já ficou pronto?",
      "Você não me respondeu ainda,",
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
      "Estou com mais de 4 serviços em aberto e eu nem percebi.",
      "Quanto minha loja realmente lucrou?",
    ],
  },
  {
    label: "Situação real",
    lines: [
      "Vou te passar o orçamento já já…",
      "(...tempo passa...)",
      "Cliente: Fechei com outro, obrigado.",
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
  {
    icon: Clock,
    title: "Você esquece de responder orçamentos",
    description: "O cliente pede o orçamento… você anota… e simplesmente esquece de verificar o valor do serviço.",
  },
]

export function PainPoints() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / 2
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      setTimeout(checkScroll, 300)
    }
  }

  useEffect(() => {
    checkScroll()
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused && scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
          const cardWidth = clientWidth / 2

          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
          } else {
            scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
          }
          setTimeout(checkScroll, 300)
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
        <div className="text-center mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Realidade do dia a dia
          </p>
        </div>

        {/* Main Title */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16 px-4">
          <h2 className="font-heading font-extrabold leading-tight text-gray-900 text-balance" style={{ fontSize: 'clamp(26px, 7vw, 50px)' }}>
            Você ainda passa por isso na sua <span className="text-blue-600">assistência</span>?
          </h2>
        </div>

        {/* Grid of Problems - 3x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {pains.map((pain, i) => (
            <div
              key={pain.title}
              className="group relative animate-fade-in h-full"
              style={{ animationDelay: `${i * 0.08}s`, animationDuration: '0.6s' }}
            >
              <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full flex flex-col">
                {/* Inner background com azul suave */}
                <div className="absolute inset-0 rounded-xl" style={{ backgroundColor: 'rgba(59,130,246,0.08)' }} />
                
                {/* Flex container para ícone e texto lado a lado */}
                <div className="relative flex gap-3 items-start flex-1">
                  {/* Icon Container - alinhado ao topo */}
                  <div className="flex-shrink-0 inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-200">
                    <pain.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 pt-0.5">
                    <h3 className="text-sm sm:text-[15px] font-bold text-gray-900 leading-tight mb-1.5">
                      {pain.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {pain.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Linha separadora */}
        <div className="border-t border-gray-300 mb-8" />

        {/* Carrossel de frases reais */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Botão Esquerda */}
          <button
            onClick={() => scroll('left')}
            className={`absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 transition-all ${
              canScrollLeft ? 'opacity-100 hover:bg-gray-50 hover:scale-110' : 'opacity-30 cursor-not-allowed'
            }`}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
          </button>

          {/* Botão Direita */}
          <button
            onClick={() => scroll('right')}
            className={`absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 transition-all ${
              canScrollRight ? 'opacity-100 hover:bg-gray-50 hover:scale-110' : 'opacity-30 cursor-not-allowed'
            }`}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-5 px-5 sm:-mx-8 sm:px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={checkScroll}
          >
            {stories.map((story) => (
              <div
                key={story.label}
                className="flex-shrink-0 w-[75%] sm:w-[55%] lg:w-[calc(45%-8px)] snap-center"
              >
                <div className="h-full rounded-xl bg-white border-2 border-blue-500 p-3 sm:p-4 shadow-sm">
                  <span className="inline-block text-xs font-medium text-blue-600 uppercase tracking-wider mb-2 px-2 py-0.5 bg-blue-50 rounded-md">
                    {story.label}
                  </span>
                  <div className="space-y-1.5">
                    {story.lines.map((line, lineIndex) => (
                      <p
                        key={lineIndex}
                        className={`text-sm font-medium leading-relaxed ${
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
