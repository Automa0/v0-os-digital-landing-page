"use client"

import { User, Wrench, Smartphone, TrendingUp, ArrowRight, Store, Shield } from "lucide-react"

const LOGIN_URL = "https://app.osdigitalplus.com.br"

const profiles = [
  {
    icon: Wrench,
    title: "Assistências (todos os ramos)",
    description:
      "Gerencie ordens, equipe, caixa e múltiplas lojas com o dashboard empresarial completo.",
  },
  {
    icon: Store,
    title: "Lojas Físicas",
    description:
      "Controle entradas, saídas, metas mensais e o desempenho da equipe em tempo real.",
  },
  {
    icon: User,
    title: "Autônomos",
    description:
      "Use sozinho, de qualquer lugar, sem equipe. Controle simples e eficiente pelo celular.",
  },
  {
    icon: Smartphone,
    title: "Atendimento em Domicílio",
    description:
      "Cria OS no campo, envia link ao cliente e recebe aprovação de orçamento sem voltar à loja.",
  },
  {
    icon: TrendingUp,
    title: "Quem Quer Crescer",
    description:
      "Da 1ª loja ao multilojas — o sistema cresce com você sem precisar trocar de ferramenta.",
  },
  {
    icon: Shield,
    title: "Quem Quer Profissionalismo",
    description:
      "PDFs com logo, links exclusivos e dashboard executivo — parece empresa grande, custa pouco.",
  },
]

export function AutonomosSection() {
  return (
    <section className="relative bg-secondary/30 py-20 lg:py-28">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Para Quem é o OS Digital+
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Trabalhe como empresa, mesmo começando sozinho
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            O OS Digital+ se adapta ao seu momento — seja você autônomo, dono de loja ou gerindo uma rede de assistências.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile) => (
            <div
              key={profile.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-colors group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground">
                <profile.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">
                {profile.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {profile.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base font-medium text-foreground">
            Tudo isso sem precisar saber tecnologia.
          </p>
          <a
            href={LOGIN_URL}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:opacity-90"
          >
            Começar grátis
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
