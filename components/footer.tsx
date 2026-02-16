import Image from "next/image"
import { ShieldCheck } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* About */}
          <div className="flex-1">
            <Image
              src="/images/logo.png"
              alt="OS Digital"
              width={220}
              height={80}
              className="h-16 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Sistema completo de ordens de servico para assistencias tecnicas.
              Organize, acompanhe e entregue com profissionalismo.
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
                  Politica de Privacidade
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
                  href="https://wa.me/5521996595469?text=Ol%C3%A1,%20quero%20saber%20sobre%20o%20OS%20Digital"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">contato@osdigital.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            {`© ${new Date().getFullYear()} OS Digital. Todos os direitos reservados.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
