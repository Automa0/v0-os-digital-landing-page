"use client"

import { Link2, FileText, MousePointerClick, BarChart3, Smartphone, ShieldCheck } from "lucide-react"

const cards = [
  {
    icon: Link2,
    title: "Link Exclusivo do Cliente",
    description:
      "Seu cliente acompanha o status do reparo em tempo real, aprova orçamentos e visualiza a previsão de entrega — sem precisar ligar.",
  },
  {
    icon: FileText,
    title: "PDF Profissional com Assinatura",
    description:
      "Gere documentos organizados e prontos para impressão, com assinatura digital integrada. Transmita credibilidade em cada entrega.",
  },
  {
    icon: MousePointerClick,
    title: "Gestão Simples e Rápida",
    description:
      "Crie, atualize e finalize ordens de serviço em poucos cliques. Funciona no balcão, no celular e em qualquer navegador.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Inteligentes",
    description:
      "Acompanhe o desempenho da sua assistência com relatórios claros. Saiba quantas ordens foram abertas, concluídas e o faturamento do período.",
  },
  {
    icon: Smartphone,
    title: "Acesso de Qualquer Lugar",
    description:
      "100% online e responsivo. Gerencie sua assistência pelo celular, tablet ou computador — de onde você estiver.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e Confiabilidade",
    description:
      "Seus dados e os dados dos seus clientes ficam protegidos com criptografia. Backups automáticos garantem que nada se perca.",
  },
]

export function Differentials() {
  return (
    <section id="recursos" className="relative bg-secondary/40 py-20 lg:py-28">
      {/* Subtle top gradient divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Recursos
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Tudo que sua assistência precisa para crescer
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ferramentas pensadas para simplificar a rotina e profissionalizar o atendimento da sua assistência técnica.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary/20"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-colors group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground">
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
