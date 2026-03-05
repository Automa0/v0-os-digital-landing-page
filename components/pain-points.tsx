"use client"

import {
  FileX,
  MessageSquareMore,
  TrendingDown,
  Wallet,
  Clock,
  Store,
} from "lucide-react"

const pains = [
  {
    icon: FileX,
    title: "Ordens de serviço perdidas",
    description: "Anotações no papel ou no WhatsApp que somem e geram confusão.",
  },
  {
    icon: MessageSquareMore,
    title: "Cliente perguntando o dia todo",
    description: "Interrupções constantes pedindo status do serviço.",
  },
  {
    icon: TrendingDown,
    title: "Não sabe quanto faturou",
    description: "Fim do mês chega e você não tem ideia do resultado real.",
  },
  {
    icon: Wallet,
    title: "Caixa bagunçado",
    description: "Entradas e saídas misturadas, sem controle de forma de pagamento.",
  },
  {
    icon: Clock,
    title: "Orçamentos demorados",
    description: "Perda de tempo criando orçamentos manualmente toda vez.",
  },
  {
    icon: Store,
    title: "Falta de organização nas lojas",
    description: "Cada unidade funciona de um jeito, sem padrão nem visão geral.",
  },
]

export function PainPoints() {
  return (
    <section className="relative bg-gradient-to-b from-secondary/50 to-background py-20 lg:py-28">
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-destructive">
            Você se identifica?
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Se sua assistência técnica funciona assim, você está perdendo dinheiro
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain, i) => (
            <div
              key={pain.title}
              className="stagger-item group relative overflow-hidden rounded-2xl border border-destructive/20 bg-card p-6 shadow-sm transition-all hover:border-destructive/40 hover:shadow-lg"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive transition-colors group-hover:bg-destructive/20">
                <pain.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{pain.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
