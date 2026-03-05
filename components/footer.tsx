import Image from "next/image"
import { ShieldCheck, Instagram, MessageCircle, Linkedin, Music2 } from "lucide-react"

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
              Sistema completo de gestão para assistências técnicas, lojas físicas e autônomos.
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
              {["Básico", "Pro", "Master"].map((plan) => (
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
                "Dashboard Empresarial",
                "Controle de Caixa",
                "Multiloja",
                "IA Integrada",
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
              <span className="text-xs font-medium text-gray-500">Integrado com</span>
              <Image
                src="/images/automatize360-logo.png"
                alt="Automatize 360"
                width={112}
                height={28}
                className="h-7 w-auto"
              />
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
