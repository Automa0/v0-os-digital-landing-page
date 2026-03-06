import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"

export async function GET(req: NextRequest) {
  try {
    const sessionId = req.nextUrl.searchParams.get("session_id")

    if (!sessionId) {
      return NextResponse.json({ error: "session_id é obrigatório" }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["subscription", "customer"],
    })

    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Pagamento não confirmado", payment_status: session.payment_status },
        { status: 402 }
      )
    }

    const subscription = session.subscription as import("stripe").Stripe.Subscription | null
    const customer = session.customer as import("stripe").Stripe.Customer | null

    return NextResponse.json({
      payment_status: session.payment_status,
      email: session.customer_details?.email || customer?.email || "",
      plan_name: session.metadata?.plan_name || "",
      price_id: session.metadata?.price_id || "",
      stripe_customer_id: typeof session.customer === "string" ? session.customer : customer?.id || "",
      subscription_id: typeof session.subscription === "string" ? session.subscription : subscription?.id || "",
    })
  } catch (error) {
    console.error("[v0] Error verifying checkout session:", error)
    return NextResponse.json({ error: "Erro ao verificar sessão" }, { status: 500 })
  }
}
