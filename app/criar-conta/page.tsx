"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import Image from "next/image"
import { CheckCircle2, Eye, EyeOff, Loader2 } from "lucide-react"

type Status = "loading" | "ready" | "submitting" | "error" | "invalid"

export default function CriarContaPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const sessionId = searchParams.get("session_id")

  const [status, setStatus] = useState<Status>("loading")
  const [email, setEmail] = useState("")
  const [planName, setPlanName] = useState("")
  const [priceId, setPriceId] = useState("")
  const [stripeCustomerId, setStripeCustomerId] = useState("")
  const [subscriptionId, setSubscriptionId] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [showPw, setShowPw] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    if (!sessionId) {
      setStatus("invalid")
      return
    }

    async function verifySession() {
      try {
        const res = await fetch(`/api/verify-checkout-session?session_id=${sessionId}`)
        const data = await res.json()

        if (!res.ok || data.payment_status !== "paid") {
          setStatus("invalid")
          return
        }

        setEmail(data.email)
        setPlanName(data.plan_name)
        setPriceId(data.price_id)
        setStripeCustomerId(data.stripe_customer_id)
        setSubscriptionId(data.subscription_id)
        setStatus("ready")
      } catch {
        setStatus("invalid")
      }
    }

    verifySession()
  }, [sessionId])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErrorMsg("")

    if (password.length < 8) {
      setErrorMsg("A senha deve ter pelo menos 8 caracteres.")
      return
    }
    if (password !== confirm) {
      setErrorMsg("As senhas não coincidem.")
      return
    }

    setStatus("submitting")

    try {
      const supabase = createClient()
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            plan: planName,
            price_id: priceId,
            stripe_customer_id: stripeCustomerId,
            subscription_id: subscriptionId,
          },
        },
      })

      if (error) {
        setErrorMsg(error.message)
        setStatus("ready")
        return
      }

      router.push("https://app.osdigitalplus.com.br/dashboard")
    } catch {
      setErrorMsg("Erro inesperado. Tente novamente.")
      setStatus("ready")
    }
  }

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Verificando pagamento...</p>
        </div>
      </div>
    )
  }

  if (status === "invalid") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground">
            Pagamento não encontrado
          </h1>
          <p className="mt-3 text-muted-foreground">
            Não foi possível verificar seu pagamento. Se você acabou de assinar, aguarde alguns segundos e recarregue a página.
          </p>
          <a
            href="/"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Voltar para a página inicial
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-secondary/30 to-background px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <Image
            src="/images/logo.png"
            alt="OSDigitalPlus"
            width={200}
            height={70}
            className="h-14 w-auto"
          />

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            <CheckCircle2 className="h-4 w-4" />
            Pagamento confirmado!
          </div>

          <h1 className="mt-4 font-heading text-2xl font-bold text-foreground">
            Crie sua senha para acessar o sistema
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Seu plano <span className="font-semibold text-primary">{planName}</span> está ativo. Defina uma senha para entrar.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-8 shadow-sm"
        >
          {/* Email - readonly */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              E-mail
            </label>
            <input
              type="email"
              value={email}
              readOnly
              className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-muted-foreground"
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Senha
            </label>
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo 8 caracteres"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Confirm password */}
          <div className="mt-4">
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Confirmar senha
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Repita a senha"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {errorMsg && (
            <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:opacity-90 disabled:opacity-60"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Criando conta...
              </>
            ) : (
              "Entrar no sistema"
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Problemas? Fale com nosso suporte:{" "}
          <a
            href="https://wa.me/5521996595469"
            className="font-medium text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </p>
      </div>
    </div>
  )
}
