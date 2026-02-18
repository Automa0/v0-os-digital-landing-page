"use client"

import { useState } from "react"
import { ChevronDown, ArrowRight } from "lucide-react"

const LOGIN_URL = "https://app.osdigitalplus.com.br"

const faqs = [
  {
    question: "O sistema funciona no celular?",
    answer:
      "Sim! O OSDigitalPlus e 100% responsivo e funciona perfeitamente em smartphones, tablets e computadores. Ideal para uso no balcao, em campo ou no atendimento a domicilio.",
  },
  {
    question: "O plano gratuito e realmente sem custo?",
    answer:
      "Sim, voce pode criar sua conta e utilizar o plano gratuito sem nenhum custo e sem precisar informar cartao de credito. O plano gratuito inclui funcionalidades essenciais para voce conhecer o sistema.",
  },
  {
    question: "Posso cancelar minha assinatura a qualquer momento?",
    answer:
      "Claro! Voce pode cancelar sua assinatura quando quiser, sem taxas ou multas. Seu acesso continua ativo ate o final do periodo ja pago.",
  },
  {
    question: "Meus dados e os dos meus clientes estao seguros?",
    answer:
      "Sim. Utilizamos criptografia e servidores seguros para proteger todas as informacoes. Seus dados nao sao compartilhados com terceiros e backups sao realizados automaticamente.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Oferecemos suporte via WhatsApp para todos os planos. Clientes do plano Anual contam com prioridade no atendimento. Tambem disponibilizamos tutoriais e documentacao online.",
  },
  {
    question: "Quantas ordens posso criar?",
    answer:
      "O plano Gratuito permite ate 10 ordens no total. O Mensal ate 30 por mes, o Semestral ate 80 por mes, e o Anual oferece ordens ilimitadas. Voce pode mudar de plano a qualquer momento.",
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
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tire suas duvidas sobre o OSDigitalPlus.
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

        {/* Final CTA */}
        <div className="mt-16 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-10 text-center">
          <h3 className="font-heading text-xl font-bold text-foreground">
            Pronto para profissionalizar sua assistencia?
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Crie sua conta gratuita e descubra como o OSDigitalPlus pode transformar a gestao do seu negocio.
          </p>
          <a
            href={LOGIN_URL}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:opacity-90"
          >
            Criar Minha Conta Agora
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
