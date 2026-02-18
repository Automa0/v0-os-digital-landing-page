"use client"

import { User, Wrench, Smartphone, TrendingUp, ArrowRight } from "lucide-react"

const LOGIN_URL = "https://app.osdigitalplus.com.br"

const benefits = [
  {
    icon: User,
    title: "Tecnicos autonomos",
    description:
      "Trabalha sozinho? O OSDigitalPlus organiza todas as suas ordens sem precisar de equipe.",
  },
  {
    icon: Wrench,
    title: "Pequenas assistencias",
    description:
      "Ideal para quem esta comecando ou tem uma assistencia de pequeno porte e quer crescer com organizacao.",
  },
  {
    icon: Smartphone,
    title: "Atendimento em domicilio",
    description:
      "Atende em casa ou vai ate o cliente? Gerencie tudo pelo celular, de qualquer lugar.",
  },
  {
    icon: TrendingUp,
    title: "Profissionalize seu negocio",
    description:
      "Passe credibilidade com links de acompanhamento e PDFs profissionais, mesmo sem equipe.",
  },
]

export function AutonomosSection() {
  return (
    <section className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Ideal para quem trabalha sozinho
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            O OSDigitalPlus foi pensado tanto para assistencias estruturadas quanto
            para tecnicos autonomos. Se voce trabalha por conta propria, atende
            clientes em casa ou possui uma pequena assistencia, o sistema ajuda a
            organizar ordens de servico, controlar aparelhos e profissionalizar
            seu atendimento — sem complicacao.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-base font-medium text-foreground">
            Mesmo sem equipe, voce pode ter controle total do seu negocio.
          </p>
          <a
            href={LOGIN_URL}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Comecar Agora
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
