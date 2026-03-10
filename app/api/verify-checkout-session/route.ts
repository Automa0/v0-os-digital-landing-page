import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

export async function GET(req: NextRequest) {
  console.log("[v0] verify-checkout-session API called")
  
  try {
    const sessionId = req.nextUrl.searchParams.get("session_id")
    console.log("[v0] sessionId:", sessionId)

    if (!sessionId) {
      console.error("[v0] No session_id provided")
      return NextResponse.json({ error: "session_id é obrigatório" }, { status: 400 })
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("[v0] STRIPE_SECRET_KEY not set")
      return NextResponse.json({ error: "Configuração do Stripe ausente" }, { status: 500 })
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    
    console.log("[v0] Retrieving Stripe session:", sessionId)
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["subscription", "customer"],
    })
    
    console.log("[v0] Session payment_status:", session.payment_status)
    console.log("[v0] Customer email:", session.customer_details?.email)

    if (session.payment_status !== "paid") {
      console.error("[v0] Payment not confirmed, status:", session.payment_status)
      return NextResponse.json(
        { error: "Pagamento não confirmado", payment_status: session.payment_status },
        { status: 402 }
      )
    }

    const subscription = session.subscription as import("stripe").Stripe.Subscription | null
    const customer = session.customer as import("stripe").Stripe.Customer | null

    const response = {
      payment_status: session.payment_status,
      email: session.customer_details?.email || customer?.email || "",
      plan_name: session.metadata?.plan_name || "",
      price_id: session.metadata?.price_id || "",
      stripe_customer_id: typeof session.customer === "string" ? session.customer : customer?.id || "",
      subscription_id: typeof session.subscription === "string" ? session.subscription : subscription?.id || "",
    }
    
    console.log("[v0] Returning verified session data:", response)
    return NextResponse.json(response)
  } catch (error) {
    console.error("[v0] Error verifying checkout session:", error)
    const errorMsg = error instanceof Error ? error.message : String(error)
    return NextResponse.json(
      { error: `Erro ao verificar: ${errorMsg}` },
      { status: 500 }
    )
  }
}
