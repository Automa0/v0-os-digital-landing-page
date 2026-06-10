import { ArrowUpRight } from "lucide-react"

const stats = [
  { value: "+400", label: "lojas utilizando o sistema" },
  { value: "+8.126", label: "ordens de serviço e vendas" },
  { value: "+10.482", label: "orçamentos enviados" },
  { value: "100%", label: "segurança dos dados" },
]

const prints = [
  { src: "/testimonial-1.jpg", alt: "Depoimento de cliente João sobre o OS Digital+" },
  { src: "/testimonial-2.jpg", alt: "Depoimento de cliente Carlos sobre o OS Digital+" },
  { src: "/testimonial-3.jpg", alt: "Depoimento de cliente Júnior sobre o OS Digital+" },
]

export function TestimonialsCards() {
  return (
    <section id="depoimentos" className="bg-[#05060B] px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
            Quem usa, recomenda
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
            Assistências de todo o Brasil já organizam OS, vendas e financeiro com o OS
            Digital+. Veja o que dizem.
          </p>
        </div>

        {/* Estatísticas */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Cards de depoimentos */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {prints.map((print) => (
            <div
              key={print.src}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0B0D14] transition-all hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_20px_60px_-20px_rgba(37,99,235,0.4)]"
            >
              <img
                src={print.src}
                alt={print.alt}
                className="aspect-[4/5] w-full object-cover object-top"
                loading="lazy"
              />
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-black/60 text-white backdrop-blur transition-colors group-hover:bg-blue-600">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
