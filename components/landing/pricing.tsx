"use client"

import { ArrowRight, Check, Loader2, Star } from "lucide-react"
import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

type BillingCycle = "mensal" | "semestral" | "anual"

const plans = [
  {
    name: "Ação",
    description: "Para quem está começando ou trabalha sozinho",
    highlight: false,
    badge: null,
    planId: "basico",
    prices: {
      mensal: { monthlyAmount: "R$ 79,90", period: "/mês", totalInfo: "", stripePriceId: "price_1TWXgb85UXhVWhVPRas6u3NP" },
      semestral: { monthlyAmount: "R$ 66,50", period: "/mês", totalInfo: "Cobrado R$ 399 semestralmente", stripePriceId: "price_1TWXhd85UXhVWhVP1girbVJU" },
      anual: { monthlyAmount: "R$ 54,08", period: "/mês", totalInfo: "Cobrado R$ 649 por ano", stripePriceId: "price_1TWXia85UXhVWhVPDl9WIzlF" },
    },
    features: [
      "Ordens ilimitadas",
      "Orçamentos automático",
      "Gestão de clientes",
      "Controle de caixa",
      "Assinatura digital na OS",
      "Venda de produtos (PDV)",
      "Logo no link do cliente e orçamento",
      "1 loja",
      "OS com PDF profissional",
      "Dashboard empresarial",
      "Suporte",
    ],
    cta: "Começar agora",
  },
  {
    name: "Controle",
    description: "Para quem quer crescer e ter controle real",
    highlight: true,
    badge: "Mais popular",
    planId: "pro",
    prices: {
      mensal: { monthlyAmount: "R$ 119,90", period: "/mês", totalInfo: "", stripePriceId: "price_1TWXjM85UXhVWhVPcfSHbJ9j" },
      semestral: { monthlyAmount: "R$ 99,83", period: "/mês", totalInfo: "Cobrado R$ 599 semestralmente", stripePriceId: "price_1TWXkL85UXhVWhVPsTmpG2lb" },
      anual: { monthlyAmount: "R$ 83,25", period: "/mês", totalInfo: "Cobrado R$ 999 por ano", stripePriceId: "price_1TWXlc85UXhVWhVPzgQNduSD" },
    },
    features: [
      "Tudo do Ação",
      "Ordens ilimitadas",
      "Até 2 lojas",
      "Dashboard empresarial completo",
      "Relatórios financeiros avançados",
      "Controle por membro",
      "Assinatura digital na OS",
      "Venda de produtos (PDV)",
      "IA integrada",
    ],
    cta: "Assinar Controle",
  },
  {
    name: "Comando",
    description: "Para quem quer escalar e ter controle total da operação",
    highlight: false,
    badge: "Melhor custo-benefício",
    planId: "master",
    prices: {
      mensal: { monthlyAmount: "R$ 199,90", period: "/mês", totalInfo: "", stripePriceId: "price_1TWXmI85UXhVWhVPJh1nG9Ws" },
      semestral: { monthlyAmount: "R$ 166,50", period: "/mês", totalInfo: "Cobrado R$ 999 semestralmente", stripePriceId: "price_1TWXnf85UXhVWhVPZJvlOezu" },
      anual: { monthlyAmount: "R$ 137,42", period: "/mês", totalInfo: "Cobrado R$ 1.649 por ano", stripePriceId: "price_1TWXoR85UXhVWhVPIf4ikOZt" },
    },
    features: [
      "Tudo do Controle",
      "Até 4 lojas",
      "IA avançada",
      "Prioridade em novas funções",
      "Assinatura digital na OS",
      "Venda de produtos (PDV)",
      "Relatórios completos por loja",
      "Suporte prioritário",
    ],
    cta: "Escalar minha assistência",
  },
]

const cycleLabels: Record<BillingCycle, { label: string; badge?: string }> = {
  mensal: { label: "Mensal" },
  semestral: { label: "Semestral", badge: "-17%" },
  anual: { label: "Anual", badge: "-31%" },
}

