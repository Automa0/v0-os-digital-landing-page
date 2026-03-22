"use client"

import { startCheckout } from "@/lib/checkout"
import { Store, Smartphone, FolderOpen, Wrench, Zap } from "lucide-react"

const funcionalidades = [
  {
    icon: Store,
    title: "Controle de múltiplas lojas",
    description: "Veja o desempenho de cada loja mês a mês. Acompanhe quanto cada unidade faturou no mês e veja o ticket médio de cada loja. Compare os resultados e entenda qual está performando melhor — sem misturar informações.",
  },
  {
    icon: Smartphone,
    title: "Cliente acompanha o serviço",
    description: "Assim que a ordem de serviço é criada, o sistema gera automaticamente um link para o cliente. Ele acompanha status, andamento e informações sem precisar te chamar no WhatsApp.",
  },
  {
    icon: FolderOpen,
    title: "Informações centralizadas",
    description: "Tudo fica salvo dentro do sistema: cliente, aparelho, serviço e histórico. Você não depende mais de papel, memória ou mensagens perdidas.",
  },
  {
    icon: Wrench,
    title: "Controle das ordens de serviço",
    description: "Cada aparelho fica organizado por etapa. Você sabe exatamente em que fase está, sem se perder no dia a dia.",
  },
  {
    icon: Zap,
    title: "Orçamento automático em segundos",
    description: "Gere um orçamento profissional com poucos cliques e envie direto para o cliente.",
  },
]

export function FeaturesShowcase() {
  return (
    <section id="veja-na-pratica" className="relative bg-gradient-to-b from-secondary/30 to-background py-20 lg:py-28">
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Veja na prática
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Conheça as funcionalidades do sistema
          </h2>
        </div>

        {/* Layout 2 colunas Desktop / Stack Mobile */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* COLUNA ESQUERDA - Vídeo */}
          <div className="w-full lg:w-1/2">
            {/* Texto acima do vídeo */}
            <p className="text-center text-lg font-semibold text-foreground mb-4">
              Orçamento em menos de 30 segundos
            </p>
            
            {/* Vídeo */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  src="https://player.vimeo.com/video/1175863288?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="Demonstração OS Digital+"
                />
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA - Conteúdo */}
          <div className="w-full lg:w-1/2">
            {/* Título principal */}
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Tudo que você viu como <span className="text-red-500 font-bold">problema</span> aqui já está <span className="text-green-500 font-bold inline-block animate-pulse scale-110 font-['Raleway'] ml-6">RESOLVIDO</span>
            </h3>

            {/* Blocos de funcionalidades */}
            <div className="space-y-6">
              {funcionalidades.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/80"
                >
                  {/* Ícone */}
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  
                  {/* Texto */}
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-start gap-2">
              {/* Botão Principal */}
              <button
                onClick={() => window.open("https://app.osdigitalplus.com.br/auth/login", "_blank")}
                className="w-full sm:w-auto px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-green-600/25 transition-all duration-300 hover:scale-[1.02]"
              >
                Criar meu primeiro orçamento agora
              </button>

              {/* Texto abaixo do botão */}
              <p className="text-xs text-muted-foreground font-['Montserrat']">
                Faça seu teste grátis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
