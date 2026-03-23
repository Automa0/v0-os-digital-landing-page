"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { startCheckout } from "@/lib/checkout"

export function Hero() {
  return (
    <section 
      className="relative min-h-screen overflow-hidden hero-section"
      style={{
        background: 'linear-gradient(180deg, #0B0F1A 0%, #0F172A 100%)'
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-5 md:px-8 py-12 sm:py-16">
        <div className="w-full max-w-5xl">
          {/* Mockup image - Top */}
          <div className="mb-6 sm:mb-8 md:mb-12 flex justify-center animate-fade-in" style={{ animationDelay: '0s' }}>
            <img
              src="/hero-mockup.png"
              alt="OS Digital+ Dashboard e Mobile"
              className="max-w-full h-auto"
              style={{ maxWidth: 'clamp(280px, 75vw, 420px)', display: 'block', margin: '0 auto' }}
              loading="eager"
            />
          </div>

          {/* Text content */}
          <div className="text-center pt-4 sm:pt-6 md:pt-8">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-white animate-slide-up" style={{ animationDelay: '0.15s', marginTop: '-67px' }}>
              Você realmente tem <span className="title-shimmer">controle total</span>
              <br />
              da sua <span className="title-underline">assistência</span>?
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-2xl font-bold text-white/80 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Ou só <span className="title-question">acha que tem?</span>
            </p>
            
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/70 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Tenha controle completo da sua assistência e nunca mais perca informações, clientes ou dinheiro.
            </p>

            <p className="mt-1 text-xs sm:text-sm font-thin text-white animate-fade-in font-['Montserrat']" style={{ animationDelay: '0.45s' }}>
              Funciona no celular e no computador.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-start animate-fade-in flex-wrap" style={{ animationDelay: '0.5s' }}>
              <div className="flex flex-col items-center">
                <button
                  onClick={() => window.open("https://app.osdigitalplus.com.br/auth/login", "_blank")}
                  className="btn-hero-pulse group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-bold text-white shadow-xl shadow-primary/30 transition-all hover:bg-primary/90"
                >
                  Começa Agora
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="mt-2 text-xs text-white/60">
                  <span className="font-medium" style={{ color: '#f5f1f1' }}>Teste Grátis</span> <span className="text-white/80 font-semibold">• Acesso imediato</span>
                </p>
              </div>
              <a
                href="#planos"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 h-fit mt-1 sm:mt-0"
              >
                Ver planos
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-white/60 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <span>Ordem rápida e simples</span>
              <span>•</span>
              <span>Teste grátis 10 Ordens</span>
              <span>•</span>
              <span>Acesso imediato</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes btn-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7), 0 10px 30px rgba(59, 130, 246, 0.3);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(59, 130, 246, 0), 0 10px 40px rgba(59, 130, 246, 0.5);
            transform: scale(1.03);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .title-shimmer {
          background: linear-gradient(90deg, rgb(234,179,8) 0%, rgb(253,224,71) 40%, rgb(255,255,255) 50%, rgb(253,224,71) 60%, rgb(234,179,8) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
          filter: drop-shadow(0 0 12px rgba(234,179,8,0.8)) drop-shadow(0 0 24px rgba(255,255,255,0.4));
        }

        .btn-hero-pulse {
          animation: btn-pulse 2s ease-in-out infinite;
        }

        .hero-section {
          background-attachment: scroll;
        }

        .title-underline {
          position: relative;
          color: #ffffff;
        }

        .title-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd);
          border-radius: 2px;
          box-shadow: 0 0 10px rgba(59,130,246,0.8);
          animation: underline-pulse 2s ease-in-out infinite;
        }

        .title-question {
          background: linear-gradient(90deg, #f97316 0%, #fb923c 50%, #fdba74 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 10px rgba(249,115,22,0.6));
        }

        @keyframes underline-pulse {
          0%, 100% { opacity: 1; transform: scaleX(1); }
          50% { opacity: 0.6; transform: scaleX(0.9); }
        }

        @media (max-width: 640px) {
          .title-underline::after {
            bottom: -2px;
            height: 2px;
          }
        }
      `}</style>
    </section>
  )
}
