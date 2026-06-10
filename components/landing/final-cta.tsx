"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { DashboardMockup } from "./dashboard-mockup"
import { ScrollReveal } from "@/components/scroll-reveal"

const SIGNUP_URL =
  "https://app.osdigitalplus.com.br/register?utm_source=landing&utm_medium=final-cta&utm_campaign=cta"

export function FinalCtaSection() {
  const [email, setEmail] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const url = email.trim()
      ? `${SIGNUP_URL}&email=${encodeURIComponent(email.trim())}`
      : SIGNUP_URL
    window.open(url, "_blank")
  }

  return (
    <section className="bg-[#05060B] px-3 pb-20 pt-6 sm:px-4">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[#08090F]">
          <div
            className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            {/* Texto + formulário */}
            <div className="px-6 py-12 sm:px-10 lg:py-16">
              <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl text-balance">
                Transforme sua assistência com o{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  OS Digital+
                </span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
                Embarque em uma jornada de organização e crescimento. Crie sua conta e teste
                grátis por 10 dias — sem cartão, acesso imediato.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu e-mail aqui"
                  className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-blue-500/60"
                  aria-label="Seu e-mail"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/40 transition-all hover:from-blue-500 hover:to-blue-400"
                >
                  Começar grátis
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              <p className="mt-3 text-xs text-slate-500">
                10 dias de teste grátis · Suporte via WhatsApp · Cancele quando quiser
              </p>
            </div>

            {/* Mockup transbordando à direita */}
            <div className="relative hidden h-full min-h-[400px] lg:block" aria-hidden="true">
              <div className="absolute left-6 top-1/2 w-[150%] -translate-y-1/2">
                <DashboardMockup />
              </div>
            </div>
          </div>

          {/* Barra de destaque inferior */}
          <div className="lp-gradient-move relative h-2.5 w-full bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400" />
        </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
