"use client"

const features = [
  {
    title: "Controle de Caixa",
    description: "Registre entradas por PIX, dinheiro, cartao. Acompanhe saldo, saidas e suprimentos em tempo real.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caixa-zSxiJ4jSUGiiI2OjFJv39fpID0hrIN.png",
  },
  {
    title: "Ordens de Servico",
    description: "Crie OS profissionais em segundos. Checklist do aparelho, condicoes fisicas, funcionalidades e fotos de entrada.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202026-03-05%20010620-1hczKFKdGzjF1IJl6NfmgiTZaKBADk.png",
  },
]

export function FeaturesShowcase() {
  return (
    <section className="relative bg-gradient-to-b from-secondary/30 to-background py-20 lg:py-28">
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Veja na prática
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Conheça as funcionalidades do sistema
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cada tela foi pensada para facilitar sua rotina e aumentar sua produtividade.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-16 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full flex-1">
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl transition-transform hover:scale-[1.02]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
                <a
                  href="https://app.osdigitalplus.com.br/register?plan=mensal"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Comecar agora por R$29/mes
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
