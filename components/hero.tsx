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
      {/* Fundo tecnológico - grid + glow orbs */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Grid de pontos */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#60a5fa" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>

        {/* Linhas de circuito - SVG decorativo */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          {/* Linhas horizontais com nós */}
          <line x1="0" y1="200" x2="400" y2="200" stroke="#3b82f6" strokeWidth="1" />
          <circle cx="400" cy="200" r="3" fill="#3b82f6" />
          <line x1="400" y1="200" x2="400" y2="350" stroke="#3b82f6" strokeWidth="1" />
          <circle cx="400" cy="350" r="3" fill="#3b82f6" />
          <line x1="400" y1="350" x2="700" y2="350" stroke="#3b82f6" strokeWidth="1" />

          <line x1="1200" y1="150" x2="850" y2="150" stroke="#60a5fa" strokeWidth="1" />
          <circle cx="850" cy="150" r="3" fill="#60a5fa" />
          <line x1="850" y1="150" x2="850" y2="300" stroke="#60a5fa" strokeWidth="1" />
          <circle cx="850" cy="300" r="3" fill="#60a5fa" />
          <line x1="850" y1="300" x2="600" y2="300" stroke="#60a5fa" strokeWidth="1" />

          <line x1="0" y1="550" x2="300" y2="550" stroke="#818cf8" strokeWidth="1" />
          <circle cx="300" cy="550" r="3" fill="#818cf8" />
          <line x1="300" y1="550" x2="300" y2="450" stroke="#818cf8" strokeWidth="1" />
          <circle cx="300" cy="450" r="3" fill="#818cf8" />
          <line x1="300" y1="450" x2="550" y2="450" stroke="#818cf8" strokeWidth="1" />

          <line x1="1200" y1="600" x2="950" y2="600" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="950" cy="600" r="3" fill="#38bdf8" />
          <line x1="950" y1="600" x2="950" y2="480" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="950" cy="480" r="3" fill="#38bdf8" />
          <line x1="950" y1="480" x2="720" y2="480" stroke="#38bdf8" strokeWidth="1" />

          {/* Nós centrais */}
          <circle cx="600" cy="400" r="5" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
          <circle cx="600" cy="400" r="10" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />

          <circle cx="200" cy="300" r="4" fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.4" />
          <circle cx="1000" cy="250" r="4" fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.4" />
          <circle cx="150" cy="500" r="3" fill="#3b82f6" opacity="0.4" />
          <circle cx="1050" cy="500" r="3" fill="#3b82f6" opacity="0.4" />
        </svg>

        {/* Glow central azul atrás do mockup */}
        <div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 'clamp(300px, 60vw, 600px)',
            height: 'clamp(200px, 40vw, 400px)',
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.18) 0%, rgba(99,102,241,0.10) 50%, transparent 75%)',
            filter: 'blur(40px)'
          }}
        />

        {/* Glow canto inferior esquerdo */}
        <div
          className="absolute -bottom-20 -left-20 rounded-full"
          style={{
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(56,189,248,0.10) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />

        {/* Glow canto superior direito */}
        <div
          className="absolute -top-20 -right-20 rounded-full"
          style={{
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
      </div>
      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-5 md:px-8 py-12 sm:py-16">
        <div className="w-full max-w-5xl">
          {/* Mockup com Cards - Desktop: flexbox, Mobile: stack */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
            
            {/* Cards Esquerda - Desktop apenas */}
            <div className="hidden lg:flex flex-col gap-3 w-32 flex-shrink-0">
              {['Controle financeiro em tempo real', 'Ordens de serviço organizadas', 'Tudo centralizado em um só lugar'].map((text, i) => (
                <div
                  key={i}
                  className="benefit-card group p-3 rounded-lg backdrop-blur-sm transition-all hover:bg-white/8"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)'
                  }}
                >
                  <div className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold text-sm mt-0.5 flex-shrink-0">✔</span>
                    <p className="text-xs leading-tight text-gray-300">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mockup image - Center */}
            <div className="flex justify-center animate-fade-in w-full lg:w-auto" style={{ animationDelay: '0s' }}>
              <img
                src="/hero-mockup.png"
                alt="Dashboard do OS Digital+ — sistema de ordem de serviço e PDV"
                className="max-w-full h-auto"
                style={{ maxWidth: 'clamp(280px, 75vw, 420px)', display: 'block', margin: '0 auto' }}
                loading="eager"
              />
            </div>

            {/* Cards Direita - Desktop apenas */}
            <div className="hidden lg:flex flex-col gap-3 w-32 flex-shrink-0">
              {['Gerencie uma ou mais lojas', 'Orçamentos rápidos e profissionais', 'PDV integrado com comissão de vendedor'].map((text, i) => (
                <div
                  key={i}
                  className="benefit-card group p-3 rounded-lg backdrop-blur-sm transition-all hover:bg-white/8"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)'
                  }}
                >
                  <div className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold text-sm mt-0.5 flex-shrink-0">✔</span>
                    <p className="text-xs leading-tight text-gray-300">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>



          {/* Text content */}
          <div className="text-center pt-4 sm:pt-6 md:pt-8">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-white animate-slide-up hero-title">
              Você realmente tem <span className="title-shimmer">controle total</span>
              <br />
              da sua <span className="title-underline">assistência</span>?
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-2xl font-bold text-white/80 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Ou só <span className="title-question">acha que tem?</span>
            </p>
            
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/70 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Ordem de serviço, PDV, financeiro e multiloja em um só sistema. Para assistências de celular, eletrônicos, informática e qualquer ramo de serviço.
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
                  Começar grátis
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
              <span>10 dias de trial grátis</span>
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

        .benefit-card {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
          animation-delay: calc(0.6s + var(--index) * 0.1s);
        }

        .hero-title {
          margin-top: -67px;
        }

        @media (max-width: 1024px) {
          .hero-title {
            margin-top: -32px;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            margin-top: -24px;
          }

          .title-underline::after {
            bottom: -2px;
            height: 2px;
          }
        }
      `}</style>
    </section>
  )
}
