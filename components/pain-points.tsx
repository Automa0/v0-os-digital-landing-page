"use client"

import {
  AlertCircle,
  MessageCircle,
  TrendingDown,
  Info,
  Store,
} from "lucide-react"

const pains = [
  {
    icon: AlertCircle,
    title: "Se perde nas ordens de serviço",
    description: "Você não sabe em que etapa cada aparelho está e acaba se enrolando no dia a dia",
  },
  {
    icon: MessageCircle,
    title: "Cliente fica te cobrando status toda hora",
    description: "Você precisa parar tudo várias vezes só pra responder mensagens e dar posição",
  },
  {
    icon: TrendingDown,
    title: "Não sabe quanto realmente está lucrando",
    description: "Falta clareza sobre entradas, saídas e o lucro real do mês",
  },
  {
    icon: Info,
    title: "Informações espalhadas no WhatsApp, papel ou anotações",
    description: "Dados importantes ficam perdidos e difíceis de encontrar quando você precisa",
  },
  {
    icon: Store,
    title: "Dificuldade de controlar mais de uma loja",
    description: "Fica difícil acompanhar tudo sem perder controle das operações",
  },
]

export function PainPoints() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Label - Realidade do dia a dia */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Realidade do dia a dia
          </p>
        </div>

        {/* Main Title */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 text-balance">
            Você ainda passa por isso na sua <span className="text-blue-600">assistência</span>?
          </h2>
        </div>

        {/* Grid of Problems */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {pains.map((pain, i) => {
            // Último card deve ser centralizado em desktop
            const isLastCard = i === pains.length - 1;
            const gridClass = isLastCard ? "md:col-span-2 md:w-1/2 md:mx-auto" : "";

            return (
              <div
                key={pain.title}
                className={`group relative animate-fade-in ${gridClass}`}
                style={{ animationDelay: `${i * 0.08}s`, animationDuration: '0.6s' }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  {/* Inner background com azul suave */}
                  <div className="absolute inset-0 rounded-2xl" style={{ backgroundColor: 'rgba(59,130,246,0.08)' }} />
                  
                  {/* Flex container para ícone e texto lado a lado */}
                  <div className="relative flex gap-4 items-start">
                    {/* Icon Container - alinhado ao topo */}
                    <div className="flex-shrink-0 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-200">
                      <pain.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 pt-0.5">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight mb-2">
                        {pain.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {pain.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
