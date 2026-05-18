'use client'

import { Users, KeyRound, Lock, Key } from "lucide-react"

const controlFeatures = [
  {
    icon: Users,
    title: "Permissões granulares",
    description: "Controle o que cada membro da equipe pode ver e fazer, com permissões por loja e por função.",
  },
  {
    icon: KeyRound,
    title: "PIN de aprovação para desconto",
    description: "Exija um PIN de gerente para aprovar descontos acima do limite, evitando prejuízos no caixa.",
  },
  {
    icon: Lock,
    title: "Pattern Lock no painel financeiro",
    description: "Proteja o acesso a informações sensíveis como faturamento e relatórios com uma senha de padrão.",
  },
  {
    icon: Key,
    title: "Login com Google (OAuth)",
    description: "Permita que sua equipe acesse o sistema de forma rápida e segura usando as contas Google.",
  },
]

export function AdvancedControls() {
  return (
    <section className="relative bg-secondary/40 py-20 lg:py-28">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Gestão Avançada
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Controle de verdade para quem tem equipe
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ferramentas de gestão e segurança para garantir total controle sobre sua operação e sua equipe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {controlFeatures.map((feature, i) => (
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
