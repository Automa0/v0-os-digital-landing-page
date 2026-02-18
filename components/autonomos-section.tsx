"use client"

import { User, Wrench, Smartphone, TrendingUp, ArrowRight } from "lucide-react"

const LOGIN_URL = "https://app.osdigitalplus.com.br"

const benefits = [
  {
    icon: User,
    title: "Tecnicos Autonomos",
    description:
      "Trabalha por conta propria? O OSDigitalPlus organiza todas as suas ordens sem a necessidade de equipe ou estrutura complexa.",
  },
  {
    icon: Wrench,
    title: "Pequenas Assistencias",
    description:
      "Ideal para quem esta comecando ou possui uma assistencia de pequeno porte e quer crescer com organizacao e profissionalismo.",
  },
  {
    icon: Smartphone,
    title: "Atendimento em Domicilio",
    description:
      "Atende em casa ou vai ate o cliente? Gerencie tudo pelo celular, de qualquer lugar, a qualquer momento.",
  },
  {
    icon: TrendingUp,
    title: "Profissionalize seu Negocio",
    description:
      "Transmita credibilidade com links de acompanhamento e PDFs profissionais — mesmo trabalhando sozinho.",
  },
]

export function AutonomosSection() {
  return (
    <section className="relative bg-background py-20 lg:py-28">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Para Autonomos
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Feito para quem trabalha sozinho e quer ir mais longe
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Seja voce um tecnico autonomo, dono de uma pequena assistencia ou
            profissional que atende a domicilio — o OSDigitalPlus se adapta
            a sua realidade e profissionaliza o seu atendimento.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary/20"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-colors group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground">
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

        <div className="mt-12 text-center">
          <p className="text-base font-medium text-foreground">
            Tenha controle total do seu negocio, mesmo sem equipe.
          </p>
          <a
            href={LOGIN_URL}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:opacity-90"
          >
            Comecar Agora
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
