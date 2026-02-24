import Image from "next/image"
import { ShieldCheck } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-background to-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* About */}
          <div className="flex-1">
            <Image
              src="/images/logo.png"
              alt="OSDigitalPlus"
              width={220}
              height={80}
              className="h-16 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Sistema completo de ordens de serviço para assistências técnicas.
              O OSDigitalPlus ajuda você a organizar, acompanhar e entregar com profissionalismo.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-border bg-secondary/50 px-3 py-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-foreground">Empresa Registrada</span>
            </div>
          </div>

          {/* Plans links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Planos</h4>
            <ul className="mt-4 space-y-2">
              {["Gratuito", "Mensal", "Semestral", "Anual"].map((plan) => (
                <li key={plan}>
                  <a
                    href="#planos"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {plan}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Contato</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://wa.me/5521996595469?text=Ol%C3%A1,%20quero%20saber%20sobre%20o%20OSDigitalPlus"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">contato@osdigitalplus.com.br</span>
              </li>
            </ul>
          </div>

          {/* Automatize 360 Integration */}
          <div className="flex flex-col items-start lg:items-end">
            <a
              href="https://automatize360.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-105 lg:items-end"
            >
              <span className="text-xs font-medium text-gray-600">Integrado com</span>
              <Image
                src="/images/automatize360-logo.png"
                alt="Automatize 360"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-center text-xs text-muted-foreground sm:text-left">
              {`© ${new Date().getFullYear()} OSDigitalPlus. Todos os direitos reservados.`}
            </p>
            
            {/* Final CTA */}
            <a
              href="https://app.osdigitalplus.com.br"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:opacity-90"
            >
              Criar Conta Grátis Agora
            </a>

            {/* Automatize 360 Integration */}
            <a
              href="https://automatize360.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 transition-transform duration-200 hover:scale-105"
            >
              <span className="text-xs font-medium text-gray-600">Integrado com</span>
              <Image
                src="/images/automatize360-logo.png"
                alt="Automatize 360"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
