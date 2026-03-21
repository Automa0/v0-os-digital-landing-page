"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

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

export function PainStories() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    
    return () => {
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / 2
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <section className="relative pt-4 pb-0 sm:pt-6 sm:pb-0" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pb-6 sm:pb-8">
        {/* Carrossel Container */}
        <div className="relative">
          {/* Botao Esquerda - Desktop */}
          <button
            onClick={() => scroll('left')}
            className={`hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 transition-all ${canScrollLeft ? 'opacity-100 hover:bg-gray-50 hover:scale-105' : 'opacity-30 cursor-not-allowed'}`}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          {/* Botao Direita - Desktop */}
          <button
            onClick={() => scroll('right')}
            className={`hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 transition-all ${canScrollRight ? 'opacity-100 hover:bg-gray-50 hover:scale-105' : 'opacity-30 cursor-not-allowed'}`}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-5 lg:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 sm:-mx-8 sm:px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {stories.map((story, index) => (
              <div
                key={story.label}
                className="flex-shrink-0 w-[85%] sm:w-[75%] lg:w-[calc(50%-12px)] snap-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-full rounded-2xl bg-white border-2 border-blue-500 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* Label pequeno */}
                  <span className="inline-block text-xs font-medium text-blue-600 uppercase tracking-wider mb-5 px-3 py-1.5 bg-blue-50 rounded-md">
                    {story.label}
                  </span>

                  {/* Frases - tipografia maior */}
                  <div className="space-y-4">
                    {story.lines.map((line, lineIndex) => (
                      <p
                        key={lineIndex}
                        className={`text-lg sm:text-xl font-medium leading-relaxed ${
                          line.startsWith("(") ? "text-gray-400 text-base italic" : "text-gray-800"
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

          {/* Indicadores de scroll - Mobile */}
          <div className="flex justify-center gap-2 mt-4 lg:hidden">
            {stories.map((_, index) => (
              <div
                key={index}
                className="h-1.5 w-8 rounded-full bg-gray-300"
              />
            ))}
          </div>

          {/* Linha separadora */}
          <div className="mt-6 sm:mt-8 border-t border-gray-300" />

          {/* Closing Statement */}
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-base sm:text-lg text-gray-700">
              Se você se identificou com isso, sua assistência não tem <span className="text-blue-600 font-bold">falta de clientes</span>… tem <span className="text-blue-600 font-bold">falta de controle.</span>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }

        /* Hide scrollbar */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
