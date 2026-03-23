"use client"

import { ArrowRight, Check } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
      {/* Fundo gradiente moderno */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0B1C2C 0%, #0E5EFF 45%, #6C63FF 100%)'
        }}
      />

      {/* Glow orbs */}
      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-white/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-300/20 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
        {/* Título principal com destaque em amarelo */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance leading-tight">
          Vamos implementar <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 blur-xl opacity-40" />
            <span className="relative bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 bg-clip-text text-transparent" style={{ textShadow: '0 0 30px rgba(255, 214, 0, 0.5)' }}>
              esse sistema
            </span>
          </span> na sua assistência?
        </h2>

        {/* Subtítulo otimizado para conversão */}
        <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg text-white/90 leading-relaxed">
          Crie sua conta gratuita, comece a organizar suas ordens, clientes e financeiro e pare de perder dinheiro hoje mesmo.
        </p>

        {/* Prova / Segurança - com melhor contraste e glass effect */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-2 flex-wrap">
          <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20 hover:bg-white/15 transition-all">
            <Check className="h-5 w-5 text-emerald-300 flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium text-white">Sem compromisso</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20 hover:bg-white/15 transition-all">
            <Check className="h-5 w-5 text-emerald-300 flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium text-white">Sem cartão de crédito</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20 hover:bg-white/15 transition-all">
            <Check className="h-5 w-5 text-emerald-300 flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium text-white">Acesso imediato</span>
          </div>
        </div>

        {/* Botões */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-center px-2">
          <a
            href="https://app.osdigitalplus.com.br/auth/login"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold text-blue-600 shadow-2xl shadow-white/20 transition-all hover:bg-white/95 hover:shadow-3xl hover:shadow-white/30 hover:scale-105 w-full sm:w-auto"
          >
            Começar grátis agora
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#planos"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold text-white transition-all hover:bg-white/15 hover:border-white/80 w-full sm:w-auto"
          >
            Ver planos
          </a>
        </div>

        {/* Bloco de Garantia - Glass effect melhorado */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-6 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md max-w-2xl mx-auto">
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            <span className="font-semibold text-white">Teste sem risco.</span> Você pode usar o sistema gratuitamente e cancelar quando quiser. Nada pedido além do seu email.
          </p>
        </div>

        {/* Micro Benefícios */}
        <div className="mt-10 sm:mt-14 space-y-2.5 max-w-2xl mx-auto px-2">
          <div className="flex items-center justify-center gap-3">
            <Check className="h-5 w-5 text-emerald-300 flex-shrink-0" />
            <span className="text-sm sm:text-base text-white/90">Organize suas ordens em minutos</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Check className="h-5 w-5 text-emerald-300 flex-shrink-0" />
            <span className="text-sm sm:text-base text-white/90">Tenha controle total do financeiro</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Check className="h-5 w-5 text-emerald-300 flex-shrink-0" />
            <span className="text-sm sm:text-base text-white/90">Pare de perder clientes por desorganização</span>
          </div>
        </div>
      </div>
    </section>
  )
}
