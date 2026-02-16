"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/5521996595469?text=Ol%C3%A1,%20quero%20saber%20sobre%20o%20OS%20Digital"

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-[#ffffff] shadow-lg transition-all hover:scale-105 hover:shadow-xl"
      aria-label="Abrir conversa no WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Suporte</span>
    </a>
  )
}
