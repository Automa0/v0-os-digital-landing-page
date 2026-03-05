"use client"

import { useState } from "react"
import { ChevronDown, ArrowRight } from "lucide-react"

const LOGIN_URL = "https://app.osdigitalplus.com.br"

const faqs = [
  {
    question: "O que é o OS Digital+?",
    answer:
      "O OS Digital+ é um sistema completo de gestão para assistências técnicas, lojas físicas e autônomos. Você organiza ordens de serviço, controla caixa e faturamento, acompanha métricas por loja e tem dashboard empresarial em tempo real — tudo sem precisar saber tecnologia.",
  },
  {
    question: "Funciona para quem trabalha sozinho?",
    answer:
      "Sim. O plano Básico foi feito exatamente para autônomos e técnicos que trabalham sozinhos. Você usa do celular, cria OS, envia link pro cliente e controla o caixa sem precisar de equipe.",
  },
  {
    question: "Posso gerenciar mais de uma loja?",
    answer:
      "Sim. O plano Pro suporta até 2 lojas e o Master até 7 lojas. O dono vê tudo em um painel único, com caixa separado por loja e métricas individuais de cada unidade.",
  },
  {
    question: "O que é a IA integrada?",
    answer:
      "A IA é um chat inteligente dentro do sistema disponível nos planos Pro e Master. Ela analisa seu faturamento, sugere melhorias e responde dúvidas do dono sobre o negócio.",
  },
  {
    question: "O sistema funciona no celular?",
    answer:
      "Sim. O OS Digital+ é 100% responsivo e funciona perfeitamente em smartphones, tablets e computadores. Ideal para uso no balcão, em campo ou no atendimento em domicílio.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim. Não há fidelidade. Você pode cancelar quando quiser, sem taxas ou multas. Seu acesso continua ativo até o final do período já pago.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "Sim. Utilizamos criptografia e servidores seguros para proteger todas as informações. Cada loja vê apenas seus próprios dados e backups são realizados automaticamente.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Oferecemos suporte via WhatsApp para todos os planos. Clientes do plano Master contam com suporte prioritário. Também disponibilizamos tutoriais e documentação online.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative bg-background py-20 lg:py-28">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            FAQ
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tire suas dúvidas sobre o OS Digital+.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 text-sm font-medium text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-border px-6 py-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
