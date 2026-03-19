import Script from "next/script"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { TopBar } from "@/components/top-bar"
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
  title: "OSDigitalPlus - Sistema de Ordem de Serviço para Assistências Técnicas",
  description:
    "Organize ordens de serviço, envie links profissionais aos clientes e gere PDFs com assinatura digital em segundos.O sistema completo para assistências técnicas.",
  keywords: [
    "ordem de serviço",
    "assistência técnica",
    "gestão",
    "OS digital",
    "sistema de OS",
    "OSDigitalPlus",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "OSDigitalPlus - Profissionalize sua assistência técnica",
    description:
      "Sistema completo de ordens de serviço para assistências técnicas. Organize, acompanhe e entregue com profissionalismo.",
    type: "website",
    url: "https://osdigitalplus.com.br",
    siteName: "OSDigitalPlus",
    images: [
      {
        url: "https://osdigitalplus.com.br/images/og-image.png",
        width: 1200,
        height: 1200,
        alt: "OSDigitalPlus - Sistema de Ordem de Serviço",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OSDigitalPlus - Profissionalize sua assistência técnica",
    description:
      "Sistema completo de ordens de serviço para assistências técnicas.",
    images: ["https://osdigitalplus.com.br/images/og-image.png"],
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
      <body className="font-sans antialiased">
        <TopBar />
        {children}

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1583926539500190');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1583926539500190&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
