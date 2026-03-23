"use client"

import { ArrowRight, Check } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[#0a3d7c] py-16 sm:py-20 lg:py-28">
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

      <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
        {/* Título principal */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance leading-tight">
          Comece agora e organize sua assistência de verdade
        </h2>

        {/* Subtítulo */}
        <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-white/90 leading-relaxed">
          Crie sua conta gratuita e comece a organizar suas ordens, clientes e financeiro hoje mesmo.
        </p>

        {/* Prova / Segurança */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <div className="flex items-center justify-center gap-2">
            <Check className="h-5 w-5 text-emerald-400" />
            <span className="text-sm sm:text-base text-white/80">Sem compromisso</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Check className="h-5 w-5 text-emerald-400" />
            <span className="text-sm sm:text-base text-white/80">Sem cartão de crédito</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Check className="h-5 w-5 text-emerald-400" />
            <span className="text-sm sm:text-base text-white/80">Acesso imediato</span>
          </div>
        </div>

        {/* Botões */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://app.osdigitalplus.com.br/auth/login"
            className="pulse-glow group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-primary shadow-2xl transition-all hover:bg-white/90 hover:shadow-3xl w-full sm:w-auto"
          >
            Começar grátis agora
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#planos"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-7 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-white transition-all hover:bg-white/10 w-full sm:w-auto"
          >
            Ver planos
          </a>
        </div>

        {/* Bloco de Garantia */}
        <div className="mt-10 sm:mt-14 p-4 sm:p-6 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm">
          <p className="text-sm sm:text-base text-white/80">
            <span className="font-semibold text-white">Teste sem risco.</span> Você pode usar o sistema gratuitamente e cancelar quando quiser.
          </p>
        </div>

        {/* Micro Benefícios */}
        <div className="mt-10 sm:mt-14 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <Check className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span className="text-sm sm:text-base text-white/80">Organize suas ordens em minutos</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Check className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span className="text-sm sm:text-base text-white/80">Tenha controle total do financeiro</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Check className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span className="text-sm sm:text-base text-white/80">Pare de perder clientes por desorganização</span>
          </div>
        </div>
      </div>
    </section>
  )
}
