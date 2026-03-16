"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { startCheckout } from "@/lib/checkout"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d1e36] to-[#091525]">
      {/* Animated particles / tech glow */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Gradient orbs */}
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Floating particles */}
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
        <div className="particle particle-4" />
        <div className="particle particle-5" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-20 lg:min-h-screen lg:flex-row lg:items-center lg:gap-8 lg:px-8 lg:py-0">
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-white/80">
              Sistema completo para assistências técnicas
            </span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.2] tracking-tight text-white md:text-5xl lg:text-6xl">
            Controle total da sua
            <br className="hidden sm:block" />
            assistência técnica
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/70 lg:mx-0">
            Gerencie ordens de serviço, clientes e caixa em um só lugar.
            <span className="font-semibold text-white"> Funciona no celular e no computador.</span>
          </p>

          <p className="mt-4 text-sm font-medium text-accent">
            Crie sua primeira ordem de serviço em menos de 30 segundos
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <button
              onClick={() => startCheckout("basico", "mensal")}
              className="pulse-glow group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/30 transition-all hover:bg-primary/90"
            >
              Comecar agora por R$29/mes
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              Ver planos
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-white/60 lg:justify-start">
            <span>Sem contrato</span>
            <span>Cancele quando quiser</span>
            <span>Acesso imediato</span>
          </div>

          <p className="mt-6 text-xs font-medium text-accent">
            Pagamento seguro • acesso liberado imediatamente após criar sua senha
          </p>

          <p className="mt-3 text-xs font-medium text-accent">
            Valor promocional disponivel apenas esta semana.
          </p>
        </div>

        {/* Right: New hero image */}
        <div className="relative flex-1">
          <div className="relative mx-auto max-w-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/generated_image_85af9229-26a9-4703-aafd-b1a02c3ccfc8-r7FKgnWLyIhSV4LPeIZPUPHoVSRioc.png"
              alt="OS Digital Plus - Homem com celular e laptop"
              className="w-full"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
