"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "TechFix Assistencia",
    text: "Antes eu anotava tudo no papel. Com o OS Digital, profissionalizei meu atendimento e meus clientes perceberam a diferenca.",
    initials: "CM",
  },
  {
    name: "Fernanda Oliveira",
    role: "CelularTop Reparos",
    text: "O link do cliente foi o que mais me surpreendeu. Meus clientes param de ligar toda hora perguntando do status!",
    initials: "FO",
  },
  {
    name: "Ricardo Alves",
    role: "Info Service",
    text: "Gero PDF com assinatura em segundos. Parece que tenho um sistema de empresa grande, e pago muito pouco por isso.",
    initials: "RA",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section id="depoimentos" className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Quem usa, recomenda
          </h2>
        </div>

        <div className="mt-14 flex flex-col items-center gap-14 lg:flex-row lg:items-start lg:gap-16">
          {/* Carousel */}
          <div className="flex-1 w-full max-w-xl">
            <div className="relative rounded-xl border border-border bg-card p-8 shadow-sm">
              <Quote className="mb-4 h-8 w-8 text-primary/20" />
              <p className="text-lg leading-relaxed text-foreground">
                {`"${testimonials[current].text}"`}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {testimonials[current].initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {testimonials[current].name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === current ? "w-6 bg-primary" : "w-2 bg-border"
                    }`}
                    aria-label={`Ir para depoimento ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Proximo depoimento"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* WhatsApp snapshot */}
          <div className="w-full max-w-sm">
            <WhatsAppSnapshot />
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppSnapshot() {
  return (
    <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]/20 text-xs font-bold text-[#dcf8c6]">
          JS
        </div>
        <div>
          <div className="text-sm font-medium text-[#e9edef]">Joao Silva</div>
          <div className="text-xs text-[#e9edef]/60">online</div>
        </div>
      </div>

      {/* Chat body */}
      <div className="space-y-3 bg-[#ECE5DD] p-4">
        {/* Client message */}
        <div className="ml-0 mr-12 max-w-[85%]">
          <div className="rounded-lg rounded-tl-none bg-[#ffffff] px-3 py-2 shadow-sm">
            <p className="text-sm text-[#303030]">
              Acompanhar pelo link foi otimo — meu aparelho foi reparado no prazo. Recomendo pela organizacao.
            </p>
            <span className="mt-1 block text-right text-xs text-[#667781]">14:32</span>
          </div>
        </div>

        {/* Tech message */}
        <div className="ml-12 mr-0 max-w-[85%] self-end ml-auto">
          <div className="rounded-lg rounded-tr-none bg-[#dcf8c6] px-3 py-2 shadow-sm">
            <p className="text-sm text-[#303030]">
              Obrigado! Estamos a disposicao.
            </p>
            <span className="mt-1 block text-right text-xs text-[#667781]">14:35</span>
          </div>
        </div>
      </div>
    </div>
  )
}
