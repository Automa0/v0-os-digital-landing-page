"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendes",
    location: "Rio de Janeiro",
    text: "Antes eu anotava tudo no papel e perdia controle de OS toda hora. Agora tenho dashboard, controle de caixa e meu cliente acompanha tudo pelo link.",
    rating: 5,
    initials: "CM",
  },
  {
    name: "Fernanda Oliveira",
    location: "São Paulo",
    text: "O dashboard financeiro foi o que mais me surpreendeu. Consigo ver o faturamento em tempo real e definir meta mensal.",
    rating: 5,
    initials: "FO",
  },
  {
    name: "Ricardo Alves",
    location: "Belo Horizonte",
    text: "Abri minha segunda loja e o OS Digital+ me deixou ver tudo num painel só. Caixa separado por loja, membros ativos, relatórios.",
    rating: 5,
    initials: "RA",
  },
  {
    name: "Bruno Lima",
    location: "Curitiba",
    text: "Uso sozinho, no celular, atendendo em domicílio. Crio OS, mando link pro cliente e gero PDF na hora. Nunca fui tão profissional.",
    rating: 5,
    initials: "BL",
  },
  {
    name: "Ana Paula Silva",
    location: "Brasília",
    text: "A organização mudou completamente. Não perco mais OS e meus clientes elogiam o link de acompanhamento.",
    rating: 5,
    initials: "AS",
  },
  {
    name: "João Pedro Costa",
    location: "Fortaleza",
    text: "Melhor investimento que fiz para minha assistência. O controle de caixa me salvou de muita dor de cabeça.",
    rating: 5,
    initials: "JC",
  },
]

// Duplicate for infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials]

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-20 lg:py-28">
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
            Técnicos, donos de loja e autônomos que transformaram a gestão com o OS Digital+.
          </p>
        </div>
      </div>

      {/* Infinite scroll carousel */}
      <div className="mt-14 relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

        <div className="infinite-scroll flex gap-6 px-4">
          {duplicatedTestimonials.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="w-80 flex-shrink-0 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/30"
            >
              {/* Rating stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="mb-6 text-sm leading-relaxed text-foreground min-h-[80px]">
                "{t.text}"
              </p>

              {/* User info */}
              <div className="flex items-center gap-3 border-t border-border/50 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-xs font-bold text-primary">
                  {t.initials}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-16 max-w-4xl px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { label: "Assistências", value: "500+" },
            { label: "Ordens criadas", value: "12.000+" },
            { label: "PDFs gerados", value: "8.400+" },
            { label: "Uptime", value: "99,9%" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
