"use client"

import { useState, useEffect } from "react"

const printScreens = [
  {
    src: "/testimonial-1.jpg",
    alt: "Depoimento João - Cliente 2",
  },
  {
    src: "/testimonial-2.jpg",
    alt: "Depoimento Carlos - Cliente",
  },
  {
    src: "/testimonial-3.jpg",
    alt: "Depoimento Júnior Me. - Cliente 2",
  },
]

const stats = [
  { value: 400, label: "assistências utilizando o sistema", suffix: "+" },
  { value: 8126, label: "ordens de serviço registradas", suffix: "+" },
  { value: 10482, label: "orçamentos enviados", suffix: "+" },
  { value: 100, label: "Segurança dos dados", suffix: "%" },
]

function CountUpNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = Math.ceil(target / 30) // Anima em ~30 frames
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [target])

  return (
    <span>
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  )
}

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % printScreens.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="depoimentos" className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12 lg:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground text-balance">
            Não é promessa. É o que já está acontecendo.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Relatos de técnicos, donos de loja e autônomos
          </p>
        </div>

        {/* Desktop - 3 prints lado a lado */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-12">
          {printScreens.map((print, i) => (
            <div
              key={i}
              className="rounded-2xl border border-blue-400/30 overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white/5 backdrop-blur-sm"
            >
              <img
                src={print.src}
                alt={print.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        {/* Mobile - Carrossel automático */}
        <div className="lg:hidden mb-12 relative">
          <div className="rounded-2xl border border-blue-400/30 overflow-hidden shadow-lg bg-white/5 backdrop-blur-sm">
            <div className="relative w-full aspect-video sm:aspect-[9/16] bg-black/30">
              <img
                key={currentSlide}
                src={printScreens[currentSlide].src}
                alt={printScreens[currentSlide].alt}
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
          </div>

          {/* Dots indicadores */}
          <div className="flex justify-center gap-2 mt-4">
            {printScreens.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentSlide ? "bg-blue-500 w-6" : "bg-slate-400 w-2"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bloco de números com contador */}
        <div className="mx-auto max-w-5xl rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-8 sm:p-12 backdrop-blur-sm">
          <h3 className="text-center font-heading text-xl sm:text-2xl font-bold text-foreground mb-10">
            Já faz parte do dia a dia de muitos lojistas e autônomos
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-500 mb-2">
                  <CountUpNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        :global(.animate-fade-in) {
          animation: fade-in 0.5s ease-in-out;
        }
      `}</style>
    </section>
  )
}
