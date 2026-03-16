"use client"

export function AboutUs() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-primary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/generated_image_2f3b8f47-8155-4ba8-a874-fa3da9dae741-QBvPbUhc6Kxi0hu5S8fVvukzrsxRVJ.png"
                alt="Time OS Digital Plus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Text */}
          <div className="space-y-6">
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                Sobre o OS Digital Plus
              </span>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                Nascido da necessidade real
              </h2>
            </div>

            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                O OS Digital Plus foi criado para resolver os problemas reais enfrentados por assistências técnicas no dia a dia.
              </p>

              <p>
                Entendemos os desafios: ordens de serviço perdidas, clientes desinformados, caixa bagunçado e falta de controle financeiro. Por isso, construímos uma solução simples, mas poderosa.
              </p>

              <p>
                Com o OS Digital Plus, você tem tudo o que precisa em um único lugar. Dashboard intuitivo, controle financeiro real-time, histórico completo de clientes e a confiança de que sua assistência está crescendo com segurança.
              </p>

              <p className="font-semibold text-foreground pt-2">
                Mais de 500 assistências técnicas já confiam em nós.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Anos de experiência", value: "3+" },
                { label: "Assistências ativas", value: "500+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
