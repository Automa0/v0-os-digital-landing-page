"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendes",
    company: "SmartFix",
    text: "Depois que comecei a usar o sistema nunca mais perdi uma ordem de serviço.",
    rating: 5,
    initials: "CM",
    photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/generated_image_85af9229-26a9-4703-aafd-b1a02c3ccfc8-r7FKgnWLyIhSV4LPeIZPUPHoVSRioc.png",
  },
  {
    name: "Fernanda Oliveira",
    company: "CelularTop",
    text: "O dashboard financeiro me surpreendeu. Vejo o faturamento em tempo real e consigo definir meta mensal.",
    rating: 5,
    initials: "FO",
    photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/generated_image_85af9229-26a9-4703-aafd-b1a02c3ccfc8-r7FKgnWLyIhSV4LPeIZPUPHoVSRioc.png",
  },
  {
    name: "Ricardo Alves",
    company: "Info Service",
    text: "Com duas lojas agora, consigo ver tudo num painel só. Separado por loja, membros ativos, tudo organizado.",
    rating: 5,
    initials: "RA",
    photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/generated_image_85af9229-26a9-4703-aafd-b1a02c3ccfc8-r7FKgnWLyIhSV4LPeIZPUPHoVSRioc.png",
  },
  {
    name: "Bruno Lima",
    company: "Técnico Autônomo",
    text: "Uso sozinho no celular em domicílio. Crio OS, mando link pro cliente e gero PDF. Nunca fui tão profissional.",
    rating: 5,
    initials: "BL",
    photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/generated_image_85af9229-26a9-4703-aafd-b1a02c3ccfc8-r7FKgnWLyIhSV4LPeIZPUPHoVSRioc.png",
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative bg-gradient-to-b from-background to-secondary/30 py-20 lg:py-28">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
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

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/30"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-sm leading-relaxed text-foreground">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-border/50 pt-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                  {t.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-foreground truncate">{t.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
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
