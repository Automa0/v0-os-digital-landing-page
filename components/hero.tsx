"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { startCheckout } from "@/lib/checkout"

export function Hero() {
  return (
    <section 
      className="relative min-h-screen overflow-hidden bg-cover bg-center pt-10"
      style={{
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/generated_image_85af9229-26a9-4703-aafd-b1a02c3ccfc8-r7FKgnWLyIhSV4LPeIZPUPHoVSRioc.png')`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Content overlay */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8 py-32">
        <div className="max-w-3xl text-center -mt-20">
          <p className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold animate-fade-in mb-2 brand-glow" style={{ animationDelay: '0.05s' }}>
            A OS Digital+
          </p>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="block">
              Está
              <span className="title-shimmer mx-2 inline-block">revolucionando</span>
              <br />
              as assistências técnicas.
            </span>
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-white/90 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Organize ordens de serviço, clientes e financeiro em um único sistema.
          </p>
          
          <p className="mt-2 text-base font-bold text-white animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Funciona no celular e no computador.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <button
              onClick={() => startCheckout("basico", "mensal")}
              className="btn-hero-pulse group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/30 transition-all hover:bg-primary/90"
            >
              Começar agora por R$29/mês
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              Ver planos
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-white/60 animate-fade-in" style={{ animationDelay: '0.6s' }}>
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
          background: linear-gradient(90deg, rgb(59,130,246) 0%, rgb(147,197,253) 40%, rgb(255,255,255) 50%, rgb(147,197,253) 60%, rgb(59,130,246) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
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
      `}</style>
    </section>
  )
}
