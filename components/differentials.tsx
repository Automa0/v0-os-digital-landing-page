"use client"

import {
  ClipboardList,
  Users,
  DollarSign,
  LayoutDashboard,
  Store,
  Bot,
  FileText,
  Smartphone,
} from "lucide-react"

const features = [
  {
    icon: ClipboardList,
    title: "Ordens de Serviço Inteligentes",
    description:
      "Criação rápida com status automáticos, valores integrados ao caixa, forma de pagamento e PDF profissional com a sua logo.",
  },
  {
    icon: Users,
    title: "Gestão de Clientes",
    description:
      "Cadastro automático, histórico completo de serviços e link exclusivo para o cliente acompanhar a OS. Mais confiança e profissionalismo.",
  },
  {
    icon: DollarSign,
    title: "Caixa & Financeiro",
    description:
      "Abertura e fechamento de caixa, entradas por forma de pagamento, saldo automático e relatórios por período.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Empresarial",
    description:
      "Faturamento por loja, ordens finalizadas, membros ativos, meta mensal com progresso e comparativo de períodos para tomada de decisão.",
  },
  {
    icon: Store,
    title: "Multiloja",
    description:
      "Crie e gerencie várias lojas, cada uma com seu próprio caixa. O dono vê tudo em um único painel — ideal para expansão.",
  },
  {
    icon: Bot,
    title: "IA Integrada",
    description:
      "Chat inteligente dentro do sistema que analisa faturamento, sugere melhorias e responde dúvidas do dono. Disponível nos planos Pro e Master.",
  },
  {
    icon: FileText,
    title: "PDF & Marca",
    description:
      "Gere ordens de serviço profissionais com a logo da sua empresa, layout limpo e confiável — passa credibilidade ao cliente.",
  },
  {
    icon: Smartphone,
    title: "Para Autônomos",
    description:
      "Use sozinho, controle simples, sem equipe. Perfeito para quem atende em casa, na rua ou em domicílio.",
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
            Do atendimento ao financeiro, do técnico ao dono da loja — o OS Digital+ cobre tudo, sem complicação.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
              >
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

        {/* Roadmap banner */}
        <div className="mt-12 rounded-2xl border border-dashed border-primary/30 bg-primary/5 px-6 py-6 text-center">
          <p className="text-sm font-semibold text-foreground">Em breve no OS Digital+</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Venda de produtos (película, capinha, acessórios) · Controle de estoque · Integração com pagamentos · App mobile
          </p>
        </div>
      </div>
    </section>
  )
}
