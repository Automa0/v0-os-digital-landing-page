import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Differentials } from "@/components/differentials"
import { MockupSection } from "@/components/mockup-section"
import { FreeSection } from "@/components/free-section"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { AutonomosSection } from "@/components/autonomos-section"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollRevealWrapper } from "@/components/scroll-reveal-wrapper"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollRevealWrapper>
          <Differentials />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
          <MockupSection />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
          <FreeSection />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
          <AutonomosSection />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
          <Pricing />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
          <Testimonials />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
          <FAQ />
        </ScrollRevealWrapper>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
