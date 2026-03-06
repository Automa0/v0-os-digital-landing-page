import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"

// Map price IDs to plan names for validation
const VALID_PRICE_IDS: Record<string, string> = {
  price_1T7Qsd85UXhVWhVP7ay2FLXj: "Básico Mensal",
  price_1T7M4985UXhVWhVPn6O8mBfT: "Pro Mensal",
  price_1T7M4g85UXhVWhVPtVVZnvzp: "Master Mensal",
}

export async function POST(req: NextRequest) {
  try {
    const { price_id } = await req.json()

    if (!price_id || !VALID_PRICE_IDS[price_id]) {
      return NextResponse.json({ error: "Price ID inválido" }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: price_id,
          quantity: 1,
        },
      ],
      billing_address_collection: "required",
      customer_email: undefined, // will be collected by Stripe
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://osdigitalplus.com.br"}/criar-conta?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://osdigitalplus.com.br"}`,
      metadata: {
        plan_name: VALID_PRICE_IDS[price_id],
        price_id,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("[v0] Stripe checkout session error:", error)
    return NextResponse.json(
      { error: "Erro ao criar sessão de pagamento" },
      { status: 500 }
    )
  }
}
