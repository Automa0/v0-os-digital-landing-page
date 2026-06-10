import { ArrowRight, Sparkles } from "lucide-react"
import { DashboardMockup } from "./dashboard-mockup"

const SIGNUP_URL =
  "https://app.osdigitalplus.com.br/register?utm_source=landing&utm_medium=hero&utm_campaign=cta"

export function LandingHero() {
  return (
    <section id="inicio" className="relative bg-[#05060B] px-3 pb-10 pt-24 sm:px-4 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[#08090F]">
          {/* Glow ambiente no topo */}
          <div
            className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[150%] -translate-x-1/2"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(37,99,235,0.16) 0%, rgba(56,189,248,0.06) 45%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          {/* Estrelas sutis */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern id="lp-stars" x="0" y="0" width="44" height="44" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#93c5fd" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lp-stars)" />
          </svg>

          <div className="relative z-10 px-4 pt-14 text-center sm:px-8 sm:pt-20">
            {/* Badge */}
            <a
              href="#funcionalidades"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1 pl-1 pr-3 text-xs text-slate-300 backdrop-blur transition-colors hover:bg-white/[0.08]"
            >
              <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-2.5 py-1 text-[11px] font-bold text-white shadow shadow-blue-600/40">
                <Sparkles className="h-3 w-3" />
                Novidade
              </span>
              Kronos IA integrada ao painel
              <ArrowRight className="h-3 w-3" />
            </a>

            {/* Headline */}
            <h1 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Gestão inteligente para a sua assistência.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Tenha clareza e domine os dados do seu negócio com o OS Digital+. Ordem de
              serviço, PDV, financeiro e multiloja em um painel em tempo real.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#planos"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/[0.08]"
              >
                Ver planos
              </a>
              <a
                href={SIGNUP_URL}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/40 transition-all hover:from-blue-500 hover:to-blue-400"
              >
                Começar grátis
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              10 dias de teste grátis · Acesso imediato · Cancele quando quiser
            </p>
          </div>

          {/* Horizonte / eclipse + mockup */}
          <div className="relative mt-12 sm:mt-16">
            {/* Planeta com borda luminosa */}
            <div
              className="pointer-events-none absolute left-1/2 top-2 aspect-square w-[180%] -translate-x-1/2 rounded-[50%] sm:w-[140%]"
              style={{
                background: "#05060B",
                boxShadow:
                  "0 -8px 28px -4px rgba(147,197,253,0.55), 0 -28px 90px -8px rgba(59,130,246,0.5), 0 -80px 220px 0 rgba(37,99,235,0.35), inset 0 14px 40px -16px rgba(147,197,253,0.45)",
                borderTop: "1.5px solid rgba(191,219,254,0.7)",
              }}
              aria-hidden="true"
            />

            {/* Mockup do sistema */}
            <div className="relative z-10 mx-auto max-w-4xl px-3 pb-10 pt-10 sm:px-8 sm:pb-14">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
