import Image from "next/image"
import { Instagram, Linkedin, MessageCircle, Music2, ShieldCheck } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/5521996595469?text=Ol%C3%A1,%20quero%20saber%20sobre%20o%20OSDigitalPlus"

const pageLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Recursos", href: "#funcionalidades" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Entrar", href: "https://app.osdigitalplus.com.br" },
]

const legalLinks = [
  { href: "/legal/termos-de-uso", label: "Termos de Uso" },
  { href: "/legal/politica-privacidade", label: "Política de Privacidade" },
  { href: "/legal/politica-reembolso", label: "Política de Reembolso" },
  { href: "/legal/politica-cancelamento", label: "Política de Cancelamento" },
  { href: "/legal/politica-seguranca", label: "Política de Segurança" },
  { href: "/legal/politica-cookies", label: "Política de Cookies" },
  { href: "/legal/acordo-dpa", label: "Acordo de Dados (DPA)" },
  { href: "/legal/uso-aceitavel", label: "Uso Aceitável" },
]

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/osdigitalplus?igsh=MTEzMHdvZm44MmRxYQ==",
    icon: Instagram,
  },
  { label: "TikTok", href: "https://www.tiktok.com/@osdigitalplus", icon: Music2 },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/osdigitalplus", icon: Linkedin },
  { label: "WhatsApp", href: WHATSAPP_URL, icon: MessageCircle },
]

export function LandingFooter() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#05060B]">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <Image
              src="/images/logo-transparent.png"
              alt="OS Digital+"
              width={180}
              height={52}
              className="h-11 w-auto"
            />
            <h4 className="mt-5 font-heading text-xl font-bold leading-snug text-white text-balance">
              Transforme sua assistência com o OS Digital+
            </h4>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
              Sistema completo de gestão para assistências, lojas físicas e autônomos.
              Organize, controle e cresça sem complicação.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5">
              <ShieldCheck className="h-4 w-4 text-blue-400" />
              <span className="text-xs font-medium text-slate-300">Dados protegidos</span>
            </div>
          </div>

          {/* Páginas */}
          <div>
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Páginas principais
            </h5>
            <ul className="mt-4 space-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Legal
            </h5>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Contato
            </h5>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="break-all text-sm text-slate-400">
                  contato@osdigitalplus.com.br
                </span>
              </li>
            </ul>

            <div className="mt-6 flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:border-blue-500/50 hover:bg-blue-600 hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <a
              href="https://automatize360.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-xs text-slate-500 transition-colors hover:text-slate-300"
            >
              Integrado com <span className="font-bold text-slate-300">Automatize 360</span>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.05] pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            {`© ${new Date().getFullYear()} OSDigitalPlus. Todos os direitos reservados.`}
          </p>
          <p className="text-xs text-slate-600">Feito para assistências de todo o Brasil 🇧🇷</p>
        </div>
      </div>
    </footer>
  )
}
