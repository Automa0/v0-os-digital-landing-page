"use client"

import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react"
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
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl text-balance">
          Comece hoje a organizar sua assistência técnica
        </h2>

        <div className="mt-8 space-y-3">
          <p className="text-lg text-white/90">
            Ainda não tem certeza?
          </p>
          <p className="text-base text-white/80">
            Você pode realizar um <span className="font-semibold text-white">teste gratuito</span>.
          </p>
        </div>

        <div className="mt-10">
          <button
            onClick={() => startCheckout("basico", "mensal")}
            className="pulse-glow group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-10 py-5 text-lg font-bold text-primary shadow-2xl transition-all hover:bg-white/90"
          >
            Criar minha conta
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <p className="mt-6 text-sm text-white/50">
          Mais de 500 assistências já usam o OS Digital+
        </p>

        {/* Teste gratuito via suporte */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-sm text-white/60">
            Ainda não tem certeza? Você pode solicitar um teste gratuito falando com nosso suporte.
          </p>
          <a
            href="https://wa.me/5521996595469?text=Olá,%20quero%20solicitar%20um%20teste%20gratuito%20do%20OSDigitalPlus"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <MessageCircle className="h-4 w-4" />
            Solicitar teste gratuito
          </a>
        </div>
      </div>
    </section>
  )
}
