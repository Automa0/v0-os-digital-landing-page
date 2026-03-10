import { NextRequest, NextResponse } from "next/server"
import { getSupabaseAdmin } from "@/lib/supabase/admin"
import Stripe from "stripe"

export async function POST(req: NextRequest) {
  console.log("[v0] register API called")
  
  try {
    const { session_id, password } = await req.json()
    console.log("[v0] session_id:", session_id, "password length:", password?.length)

    if (!session_id || !password) {
      console.error("[v0] Missing session_id or password")
      return NextResponse.json({ error: "Dados obrigatórios ausentes" }, { status: 400 })
    }

    if (password.length < 8) {
      console.error("[v0] Password too short")
      return NextResponse.json({ error: "A senha deve ter pelo menos 8 caracteres" }, { status: 400 })
    }

    // 1. Verify Stripe session
    console.log("[v0] Initializing Stripe client")
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("[v0] STRIPE_SECRET_KEY not set")
      return NextResponse.json({ error: "Configuração do Stripe ausente" }, { status: 500 })
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    
    console.log("[v0] Retrieving Stripe session:", session_id)
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["subscription", "customer"],
    })
    
    console.log("[v0] Stripe session payment_status:", session.payment_status)

    if (session.payment_status !== "paid") {
      console.error("[v0] Payment not confirmed, status:", session.payment_status)
      return NextResponse.json({ error: "Pagamento não confirmado" }, { status: 402 })
    }

    const email = session.customer_details?.email
    console.log("[v0] Email from Stripe:", email)
    
    if (!email) {
      console.error("[v0] No email found in session.customer_details")
      return NextResponse.json({ error: "E-mail não encontrado no pagamento" }, { status: 400 })
    }

    const customer = session.customer as import("stripe").Stripe.Customer | null
    const subscription = session.subscription as import("stripe").Stripe.Subscription | null

    const stripe_customer_id = typeof session.customer === "string" ? session.customer : customer?.id || ""
    const subscription_id = typeof session.subscription === "string" ? session.subscription : subscription?.id || ""
    const price_id = session.metadata?.price_id || ""
    const plan_name = session.metadata?.plan_name || ""

    console.log("[v0] Plan info - name:", plan_name, "price_id:", price_id, "customer_id:", stripe_customer_id)

    // 2. Create user in Supabase (using admin client to skip email confirmation)
    console.log("[v0] Getting Supabase admin client")
    const supabaseAdmin = getSupabaseAdmin()
    
    console.log("[v0] Creating user with email:", email)
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        plan: plan_name,
        price_id,
        stripe_customer_id,
        subscription_id,
      },
    })

    if (error) {
      console.error("[v0] Supabase createUser error:", error)
      return NextResponse.json({ error: `Erro no Supabase: ${error.message}` }, { status: 400 })
    }

    console.log("[v0] User created successfully:", data.user?.id)
    return NextResponse.json({ success: true, user_id: data.user?.id })
  } catch (error) {
    console.error("[v0] Register error (catch):", error)
    const errorMsg = error instanceof Error ? error.message : String(error)
    return NextResponse.json(
      { error: `Erro interno: ${errorMsg}` },
      { status: 500 }
    )
  }
}
