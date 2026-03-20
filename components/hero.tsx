"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { startCheckout } from "@/lib/checkout"

export function Hero() {
  return (
    <section 
      className="relative min-h-screen overflow-hidden bg-cover pt-10 hero-section"
      style={{
        backgroundImage: `url('/hero-mobile-bg.jpeg')`,
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/50" />

      {/* Bottom shadow fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Content overlay */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-12 sm:px-8 sm:py-16">
        <div className="w-full max-w-4xl text-center pt-12 sm:pt-16">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] tracking-tight text-white animate-slide-up" style={{ animationDelay: '0s' }}>
            Você realmente tem o <span className="title-shimmer">controle total</span>
            <br />
            da sua <span className="title-underline">assistência</span>?
          </h1>

          <p className="mt-6 text-lg sm:text-2xl md:text-3xl font-bold text-white/80 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Ou só <span className="title-question">acha que tem?</span>
          </p>
          
          <p className="mt-2 text-sm sm:text-base font-bold text-white animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Funciona no celular e no computador.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <button
              onClick={() => startCheckout("basico", "mensal")}
              className="btn-hero-pulse group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 sm:px-8 text-sm sm:text-base font-bold text-white shadow-xl shadow-primary/30 transition-all hover:bg-primary/90 w-full sm:w-auto"
            >
              Começar agora por R$49/mês
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 sm:px-8 text-sm sm:text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 w-full sm:w-auto"
            >
              Ver planos
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-white/60 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <span>Sem contrato</span>
            <span>•</span>
            <span>Cancele quando quiser</span>
            <span>•</span>
            <span>Acesso imediato</span>
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

        @keyframes brand-glow {
          0%, 100% {
            color: #ffffff;
            text-shadow: 0 0 8px rgba(255,255,255,0.2);
          }
          50% {
            color: #ffffff;
            text-shadow: 0 0 20px rgba(255,255,255,0.9), 0 0 40px rgba(255,255,255,0.5), 0 0 60px rgba(59,130,246,0.3);
          }
        }

        .brand-glow {
          animation: brand-glow 3s ease-in-out infinite;
        }

        .hero-section {
          background-position: center center;
        }

        @media (max-width: 768px) {
          .hero-section {
            background-position: 45% 28%;
            background-size: cover;
          }
        }

        @media (min-width: 640px) {
          .hero-section {
            background-image: url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/generated_image_85af9229-26a9-4703-aafd-b1a02c3ccfc8-r7FKgnWLyIhSV4LPeIZPUPHoVSRioc.png') !important;
            background-attachment: fixed;
          }
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

        .digital-highlight {
          background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #93c5fd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 12px rgba(59,130,246,0.6));
        }

        .digital-highlight-animated {
          background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 25%, #93c5fd 50%, #60a5fa 75%, #3b82f6 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-brand 3s linear infinite;
          filter: drop-shadow(0 0 12px rgba(59,130,246,0.8)) drop-shadow(0 0 24px rgba(96,165,250,0.4));
        }

        @keyframes shimmer-brand {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
      `}</style>
    </section>
  )
}