export function LandingPricing() {
  const [cycle, setCycle] = useState<BillingCycle>("anual")
  const [loading, setLoading] = useState<string | null>(null)

  async function handleCheckout(priceId: string, interval: BillingCycle) {
    setLoading(`${priceId}-${interval}`)
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price_id: priceId }),
      })
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
    <section id="planos" className="relative overflow-hidden bg-[#05060B] px-4 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[120%] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(37,99,235,0.10) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
            Planos para o seu sucesso
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
            Descubra o plano perfeito para a jornada da sua assistência. Nossas opções foram
            desenhadas para dar a flexibilidade que você precisa, sem surpresas e sem taxas
            ocultas.
          </p>
        </ScrollReveal>

        {/* Toggle de ciclo */}
        <ScrollReveal delay={120} className="mt-9 flex justify-center px-2">
          <div className="inline-flex w-full max-w-xs rounded-full border border-white/10 bg-[#0B0D14] p-1 sm:w-auto">
            {(Object.keys(cycleLabels) as BillingCycle[]).map((c) => {
              const config = cycleLabels[c]
              return (
                <button
                  key={c}
                  onClick={() => setCycle(c)}
                  className={`relative flex-1 rounded-full px-3 py-2 text-xs font-semibold transition-all sm:flex-none sm:px-5 sm:text-sm ${
                    cycle === c
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow shadow-blue-600/40"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {config.label}
                  {config.badge && (
                    <span
                      className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                        cycle === c
                          ? "bg-white/20 text-white"
                          : "bg-emerald-500/15 text-emerald-400"
                      }`}
                    >
                      {config.badge}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {plans.map((plan, planIndex) => {
            const price = plan.prices[cycle]
            const isLoading = loading === `${price.stripePriceId}-${cycle}`
            return (
              <ScrollReveal key={plan.name} delay={planIndex * 130}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all sm:p-7 ${
                  plan.highlight
                    ? "border-blue-500/60 bg-[#0B0F1E] shadow-[0_0_60px_-12px_rgba(37,99,235,0.45)] lg:scale-[1.03]"
                    : "border-white/[0.07] bg-[#0B0D14] hover:border-white/15"
                }`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 text-xs font-bold ${
                      plan.highlight
                        ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-600/40"
                        : "border border-white/10 bg-[#11141f] text-blue-300"
                    }`}
                  >
                    {plan.highlight && <Star className="h-3 w-3" fill="currentColor" />}
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
                      {price.monthlyAmount}
                    </span>
                    <span className="text-xs text-slate-500">{price.period}</span>
                  </div>
                  {price.totalInfo ? (
                    <p className="mt-1 text-xs text-slate-500">{price.totalInfo}</p>
                  ) : (
                    <p className="mt-1 text-xs text-transparent">.</p>
                  )}
                </div>

                <div className="mt-4 border-t border-white/[0.06] pt-4">
                  <h3 className="font-heading text-lg font-bold text-white">
                    Plano {plan.name}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    {plan.description}
                  </p>
                </div>

                <button
                  onClick={() => handleCheckout(price.stripePriceId, cycle)}
                  disabled={isLoading}
                  className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all disabled:opacity-70 ${
                    plan.highlight
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/40 hover:from-blue-500 hover:to-blue-400"
                      : "border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Aguarde...
                    </>
                  ) : (
                    <>
                      {plan.cta}
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.features.map((feature) => {
                    const hasTag = feature.includes("[Em breve]")
                    const label = feature.replace(" [Em breve]", "")
                    return (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-gradient-to-br from-blue-600 to-blue-500">
                          <Check className="h-2.5 w-2.5 text-white" strokeWidth={3.5} />
                        </span>
                        <span className="flex flex-wrap items-center gap-1.5">
                          {label}
                          {hasTag && (
                            <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-blue-300">
                              Em breve
                            </span>
                          )}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
              </ScrollReveal>
            )
          })}
        </div>

        <p className="mt-9 text-center text-xs text-slate-500">
          Todos os planos incluem suporte via WhatsApp. Sem fidelidade. Cancele quando quiser.
        </p>

        <div className="mt-2 flex justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Garantia-de-7-dias-Risco-ZERO-BZgBZC7fUJUZlmZB2Yl6yGZoTTy455.png"
            alt="Garantia 7 dias - 100% Dinheiro de Volta - Risco Zero"
            className="w-full max-w-xs object-contain drop-shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
