import {
  ArrowRight,
  ClipboardList,
  Globe,
  MessageCircle,
  ShoppingCart,
  Wallet,
} from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const features = [
  {
    icon: ClipboardList,
    title: "Ordens de Serviço",
    description: "Crie, acompanhe e finalize OS com assinatura digital e PDF profissional.",
  },
  {
    icon: ShoppingCart,
    title: "PDV e Vendas",
    description: "Venda produtos com controle de estoque e comissão automática por vendedor.",
  },
  {
    icon: Wallet,
    title: "Financeiro completo",
    description: "Caixa, entradas, saídas e lucro em tempo real, por loja ou consolidado.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp integrado",
    description: "Status da OS e orçamentos direto no WhatsApp do cliente.",
  },
  {
    icon: Globe,
    title: "Loja Virtual",
    description: "Seu catálogo online com link próprio para vender ainda mais.",
  },
]

export function FeaturesSection() {
  return (
    <section id="funcionalidades" className="relative overflow-hidden bg-[#05060B] px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
            Recursos Poderosos
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
            Explore a fronteira da gestão de assistências com o OS Digital+. Nossos recursos
            redefinem o que é possível no dia a dia da sua operação.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Texto */}
          <ScrollReveal delay={100}>
            <h3 className="font-heading text-2xl font-bold leading-snug text-white sm:text-3xl text-balance">
              Gestão completa, para você ver o quadro inteiro
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
              Do balcão ao caixa: clientes, aparelhos, peças, vendas e financeiro conectados em
              um só lugar. Gerencie uma ou várias lojas com relatórios que mostram exatamente
              onde o dinheiro entra e sai.
            </p>
            <a
              href="#planos"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition-colors hover:text-blue-300"
            >
              Conhecer os planos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </ScrollReveal>

          {/* Painel com anéis */}
          <ScrollReveal delay={200} className="relative flex items-center justify-center py-10">
            {/* Anéis concêntricos */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/10"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/15"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/25 shadow-[0_0_80px_rgba(59,130,246,0.25),inset_0_0_60px_rgba(59,130,246,0.15)]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/25 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative w-full max-w-sm rounded-2xl border border-white/[0.08] bg-[#0B0D14]/90 p-3 shadow-2xl shadow-black/60 backdrop-blur">
              <ul className="space-y-1">
                {features.map((feature) => (
                  <li
                    key={feature.title}
                    className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.04]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg shadow-blue-600/30">
                      <feature.icon className="h-4 w-4 text-white" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">{feature.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
