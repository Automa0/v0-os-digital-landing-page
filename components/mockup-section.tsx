"use client"

import { TrendingUp, Users, ClipboardCheck, Store } from "lucide-react"

export function MockupSection() {
  return (
    <section className="relative bg-background py-20 lg:py-28">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Na Prática
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Visão completa do seu negócio em tempo real
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Dashboard empresarial com faturamento, ordens, metas e desempenho por loja — tudo num único painel.
          </p>
        </div>

        {/* Dashboard screenshot full width */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-border shadow-2xl shadow-primary/10">
          <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <div className="mx-3 flex-1 rounded-md bg-background px-3 py-1.5 text-xs text-muted-foreground">
              app.osdigitalplus.com.br/empresarial
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-01%20at%2016.12.04-b5c0vrfDXLsUQXiv3mtk4sadtTjDxY.jpeg"
            alt="Dashboard empresarial real do OS Digital+ — faturamento, metas, ordens e lojas"
            className="w-full object-cover"
          />
        </div>

        {/* Metrics highlights below screenshot */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: TrendingUp,
              label: "Faturamento do Mês",
              value: "R$ 10.108",
              sub: "Visível em tempo real",
            },
            {
              icon: ClipboardCheck,
              label: "Ordens Finalizadas",
              value: "4 ordens",
              sub: "Período atual",
            },
            {
              icon: Users,
              label: "Membros Ativos",
              value: "2 membros",
              sub: "Controlados por plano",
            },
            {
              icon: Store,
              label: "Lojas Ativas",
              value: "2 lojas",
              sub: "Cada uma com seu caixa",
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-lg font-bold text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
