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
      mensal: { monthlyAmount: "R$ 49", period: "/mês", totalInfo: "" },
      semestral: { monthlyAmount: "R$ 41,50", period: "/mês", totalInfo: "Cobrado R$ 249 semestralmente" },
      anual: { monthlyAmount: "R$ 41,50", period: "/mês", totalInfo: "Cobrado R$ 499 por ano" },
    },
    features: [
      "Ordens ilimitadas",
      "Orçamentos automático",
      "Gestão de clientes",
      "Controle de caixa",
      "Logo no link do cliente e orçamento",
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
      mensal: { monthlyAmount: "R$ 59", period: "/mês", totalInfo: "" },
      semestral: { monthlyAmount: "R$ 53,17", period: "/mês", totalInfo: "Cobrado R$ 319 semestralmente" },
      anual: { monthlyAmount: "R$ 49,90", period: "/mês", totalInfo: "Cobrado R$ 599 por ano" },
    },
    features: [
      "Tudo do Básico",
      "Ordens ilimitadas",
      "Até 2 lojas",
      "Dashboard empresarial completo",
      "Relatórios financeiros avançados",
      "Controle por membro",
      "Venda de produtos (PDV)",
      "IA integrada",
    ],
    cta: "Assinar Pro",
  },
  {
    name: "Master",
    description: "Para quem quer escalar e ter controle total da operação",
    highlight: false,
    badge: "Melhor custo-benefício",
    planId: "master",
    prices: {
      mensal: { monthlyAmount: "R$ 99", period: "/mês", totalInfo: "" },
      semestral: { monthlyAmount: "R$ 91,50", period: "/mês", totalInfo: "Cobrado R$ 549 semestralmente" },
      anual: { monthlyAmount: "R$ 83,25", period: "/mês", totalInfo: "Cobrado R$ 999 por ano" },
    },
    features: [
      "Tudo do Pro",
      "Até 4 lojas",
      "IA avançada",
      "Prioridade em novas funções",
      "Venda de produtos (PDV)",
      "Relatórios completos por loja",
      "Suporte prioritário",
    ],
    cta: "Escalar minha assistência",
  },
]

const cycleLabels: Record<BillingCycle, { label: string; badge?: string }> = {
  mensal: { label: "Mensal" },
  semestral: { label: "Semestral", badge: "-20%" },
  anual: { label: "Anual", badge: "-30%" },
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
    <section id="planos" className="pricing-section relative py-16 lg:py-24 overflow-hidden">

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
          <div className="inline-flex w-full max-w-xs sm:w-auto rounded-lg border border-blue-400/20 bg-slate-800/80 p-1">
            {(Object.keys(cycleLabels) as BillingCycle[]).map((c) => {
              const config = cycleLabels[c]
              return (
                <button
                  key={c}
                  onClick={() => setCycle(c)}
                  className={`relative flex-1 sm:flex-none rounded-md px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all ${
                    cycle === c
                      ? "bg-blue-500 text-white shadow-sm shadow-blue-500/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {config.label}
                  {config.badge && (
                    <span className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] sm:text-xs font-bold ${
                      cycle === c
                        ? "bg-blue-300/30 text-blue-100"
                        : "bg-green-500/20 text-green-300"
                    }`}>
                      {config.badge}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = plan.prices[cycle]
            return (
              <div
                key={plan.name}
                className={`plan-card relative flex flex-col rounded-xl p-5 sm:p-6 transition-all ${
                  plan.highlight ? "plan-card--highlight" : ""
                }`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
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
                  <h3 className="font-heading text-lg font-bold text-white">{plan.name}</h3>
                  <p className="mt-1 text-xs text-white/60">{plan.description}</p>
                </div>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-heading text-3xl font-extrabold text-white">
                    {price.monthlyAmount}
                  </span>
                  <span className="text-xs text-white/50">{price.period}</span>
                </div>
                {price.totalInfo && (
                  <p className="mt-1 text-xs text-white/50">{price.totalInfo}</p>
                )}

                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.features.map((f) => {
                    const hasTag = f.includes("[Em breve]")
                    const label = f.replace(" [Em breve]", "")
                    return (
                      <li key={f} className="flex items-start gap-2 text-xs text-white/85">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/30 border border-blue-400/50">
                          <Check className="h-2.5 w-2.5 text-blue-300" />
                        </div>
                        <span className="flex flex-wrap items-center gap-1">
                          {label}
                          {hasTag && (
                            <span className="rounded-full bg-blue-400/20 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-blue-200 border border-blue-400/30">
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
                  className={`mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-xs sm:text-sm font-bold transition-all disabled:opacity-70 ${
                    plan.highlight
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-400"
                      : "border border-blue-400/30 bg-slate-700/40 text-white hover:bg-slate-700/60"
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

        {/* Support text */}
        <p className="mt-8 text-center text-xs text-white/50" style={{ marginBottom: '-4px' }}>
          Todos os planos incluem suporte via WhatsApp. Sem fidelidade. Cancele quando quiser.
        </p>

        {/* Garantia imagem */}
        <div className="flex justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Garantia-de-7-dias-Risco-ZERO-BZgBZC7fUJUZlmZB2Yl6yGZoTTy455.png"
            alt="Garantia 7 dias - 100% Dinheiro de Volta - Risco Zero"
            className="w-full max-w-sm object-contain drop-shadow-lg"
            style={{ marginTop: '-6px', marginLeft: '-2px', marginBottom: '-46px' }}
          />
        </div>
      </div>

      <style jsx>{`
        .pricing-section {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
        }

        /* --- Card base --- */
        .plan-card {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(96, 165, 250, 0.15);
          backdrop-filter: blur(8px);
          animation: card-pulse 4s ease-in-out infinite;
        }

        .plan-card--highlight {
          border-color: rgba(96, 165, 250, 0.5);
          background: rgba(30, 41, 59, 0.8);
          box-shadow: 0 0 25px rgba(96, 165, 250, 0.12), 0 0 50px rgba(96, 165, 250, 0.06);
          transform: scale(1.02);
          animation: card-pulse-highlight 3s ease-in-out infinite;
        }

        @keyframes card-pulse {
          0%, 100% { box-shadow: 0 0 0px rgba(96, 165, 250, 0); }
          50%       { box-shadow: 0 0 14px rgba(96, 165, 250, 0.08); }
        }

        @keyframes card-pulse-highlight {
          0%, 100% { box-shadow: 0 0 20px rgba(96, 165, 250, 0.15), 0 0 40px rgba(96, 165, 250, 0.08); }
          50%       { box-shadow: 0 0 35px rgba(96, 165, 250, 0.25), 0 0 70px rgba(96, 165, 250, 0.12); }
        }
      `}</style>
    </section>
  )
}
