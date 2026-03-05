"use client"

import {
  ClipboardList,
  Users,
  Wallet,
  BarChart3,
  Eye,
  Link2,
} from "lucide-react"

const solutions = [
  {
    icon: ClipboardList,
    title: "Gestão de Ordens de Serviço",
    description: "Crie, edite e finalize OS em segundos. Gere PDF profissional com sua logo.",
  },
  {
    icon: Users,
    title: "Controle de Clientes",
    description: "Cadastro completo com histórico de serviços e equipamentos.",
  },
  {
    icon: Wallet,
    title: "Controle de Caixa",
    description: "Registre entradas e saídas por forma de pagamento. Abra e feche caixa diariamente.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Financeiro",
    description: "Veja faturamento, metas mensais e relatórios em tempo real.",
  },
  {
    icon: Eye,
    title: "Acompanhamento em Tempo Real",
    description: "Saiba o status de cada ordem: em andamento, finalizada ou aguardando.",
  },
  {
    icon: Link2,
    title: "Link Exclusivo para o Cliente",
    description: "Seu cliente acompanha o status, aprova orçamento e assina digitalmente.",
  },
]

export function Solutions() {
  return (
    <section id="funcionalidades" className="relative bg-background py-20 lg:py-28">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            A solução
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Organize tudo em um único sistema
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Simples de usar, poderoso para crescer. Tudo que sua assistência precisa.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, i) => (
            <div
              key={item.title}
              className="stagger-item group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-xl"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-colors group-hover:from-primary/20 group-hover:to-accent/20">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
