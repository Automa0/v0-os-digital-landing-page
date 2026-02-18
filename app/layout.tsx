import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "OSDigitalPlus - Sistema de Ordem de Servico para Assistencias Tecnicas",
  description:
    "Organize ordens de servico, envie links profissionais aos clientes e gere PDFs com assinatura digital em segundos. O sistema completo para assistencias tecnicas.",
  keywords: [
    "ordem de servico",
    "assistencia tecnica",
    "gestao",
    "OS digital",
    "sistema de OS",
    "OSDigitalPlus",
  ],
  openGraph: {
    title: "OSDigitalPlus - Profissionalize sua assistencia tecnica",
    description:
      "Sistema completo de ordens de servico para assistencias tecnicas. Organize, acompanhe e entregue com profissionalismo.",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#0066CC",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
