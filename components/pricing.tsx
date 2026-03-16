"use client"

import { Check, Star, Zap, Loader2 } from "lucide-react"
import { useState } from "react"

type BillingCycle = "mensal" | "semestral" | "anual"

const plans = [
  {
    name: "Básico",
    description: "Para quem está começando ou trabalha sozinho",
    highlight: false,
    badge: null,
    planId: "basico",
    prices: {
      mensal: { amount: "R$ 29", period: "/mês", note: "" },
      semestral: { amount: "R$ 159", period: "/semestre", note: "Economia de R$ 15" },
      anual: { amount: "R$ 299", period: "/ano", note: "Equivale a R$ 24,90/mês" },
    },
    features: [
      "Ordens de serviço",
      "Gestão de clientes",
      "Controle de caixa",
      "Logo na OS",
      "1 loja",
      "OS com PDF profissional",
      "Dashboard empresarial",
      "Suporte",
    ],
    cta: "Começar agora",
  },
  {
    name: "Pro",
    description: "Para quem quer crescer e ter controle real",
    highlight: true,
    badge: "Mais popular",
    planId: "pro",
    prices: {
      mensal: { amount: "R$ 59", period: "/mês", note: "" },
      semestral: { amount: "R$ 319", period: "/semestre", note: "Economia de R$ 35" },
      anual: { amount: "R$ 599", period: "/ano", note: "Equivale a R$ 49,90/mês" },
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
    planId: "master",
    prices: {
      mensal: { amount: "R$ 99", period: "/mês", note: "" },
      semestral: { amount: "R$ 549", period: "/semestre", note: "Economia de R$ 45" },
      anual: { amount: "R$ 999", period: "/ano", note: "Equivale a R$ 83,25/mês" },
    },
    features: [
      "Tudo do Pro",
      "Até 4 lojas",
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

export function Pricing() {
  const [cycle, setCycle] = useState<BillingCycle>("anual")
  const [loading, setLoading] = useState<string | null>(null)

  async function handleCheckout(plan: string, interval: BillingCycle) {
    setLoading(`${plan}-${interval}`)
    try {
      const res = await fetch(
        "https://app.osdigitalplus.com.br/api/external-checkout",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ plan, interval }),
        }
      )
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert(data.error || "Erro ao iniciar pagamento. Tente novamente.")
      }
    } catch {
      alert("Erro ao conectar com o servidor.")
    } finally {
      setLoading(null)
    }
  }

  return (
    <section id="planos" className="pricing-section relative py-20 lg:py-28 overflow-hidden">

      {/* Same dark background as AboutUs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
        <svg className="absolute w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pricing-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#60a5fa" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pricing-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-blue-400">
            Planos
          </span>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl text-balance">
            Escolha o plano{" "}
            <span className="text-blue-400">ideal</span>{" "}
            para o seu momento
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Comece no básico e evolua conforme sua assistência cresce. Sem surpresas, sem taxas ocultas.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mt-8 flex justify-center px-2">
          <div className="inline-flex w-full max-w-xs sm:w-auto rounded-xl border border-blue-400/20 bg-slate-800/80 p-1">
            {(Object.keys(cycleLabels) as BillingCycle[]).map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                className={`flex-1 sm:flex-none rounded-lg px-3 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-all ${
                  cycle === c
                    ? "bg-blue-500 text-white shadow-sm shadow-blue-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cycleLabels[c]}
                {c === "anual" && (
                  <span className="ml-1 sm:ml-2 rounded-full bg-blue-400/20 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-semibold text-blue-300">
                    -30%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = plan.prices[cycle]
            return (
              <div
                key={plan.name}
                className={`plan-card relative flex flex-col rounded-2xl p-5 sm:p-8 transition-all ${
                  plan.highlight ? "plan-card--highlight" : ""
                }`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full px-4 py-1 text-xs font-bold ${
                      plan.highlight
                        ? "bg-blue-500 text-white shadow-md shadow-blue-500/40"
                        : "bg-slate-700 text-blue-300 border border-blue-400/30"
                    }`}
                  >
                    {plan.highlight ? <Star className="h-3 w-3" /> : <Zap className="h-3 w-3" />}
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="font-heading text-xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-1 text-sm text-white/70">{plan.description}</p>
                </div>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-extrabold text-white">
                    {price.amount}
                  </span>
                  <span className="text-sm text-white/60">{price.period}</span>
                </div>
                {"note" in price && price.note && (
                  <p className="mt-1 text-xs font-medium text-blue-300">{price.note}</p>
                )}

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((f) => {
                    const hasTag = f.includes("[Em breve]")
                    const label = f.replace(" [Em breve]", "")
                    return (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/90">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/30 border border-blue-400/50">
                          <Check className="h-3 w-3 text-blue-300" />
                        </div>
                        <span className="flex flex-wrap items-center gap-1.5">
                          {label}
                          {hasTag && (
                            <span className="rounded-full bg-blue-400/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-blue-200 border border-blue-400/30">
                              Em breve
                            </span>
                          )}
                        </span>
                      </li>
                    )
                  })}
                </ul>

                <button
                  onClick={() => handleCheckout(plan.planId, cycle)}
                  disabled={loading === `${plan.planId}-${cycle}`}
                  className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-bold transition-all disabled:opacity-70 ${
                    plan.highlight
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-400"
                      : "border border-blue-400/30 bg-slate-700/60 text-white hover:bg-slate-700"
                  }`}
                >
                  {loading === `${plan.planId}-${cycle}` ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Aguarde...
                    </>
                  ) : (
                    plan.cta
                  )}
                </button>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-white/55">
          Todos os planos incluem suporte via WhatsApp. Sem fidelidade. Cancele quando quiser.
        </p>
        <p className="mt-4 text-center text-base font-medium text-white/80">
          Menos que um café por dia para organizar toda sua assistência técnica.
        </p>
      </div>

      <style jsx>{`
        .pricing-section {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
        }

        /* --- Card base --- */
        .plan-card {
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(96, 165, 250, 0.15);
          backdrop-filter: blur(8px);
          animation: card-pulse 4s ease-in-out infinite;
        }

        .plan-card--highlight {
          border-color: rgba(96, 165, 250, 0.5);
          background: rgba(30, 41, 59, 0.85);
          box-shadow: 0 0 30px rgba(96, 165, 250, 0.12), 0 0 60px rgba(96, 165, 250, 0.06);
          transform: scale(1.03);
          animation: card-pulse-highlight 3s ease-in-out infinite;
        }

        @keyframes card-pulse {
          0%, 100% { box-shadow: 0 0 0px rgba(96, 165, 250, 0); }
          50%       { box-shadow: 0 0 18px rgba(96, 165, 250, 0.10); }
        }

        @keyframes card-pulse-highlight {
          0%, 100% { box-shadow: 0 0 20px rgba(96, 165, 250, 0.15), 0 0 50px rgba(96, 165, 250, 0.08); }
          50%       { box-shadow: 0 0 40px rgba(96, 165, 250, 0.30), 0 0 80px rgba(96, 165, 250, 0.15); }
        }
      `}</style>
    </section>
  )
}
