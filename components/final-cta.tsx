"use client"

import { ArrowRight } from "lucide-react"
import { startCheckout } from "@/lib/checkout"

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
        <h2 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl text-balance">
          Ainda está em dúvida?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-xl text-white/90">
          Crie sua conta e teste o sistema gratuitamente.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => startCheckout("basico", "mensal")}
            className="pulse-glow group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-10 py-5 text-lg font-bold text-primary shadow-2xl transition-all hover:bg-white/90 w-full sm:w-auto"
          >
            Começar agora
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="https://app.osdigitalplus.com.br/register?plan=mensal"
            className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white px-10 py-5 text-lg font-bold text-white transition-all hover:bg-white/10 w-full sm:w-auto"
          >
            Criar conta grátis
          </a>
        </div>
      </div>
    </section>
  )
}
