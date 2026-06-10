import { Check } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const checklist = [
  "Orçamentos profissionais com a sua logo.",
  "Assinatura digital direto na ordem de serviço.",
  "Multiloja: gerencie até 4 lojas em um único painel.",
  "Funciona no celular e no computador.",
]

const bars = [34, 55, 42, 70, 58, 88, 64, 96]

export function ChartsHighlight() {
  return (
    <section className="overflow-hidden bg-[#05060B] px-4 py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Checklist */}
        <ScrollReveal>
          <h3 className="font-heading text-2xl font-bold leading-snug text-white sm:text-3xl text-balance">
            Feito do seu jeito, pronto para crescer
          </h3>
          <ul className="mt-7 space-y-4">
            {checklist.map((item, i) => (
              <li key={item}>
                <ScrollReveal delay={100 + i * 90} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-gradient-to-br from-blue-600 to-blue-500 shadow shadow-blue-600/40">
                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-slate-300 sm:text-base">{item}</span>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {/* Gráficos sempre ON */}
        <ScrollReveal delay={150} className="relative">
          <div className="relative z-10">
            <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Gráficos sempre <span className="text-blue-400">ON!</span>
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400 sm:text-base">
              Faturamento, lucro, metas e comparativos mês a mês. Seu dashboard atualiza em
              tempo real a cada OS e a cada venda.
            </p>
          </div>

          {/* Card 3D inclinado */}
          <div
            className="lp-float relative mx-auto mt-10 h-56 w-72"
            style={{ perspective: "900px" }}
            aria-hidden="true"
          >
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/3 rounded-full bg-blue-600/35 blur-3xl"
            />
            <div
              className="absolute left-1/2 top-6 w-64 -translate-x-1/2 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 p-5 shadow-[0_50px_90px_-20px_rgba(37,99,235,0.65)]"
              style={{ transform: "rotateX(48deg) rotateZ(-28deg)" }}
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">
                Faturamento
              </p>
              <p className="font-heading text-xl font-extrabold text-white">R$ 1.550</p>
              <p className="text-[10px] font-bold text-white/80">↗ +840% vs mês anterior</p>
              <div className="mt-3 flex h-16 items-end gap-1.5">
                {bars.map((height, i) => (
                  <div
                    key={i}
                    className="lp-bar flex-1 rounded-sm bg-white/45"
                    style={{ height: `${height}%`, animationDelay: `${i * 0.18}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
