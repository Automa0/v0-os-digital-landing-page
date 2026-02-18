"use client"

import { Check, ArrowRight, Clock } from "lucide-react"

const LOGIN_URL = "https://app.osdigitalplus.com.br"

const features = [
  "Criar e organizar ordens",
  "Gerenciar clientes",
  "Gerar Link do Cliente",
]

export function FreeSection() {
  return (
    <section className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Comece hoje. Sem investir nada.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Crie sua conta gratuita e teste o OSDigitalPlus sem cartao de credito.
            Oferta por tempo limitado para novos usuarios.
          </p>

          <div className="mt-10 inline-flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-8 text-left shadow-sm">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-accent font-medium">
            <Clock className="h-4 w-4" />
            <span>Acesso gratuito disponivel por tempo limitado — garanta ja sua conta.</span>
          </div>

          <div className="mt-6">
            <a
              href={LOGIN_URL}
              className="animate-pulse-glow inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Comecar Gratis
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
