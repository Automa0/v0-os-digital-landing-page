"use client"

import { ArrowRight } from "lucide-react"

const LOGIN_URL = "https://v0-os-digital-app.vercel.app/auth/login"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background py-16 lg:py-24">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 lg:flex-row lg:gap-16 lg:px-8">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="shimmer-text">Profissionalize</span>{" "}
            <span className="text-balance">sua assistencia tecnica de verdade.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Organize ordens, envie links profissionais aos clientes e gere PDF com
            assinatura em segundos — tudo sem complicacao.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href={LOGIN_URL}
              className="animate-pulse-glow inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Entrar ou Criar Minha Conta
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Gratuito para comecar. Sem cartao de credito.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="flex-1">
          <div className="animate-float relative">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Main dashboard */}
      <div className="rounded-xl border border-border bg-card p-1 shadow-2xl shadow-primary/10">
        <div className="rounded-lg bg-secondary/50 p-4">
          {/* Window bar */}
          <div className="mb-4 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-destructive/60" />
            <div className="h-3 w-3 rounded-full bg-chart-4/60" />
            <div className="h-3 w-3 rounded-full bg-chart-3/60" />
            <div className="ml-4 h-5 flex-1 rounded bg-muted" />
          </div>

          {/* Sidebar + content layout */}
          <div className="flex gap-3">
            {/* Sidebar */}
            <div className="hidden w-36 flex-col gap-2 sm:flex">
              <div className="h-8 rounded bg-primary/10" />
              <div className="h-6 rounded bg-muted" />
              <div className="h-6 rounded bg-primary/20" />
              <div className="h-6 rounded bg-muted" />
              <div className="h-6 rounded bg-muted" />
            </div>

            {/* Main content area */}
            <div className="flex-1 space-y-3">
              <div className="flex items-center justify-between">
                <div className="h-6 w-32 rounded bg-foreground/10" />
                <div className="flex gap-2">
                  <div className="rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground">
                    Ver Link do Cliente
                  </div>
                  <div className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
                    Gerar PDF
                  </div>
                </div>
              </div>

              {/* Order rows */}
              {[
                { name: "Joao Silva", device: "iPhone 11", status: "Em Conserto", color: "bg-chart-4" },
                { name: "Maria Santos", device: "Samsung S21", status: "Aguardando", color: "bg-accent" },
                { name: "Pedro Lima", device: "Notebook Dell", status: "Concluido", color: "bg-chart-3" },
              ].map((order) => (
                <div key={order.name} className="flex items-center justify-between rounded-md bg-card p-2.5 shadow-sm">
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-foreground">{order.name}</span>
                    <span className="text-xs text-muted-foreground">{order.device}</span>
                  </div>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium text-foreground ${order.color}/20`}>
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Client mini-view */}
      <div className="absolute -bottom-8 -right-4 w-52 rounded-lg border border-border bg-card p-3 shadow-xl transition-all hover:shadow-2xl sm:-right-8 lg:-right-12">
        <div className="mb-2 text-xs font-semibold text-primary">Ordem de Servico</div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Cliente:</span>
            <span className="font-medium text-foreground">Joao Silva</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Aparelho:</span>
            <span className="font-medium text-foreground">iPhone 11</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Status:</span>
            <span className="font-medium text-chart-4">Em Conserto</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Previsao:</span>
            <span className="font-medium text-foreground">2 dias</span>
          </div>
        </div>
      </div>
    </div>
  )
}
