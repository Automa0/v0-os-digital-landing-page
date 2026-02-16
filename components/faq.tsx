"use client"

import { useState } from "react"
import { ChevronDown, ArrowRight } from "lucide-react"

const LOGIN_URL = "https://v0-os-digital-app.vercel.app/auth/login"

const faqs = [
  {
    question: "O sistema funciona no celular?",
    answer:
      "Sim! O OS Digital e totalmente responsivo e funciona perfeitamente em smartphones, tablets e computadores. Ideal para uso no balcao ou em campo.",
  },
  {
    question: "O periodo de teste e gratuito mesmo?",
    answer:
      "Sim, voce pode criar sua conta e usar o plano gratuito sem nenhum custo e sem cartao de credito. O plano gratuito inclui funcionalidades essenciais para voce testar o sistema.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Claro! Voce pode cancelar sua assinatura a qualquer momento sem taxas ou multas. Seu acesso permanece ativo ate o final do periodo pago.",
  },
  {
    question: "Meus dados estao seguros?",
    answer:
      "Sim. Utilizamos criptografia e servidores seguros para proteger todas as informacoes dos seus clientes e da sua empresa. Seus dados nao sao compartilhados com terceiros.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Oferecemos suporte via WhatsApp para todos os planos. Clientes do plano Anual tem prioridade no atendimento. Tambem disponibilizamos tutoriais e documentacao online.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tire suas duvidas sobre o OS Digital.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card overflow-hidden transition-shadow hover:shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm font-medium text-foreground pr-4">{faq.question}</span>
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
        <div className="mt-16 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h3 className="font-heading text-xl font-bold text-foreground">
            Pronto para profissionalizar sua assistencia?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Teste gratis por tempo limitado.
          </p>
          <a
            href={LOGIN_URL}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Criar Minha Conta Agora
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
