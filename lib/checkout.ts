// Shared checkout handler for all CTA buttons
export async function startCheckout(plan: string, interval: string = "mensal") {
  try {
    const response = await fetch("https://app.osdigitalplus.com.br/api/external-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        plan: plan,
        interval: interval
      })
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert(data.error || "Erro ao iniciar pagamento. Tente novamente.");
    }
  } catch (err) {
    console.error("[v0] Checkout error:", err);
    alert("Erro ao conectar com o servidor.");
  }
}
