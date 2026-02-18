"use client"

import { ExternalLink, FileDown, Monitor, Smartphone } from "lucide-react"

export function MockupSection() {
  return (
    <section className="relative bg-background py-20 lg:py-28">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Na Prática
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Veja como o OSDigitalPlus funciona no dia a dia
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Um painel completo para o técnico e um link exclusivo para o cliente acompanhar o serviço.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
          {/* Main Dashboard */}
          <div className="w-full flex-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Monitor className="h-4 w-4 text-primary" />
              </div>
              <span className="font-heading text-sm font-semibold text-foreground">Painel do Técnico</span>
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
              {/* Browser bar */}
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-2.5">
                <div className="h-2.5 w-2.5 rounded-full bg-destructive/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-chart-4/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-chart-3/50" />
                <div className="ml-3 flex-1 rounded bg-background px-3 py-1 text-xs text-muted-foreground">
                  app.osdigitalplus.com.br/dashboard
                </div>
              </div>

              <div className="flex">
                {/* Sidebar */}
                <div className="hidden w-44 border-r border-border bg-gradient-to-b from-muted/30 to-muted/10 p-4 md:block">
                  <div className="mb-6 text-sm font-bold text-primary">OSDigitalPlus</div>
                  <nav className="flex flex-col gap-1.5">
                    {["Dashboard", "Ordens", "Clientes", "Relatórios"].map((item, i) => (
                      <div
                        key={item}
                        className={`rounded-md px-3 py-2 text-xs font-medium ${
                          i === 1
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Content */}
                <div className="flex-1 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-foreground">Ordens de Serviço</h3>
                    <div className="flex gap-2">
                      <button className="inline-flex items-center gap-1.5 rounded-md bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent">
                        <ExternalLink className="h-3 w-3" />
                        Link do Cliente
                      </button>
                      <button className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
                        <FileDown className="h-3 w-3" />
                        Gerar PDF
                      </button>
                    </div>
                  </div>

                  {/* Table header */}
                  <div className="mb-2 flex items-center gap-4 rounded-md bg-muted/50 px-3 py-2 text-xs font-medium text-muted-foreground">
                    <span className="w-8">#</span>
                    <span className="flex-1">Cliente</span>
                    <span className="w-28">Aparelho</span>
                    <span className="w-24">Status</span>
                  </div>

                  {/* Rows */}
                  {[
                    { id: "001", name: "João Silva", device: "iPhone 11", status: "Em Conserto", statusColor: "bg-chart-4/15 text-chart-4" },
                    { id: "002", name: "Maria Santos", device: "Samsung S21", status: "Aguardando", statusColor: "bg-accent/15 text-accent" },
                    { id: "003", name: "Pedro Lima", device: "Notebook Dell", status: "Concluído", statusColor: "bg-chart-3/15 text-chart-3" },
                    { id: "004", name: "Ana Costa", device: "iPad Air", status: "Orçamento", statusColor: "bg-primary/15 text-primary" },
                  ].map((row) => (
                    <div
                      key={row.id}
                      className="flex items-center gap-4 border-b border-border/50 px-3 py-2.5 text-xs last:border-0"
                    >
                      <span className="w-8 text-muted-foreground">{row.id}</span>
                      <span className="flex-1 font-medium text-foreground">{row.name}</span>
                      <span className="w-28 text-muted-foreground">{row.device}</span>
                      <span className={`w-24 rounded-full px-2 py-0.5 text-center text-xs font-medium ${row.statusColor}`}>
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Client mini-view */}
          <div className="w-full max-w-xs lg:mt-12">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                <Smartphone className="h-4 w-4 text-accent" />
              </div>
              <span className="font-heading text-sm font-semibold text-foreground">Visão do Cliente</span>
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
              {/* Phone status bar */}
              <div className="flex items-center justify-between bg-muted/50 px-4 py-2 text-xs text-muted-foreground">
                <span>9:41</span>
                <div className="flex gap-1">
                  <div className="h-2 w-4 rounded-sm bg-foreground/30" />
                  <div className="h-2 w-2 rounded-sm bg-foreground/30" />
                </div>
              </div>

              <div className="p-5">
                <div className="mb-4 text-center">
                  <div className="text-xs font-bold text-primary">OSDigitalPlus</div>
                  <h4 className="mt-1 text-sm font-semibold text-foreground">Ordem de Serviço</h4>
                </div>

                <div className="space-y-3 rounded-lg bg-secondary/50 p-4">
                  {[
                    { label: "Cliente", value: "João Silva" },
                    { label: "Aparelho", value: "iPhone 11" },
                    { label: "Status", value: "Em Conserto", highlight: true },
                    { label: "Previsão", value: "2 dias" },
                    { label: "Orçamento", value: "R$ 250,00" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{item.label}</span>
                      <span
                        className={`text-xs font-medium ${
                          item.highlight ? "text-chart-4" : "text-foreground"
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-lg bg-primary/5 p-3 text-center">
                  <p className="text-xs text-muted-foreground">
                    Acompanhe o progresso em tempo real
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
