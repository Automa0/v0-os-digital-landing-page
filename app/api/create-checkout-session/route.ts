import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

// Map price IDs to plan names for validation
const VALID_PRICE_IDS: Record<string, string> = {
  // Básico
  price_1T7Qsd85UXhVWhVP7ay2FLXj: "Básico Mensal",
  price_1T7M1Z85UXhVWhVPPUUICbSI: "Básico Semestral/Anual",
  // Pro
  price_1T7M4985UXhVWhVPn6O8mBfT: "Pro",
  // Master
  price_1T7M4g85UXhVWhVPtVVZnvzp: "Master",
}

export async function POST(req: NextRequest) {
  console.log("[v0] create-checkout-session called")
  
  // Check if STRIPE_SECRET_KEY is set
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error("[v0] STRIPE_SECRET_KEY is not set")
    return NextResponse.json(
      { error: "Configuração do Stripe ausente. STRIPE_SECRET_KEY não está definida." },
      { status: 500 }
    )
  }

  try {
    const body = await req.json()
    const { price_id } = body
    console.log("[v0] Received price_id:", price_id)

    if (!price_id) {
      console.error("[v0] No price_id provided")
      return NextResponse.json({ error: "Price ID não fornecido" }, { status: 400 })
    }

    if (!VALID_PRICE_IDS[price_id]) {
      console.error("[v0] Invalid price_id:", price_id, "Valid IDs:", Object.keys(VALID_PRICE_IDS))
      return NextResponse.json({ error: `Price ID inválido: ${price_id}` }, { status: 400 })
    }

    // Initialize Stripe client inside the request handler
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || req.headers.get("origin") || "https://osdigitalplus.com.br"
    console.log("[v0] Using base URL:", baseUrl)

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: price_id,
          quantity: 1,
        },
      ],
      billing_address_collection: "required",
      success_url: `${baseUrl}/criar-conta?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: baseUrl,
      metadata: {
        plan_name: VALID_PRICE_IDS[price_id],
        price_id,
      },
    })

    console.log("[v0] Stripe session created:", session.id, "URL:", session.url)
    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("[v0] Stripe checkout session error:", error)
    
    // Return detailed error for debugging
    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido"
    const stripeError = error as { type?: string; code?: string; statusCode?: number }
    
    return NextResponse.json(
      { 
        error: `Erro ao criar sessão: ${errorMessage}`,
        details: {
          type: stripeError.type,
          code: stripeError.code,
          statusCode: stripeError.statusCode
        }
      },
      { status: 500 }
    )
  }
}
