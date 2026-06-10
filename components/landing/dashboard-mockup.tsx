import {
  BarChart3,
  BadgeCheck,
  Bell,
  ChevronDown,
  CreditCard,
  Crown,
  Globe,
  LayoutDashboard,
  LogOut,
  MessageCircle,
  Package,
  Settings,
  ShoppingCart,
  Sparkles,
  Store,
  Sun,
  Target,
  TrendingUp,
  TriangleAlert,
  Truck,
  Wallet,
  Zap,
} from "lucide-react"

const menu = [
  { icon: LayoutDashboard, label: "Painel", active: true },
  { icon: BarChart3, label: "Relatório" },
  { icon: Wallet, label: "Financeiro", chevron: true },
  { icon: Truck, label: "Fornecedores", chevron: true },
  { icon: Store, label: "Lojas" },
  { icon: Package, label: "Catálogo" },
  { icon: CreditCard, label: "Assinatura" },
  { icon: Settings, label: "Configurações" },
]

const stats = [
  {
    label: "Faturamento Total",
    value: "R$ 1.550",
    color: "text-emerald-400",
    border: "border-t-emerald-500",
    chip: "bg-emerald-500/15 text-emerald-400",
    icon: CreditCard,
  },
  {
    label: "Faturamento OS",
    value: "R$ 1.370",
    color: "text-blue-400",
    border: "border-t-blue-500",
    chip: "bg-blue-500/15 text-blue-400",
    icon: BadgeCheck,
  },
  {
    label: "Faturamento Produtos",
    value: "R$ 180",
    color: "text-cyan-400",
    border: "border-t-cyan-500",
    chip: "bg-cyan-500/15 text-cyan-400",
    icon: ShoppingCart,
  },
  {
    label: "Lucro Total",
    value: "R$ 910",
    color: "text-emerald-400",
    border: "border-t-emerald-500",
    chip: "bg-emerald-500/15 text-emerald-400",
    icon: TrendingUp,
  },
]

