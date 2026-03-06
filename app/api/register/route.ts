import { NextRequest, NextResponse } from "next/server"
import { getSupabaseAdmin } from "@/lib/supabase/admin"
import { stripe } from "@/lib/stripe"

export async function POST(req: NextRequest) {
  try {
    const { session_id, password } = await req.json()

    if (!session_id || !password) {
      return NextResponse.json({ error: "Dados obrigatórios ausentes" }, { status: 400 })
    }

    if (password.length < 8) {
      return NextResponse.json({ error: "A senha deve ter pelo menos 8 caracteres" }, { status: 400 })
    }

    // 1. Verify Stripe session
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["subscription", "customer"],
    })

    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Pagamento não confirmado" }, { status: 402 })
    }

    const email = session.customer_details?.email
    if (!email) {
      return NextResponse.json({ error: "E-mail não encontrado no pagamento" }, { status: 400 })
    }

    const customer = session.customer as import("stripe").Stripe.Customer | null
    const subscription = session.subscription as import("stripe").Stripe.Subscription | null

    const stripe_customer_id = typeof session.customer === "string" ? session.customer : customer?.id || ""
    const subscription_id = typeof session.subscription === "string" ? session.subscription : subscription?.id || ""
    const price_id = session.metadata?.price_id || ""
    const plan_name = session.metadata?.plan_name || ""

    // 2. Create user in Supabase (using admin client to skip email confirmation)
    const supabaseAdmin = getSupabaseAdmin()
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
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, user_id: data.user?.id })
  } catch (error) {
    console.error("[v0] Register error:", error)
    return NextResponse.json({ error: "Erro interno ao criar conta" }, { status: 500 })
  }
}
