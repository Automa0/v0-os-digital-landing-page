"use client"

import { useState, useEffect, useRef } from "react"

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

function CountUpNumber({ 
  target, 
  suffix,
  shouldAnimate 
}: { 
  target: number
  suffix: string
  shouldAnimate: boolean 
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldAnimate) return

    let start = 0
    const frames = 40
    const frameDuration = 40 // Total ~1600ms (1.6s)
    const increment = target / frames
    
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, frameDuration)
    
    return () => clearInterval(timer)
  }, [target, shouldAnimate])

  return (
    <span>
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  )
}

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [shouldAnimateNumbers, setShouldAnimateNumbers] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  // Auto-advance carrossel mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % printScreens.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  // Trigger animação dos números ao scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !shouldAnimateNumbers) {
          setShouldAnimateNumbers(true)
          observer.unobserve(entries[0].target)
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current)
    }
  }, [shouldAnimateNumbers])

  return (
    <section id="depoimentos" className="relative py-16 lg:py-28 overflow-hidden bg-gradient-to-b from-background via-background to-blue-500/5">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Header com animação */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground text-balance leading-tight">
            Não é promessa.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-glow">
              É o que já está acontecendo
            </span>
            {" "}todos os dias.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground/80">
            Relatos de técnicos, donos de loja e autônomos que já transformaram suas operações
          </p>
        </div>

        {/* Desktop - 3 prints lado a lado */}
        <div className="hidden lg:grid grid-cols-3 gap-8 mb-20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {printScreens.map((print, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              {/* Borda azul com glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/40 pointer-events-none group-hover:border-blue-400/80 group-hover:shadow-lg group-hover:shadow-blue-400/20 transition-all duration-300" />
              
              <img
                src={print.src}
                alt={print.alt}
                className="w-full h-full object-contain bg-slate-950/50"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Mobile - Carrossel automático com snap */}
        <div className="lg:hidden mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            {/* Borda azul com glow */}
            <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/40 pointer-events-none z-10" />
            
            <div className="relative w-full bg-slate-950/50">
              <img
                src={printScreens[currentSlide].src}
                alt={printScreens[currentSlide].alt}
                className="w-full h-auto object-contain transition-opacity duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Dots indicadores com animação */}
          <div className="flex justify-center gap-3 mt-6">
            {printScreens.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === currentSlide 
                    ? "bg-blue-500 w-8 h-2.5 shadow-lg shadow-blue-500/50" 
                    : "bg-slate-400/50 w-2 h-2 hover:bg-slate-400"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bloco de números com contador e animação ao scroll */}
        <div 
          ref={statsRef}
          className="mx-auto max-w-5xl rounded-2xl border-2 border-blue-400/30 bg-gradient-to-br from-blue-500/8 to-blue-600/4 p-8 sm:p-12 md:p-16 backdrop-blur-sm shadow-lg transition-all duration-500 hover:border-blue-400/50 hover:shadow-xl animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <h3 className="text-center font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Já faz parte do dia a dia
          </h3>
          <p className="text-center text-base text-muted-foreground/80 mb-12 max-w-2xl mx-auto">
            de quem decidiu ter <span className="text-blue-400 font-semibold">controle de verdade</span> sobre a assistência técnica
          </p>

          {/* Grid de números com espaçamento melhorado */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="group text-center p-4 sm:p-6 rounded-xl transition-all duration-300 hover:bg-blue-500/10 hover:scale-105"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-500 mb-3 transition-all duration-300 group-hover:text-blue-400">
                  <CountUpNumber 
                    target={stat.value} 
                    suffix={stat.suffix}
                    shouldAnimate={shouldAnimateNumbers}
                  />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground/80 leading-snug">
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
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(96, 165, 250, 0.6));
          }
        }

        :global(.animate-fade-in) {
          animation: fade-in 0.7s ease-out forwards;
          opacity: 0;
        }

        :global(.animate-glow) {
          animation: glow-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
