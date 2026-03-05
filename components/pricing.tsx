"use client"

import { Check, Star, Zap } from "lucide-react"

type BillingCycle = "mensal" | "semestral" | "anual"

const plans = [
  {
    name: "Básico",
    description: "Para quem está começando ou trabalha sozinho",
    highlight: false,
    badge: null,
    prices: {
      mensal: { amount: "R$ 29", period: "/mês", link: "https://app.osdigitalplus.com.br/register?plan=mensal" },
      semestral: { amount: "R$ 159", period: "/semestre", link: "https://app.osdigitalplus.com.br/register?plan=semestral", note: "Economia de R$ 15" },
      anual: { amount: "R$ 299", period: "/ano", link: "https://app.osdigitalplus.com.br/register?plan=anual", note: "Equivale a R$ 24,90/mês" },
    },
    features: [
      "Até 10 ordens de serviço",
      "1 loja",
      "Cadastro de clientes",
      "OS com PDF profissional",
      "Logo na OS",
      "Link do cliente",
      "Controle básico de caixa",
    ],
    cta: "Começar no Básico",
  },
  {
    name: "Pro",
    description: "Para quem quer crescer e ter controle real",
    highlight: true,
    badge: "Mais popular",
    prices: {
      mensal: { amount: "R$ 59", period: "/mês", link: "https://app.osdigitalplus.com.br/register?plan=mensal" },
      semestral: { amount: "R$ 319", period: "/semestre", link: "https://app.osdigitalplus.com.br/register?plan=semestral", note: "Economia de R$ 35" },
      anual: { amount: "R$ 599", period: "/ano", link: "https://app.osdigitalplus.com.br/register?plan=anual", note: "Equivale a R$ 49,90/mês" },
    },
    features: [
      "Tudo do Básico",
      "Ordens ilimitadas",
      "Até 2 lojas",
      "Dashboard empresarial completo",
      "Relatórios financeiros avançados",
      "Controle por membro",
      "IA integrada [Em breve]",
    ],
    cta: "Assinar Pro",
  },
  {
    name: "Master",
    description: "Para quem quer escalar e profissionalizar de verdade",
    highlight: false,
    badge: "Melhor custo-benefício",
    prices: {
      mensal: { amount: "R$ 99", period: "/mês", link: "https://app.osdigitalplus.com.br/register?plan=mensal" },
      semestral: { amount: "R$ 549", period: "/semestre", link: "https://app.osdigitalplus.com.br/register?plan=semestral", note: "Economia de R$ 45" },
      anual: { amount: "R$ 999", period: "/ano", link: "https://app.osdigitalplus.com.br/register?plan=anual", note: "Equivale a R$ 83,25/mês" },
    },
    features: [
      "Tudo do Pro",
      "Até 7 lojas",
      "IA avançada [Em breve]",
      "Prioridade em novas funções",
      "Venda de produtos (POS) [Em breve]",
      "Relatórios completos por loja",
      "Suporte prioritário",
    ],
    cta: "Assinar Master",
  },
]

const cycleLabels: Record<BillingCycle, string> = {
  mensal: "Mensal",
  semestral: "Semestral",
  anual: "Anual",
}

import { useState } from "react"

export function Pricing() {
  const [cycle, setCycle] = useState<BillingCycle>("anual")

  return (
    <section id="planos" className="relative bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30 py-20 lg:py-28">
      <div className="absolute inset-0 bg-dot-pattern opacity-50" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Urgency block */}
        <div className="mx-auto mb-14 max-w-3xl rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 p-6 text-center">
          <p className="text-sm font-semibold text-foreground">
            Chega de depender só da conversa no WhatsApp.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Profissionalize seu serviço com registros organizados, dashboard financeiro e link exclusivo para o cliente.
          </p>
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Planos
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Escolha o plano ideal para o seu momento
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comece no básico e evolua conforme sua assistência cresce. Sem surpresas, sem taxas ocultas.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-xl border border-border bg-card p-1">
            {(Object.keys(cycleLabels) as BillingCycle[]).map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                className={`rounded-lg px-5 py-2 text-sm font-medium transition-all ${
                  cycle === c
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cycleLabels[c]}
                {c === "anual" && (
                  <span className="ml-2 rounded-full bg-accent/20 px-2 py-0.5 text-xs font-semibold text-accent">
                    Mais barato
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = plan.prices[cycle]
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all hover:shadow-xl ${
                  plan.highlight
                    ? "border-primary bg-card shadow-xl shadow-primary/10 scale-[1.03]"
                    : "border-border bg-card shadow-sm"
                }`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full px-4 py-1 text-xs font-bold ${
                      plan.highlight
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent/20 text-accent"
                    }`}
                  >
                    {plan.highlight ? <Star className="h-3 w-3" /> : <Zap className="h-3 w-3" />}
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-extrabold text-foreground">
                    {price.amount}
                  </span>
                  <span className="text-sm text-muted-foreground">{price.period}</span>
                </div>
                {"note" in price && price.note && (
                  <p className="mt-1 text-xs font-medium text-accent">{price.note}</p>
                )}

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((f) => {
                    const hasTag = f.includes("[Em breve]")
                    const label = f.replace(" [Em breve]", "")
                    return (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="flex flex-wrap items-center gap-1.5">
                          {label}
                          {hasTag && (
                            <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent">
                              Em breve
                            </span>
                          )}
                        </span>
                      </li>
                    )
                  })}
                </ul>

                <a
                  href={price.link}
                  className={`mt-8 block rounded-xl px-4 py-3.5 text-center text-sm font-bold transition-all ${
                    plan.highlight
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:opacity-90"
                      : "border border-border bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Todos os planos incluem suporte via WhatsApp. Sem fidelidade. Cancele quando quiser.
        </p>
      </div>
    </section>
  )
}
