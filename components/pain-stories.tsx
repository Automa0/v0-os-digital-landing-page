"use client"

const painCards = [
  {
    title: "Clientes cobrando o tempo todo",
    description: "Seu WhatsApp não para.\nClientes perguntando status, valor e prazo o dia inteiro.",
    highlight: "Você responde… mas continua sem controle.",
  },
  {
    title: "Você não sabe quanto realmente entrou",
    description: "No fim do dia, você tenta lembrar:\nquem pagou, quanto entrou e o que ficou pendente.",
    highlight: "Tudo misturado. Nenhum controle real.",
  },
  {
    title: "Falta de visão da sua própria empresa",
    description: "Você não sabe qual loja performou melhor,\nnem quais serviços ainda estão em aberto.",
    highlight: "Decisões no escuro todos os dias.",
  },
  {
    title: "Você perde clientes por demora",
    description: "O cliente pede orçamento…\nvocê deixa pra depois…\ne quando vê, ele já fechou com outro.",
    highlight: "Venda perdida por falta de agilidade.",
  },
]

export function PainStories() {
  return (
    <section className="relative overflow-hidden py-0 bg-white">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
        {/* Desktop Grid - 2x2 */}
        <div className="hidden md:grid grid-cols-2 gap-6 lg:gap-8 mb-12">
          {painCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed whitespace-pre-line">
                {card.description}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 italic">
                {card.highlight}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel - Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scroll-smooth">
            {painCards.map((card) => (
              <div
                key={card.title}
                className="flex-shrink-0 w-full sm:w-80 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm snap-start transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed whitespace-pre-line">
                  {card.description}
                </p>
                <p className="text-xs text-gray-500 italic">
                  {card.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-12 sm:mt-16 text-center pt-8 sm:pt-12 border-t border-gray-300">
          <p className="text-base sm:text-lg text-gray-700">
            Se você se identificou com isso, sua assistência não tem <span className="text-blue-600 font-bold">falta de clientes</span>… tem <span className="text-blue-600 font-bold">falta de controle.</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        /* Customizar scrollbar do carrossel mobile */
        .overflow-x-auto::-webkit-scrollbar {
          height: 4px;
        }

        .overflow-x-auto::-webkit-scrollbar-track {
          background: #f0f0f0;
          border-radius: 2px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: #cbd5e0;
          border-radius: 2px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: #a0aec0;
        }
      `}</style>
    </section>
  )
}
