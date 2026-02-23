import Script from "next/script";
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
  title: "OSDigitalPlus - Sistema de Ordem de Serviço para Assistências Técnicas",
  description:
    "Organize ordens de serviço, envie links profissionais aos clientes e gere PDFs com assinatura digital em segundos. O sistema completo para assistências técnicas.",
  keywords: [
    "ordem de serviço",
    "assistência técnica",
    "gestão",
    "OS digital",
    "sistema de OS",
    "OSDigitalPlus",
  ],
  openGraph: {
    title: "OSDigitalPlus - Profissionalize sua assistência técnica",
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
      <body className="font-sans antialiased">{children}<Script
        strategy="afterInteractive"
        src="https://connect.facebook.net/en_US/fbevents.js"
      />

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
    window.fbq = window.fbq || function() {
      window.fbq.callMethod ?
      window.fbq.callMethod.apply(window.fbq, arguments) :
      window.fbq.queue.push(arguments)
    };
    if (!window._fbq) window._fbq = window.fbq;
    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = '2.0';
    window.fbq.queue = [];

    fbq('init', '<!-- Meta Pixel Code -->
<script>
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
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1583926539500190&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->');
    fbq('track', 'PageView');
  `}
        </Script>
      </body>
    </html>
  )
}
