"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "TechFix Assistência — Rio de Janeiro",
    text: "Antes eu anotava tudo no papel e perdia controle de OS toda hora. Agora tenho dashboard, controle de caixa e meu cliente acompanha tudo pelo link. Parece empresa grande.",
    initials: "CM",
  },
  {
    name: "Fernanda Oliveira",
    role: "CelularTop Reparos — São Paulo",
    text: "O dashboard financeiro foi o que mais me surpreendeu. Consigo ver o faturamento em tempo real, definir meta mensal e acompanhar o progresso. Isso era só de empresa grande.",
    initials: "FO",
  },
  {
    name: "Ricardo Alves",
    role: "Info Service — Belo Horizonte",
    text: "Abri minha segunda loja e o OS Digital+ me deixou ver tudo num painel só. Caixa separado por loja, membros ativos, relatórios. Incrível por esse preço.",
    initials: "RA",
  },
  {
    name: "Bruno Lima",
    role: "Técnico Autônomo — Curitiba",
    text: "Uso sozinho, no celular, atendendo em domicílio. Crio OS, mando link pro cliente e gero PDF na hora. Nunca fui tão profissional e nem precisei de contador.",
    initials: "BL",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section id="depoimentos" className="relative bg-background py-20 lg:py-28">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Depoimentos
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Quem usa, recomenda
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Técnicos, donos de loja e autônomos que transformaram a gestão do negócio com o OS Digital+.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center gap-14 lg:flex-row lg:items-start lg:gap-16">
          {/* Carousel */}
          <div className="w-full max-w-xl flex-1">
            <div className="relative rounded-2xl border border-border bg-card p-8 shadow-md">
              <Quote className="mb-4 h-8 w-8 text-primary/20" />
              <p className="text-lg leading-relaxed text-foreground">
                {`"${testimonials[current].text}"`}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-sm font-bold text-primary">
                  {testimonials[current].initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {testimonials[current].name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === current ? "w-6 bg-primary" : "w-2 bg-border"
                    }`}
                    aria-label={`Ir para depoimento ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Stats panel */}
          <div className="w-full max-w-sm">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md">
              <div className="border-b border-border bg-primary/5 px-6 py-4">
                <p className="text-sm font-semibold text-foreground">OS Digital+ em números</p>
              </div>
              <div className="space-y-0 divide-y divide-border">
                {[
                  { label: "Assistências cadastradas", value: "500+" },
                  { label: "Ordens criadas", value: "12.000+" },
                  { label: "PDFs gerados", value: "8.400+" },
                  { label: "Uptime do sistema", value: "99,9%" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between px-6 py-4">
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <span className="text-lg font-bold text-primary">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
