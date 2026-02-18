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
      "30 clientes",
      "1 usuario",
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
      "30 ordens / mes",
      "70 clientes",
      "1 admin + 1 operador",
      "Link do Cliente",
      "PDF com assinatura",
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
      "80 ordens / mes",
      "200 clientes",
      "1 admin + 2 operadores",
      "Relatorio mensal simples",
      "Botao WhatsApp pronto",
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
    <section id="planos" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Planos para cada momento do seu negocio
          </h2>
          <p className="mt-4 text-muted-foreground">
            Comece gratis e escale conforme sua assistencia cresce.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border p-6 transition-all hover:shadow-lg ${
                plan.highlight
                  ? "border-primary bg-card shadow-xl shadow-primary/10 scale-[1.02]"
                  : "border-border bg-card shadow-sm"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
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
                <p className="mt-1 text-xs text-accent font-medium">{plan.equivalent}</p>
              )}

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`mt-8 block rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-all ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90"
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
