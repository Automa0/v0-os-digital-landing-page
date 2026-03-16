"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { startCheckout } from "@/lib/checkout"

export function Hero() {
  return (
    <section 
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/generated_image_85af9229-26a9-4703-aafd-b1a02c3ccfc8-r7FKgnWLyIhSV4LPeIZPUPHoVSRioc.png')`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Content overlay */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8 py-20">
        <div className="max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="block hero-pulse text-primary">Controle total</span>
            <span className="block bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">da sua assistência técnica</span>
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
              className="pulse-glow group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/50"
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

        @keyframes text-pulse {
          0% {
            transform: scale(1);
            color: rgb(59, 130, 246);
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.4), 0 0 20px rgba(59, 130, 246, 0.2);
          }
          50% {
            transform: scale(1.08);
            color: rgb(96, 165, 250);
            text-shadow: 0 0 30px rgba(59, 130, 246, 0.8), 0 0 50px rgba(59, 130, 246, 0.6);
          }
          100% {
            transform: scale(1);
            color: rgb(59, 130, 246);
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.4), 0 0 20px rgba(59, 130, 246, 0.2);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .hero-pulse {
          animation: text-pulse 2s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>
    </section>
  )
}
