"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"

const SIGNUP_URL =
  "https://app.osdigitalplus.com.br/register?utm_source=landing&utm_medium=cta_final&utm_campaign=conversao"

const benefits = [
  "Sem cartão de crédito",
  "Setup em 2 minutos",
  "Cancele quando quiser",
]

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[#0a3d7c] py-20 lg:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Glow orbs */}
      <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-white/10 blur-[100px]" />
      <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-accent/20 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl text-balance">
          Comece a organizar sua assistência técnica hoje
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
          Teste grátis e veja como é simples controlar tudo. Chega de planilha, papel e WhatsApp bagunçado.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-2 text-sm text-white/90">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              {b}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={SIGNUP_URL}
            className="pulse-glow group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-10 py-5 text-lg font-bold text-primary shadow-2xl transition-all hover:bg-white/90"
          >
            Começar teste grátis
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <p className="mt-6 text-sm text-white/50">
          Mais de 500 assistências já usam o OS Digital+
        </p>
      </div>
    </section>
  )
}
