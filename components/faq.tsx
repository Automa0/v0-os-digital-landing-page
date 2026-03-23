"use client"

import { useState } from "react"
import { ChevronDown, Zap } from "lucide-react"

const LOGIN_URL = "https://app.osdigitalplus.com.br"

const highlights = [
  {
    icon: Zap,
    title: "IA integrada que analisa sua assistência",
    description: "A inteligência artificial do OS Digital+ analisa seus dados em tempo real e te orienta sobre o que melhorar.",
    details: [
      "Quais serviços priorizar",
      "Onde você está perdendo dinheiro",
      "Como melhorar seu faturamento"
    ],
    badges: [
      { plan: "Pro", text: "IA com análise geral do negócio" },
      { plan: "Master", text: "IA avançada com análise por loja" }
    ],
    badge: "Em breve"
  }
]

const faqs = [
  {
    question: "O que é o OS Digital+?",
    answer: "É um sistema completo para assistências técnicas organizarem ordens de serviço, clientes, financeiro e toda operação em um só lugar.",
  },
  {
    question: "Funciona para quem trabalha sozinho?",
    answer: "Sim. O sistema foi pensado tanto para quem trabalha sozinho quanto para quem tem equipe ou loja.",
  },
  {
    question: "Posso gerenciar mais de uma loja?",
    answer: "Sim. Plano Pro: até 2 lojas. Plano Master: até 4 lojas.",
  },
  {
    question: "O sistema funciona no celular?",
    answer: "Sim. Você pode acessar pelo celular ou computador, de qualquer lugar.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim. Você pode cancelar quando quiser, sem fidelidade.",
  },
  {
    question: "Meus dados estão seguros?",
    answer: "Sim. Utilizamos criptografia e infraestrutura segura para proteger todas as informações.",
  },
  {
    question: "Como funciona o suporte?",
    answer: "O suporte é feito via WhatsApp, com atendimento rápido para te ajudar no que precisar.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-16 lg:py-28" style={{ background: 'linear-gradient(160deg, #0d1b2e 0%, #0f2340 50%, #0a1628 100%)' }}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-blue-400">
            FAQ e Novidades
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-balance leading-tight">
            Dúvidas? Conheça as <span className="text-blue-400">novidades</span> em breve
          </h2>
        </div>

        {/* Bloco de Novidades - card centralizado */}
        <div className="flex justify-center mb-16 lg:mb-20">
          {highlights.map((highlight, i) => {
            const Icon = highlight.icon
            return (
              <div
                key={i}
                className="group relative rounded-2xl border border-blue-400/30 bg-white/5 backdrop-blur-sm p-6 sm:p-8 transition-all hover:border-blue-400/60 hover:bg-white/8 max-w-lg w-full"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/40">
                    {highlight.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500/20 border border-blue-400/40">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight">
                  {highlight.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/70 mb-4 leading-relaxed">
                  {highlight.description}
                </p>

                {/* Details */}
                <ul className="space-y-2 mb-6">
                  {highlight.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-white/60">
                      <span className="text-emerald-400 font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Badges de Planos */}
                {highlight.badges && (
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    {highlight.badges.map((badgeItem, j) => (
                      <div key={j} className="text-xs">
                        <span className="font-semibold text-blue-300">{badgeItem.plan}:</span>
                        <span className="text-white/60 ml-2">{badgeItem.text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Divisor */}
        <div className="mb-14 lg:mb-16">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
        </div>

        {/* FAQ Tradicional */}
        <div>
          <h3 className="text-center text-xl sm:text-2xl font-bold text-white mb-10">
            Perguntas frequentes
          </h3>

          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-white/20"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="pr-4 text-sm sm:text-base font-medium text-white">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-blue-400 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="border-t border-white/10 px-5 sm:px-6 py-4">
                    <p className="text-sm leading-relaxed text-white/70">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
