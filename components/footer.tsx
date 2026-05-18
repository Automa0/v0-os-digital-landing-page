import Image from "next/image"
import { ShieldCheck, Instagram, MessageCircle, Linkedin, Music2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-background to-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:flex lg:flex-row lg:gap-16">
          {/* About */}
          <div className="col-span-2 lg:col-span-1 flex-1">
            <Image
              src="/images/logo.png"
              alt="OSDigitalPlus"
              width={220}
              height={80}
              className="h-16 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Sistema completo de gestão para assistências, lojas físicas e autônomos.
              Organize, controle e cresça sem complicação.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-border bg-secondary/50 px-3 py-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-foreground">Dados protegidos</span>
            </div>
          </div>

          {/* Plans links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Planos</h4>
            <ul className="mt-4 space-y-2">
              {["Ação", "Controle", "Comando"].map((plan) => (
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

          {/* Features */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Funcionalidades</h4>
            <ul className="mt-4 space-y-2">
              {[
                "Ordens de Serviço",
                "PDV (Ponto de Venda)",
                "Dashboard Empresarial",
                "Controle de Caixa",
                "Comissão de Vendedores",
                "Garantia Digital",
                "IA Integrada",
                "Multiloja",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#funcionalidades"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="mt-4 space-y-2">
              {[
                { href: "/legal/termos-de-uso", label: "Termos de Uso" },
                { href: "/legal/politica-privacidade", label: "Política de Privacidade" },
                { href: "/legal/politica-reembolso", label: "Política de Reembolso" },
                { href: "/legal/politica-cancelamento", label: "Política de Cancelamento" },
                { href: "/legal/politica-seguranca", label: "Política de Segurança" },
                { href: "/legal/politica-cookies", label: "Política de Cookies" },
                { href: "/legal/acordo-dpa", label: "Acordo de Dados (DPA)" },
                { href: "/legal/uso-aceitavel", label: "Uso Aceitável" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} target="_blank" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Automatize */}
          <div className="flex flex-col gap-6">
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

            {/* Automatize 360 */}
            <a
              href="https://automatize360.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start gap-1.5 transition-transform duration-200 hover:scale-105"
            >
              <span className="text-xs font-medium text-muted-foreground">Integrado com</span>
              <span className="text-sm font-bold text-foreground">Automatize 360</span>
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="mb-10 mt-12 flex justify-center gap-4">
          <a
            href="https://www.instagram.com/osdigitalplus?igsh=MTEzMHdvZm44MmRxYQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.tiktok.com/@osdigitalplus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
            aria-label="TikTok"
          >
            <Music2 className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/osdigitalplus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://wa.me/5521996595469?text=Ol%C3%A1,%20quero%20saber%20sobre%20o%20OSDigitalPlus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            {`© ${new Date().getFullYear()} OSDigitalPlus. Todos os direitos reservados.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
