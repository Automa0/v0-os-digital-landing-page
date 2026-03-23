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
  { value: 400, label: "lojas utilizando o sistema", suffix: "+" },
  { value: 8126, label: "ordens de serviço registradas", suffix: "+" },
  { value: 10482, label: "orçamentos enviados", suffix: "+" },
  { value: 100, label: "segurança dos dados", suffix: "%" },
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
    const frames = 30
    const frameDuration = 50 // Total ~1500ms (1.5s)
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
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-16 lg:mb-20 animate-fade-in px-4">
          <h2 className="font-heading font-extrabold text-foreground text-balance leading-snug" style={{ fontSize: 'clamp(26px, 7vw, 56px)', lineHeight: '1.2', letterSpacing: '-0.3px' }}>
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Não é promessa.
            </span>
            {" "}É o que já está acontecendo todos os dias.
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground/80">
            de quem decidiu ter controle de verdade sobre sua loja
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

        {/* Bloco de números - Layout leve e moderno */}
        <div 
          ref={statsRef}
          className="mt-20 lg:mt-24 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Desktop - 4 colunas com gap maior */}
          <div className="hidden md:grid grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="text-center"
              >
                <div className="text-5xl lg:text-6xl font-extrabold text-blue-500 mb-3">
                  <CountUpNumber 
                    target={stat.value} 
                    suffix={stat.suffix}
                    shouldAnimate={shouldAnimateNumbers}
                  />
                </div>
                <p className="text-xs lg:text-sm text-muted-foreground/70 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile - 2 colunas com mini-cards leves */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="text-center p-4 rounded-lg bg-white/3 border border-blue-400/15 transition-all hover:border-blue-400/25 hover:bg-white/5"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-blue-500 mb-2">
                    <CountUpNumber 
                      target={stat.value} 
                      suffix={stat.suffix}
                      shouldAnimate={shouldAnimateNumbers}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground/60 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
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