function Sparkline({ stroke }: { stroke: string }) {
  return (
    <svg viewBox="0 0 100 18" className="h-3 w-full" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0,15 C15,15 25,13 38,11 C55,8 65,9 78,6 C88,4 94,3 100,2"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#070B14] text-left shadow-2xl shadow-blue-950/50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-[152px] shrink-0 flex-col border-r border-white/5 bg-[#080C16] p-2.5 md:flex">
          <div className="flex items-center gap-1.5 px-1 pb-2.5">
            <span className="flex h-4 w-4 items-center justify-center rounded bg-gradient-to-br from-blue-500 to-cyan-400">
              <Zap className="h-2.5 w-2.5 text-white" fill="currentColor" />
            </span>
            <span className="text-[10px] font-extrabold text-white">
              OS <span className="text-cyan-300">Digital</span>
              <span className="text-blue-400"> ▸</span>
            </span>
          </div>

          <nav className="space-y-0.5">
            {menu.map((item) => (
              <div
                key={item.label}
                className={`flex items-center justify-between rounded-md px-2 py-1.5 text-[9px] font-medium ${
                  item.active
                    ? "bg-blue-600 text-white shadow-sm shadow-blue-600/40"
                    : "text-slate-400"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <item.icon className="h-2.5 w-2.5" />
                  {item.label}
                </span>
                {item.chevron && <ChevronDown className="h-2 w-2 opacity-60" />}
              </div>
            ))}
          </nav>

          <p className="px-2 pb-1 pt-2.5 text-[7px] font-bold uppercase tracking-wider text-slate-600">
            Operar loja
          </p>
          <div className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[9px] font-medium text-slate-400">
            <Store className="h-2.5 w-2.5" />
            Digital Cell
          </div>

          <p className="px-2 pb-1 pt-1.5 text-[7px] font-bold uppercase tracking-wider text-slate-600">
            Recursos
          </p>
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[9px] font-medium text-slate-400">
              <MessageCircle className="h-2.5 w-2.5" />
              WhatsApp
            </div>
            <div className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[9px] font-medium text-slate-400">
              <Globe className="h-2.5 w-2.5" />
              Loja Virtual
            </div>
          </div>

          <div className="mt-auto space-y-2 pt-3">
            <div className="rounded-lg border border-white/5 bg-[#0B101D] p-2">
              <p className="text-[6.5px] font-bold uppercase tracking-wider text-slate-500">
                Plano atual
              </p>
              <div className="mt-0.5 flex items-center justify-between">
                <p className="text-[9px] font-bold text-white">Basico mensal</p>
                <Crown className="h-2.5 w-2.5 text-amber-400" />
              </div>
              <div className="mt-1.5 flex items-center justify-center gap-1 rounded border border-blue-500/30 py-1 text-[8px] font-semibold text-blue-300">
                <Sparkles className="h-2 w-2" />
                Ver planos
              </div>
            </div>
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5">
                <span className="flex h-4 w-4 items-center justify-center rounded bg-blue-600 text-[8px] font-bold text-white">
                  E
                </span>
                <div>
                  <p className="text-[8px] font-semibold leading-none text-white">Enzo</p>
                  <p className="text-[6.5px] leading-tight text-slate-500">ZH</p>
                </div>
              </div>
              <LogOut className="h-2.5 w-2.5 text-slate-500" />
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="min-w-0 flex-1 bg-[#060A12] p-2 sm:p-2.5">
          {/* Topbar */}
          <div className="flex items-center justify-between gap-2 pb-2">
            <div className="flex flex-1 items-center gap-1.5 rounded-lg border border-white/5 bg-[#0A0F1C] px-2.5 py-1.5 sm:max-w-[260px]">
              <Sparkles className="h-2.5 w-2.5 text-blue-400" />
              <span className="flex-1 truncate text-[9px] text-slate-500">
                Pergunte à Mythos...
              </span>
              <kbd className="rounded border border-white/10 bg-white/5 px-1 text-[7px] text-slate-400">
                K
              </kbd>
            </div>
            <div className="flex items-center gap-1.5">
              <Sun className="h-3 w-3 text-slate-500" />
              <Bell className="h-3 w-3 text-slate-500" />
              <span className="flex h-5 w-5 items-center justify-center rounded bg-blue-600 text-[9px] font-bold text-white">
                E
              </span>
            </div>
          </div>

          {/* Alerta */}
          <div className="mb-2 flex items-center gap-1.5 rounded-md border border-amber-500/30 bg-amber-950/40 px-2 py-1.5">
            <TriangleAlert className="h-2.5 w-2.5 shrink-0 text-amber-400" />
            <p className="truncate text-[8px] text-amber-200">
              <span className="font-bold">2 OS</span> em andamento há mais de 5 dias (somando
              todas as lojas).
            </p>
          </div>

          {/* Gráfico de faturamento */}
          <div className="mb-2 rounded-lg border border-white/5 bg-[#0A0F1C] p-2.5">
            <div className="mb-1 flex items-start justify-between">
              <div className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-blue-600/20 text-blue-400">
                  <BarChart3 className="h-2.5 w-2.5" />
                </span>
                <div>
                  <p className="text-[9px] font-bold leading-tight text-white">
                    Faturamento — Mês atual
                  </p>
                  <p className="text-[7px] text-slate-500">Entradas e saídas dia a dia</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[7px] text-slate-500">Total mês</p>
                <p className="text-[10px] font-bold text-emerald-400">R$ 1.550</p>
              </div>
            </div>

            <svg viewBox="0 0 600 170" className="w-full" aria-hidden="true">
              <defs>
                <linearGradient id="lp-chart-blue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>

              {[
                { y: 10, label: "1k" },
                { y: 43.75, label: "750" },
                { y: 77.5, label: "500" },
                { y: 111.25, label: "250" },
                { y: 145, label: "0" },
              ].map((line) => (
                <g key={line.label}>
                  <text x="24" y={line.y + 2.5} textAnchor="end" fontSize="8" fill="#475569">
                    {line.label}
                  </text>
                  <line
                    x1="30"
                    y1={line.y}
                    x2="590"
                    y2={line.y}
                    stroke="#1e293b"
                    strokeWidth="0.8"
                    strokeDasharray="3 5"
                  />
                </g>
              ))}

              {Array.from({ length: 10 }, (_, i) => (
                <text
                  key={i}
                  x={30 + i * 62.2}
                  y="163"
                  textAnchor="middle"
                  fontSize="8"
                  fill="#475569"
                >
                  {i + 1}
                </text>
              ))}

              {/* Entrada (azul) */}
              <path
                d="M30,145 C70,145 80,142 105,135 C130,128 135,112 158,111 C180,110 205,110 228,117 C250,124 262,141 288,144 C310,147 330,145 348,145 C370,145 385,90 395,55 C402,30 400,16 405,16 C410,16 412,40 422,75 C434,118 444,144 466,145 C500,147 545,145 590,145 L590,145 L30,145 Z"
                fill="url(#lp-chart-blue)"
              />
              <path
                d="M30,145 C70,145 80,142 105,135 C130,128 135,112 158,111 C180,110 205,110 228,117 C250,124 262,141 288,144 C310,147 330,145 348,145 C370,145 385,90 395,55 C402,30 400,16 405,16 C410,16 412,40 422,75 C434,118 444,144 466,145 C500,147 545,145 590,145"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              {/* Produtos (amarelo) */}
              <path
                d="M30,145 C80,145 110,143 140,134 C165,126 185,101 206,100 C227,99 240,118 262,132 C280,142 300,145 320,145 L590,145"
                fill="none"
                stroke="#eab308"
                strokeWidth="1.4"
              />
              {/* Saídas (vermelho) */}
              <path
                d="M30,142.5 L340,142.5 C360,142.5 380,134 400,133 C418,132 428,139 448,141.5 L590,141.5"
                fill="none"
                stroke="#ef4444"
                strokeWidth="1.4"
              />
            </svg>
          </div>

          {/* Cards de estatísticas */}
          <div className="mb-2 grid grid-cols-2 gap-1.5 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-md border border-white/5 ${stat.border} border-t-2 bg-[#0A0F1C] p-2`}
              >
                <div className="flex items-start justify-between gap-1">
                  <p className="text-[6.5px] font-bold uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </p>
                  <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded ${stat.chip}`}>
                    <stat.icon className="h-2.5 w-2.5" />
                  </span>
                </div>
                <p className={`mt-0.5 text-[13px] font-extrabold leading-tight ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-[6.5px] font-semibold text-emerald-400">↗ +840% vs mês ant.</p>
                <div className="mt-1">
                  <Sparkline stroke="#10b98180" />
                </div>
              </div>
            ))}
          </div>

          {/* Linha inferior */}
          <div className="grid grid-cols-3 gap-1.5">
            <div className="rounded-md border border-white/5 bg-[#0A0F1C] p-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="flex h-4 w-4 items-center justify-center rounded bg-blue-600/20 text-blue-400">
                    <BarChart3 className="h-2 w-2" />
                  </span>
                  <p className="text-[8px] font-bold text-white">Comparativo Mensal</p>
                </div>
                <span className="rounded bg-emerald-500/15 px-1 py-0.5 text-[6.5px] font-bold text-emerald-400">
                  ↗ +840%
                </span>
              </div>
              <div className="mt-1.5 grid grid-cols-2 gap-1">
                <div className="rounded border border-blue-500/30 bg-blue-600/15 p-1.5">
                  <p className="text-[6px] font-bold uppercase text-blue-300">Mês atual</p>
                  <p className="text-[8px] font-bold text-white">R$ 1.550</p>
                </div>
                <div className="rounded border border-white/5 bg-white/[0.03] p-1.5">
                  <p className="text-[6px] font-bold uppercase text-slate-500">Mês anterior</p>
                  <p className="text-[8px] font-bold text-slate-300">R$ 150</p>
                </div>
              </div>
            </div>

            <div className="rounded-md border border-white/5 bg-[#0A0F1C] p-2">
              <div className="flex items-center gap-1">
                <span className="flex h-4 w-4 items-center justify-center rounded bg-emerald-600/20 text-emerald-400">
                  <Wallet className="h-2 w-2" />
                </span>
                <div>
                  <p className="text-[8px] font-bold leading-tight text-white">
                    Resultado do Período
                  </p>
                  <p className="text-[6px] text-slate-500">Por forma de pagamento</p>
                </div>
              </div>
              <div className="mt-2 rounded border border-white/5 bg-white/[0.03] p-1.5">
                <div className="flex items-center justify-between">
                  <p className="text-[7px] font-bold text-white">PIX</p>
                  <p className="text-[7px] font-bold text-slate-300">
                    <span className="mr-1 rounded bg-cyan-500/20 px-1 text-cyan-300">55%</span>
                    R$ 850
                  </p>
                </div>
                <div className="mt-1 h-1 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[55%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                </div>
              </div>
            </div>

            <div className="rounded-md border border-white/5 bg-[#0A0F1C] p-2">
              <div className="flex items-center gap-1">
                <span className="flex h-4 w-4 items-center justify-center rounded bg-emerald-600/20 text-emerald-400">
                  <Target className="h-2 w-2" />
                </span>
                <div>
                  <p className="text-[8px] font-bold leading-tight text-white">Meta Mensal</p>
                  <p className="text-[6px] text-slate-500">Acompanhamento em tempo real</p>
                </div>
              </div>
              <div className="mt-1.5 flex items-center gap-2">
                <div className="relative h-9 w-9 shrink-0">
                  <svg viewBox="0 0 40 40" className="h-9 w-9 -rotate-90" aria-hidden="true">
                    <circle cx="20" cy="20" r="16" fill="none" stroke="#1e293b" strokeWidth="5" />
                    <circle
                      cx="20"
                      cy="20"
                      r="16"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeDasharray="83.4 100.5"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[7px] font-extrabold text-blue-400">
                    83%
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-[6px] font-bold uppercase text-slate-500">Saldo atual</p>
                  <p className="text-[9px] font-extrabold leading-tight text-white">R$ 1.410</p>
                  <p className="text-[6px] text-slate-500">
                    Meta <span className="font-bold text-slate-300">R$ 1.692</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
