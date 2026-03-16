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
      <div className="relative z-10 flex min-h-screen flex-col justify-center px-8 py-20 lg:px-16 xl:px-24">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-white/80">
              Sistema completo para assistências técnicas
            </span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.15] tracking-tight text-white md:text-5xl lg:text-6xl">
            Controle total da sua
            <br />
            assistência técnica
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Gerencie ordens de serviço, clientes e caixa em um só lugar.
            <span className="font-semibold text-white"> Funciona no celular e no computador.</span>
          </p>

          <p className="mt-4 text-sm font-medium text-accent">
            Crie sua primeira ordem de serviço em menos de 30 segundos
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => startCheckout("basico", "mensal")}
              className="pulse-glow group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/30 transition-all hover:bg-primary/90"
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

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/60">
            <span>Sem contrato</span>
            <span>•</span>
            <span>Cancele quando quiser</span>
            <span>•</span>
            <span>Acesso imediato</span>
          </div>

          <p className="mt-4 text-xs font-medium text-accent">
            Pagamento seguro • acesso liberado imediatamente após criar sua senha
          </p>
        </div>
      </div>
    </section>
  )
}
