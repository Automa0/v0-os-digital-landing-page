import { Shield, Lock, Key } from "lucide-react"

export function SecuritySection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Seus dados estão seguros
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Infraestrutura segura e confiável para proteger seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-xl border border-border bg-card p-8 text-center hover:shadow-lg transition-shadow">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">Dados protegidos</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Seus dados são criptografados e protegidos com os mais altos padrões de segurança.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-border bg-card p-8 text-center hover:shadow-lg transition-shadow">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">Sistema confiável</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Infraestrutura segura e redundante para garantir disponibilidade do seu negócio.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-border bg-card p-8 text-center hover:shadow-lg transition-shadow">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Key className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">Acesso protegido</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Login seguro e autenticação para proteger sua conta e dados sensíveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
