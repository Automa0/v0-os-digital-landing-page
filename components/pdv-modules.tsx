'use client'

import { Receipt, Percent, KeyRound, Camera, CreditCard } from "lucide-react"

const pdvFeatures = [
  {
    icon: Receipt,
    title: "Cupom não fiscal",
    description: "Imprima cupons não fiscais formatados para impressoras térmicas de 80mm a cada venda.",
  },
  {
    icon: Percent,
    title: "Comissão por vendedor",
    description: "Registre e calcule automaticamente a comissão de cada membro da equipe por venda realizada.",
  },
  {
    icon: KeyRound,
    title: "Limite de desconto com PIN",
    description: "Defina um percentual máximo de desconto e exija um PIN de gerente para autorizar valores maiores.",
  },
  {
    icon: Camera,
    title: "Produtos com foto e estoque",
    description: "Cadastre produtos com imagens e tenha controle de estoque que atualiza a cada venda no PDV.",
  },
  {
    icon: CreditCard,
    title: "Múltiplas formas de pagamento",
    description: "Aceite pagamentos em Dinheiro, PIX, Cartão de Débito e Crédito, com controle por caixa.",
  },
]

export function PdvModules() {
  return (
    <section className="relative bg-background py-20 lg:py-28">
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            PDV Integrado
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Mais do que OS — você também vende
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            O OS Digital+ vem com um Ponto de Venda completo integrado ao seu sistema de assistência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdvFeatures.map((feature, i) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-colors group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
