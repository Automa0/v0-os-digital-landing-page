"use client"

import { Link2, FileText, MousePointerClick } from "lucide-react"

const cards = [
  {
    icon: Link2,
    title: "Link do Cliente",
    description:
      "Envie um link exclusivo para o cliente acompanhar status, aprovar orcamento e ver previsao.",
  },
  {
    icon: FileText,
    title: "PDF Profissional com Assinatura",
    description:
      "PDF organizado, pronto para impressao e assinatura digital/visual.",
  },
  {
    icon: MousePointerClick,
    title: "Processo Simples",
    description:
      "Crie, atualize e finalize ordens em poucos cliques. Ideal para balcao e celular.",
  },
]

export function Differentials() {
  return (
    <section id="recursos" className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Muito mais que uma ordem de servico
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tudo que sua assistencia precisa em um so lugar.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-6 md:flex-row">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group flex-1 rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
