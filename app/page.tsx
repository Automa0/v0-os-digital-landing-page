import { Hero } from "@/components/hero"
import { CompaniesCarousel } from "@/components/companies-carousel"
import { Comparison } from "@/components/comparison"
import { AboutUs } from "@/components/about-us"
import { PainPoints } from "@/components/pain-points"
import { Solutions } from "@/components/solutions"
import { FeaturesShowcase } from "@/components/features-showcase"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollRevealWrapper } from "@/components/scroll-reveal-wrapper"

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <CompaniesCarousel />
        <ScrollRevealWrapper>
          <Comparison />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
          <AboutUs />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
          <FeaturesShowcase />
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
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

