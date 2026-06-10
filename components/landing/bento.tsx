import {
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Package,
  Search,
  Sparkles,
  Store,
  TrendingUp,
  Truck,
  Wrench,
} from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const osStatuses = [
  { icon: Search, label: "Em análise" },
  { icon: Package, label: "Aguardando peça" },
  { icon: Wrench, label: "Em reparo" },
  { icon: CheckCircle2, label: "Pronto para entrega" },
  { icon: Truck, label: "Entregue" },
]

export function BentoGrid() {
  return (
    <section className="bg-[#05060B] px-4 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
        {/* Operação */}
        <ScrollReveal delay={0}>
          <div className="h-full rounded-2xl border border-white/[0.06] bg-[#0B0D14] p-6">
            <h3 className="font-heading text-lg font-bold text-white">Operação em dia</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Acompanhe cada ordem de serviço do início ao fim, sem perder prazo nem peça.
            </p>
            <div className="mt-5 space-y-2.5">
              <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 py-1.5 pl-2 pr-3 shadow-lg shadow-blue-600/25">
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold text-white">
                  OS-128
                </span>
                <span className="truncate text-xs font-medium text-white">
                  Tela trocada — pronta p/ entrega
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-2 pr-3">
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold text-slate-300">
                  OS-129
                </span>
                <span className="truncate text-xs font-medium text-slate-400">
                  Criar orçamento p/ aprovação
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Clientes */}
        <ScrollReveal delay={120}>
          <div className="h-full rounded-2xl border border-white/[0.06] bg-[#0B0D14] p-6">
            <h3 className="font-heading text-lg font-bold text-white">Clientes</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Cadastro completo, histórico de aparelhos e contato direto pelo WhatsApp.
            </p>
            <div className="mt-5 rounded-xl border border-white/[0.06] bg-[#0F1322] p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Total de clientes
              </p>
              <div className="mt-1 flex items-center gap-2">
                <p className="font-heading text-2xl font-extrabold text-white">2.350</p>
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                  ↗ +6,9%
                </span>
              </div>
              <svg
                viewBox="0 0 200 36"
                className="mt-2 h-9 w-full"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0,30 C20,28 32,24 50,25 C70,26 80,18 100,17 C120,16 132,21 150,14 C168,8 184,6 200,4"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </ScrollReveal>

        {/* IA Mythos — card alto à direita */}
        <ScrollReveal delay={240} className="lg:row-span-2">
          <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0B0D14] p-6">
            {/* Feixe de luz */}
            <div
              className="pointer-events-none absolute -top-2 left-1/2 h-[42%] w-[70%] -translate-x-1/2"
              style={{
                clipPath: "polygon(38% 0, 62% 0, 100% 100%, 0 100%)",
                background:
                  "linear-gradient(180deg, rgba(59,130,246,0.85) 0%, rgba(59,130,246,0.25) 55%, transparent 100%)",
                filter: "blur(2px)",
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -top-10 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-blue-500/50 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative flex h-full flex-col items-center gap-6 pt-[30%] text-center lg:pt-[40%]">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-400/30 bg-[#0F1322] shadow-[0_0_50px_rgba(59,130,246,0.45)]">
                <Sparkles className="h-7 w-7 text-blue-300" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-bold text-white">IA Mythos</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  A inteligência artificial superinteligente do OS Digital+. A Mythos analisa o
                  sistema inteiro, consulta como cada loja está indo e devolve um feedback
                  claro do que melhorar para o seu negócio crescer.
                </p>
              </div>

              {/* Feedback de exemplo da Mythos */}
              <div className="w-full rounded-xl border border-blue-400/20 bg-[#0F1322] p-3 text-left shadow-lg shadow-blue-950/40">
                <div className="flex items-center gap-1.5 border-b border-white/[0.06] pb-2">
                  <Sparkles className="h-3 w-3 text-blue-400" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                    Feedback da Mythos
                  </span>
                </div>
                <div className="mt-2 space-y-2">
                  <p className="flex items-start gap-1.5 text-[11px] leading-snug text-slate-300">
                    <Store className="mt-0.5 h-3 w-3 shrink-0 text-blue-400" />
                    A loja Digital Cell faturou <span className="font-bold text-emerald-400">+840%</span> este mês.
                  </p>
                  <p className="flex items-start gap-1.5 text-[11px] leading-snug text-slate-300">
                    <TrendingUp className="mt-0.5 h-3 w-3 shrink-0 text-blue-400" />
                    Sugestão: reforce o estoque de telas — 60% das OS da semana foram troca de display.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* OS em tempo real — card largo */}
        <ScrollReveal delay={120} className="lg:col-span-2">
          <div className="h-full rounded-2xl border border-white/[0.06] bg-[#0B0D14] p-6">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex-1">
                <h3 className="font-heading text-lg font-bold text-white">
                  Status de OS em tempo real
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
                  Cada ordem com etapa, prazo e responsável. O cliente acompanha pelo link e a
                  sua bancada nunca mais vira bagunça.
                </p>
                <div className="mt-4 hidden items-center gap-2 text-xs text-slate-500 sm:flex">
                  <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                  Assinatura digital e PDF profissional em todas as OS
                </div>
              </div>

              <div className="relative w-full shrink-0 sm:w-60">
                <div
                  className="pointer-events-none absolute -right-4 -top-6 text-blue-500/20"
                  aria-hidden="true"
                >
                  <Sparkles className="h-16 w-16" />
                </div>
                <div className="relative rounded-xl border border-white/[0.08] bg-[#0F1322] p-3 shadow-2xl shadow-black/50">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-white">
                      <ClipboardList className="h-3.5 w-3.5 text-blue-400" />
                      OS de hoje
                    </span>
                    <ChevronDown className="h-3.5 w-3.5 text-slate-500" />
                  </div>
                  <ul className="mt-2 space-y-1">
                    {osStatuses.map((status) => (
                      <li
                        key={status.label}
                        className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-slate-300 transition-colors hover:bg-white/[0.04]"
                      >
                        <status.icon className="h-3.5 w-3.5 text-blue-400" />
                        {status.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
