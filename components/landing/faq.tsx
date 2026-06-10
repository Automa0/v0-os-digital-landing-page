"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const faqs = [
  {
    question: "O que é o OS Digital+?",
    answer:
      "É um sistema completo para assistências organizarem ordens de serviço, clientes, financeiro, vendas (PDV) e toda a operação em um só lugar.",
  },
  {
    question: "O sistema funciona para outros tipos de assistência além de celular?",
    answer:
      "Com certeza. O OS Digital+ é flexível e atende assistências de diversos ramos, como eletrônicos, eletrodomésticos, informática, ar-condicionado, games e muito mais.",
  },
  {
    question: "Tem PDV no sistema?",
    answer:
      "Sim, todos os nossos planos incluem um Ponto de Venda (PDV) completo e integrado para você vender produtos e serviços.",
  },
  {
    question: "Posso controlar as permissões dos meus funcionários?",
    answer:
      "Sim, você pode definir permissões granulares, controlando o que cada membro da equipe pode acessar e fazer no sistema.",
  },
  {
    question: "Como funciona a comissão de vendedor?",
    answer:
      "Você pode definir uma porcentagem de comissão por membro da equipe. O sistema calcula e atribui a comissão automaticamente a cada venda no PDV.",
  },
  {
    question: "Tem termo de garantia digital?",
    answer:
      "Sim, você pode gerar Termos de Garantia em PDF, com validade customizável, que ficam atrelados à Ordem de Serviço.",
  },
  {
    question: "Posso importar dados de um sistema antigo?",
    answer:
      "Sim, oferecemos a importação de dados de clientes e ordens de serviço através de planilhas CSV para facilitar sua migração.",
  },
  {
    question: "Posso imprimir cupom em impressora térmica?",
    answer: "Sim, o sistema gera cupons não fiscais formatados para impressoras térmicas de 80mm.",
  },
  {
    question: "Funciona para quem trabalha sozinho?",
    answer:
      "Sim. O sistema foi pensado tanto para quem trabalha sozinho quanto para quem tem equipe ou loja.",
  },
  {
    question: "Posso gerenciar mais de uma loja?",
    answer: "Sim. Plano Controle: até 2 lojas. Plano Comando: até 4 lojas.",
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
    answer:
      "Sim. Utilizamos criptografia e infraestrutura segura para proteger todas as informações.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "O suporte é feito via WhatsApp, com atendimento rápido para te ajudar no que precisar.",
  },
]

export function LandingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-[#05060B] px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal className="text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
            Tudo o que você precisa saber antes de começar.
          </p>
        </ScrollReveal>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <ScrollReveal key={faq.question} delay={Math.min(index * 50, 250)}>
              <div
                className={`rounded-xl border transition-colors ${
                  open
                    ? "border-blue-500/40 bg-[#0B0F1E]"
                    : "border-white/[0.07] bg-[#0B0D14] hover:border-white/15"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={open}
                >
                  <span className="text-sm font-semibold text-white sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-blue-400 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">{faq.answer}</p>
                )}
              </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
