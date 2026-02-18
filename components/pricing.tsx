"use client"

import { Check, Star, Award } from "lucide-react"

const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "",
    badge: null,
    highlight: false,
    features: [
      "10 ordens no total",
      "30 clientes cadastrados",
      "1 usuario incluso",
      "Link do Cliente",
    ],
    cta: "Comecar Gratis",
    href: "https://app.osdigitalplus.com.br",
  },
  {
    name: "Mensal",
    price: "R$ 24,90",
    period: "/ mes",
    badge: null,
    highlight: false,
    features: [
      "30 ordens por mes",
      "70 clientes cadastrados",
      "1 admin + 1 operador",
      "Link do Cliente",
      "PDF com assinatura digital",
    ],
    cta: "Assinar Mensal",
    href: "https://app.osdigitalplus.com.br",
  },
  {
    name: "Semestral",
    price: "R$ 117",
    period: "/ 6 meses",
    badge: "Mais Vendido",
    highlight: true,
    features: [
      "80 ordens por mes",
      "200 clientes cadastrados",
      "1 admin + 2 operadores",
      "Relatorio mensal simplificado",
      "Botao WhatsApp integrado",
      "Link do Cliente + PDF",
    ],
    cta: "Assinar Semestral",
    href: "https://app.osdigitalplus.com.br",
  },
  {
    name: "Anual",
    price: "R$ 197",
    period: "/ ano",
    badge: "Melhor Investimento",
    highlight: false,
    golden: true,
    features: [
      "Ordens ilimitadas",
      "Clientes ilimitados",
      "Relatorios completos",
      "Prioridade no suporte",
      "Selo Assistencia Verificada",
      "Tudo do plano Semestral",
    ],
    cta: "Assinar Anual",
    href: "https://app.osdigitalplus.com.br",
    equivalent: "Equivalente a R$ 16,41 / mes",
  },
]

export function Pricing() {
  return (
    <section id="planos" className="relative bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30 py-20 lg:py-28">
      <div className="absolute inset-0 bg-dot-pattern opacity-50" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Planos
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Escolha o plano ideal para o seu momento
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comece gratuitamente e evolua conforme sua assistencia cresce. Sem surpresas, sem taxas ocultas.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all hover:shadow-lg ${
                plan.highlight
                  ? "border-primary bg-card shadow-xl shadow-primary/10 scale-[1.03]"
                  : "border-border bg-card shadow-sm"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full px-4 py-1 text-xs font-semibold ${
                    plan.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-chart-4 text-foreground"
                  }`}
                >
                  {plan.highlight ? (
                    <Star className="h-3 w-3" />
                  ) : (
                    <Award className="h-3 w-3" />
                  )}
                  {plan.badge}
                </div>
              )}

              <h3 className="font-heading text-lg font-semibold text-foreground">
                {plan.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-3xl font-bold text-foreground">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                )}
              </div>

              {"equivalent" in plan && plan.equivalent && (
                <p className="mt-1 text-xs font-medium text-accent">{plan.equivalent}</p>
              )}

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`mt-8 block rounded-lg px-4 py-3 text-center text-sm font-semibold transition-all ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:opacity-90"
                    : "border border-border bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
