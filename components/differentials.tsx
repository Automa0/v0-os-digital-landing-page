"use client"

import {
  ClipboardList,
  Users,
  DollarSign,
  LayoutDashboard,
  Store,
  Bot,
  FileText,
  ShoppingBag,
} from "lucide-react"

const features = [
  {
    icon: ClipboardList,
    title: "Ordens de Serviço",
    description:
      "Criação rápida com status, valores integrados ao caixa, forma de pagamento e PDF profissional com a sua logo.",
    badge: null,
  },
  {
    icon: Users,
    title: "Gestão de Clientes",
    description:
      "Cadastro automático, histórico completo e link exclusivo para o cliente acompanhar a OS. Mais confiança e profissionalismo.",
    badge: null,
  },
  {
    icon: DollarSign,
    title: "Caixa & Financeiro",
    description:
      "Abertura e fechamento de caixa, entradas por forma de pagamento, saldo automático e relatórios por período.",
    badge: null,
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Empresarial",
    description:
      "Faturamento por loja, ordens finalizadas, membros ativos, meta mensal com progresso e comparativo de períodos.",
    badge: null,
  },
  {
    icon: Store,
    title: "Multiloja",
    description:
      "Crie e gerencie várias lojas, cada uma com seu próprio caixa. O dono vê tudo em um único painel.",
    badge: null,
  },
  {
    icon: Bot,
    title: "IA Integrada",
    description:
      "Chat inteligente que analisa faturamento, sugere melhorias e responde dúvidas do dono — disponível nos planos Pro e Master.",
    badge: "Em breve",
  },
  {
    icon: FileText,
    title: "PDF & Marca",
    description:
      "Gere ordens com a logo da sua empresa, layout limpo e confiável — passa credibilidade ao cliente na hora da entrega.",
    badge: null,
  },
  {
    icon: ShoppingBag,
    title: "Venda de Produtos",
    description:
      "Venda películas, capinhas e acessórios direto no sistema com controle de estoque integrado.",
    badge: "Em breve",
  },
]

export function Differentials() {
  return (
    <section id="funcionalidades" className="relative bg-secondary/40 py-20 lg:py-28">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Funcionalidades
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Tudo que você precisa para organizar e crescer
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Do atendimento ao financeiro — o OS Digital+ cobre tudo, sem complicação.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`stagger-item group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {feature.badge && (
                  <span className="absolute right-3 top-3 rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent">
                    {feature.badge}
                  </span>
                )}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-all group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
