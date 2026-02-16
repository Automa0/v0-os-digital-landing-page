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
  title: "OS Digital - Sistema de Ordem de Serviço para Assistências Técnicas",
  description:
    "Organize ordens de serviço, envie links profissionais aos clientes e gere PDF com assinatura em segundos. Sistema completo para assistências técnicas.",
  keywords: [
    "ordem de serviço",
    "assistência técnica",
    "gestão",
    "OS digital",
    "sistema",
  ],
  openGraph: {
    title: "OS Digital - Profissionalize sua assistência técnica",
    description:
      "Sistema completo de ordens de serviço para assistências técnicas. Organize, acompanhe e entregue com profissionalismo.",
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
