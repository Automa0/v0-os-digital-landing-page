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
  title: "OS Digital+ | Sistema de Ordem de Serviço e PDV para Assistências",
  description:
    "Sistema completo para assistências: ordens de serviço, PDV, controle de caixa, comissão de vendedores, garantia digital e gestão multiloja. Teste grátis 10 dias.",
  keywords: [
    "sistema para assistência",
    "PDV para assistência",
    "gestão de OS",
    "ordem de serviço online",
    "comissão de vendedor",
    "controle de caixa",
    "multiloja",
    "garantia digital",
    "assinatura digital OS",
    "sistema para loja de celular",
    "assistência de eletrônicos",
    "OSDigitalPlus",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "OS Digital+ | Sistema de Ordem de Serviço e PDV para Assistências",
    description:
      "Sistema completo para assistências: ordens de serviço, PDV, controle de caixa, comissão de vendedores, garantia digital e gestão multiloja. Teste grátis 10 dias.",
    type: "website",
    url: "https://osdigitalplus.com.br",
    siteName: "OSDigitalPlus",
    images: [
      {
        url: "https://osdigitalplus.com.br/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dashboard do OS Digital+ — sistema de ordem de serviço e PDV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OS Digital+ | Sistema de Ordem de Serviço e PDV para Assistências",
    description:
      "Sistema completo para assistências: ordens de serviço, PDV, controle de caixa, comissão de vendedores, garantia digital e gestão multiloja.",
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
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "OS Digital+",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web (Windows, macOS, Linux), Android, iOS",
                "description": "Sistema completo para assistências: ordens de serviço, PDV, controle de caixa, comissão de vendedores, garantia digital e gestão multiloja.",
                "offers": {
                  "@type": "Offer",
                  "price": "79.90",
                  "priceCurrency": "BRL"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "89"
                }
              }
            `,
          }}
        />
      </head>
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
