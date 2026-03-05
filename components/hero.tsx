"use client"

import { ArrowRight, Sparkles } from "lucide-react"

const SIGNUP_URL =
  "https://app.osdigitalplus.com.br/register?utm_source=landing&utm_medium=hero&utm_campaign=cta"

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

          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            <span className="shimmer-text">Controle total</span> da sua
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
            <a
              href={SIGNUP_URL}
              className="pulse-glow group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/30 transition-all hover:bg-primary/90"
            >
              Testar grátis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              Ver planos
            </a>
          </div>

          <p className="mt-4 text-xs text-white/40">
            Sem cartão de crédito. Cancele quando quiser.
          </p>
        </div>

        {/* Right: Desktop + Mobile mockups */}
        <div className="relative flex-1">
          <div className="relative mx-auto max-w-2xl">
            {/* Desktop mockup */}
            <div className="float-animation relative z-10">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/50 backdrop-blur-sm">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-2.5">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                  <div className="mx-3 flex-1 rounded-md bg-white/10 px-3 py-1 text-xs text-white/60">
                    app.osdigitalplus.com.br/empresarial
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202026-03-01%20162539-YqFjq5QzElTPxCHXY9hwv6aD43BsKX.png"
                  alt="Dashboard empresarial do OS Digital+"
                  className="w-full"
                  loading="eager"
                />
              </div>
            </div>

            {/* Mobile mockup */}
            <div className="absolute -right-4 bottom-8 z-20 w-32 sm:-right-8 sm:w-40 lg:-right-12 lg:w-48">
              <div className="float-animation-delayed overflow-hidden rounded-3xl border-4 border-gray-800 bg-gray-900 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-05%20at%2000.58.03-nSO3dfqhVNjHEQ1f0m4Gb80a2aBttr.jpeg"
                  alt="OS Digital+ no celular"
                  className="w-full"
                  loading="eager"
                />
              </div>
            </div>

            {/* Floating badge: faturamento */}
            <div className="absolute -left-4 top-12 z-30 rounded-xl border border-white/10 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm sm:-left-8">
              <p className="text-xs text-gray-500">Faturamento do mês</p>
              <p className="text-xl font-bold text-primary">R$ 10.108</p>
            </div>

            {/* Floating badge: meta */}
            <div className="absolute -left-4 bottom-32 z-30 rounded-xl border border-white/10 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm sm:-left-8 lg:bottom-40">
              <p className="text-xs text-gray-500">Meta mensal</p>
              <p className="text-lg font-bold text-gray-800">83%</p>
              <div className="mt-1.5 h-1.5 w-20 rounded-full bg-gray-200">
                <div className="h-full w-[83%] rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
