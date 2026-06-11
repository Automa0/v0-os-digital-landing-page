"use client"

import { useEffect, useRef, useState, type CSSProperties } from "react"
import { ArrowRight, Sparkles } from "lucide-react"

const SIGNUP_URL = "https://app.osdigitalplus.com.br/auth/login?modo=cadastro"

const stars = [
  { top: "8%", left: "12%", delay: "0s" },
  { top: "16%", left: "82%", delay: "0.7s" },
  { top: "30%", left: "22%", delay: "1.4s" },
  { top: "12%", left: "55%", delay: "2.1s" },
  { top: "34%", left: "70%", delay: "2.8s" },
  { top: "24%", left: "40%", delay: "1s" },
  { top: "6%", left: "33%", delay: "1.8s" },
  { top: "20%", left: "90%", delay: "0.4s" },
]

const niches = [
  "Loja de Celular",
  "Assistência Técnica de TV",
  "Empresa de Refrigeração",
  "Loja de Informática",
  "Loja de Notebook",
  "Loja de Videogame",
  "Loja de Eletrodoméstico",
  "Empresa de Ar-Condicionado",
  "Relojoaria",
  "Loja de Impressora",
]

export function LandingHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [nicheIndex, setNicheIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setNicheIndex(i => (i + 1) % niches.length)
        setVisible(true)
      }, 380)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--hero-p", "1")
      return
    }

    let raf = 0
    const update = () => {
      raf = 0
      const p = Math.min(Math.max(window.scrollY / 500, 0), 1)
      // easeOutCubic — mais suave e fluido que easeOutQuad
      const eased = 1 - (1 - p) * (1 - p) * (1 - p)
      el.style.setProperty("--hero-p", eased.toFixed(4))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative overflow-hidden bg-[#05060B] px-2 pb-10 pt-20 sm:px-3 sm:pt-24"
      style={{ "--hero-p": 0 } as CSSProperties}
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[#08090F] sm:rounded-[2.5rem]">
        {/* Glow ambiente no topo */}
        <div
          className="lp-breathe pointer-events-none absolute -top-32 left-1/2 h-96 w-[150%] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(37,99,235,0.16) 0%, rgba(56,189,248,0.06) 45%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Estrelas sutis (padrão de fundo) */}
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

        {/* Estrelas piscando */}
        {stars.map((star, i) => (
          <span
            key={i}
            className="lp-twinkle pointer-events-none absolute h-1 w-1 rounded-full bg-blue-200"
            style={{ top: star.top, left: star.left, animationDelay: star.delay }}
            aria-hidden="true"
          />
        ))}

        <div className="relative z-10 px-4 pt-14 text-center sm:px-8 sm:pt-20">
          {/* Badge */}
          <div className="stagger-item" style={{ animationDelay: "0.05s" }}>
            <a
              href="#funcionalidades"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1 pl-1 pr-3 text-xs text-slate-300 backdrop-blur transition-colors hover:bg-white/[0.08]"
            >
              <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-2.5 py-1 text-[11px] font-bold text-white shadow shadow-blue-600/40">
                <Sparkles className="h-3 w-3" />
                Novidade
              </span>
              IA Mythos integrada ao painel
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>

          {/* Headline */}
          <div className="stagger-item mx-auto mt-6 max-w-4xl" style={{ animationDelay: "0.15s" }}>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Gestão inteligente para a sua
            </h1>
            <div className="mt-3 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl" style={{ minHeight: "1.2em" }}>
              <span
                style={{
                  display: "inline-block",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0px)" : "translateY(14px)",
                  transition: "opacity 0.38s cubic-bezier(0.22,1,0.36,1), transform 0.38s cubic-bezier(0.22,1,0.36,1)",
                  background: "linear-gradient(90deg, #60a5fa, #67e8f9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 18px rgba(96,165,250,0.55))",
                }}
              >
                {niches[nicheIndex]}
              </span>
            </div>
          </div>

          <p
            className="stagger-item mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base"
            style={{ animationDelay: "0.28s" }}
          >
            Tenha clareza e domine os dados do seu negócio com o OS Digital+. Ordem de
            serviço, PDV, financeiro e multiloja em um painel em tempo real.
          </p>

          {/* CTAs */}
          <div
            className="stagger-item mt-8 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#planos"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/[0.08]"
            >
              Ver planos
            </a>
            <a
              href={SIGNUP_URL}
              className="pulse-glow group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/40 transition-all hover:from-blue-500 hover:to-blue-400"
            >
              Cadastre-se
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>

        {/* Horizonte / eclipse + mockup */}
        <div className="relative mt-12 sm:mt-16">
          {/* Halo do eclipse pulsando */}
          <div
            className="lp-breathe pointer-events-none absolute left-1/2 top-2 aspect-square w-[180%] -translate-x-1/2 rounded-[50%] sm:w-[140%]"
            style={{
              boxShadow:
                "0 -16px 50px -4px rgba(96,165,250,0.5), 0 -50px 140px -8px rgba(59,130,246,0.4)",
            }}
            aria-hidden="true"
          />

          {/* Planeta com borda luminosa */}
          <div
            className="pointer-events-none absolute left-1/2 top-2 aspect-square w-[180%] -translate-x-1/2 overflow-hidden rounded-[50%] sm:w-[140%]"
            style={{
              background: "#05060B",
              boxShadow:
                "0 -8px 28px -4px rgba(147,197,253,0.55), 0 -28px 90px -8px rgba(59,130,246,0.5), 0 -80px 220px 0 rgba(37,99,235,0.35), inset 0 14px 40px -16px rgba(147,197,253,0.45)",
              borderTop: "1.5px solid rgba(191,219,254,0.7)",
            }}
            aria-hidden="true"
          >
            {/* Feixe de luz varrendo a borda do eclipse */}
            <div
              className="lp-shimmer absolute left-1/2 top-0 h-10 w-[40%] -translate-x-1/2"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(191,219,254,0.5) 50%, transparent 100%)",
                filter: "blur(14px)",
              }}
            />
          </div>

          {/* Mockup do sistema — cresce ao rolar para baixo e volta ao subir */}
          <div className="relative z-10 mx-auto max-w-5xl px-3 pb-12 pt-10 sm:px-8 sm:pb-16">
            <div className="stagger-item" style={{ animationDelay: "0.55s" }}>
              <div
                style={{
                  transform: "scale(calc(0.9 + var(--hero-p) * 0.16))",
                  transformOrigin: "top center",
                  willChange: "transform",
                  transition: "transform 0.1s linear",
                }}
              >
                <img
                  src="https://res.cloudinary.com/dmiwcdvi8/image/upload/v1781192500/Captura_de_tela_2026-06-11_124120_cneeb5.png"
                  alt="Dashboard OS Digital+"
                  className="w-full rounded-xl shadow-2xl shadow-blue-900/40"
                  loading="eager"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
