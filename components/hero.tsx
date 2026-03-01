"use client"

import { ArrowRight, Shield, Zap, Users, Monitor, Tablet, Smartphone, CheckCircle2 } from "lucide-react"

const LOGIN_URL = "https://app.osdigitalplus.com.br"

const targets = [
  "Assistências técnicas",
  "Lojas físicas",
  "Autônomos",
  "Pequenos negócios",
]

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background py-20 lg:pt-36 lg:pb-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.04]" />
      <div className="absolute inset-0 bg-dot-pattern" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/[0.06] to-accent/[0.03] blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-accent/[0.05] to-primary/[0.02] blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-14 px-4 lg:flex-row lg:gap-16 lg:px-8">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-primary">
              Sistema completo para crescer sem bagunça
            </span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="shimmer-text">Controle total</span>{" "}
            <span className="text-balance">
              da sua loja, do seu caixa e dos seus clientes — em um só lugar.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Gerencie ordens de serviço, clientes, financeiro, caixa, lojas, relatórios e cresça com inteligência — mesmo começando sozinho.
          </p>

          {/* Target audience tags */}
          <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
            {targets.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href={LOGIN_URL}
              className="pulse-glow inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:opacity-90"
            >
              Começar grátis agora
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#planos"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Ver planos
            </a>
          </div>

          <p className="mt-3 text-sm text-muted-foreground">
            Sem cartão de crédito. Sem burocracia. Sem papel. Sem planilha.
          </p>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="h-4 w-4 text-accent" />
              <span>Setup instantâneo</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-accent" />
              <span>Dados protegidos</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-accent" />
              <span>Suporte humanizado</span>
            </div>
          </div>

          {/* Device compatibility */}
          <div className="mt-6 flex items-center justify-center gap-5 text-sm text-muted-foreground lg:justify-start">
            <div className="flex items-center gap-1.5">
              <Monitor className="h-4 w-4 text-primary" />
              <span>Computador</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Tablet className="h-4 w-4 text-primary" />
              <span>Tablet</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Smartphone className="h-4 w-4 text-primary" />
              <span>Celular</span>
            </div>
          </div>
        </div>

        {/* Real dashboard screenshot */}
        <div className="flex-1 w-full max-w-2xl">
          <div className="float-animation relative">
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-primary/10">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-2.5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <div className="mx-3 flex-1 rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
                  app.osdigitalplus.com.br/empresarial
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202026-03-01%20162539-YqFjq5QzElTPxCHXY9hwv6aD43BsKX.png"
                alt="Dashboard empresarial do OS Digital+ com faturamento, ordens e métricas em tempo real"
                className="w-full object-cover"
              />
            </div>

            {/* Floating metric 1 */}
            <div className="absolute -left-4 top-10 rounded-xl border border-border bg-white px-4 py-3 shadow-lg lg:-left-10">
              <p className="text-xs text-muted-foreground">Faturamento do mês</p>
              <p className="text-xl font-bold text-primary">R$ 10.108</p>
            </div>

            {/* Floating metric 2 */}
            <div className="absolute -right-4 bottom-16 rounded-xl border border-border bg-white px-4 py-3 shadow-lg lg:-right-10">
              <p className="text-xs text-muted-foreground">Meta mensal</p>
              <p className="text-xl font-bold text-foreground">83%</p>
              <div className="mt-1.5 h-1.5 w-24 rounded-full bg-secondary">
                <div className="h-full w-[83%] rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
