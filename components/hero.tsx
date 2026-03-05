"use client"

import { ArrowRight, CheckCircle2, XCircle } from "lucide-react"

const SIGNUP_URL =
  "https://app.osdigitalplus.com.br/register?utm_source=landing&utm_medium=hero&utm_campaign=cta"

const painPoints = [
  {
    pain: "Perde controle de OS feita no papel ou WhatsApp",
    solution: "Crie e acompanhe ordens de serviço em segundos, do celular ou computador",
  },
  {
    pain: "Não sabe quanto faturou no mês",
    solution: "Dashboard financeiro em tempo real com metas, caixa e relatório por loja",
  },
  {
    pain: "Cliente sem informação fica ligando toda hora",
    solution: "Envie link exclusivo: cliente vê status, aprova orçamento e assina digitalmente",
  },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{ minHeight: "90vh" }}
    >
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80&auto=format')",
        }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/40" />
      {/* Subtle dot pattern on top */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-10 px-4 py-24 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-32">
        {/* Left: Text */}
        <div className="flex-1 text-white">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-xs font-medium text-white/90">
              Sistema completo para assistências técnicas
            </span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white text-balance md:text-5xl lg:text-6xl">
            Controle total da sua assistência técnica
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
            Gerencie ordens, clientes e caixa — rápido, seguro e simples.{" "}
            <span className="font-semibold text-white">Comece grátis em segundos.</span>
          </p>

          {/* Pain + solution bullets */}
          <ul className="mt-8 space-y-4">
            {painPoints.map((item) => (
              <li key={item.pain} className="flex flex-col gap-1">
                <span className="flex items-start gap-2 text-sm text-white/60">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                  {item.pain}
                </span>
                <span className="flex items-start gap-2 text-sm font-medium text-white/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  {item.solution}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={SIGNUP_URL}
              className="pulse-glow inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Testar grátis
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Ver planos
            </a>
          </div>

          <p className="mt-4 text-xs text-white/50">
            Sem cartão de crédito. Cancele quando quiser.
          </p>
        </div>

        {/* Right: Dashboard mockup */}
        <div className="w-full max-w-xl flex-1 lg:max-w-2xl">
          <div className="float-animation relative">
            <div className="overflow-hidden rounded-2xl border border-white/20 shadow-2xl shadow-black/50 backdrop-blur-sm">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/10 px-4 py-2.5 backdrop-blur-sm">
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
                alt="Dashboard empresarial do OS Digital+ com faturamento, ordens e métricas em tempo real"
                className="w-full object-cover"
                loading="eager"
              />
            </div>

            {/* Floating badge: faturamento */}
            <div className="absolute -left-2 top-8 rounded-xl border border-white/20 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm lg:-left-8">
              <p className="text-xs text-gray-500">Faturamento do mês</p>
              <p className="text-xl font-bold text-primary">R$ 10.108</p>
            </div>

            {/* Floating badge: meta */}
            <div className="absolute -right-2 bottom-12 rounded-xl border border-white/20 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm lg:-right-8">
              <p className="text-xs text-gray-500">Meta mensal</p>
              <p className="text-lg font-bold text-gray-800">83%</p>
              <div className="mt-1.5 h-1.5 w-24 rounded-full bg-gray-200">
                <div className="h-full w-[83%] rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
