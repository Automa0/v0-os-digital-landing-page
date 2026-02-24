"use client"

import {
  Check,
  ArrowRight,
  Clock,
  ClipboardList,
  Users,
  Link2,
  History,
  User,
  Smartphone,
} from "lucide-react"

const LOGIN_URL = "https://app.osdigitalplus.com.br"

const features = [
  {
    icon: ClipboardList,
    text: "Criar e organizar Ordens de Serviço",
  },
  {
    icon: Users,
    text: "Gerenciar clientes e aparelhos",
  },
  {
    icon: Link2,
    text: "Gerar link de acompanhamento para o cliente",
  },
  {
    icon: History,
    text: "Histórico completo de serviços realizados",
  },
  {
    icon: User,
    text: "1 usuário incluso",
    highlight: true,
  },
  {
    icon: Smartphone,
    text: "Acesso pelo celular, tablet ou computador",
  },
]

export function FreeSection() {
  return (
    <section className="relative bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30 py-20 lg:py-28">
      <div className="absolute inset-0 bg-lines-pattern" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Plano Gratuito
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Trabalhe como empresa, mesmo sendo autônomo.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Organize seus serviços, profissionalize seu atendimento e passe mais confiança ao cliente.
          </p>

          {/* Feature card */}
          <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-border bg-card p-8 shadow-md">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="font-heading text-3xl font-bold text-foreground">R$ 0</span>
              <span className="text-sm text-muted-foreground">para sempre</span>
            </div>

            <div className="space-y-4 text-left">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    feature.highlight
                      ? "bg-primary/5 border border-primary/10"
                      : ""
                  }`}
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className={`text-sm ${feature.highlight ? "font-semibold text-foreground" : "text-foreground"}`}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-chart-3/10 px-3 py-1">
                <Check className="h-3 w-3 text-chart-3" />
                <span className="text-xs font-medium text-chart-3">Ideal para autônomos</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1">
                <Check className="h-3 w-3 text-accent" />
                <span className="text-xs font-medium text-accent">Perfeito para começar</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm font-medium text-accent">
            <Clock className="h-4 w-4" />
            <span>Acesso gratuito disponível por tempo limitado — garanta já a sua conta.</span>
          </div>

          <div className="mt-6">
            <a
              href={LOGIN_URL}
              className="animate-pulse-glow inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:opacity-90"
            >
              Começar Grátis Agora
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
